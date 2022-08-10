(ns ddbcdc.core)

(defn select-keys-s
  "Like select-keys but assumes v is a map of {:S string-value} so hoists string-value to
  become the new value."
  [m ks]
  (->> (select-keys m ks)
       (mapv (fn [[k, v]] [k (:S v)]))
       (into {})))

(defn druid-event
  "Creates a Druid event of the supplied image plus retraction and count."
  [image & {:keys [retraction timestamp] :or {retraction false timestamp 0}}]
  (assoc image :timestamp timestamp :retraction retraction :count (if retraction -1 1)))

(defn process-change-event
  "Given a DynamoDB change event and a set of dimensions (attributes) to watch returns a
  sequence of events suitable for Druid ingestion."
  [event dims]
  (let [t (get-in event [:dynamodb :ApproximateCreationDateTime])
        event-name (:eventName event)
        old-image (select-keys-s (get-in event [:dynamodb :OldImage]) dims)
        new-image (select-keys-s (get-in event [:dynamodb :NewImage]) dims)]
    (case event-name
      "INSERT"
      [(druid-event new-image {:timestamp t :retraction false})]
      "MODIFY"
      (when-not (= old-image new-image)
      [(druid-event old-image {:timestamp t :retraction true})
       (druid-event new-image {:timestamp t :retraction false})])
      "REMOVE"
      [(druid-event old-image {:timestamp t :retraction true})])))

(defn start []
  (pr "Started"))

(defn reload []
  (pr "Reloaded"))
