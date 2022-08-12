(ns ddbcdc.lambda-test
  (:require
   [ddbcdc.lambda :as l]
   [ddbcdc.data-test :as data]
   [cljs.test :refer-macros [run-tests deftest is testing]]))

(deftest clj->jsbuffer
  (testing "encode and decode map to/from Node buffer containing JSON string"
    (is (= (->> (l/clj->jsbuffer {:timestamp 1659810810392})
                (.toString)
                (.parse js/JSON)
                (#(js->clj % :keywordize-keys true)))
           {:timestamp 1659810810392}))))
