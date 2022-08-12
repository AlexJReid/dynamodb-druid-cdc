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
           {})))
  (testing "ignore non S values"
    (is (= (core/select-keys-s {:name {:S "Alex"} :location {:S "UK"} :age {:N 99}} [:age])
           {})))
  (testing "nil when key not known"
    (let [x (assoc-in {} [:dynamodb :Keys :PK :S] "KEYVAL")
          pk :unknown]
      (is (= (pk (core/select-keys-s (get-in x [:dynamodb :Keys]) [pk])) nil)))))

(deftest druid-event
  (testing "retraction"
    (is (= (core/druid-event
            {:name "Alex" :location "Home"} {:retraction true :timestamp 42})
           {:name "Alex" :location "Home" :retraction true :count -1 :timestamp 42 :partition-key nil})))
  (testing "addition"
    (is (= (core/druid-event
            {:name "Alex" :location "Home"} {:retraction false :timestamp 42})
           {:name "Alex" :location "Home" :retraction false :count 1 :timestamp 42 :partition-key nil})))
  (testing "default to addition with 0 timestamp"
    (is (= (core/druid-event
            {:name "Alex" :location "Home"})
           {:name "Alex" :location "Home" :retraction false :count 1 :timestamp 0 :partition-key nil}))))

(def records (:Records data/ddb-streams-event))
(def watched-dims [:rating :country :language :state])

;; :Records contains 3 events, an insert, modify and remove
(def insert-event (first records))
(def modify-event (second records))
(def remove-event (last records))

(deftest process-change-event
  (testing "INSERT"
    (let [result (core/process-change-event insert-event watched-dims :PK)]
      (is (= (count result) 1))      
      (is (= result
             [{:partition-key "COMMENT#1"
               :rating "5"
               :country "UK"
               :language "en"
               :state "Published"
               :timestamp 1659810810
               :retraction false
               :count 1}]))))
  (testing "MODIFY"
    (let [result (core/process-change-event modify-event watched-dims :PK)]
      (is (= (count result) 2))
      (is (= (:timestamp (first result)) (:timestamp (second result)))) ;; retraction and addition fall at same time
      (is (= (:retraction (first result) true)))
      (is (= (:retraction (second result) false)))
      (is (= (:count (first result) -1)))
      (is (= (:count (second result) 1)))
      (is (= result
             [{:partition-key "COMMENT#1"
               :rating "5"
               :country "UK"
               :language "en"
               :state "Published"
               :timestamp 1659810811
               :retraction true
               :count -1}
              {:partition-key "COMMENT#1"
               :rating "3"
               :country "UK"
               :language "en"
               :state "Published"
               :timestamp 1659810811
               :retraction false
               :count 1}]))))
  (testing "DELETE"
    (let [result (core/process-change-event remove-event watched-dims :PK)]
      (is (= (count result) 1))
      (is (= result
             [{:partition-key "COMMENT#1"
               :rating "3"
               :country "UK"
               :language "en"
               :state "Published"
               :timestamp 1659810812
               :retraction true
               :count -1}])))))
