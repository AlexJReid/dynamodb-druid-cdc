(ns ddbcdc.lambda
  (:require [ddbcdc.core :as ddbcdc]))

(defn handler [event _ callback]
  (do
    (let [dims [:location :status :rating]
          druid-events (mapcat ddbcdc/process-change-event (:Records event) dims)]
      ;; do what you need to with druid-events ... send to Kinesis, Kafka, etc.
      (println druid-events))

    (callback
     nil
     ;; actually handle errors in an way appropriate to the trigger
     (clj->js {:done true}))))
