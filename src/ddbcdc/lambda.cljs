(ns ddbcdc.lambda
  (:require [ddbcdc.core :as ddbcdc]))

(defn handler [event context callback]
  (do
    (let [druid-events (mapcat ddbcdc/process-change-event (:Records lambda-event))]
      ;; send druid-events to an output Kinesis stream, Kafka topic, etc.
      (println druid-events))
    (callback
     nil
     (clj->js {:done true}))))
