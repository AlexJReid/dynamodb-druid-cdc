(ns ddbcdc.core)

(defn select-keys-s
  "Like select-keys but assumes v is a map of {:S string-value} so hoists string-value to
  become the new value. Disregards keys not having a value of {:S v}."
  [m ks]
  (->> (select-keys m ks)
       (mapv (fn [[k, v]] (when (:S v) [k (:S v)])))
       (into {})))

(defn druid-event
  "Creates a Druid event of the supplied image and adds retraction and count keys."
  [image & {:keys [partition-key retraction timestamp]
            :or {partition-key nil retraction false timestamp 0}}]
  (assoc image
         :partition-key partition-key
         :timestamp timestamp
         :retraction retraction
         :count (if retraction -1 1)))

(defn process-change-event
  "Given a single DynamoDB change event and a set of dimensions (attributes) to watch for changes,
  returns a sequence of events suitable for Druid ingestion."
  [event dims & [pk]]
  (let [t (get-in event [:dynamodb :ApproximateCreationDateTime])
        partition-key (when pk (pk (select-keys-s (get-in event [:dynamodb :Keys]) [pk])))
        event-name (:eventName event)
        old-image (select-keys-s (get-in event [:dynamodb :OldImage]) dims)
        new-image (select-keys-s (get-in event [:dynamodb :NewImage]) dims)]
    (case event-name
      "INSERT"
      [(druid-event new-image {:partition-key partition-key :timestamp t :retraction false})]
      "MODIFY"
      (when-not (= old-image new-image)
      [(druid-event old-image {:partition-key partition-key :timestamp t :retraction true})
       (druid-event new-image {:partition-key partition-key :timestamp t :retraction false})])
      "REMOVE"
      [(druid-event old-image {:partition-key partition-key :timestamp t :retraction true})])))

(defn process-dynamodb-stream-event
  "Takes the sequence of Records from the event and returns a sequence of events for Druid.
  Optionally provide partition key to use with Kinesis or Kafka."
  [event dims & [pk]]
  (mapcat #(process-change-event % (map keyword dims) (keyword pk))
            (:Records (js->clj event :keywordize-keys true))))

(def js-process-dynamodb-stream-event
  (comp clj->js process-dynamodb-stream-event))

(defn start []
  (pr "Started"))

(defn reload []
  (pr "Reloaded"))
