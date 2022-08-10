(ns ddbcdc.core-test
  (:require
   [ddbcdc.core :as core]
   [ddbcdc.data-test :as data]
   [cljs.test :refer-macros [run-tests deftest is testing]]))

(deftest select-keys-s
  (testing "hoists S value"
    (is (= (core/select-keys-s {:name {:S "Alex"} :age {:N 99}} [:name])
           {:name "Alex"})))
  (testing "hoists multple S values"
    (is (= (core/select-keys-s {:name {:S "Alex"} :location {:S "UK"} :age {:N 99}} [:name :location])
           {:name "Alex" :location "UK"})))
  (testing "only process specified keys"
    (is (= (core/select-keys-s {:name {:S "Alex"} :location {:S "UK"} :age {:N 99}} [])
           {}))))

(deftest druid-event
  (testing "retraction"
    (is (= (core/druid-event
            {:name "Alex" :location "Home"} {:retraction true :timestamp 42})
           {:name "Alex" :location "Home" :retraction true :count -1 :timestamp 42})))
  (testing "addition"
    (is (= (core/druid-event
            {:name "Alex" :location "Home"} {:retraction false :timestamp 42})
           {:name "Alex" :location "Home" :retraction false :count 1 :timestamp 42})))
  (testing "default to addition with 0 timestamp"
    (is (= (core/druid-event
            {:name "Alex" :location "Home"})
           {:name "Alex" :location "Home" :retraction false :count 1 :timestamp 0}))))

(def records (:Records data/ddb-streams-event))
(def watched-dims [:rating :country :language :state])

;; :Records contains 3 events, an insert, modify and remove
(def insert-event (first records))
(def modify-event (second records))
(def remove-event (last records))

(deftest process-change-event
  (testing "INSERT"
    (let [result (core/process-change-event insert-event watched-dims)]
      (is (= (count result) 1))      
      (is (= result
             [{:rating "5" :country "UK" :language "en" :state "Published" :timestamp 1659810810282 :retraction false :count 1}]))))
  (testing "MODIFY"
    (let [result (core/process-change-event modify-event watched-dims)]
      (is (= (count result) 2))
      (is (= (:timestamp (first result)) (:timestamp (second result)))) ;; retraction and addition fall at same time
      (is (= (:retraction (first result) true)))
      (is (= (:retraction (second result) false)))
      (is (= (:count (first result) -1)))
      (is (= (:count (second result) 1)))
      (is (= result
             [{:rating "5" :country "UK" :language "en" :state "Published" :timestamp 1659810810292 :retraction true :count -1}
              {:rating "3" :country "UK" :language "en" :state "Published" :timestamp 1659810810292 :retraction false :count 1}]))))
  (testing "DELETE"
    (let [result (core/process-change-event remove-event watched-dims)]
      (is (= (count result) 1))
      (is (= result
             [{:rating "3" :country "UK" :language "en" :state "Published" :timestamp 1659810810392 :retraction true :count -1}])))))
