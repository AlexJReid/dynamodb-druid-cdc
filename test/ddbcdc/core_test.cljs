(ns ddbcdc.core-test
  (:require
   [ddbcdc.core :as core]
   [cljs.test :refer-macros [run-tests deftest is testing]]))

(deftest select-keys-s
  (testing "hoists S value"
    (is (= (core/select-keys-s {:name {:S "Alex"} :age {:N 99}} [:name]) {:name "Alex"}))))

(deftest druid-event
  (testing "retraction"
    (is (= (core/druid-event
            {:name "Alex" :location "Home"} {:retraction true :timestamp 42})
           {:name "Alex" :location "Home" :retraction true :count -1 :timestamp 42})))
  (testing "addition"
    (is (= (core/druid-event
            {:name "Alex" :location "Home"} {:retraction false :timestamp 42})
           {:name "Alex" :location "Home" :retraction false :count 1 :timestamp 42})))
  (testing "default to addition"
    (is (= (core/druid-event
            {:name "Alex" :location "Home"})
           {:name "Alex" :location "Home" :retraction false :count 1 :timestamp 0}))))

(def ddb-streams-event {:Records
                        [{:eventID      "c4ca4238a0b923820dcc509a6f75849b",
                          :eventName    "INSERT",
                          :eventVersion "1.1",
                          :eventSource  "aws:dynamodb",
                          :awsRegion    "us-east-1",
                          :dynamodb
                          {:ApproximateCreationDateTime 1659810810282,
                           :Keys                        {:PK {:S "COMMENT#1"}},
                           :NewImage
                           {:rating   {:S "5"},
                            :text     {:S "Excellent"},
                            :PK       {:S "COMMENT#1"},
                            :country  {:S "UK"},
                            :language {:S "en"},
                            :state    {:S "Published"}},
                           :SequenceNumber              "4421584500000000017450439091",
                           :SizeBytes                   0,
                           :StreamViewType              "NEW_AND_OLD_IMAGES"},
                          :eventSourceARN
                          "arn:aws:dynamodb:us-east-1:123456789012:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899"},
                         {:eventID      "c4ca4238a0b923820dcc509a6f75849c",
                          :eventName    "MODIFY",
                          :eventVersion "1.1",
                          :eventSource  "aws:dynamodb",
                          :awsRegion    "us-east-1",
                          :dynamodb
                          {:ApproximateCreationDateTime 1659810810292,
                           :Keys                        {:PK {:S "COMMENT#1"}},
                           :OldImage
                           {:rating   {:S "5"},
                            :text     {:S "Excellent"},
                            :PK       {:S "COMMENT#1"},
                            :country  {:S "UK"},
                            :language {:S "en"},
                            :state    {:S "Published"}},
                           :NewImage
                           {:rating   {:S "3"},
                            :text     {:S "Reasonable"},
                            :PK       {:S "COMMENT#1"},
                            :country  {:S "UK"},
                            :language {:S "en"},
                            :state    {:S "Published"}}
                           :SequenceNumber              "4421584500000000017450439091",
                           :SizeBytes                   0,
                           :StreamViewType              "NEW_AND_OLD_IMAGES"},
                          :eventSourceARN
                          "arn:aws:dynamodb:us-east-1:123456789012:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899"},
                         {:eventID      "c4ca4238a0b923820dcc509a6f75849d",
                          :eventName    "REMOVE",
                          :eventVersion "1.1",
                          :eventSource  "aws:dynamodb",
                          :awsRegion    "us-east-1",
                          :dynamodb
                          {:ApproximateCreationDateTime 1659810810392,
                           :Keys                        {:PK {:S "COMMENT#1"}},
                           :OldImage
                           {:rating   {:S "3"},
                            :text     {:S "Reasonable"},
                            :PK       {:S "COMMENT#1"},
                            :country  {:S "UK"},
                            :language {:S "en"},
                            :state    {:S "Published"}},
                           :SequenceNumber              "4421584500000000017450439091",
                           :SizeBytes                   0,
                           :StreamViewType              "NEW_AND_OLD_IMAGES"},
                          :eventSourceARN
                          "arn:aws:dynamodb:us-east-1:123456789012:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899"}]})

(def records (:Records ddb-streams-event))
(def watched-dims [:rating :country :language :state])

(def insert-event (first records))
(def modify-event (second records))
(def remove-event (last records))

(deftest process-change-event
  (testing "INSERT"
    (let [result (core/process-change-event insert-event watched-dims)]
      (is (= result
             [{:rating "5" :country "UK" :language "en" :state "Published" :timestamp 1659810810282 :retraction false :count 1}]))))
  (testing "MODIFY"
    (let [result (core/process-change-event modify-event watched-dims)]
      (is (= result
             [{:rating "5" :country "UK" :language "en" :state "Published" :timestamp 1659810810292 :retraction true :count -1}
              {:rating "3" :country "UK" :language "en" :state "Published" :timestamp 1659810810292 :retraction false :count 1}]))))
  (testing "DELETE"
    (let [result (core/process-change-event remove-event watched-dims)]
      (is (= result
             [{:rating "3" :country "UK" :language "en" :state "Published" :timestamp 1659810810392 :retraction true :count -1}])))))
