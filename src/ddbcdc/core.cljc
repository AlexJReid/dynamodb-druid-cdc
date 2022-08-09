(ns ddbcdc.core)

(defn handler [event context callback]
      (do
        (println event)        ;; somethin for the logs
        (callback
          nil
          (clj->js {:statusCode 200
                    :body       "Hello from CLJS Lambda!"
                    :headers    {}}))))
(defn start []
  (pr "Started"))

(defn reload []
  (pr "Reloaded"))
