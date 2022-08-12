(ns ddbcdc.lambda
  (:require [ddbcdc.core :as c]
            ["@aws-sdk/client-kinesis" :as k]))

;; Interop for Kinesis
(def ^js kinesis-client (new (.-KinesisClient k) {:region "eu-west-1"}))
(def ^js stream-name (aget (.-env js/process) "KINESIS_STREAM"))

(defn ^js clj->jsbuffer
  [x]
  (->> (clj->js x)
      (.stringify js/JSON)
      (.from js/Buffer)))

(defn put-records-cmd
  [args]
  (new (.-PutRecordsCommand k) (clj->js args)))

(defn kinesis-put-records!
  "Sends records to Kinesis as JSON. Uses :partition-key if present, or a static value if not."
  [records callback]
  (let [kr  (map (fn [r]
                   {:Data         (clj->jsbuffer r)
                    :PartitionKey (if (:partition-key r) (:partition-key r) "1")}) records)
        cmd (put-records-cmd {:StreamName stream-name
                              :Records kr})]
    (.send kinesis-client cmd callback)))

(defn make-handler
  "Given a set of dimensions (attributes) to watch in the stream, returns a fn suitable for use as a Lambda handler.
  pk determines the key to use as the Kinesis partition key value."
  [dims sink-fn & [pk]]
  (fn [event _ callback]
    (let [druid-events (c/process-dynamodb-stream-event event dims pk)]
      (sink-fn druid-events callback))))

(def kinesis-handler
  (make-handler [:rating :location :status :language]
                kinesis-put-records!
                :PK))

(def demo-handler
  (make-handler [:rating :location :status :language]
                (fn [records _] (println records))))
