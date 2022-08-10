(ns ddbcdc.lambda
  (:require [ddbcdc.core :as ddbcdc]))

(defn handler [event _ callback]
  (do
    (let [dims [:rating :country :language :state]
          druid-events (mapcat #(ddbcdc/process-change-event %1 dims) (:Records (js->clj event :keywordize-keys true)))]
      ;; do what you need to with druid-events ... send to Kinesis, Kafka, etc.
      (println druid-events))

    (callback
     nil
     ;; actually handle errors in an way appropriate to the trigger
     (clj->js {:done true}))))
