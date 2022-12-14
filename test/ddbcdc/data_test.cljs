(ns ddbcdc.data-test)

(def ddb-disparate-old-new {:eventID      "c4ca4238a0b923820dcc509a6f75849c",
                            :eventName    "MODIFY",
                            :eventVersion "1.1",
                            :eventSource  "aws:dynamodb",
                            :awsRegion    "us-east-1",
                            :dynamodb
                            {:ApproximateCreationDateTime 1659810811,
                             :Keys                        {:PK {:S "COMMENT#1"}},
                             :OldImage
                             {:rating   {:S "5"},
                              :text     {:S "Excellent"},
                              :PK       {:S "COMMENT#1"},
                              :country  {:S "UK"},
                              :language {:S "en"},
                              :extra    {:S "not processed"}
                              :state    {:S "Published"}},
                             :NewImage
                             {:rating   {:S "3"},
                              :text     {:S "Reasonable"},
                              :PK       {:S "COMMENT#1"},
                              :country  {:S "UK"},
                              :language {:S "en"},
                              :extra    {:S "not processed still"}
                              :state    {:S "Published"}}
                             :SequenceNumber              "4421584500000000017450439091",
                             :SizeBytes                   0,
                             :StreamViewType              "NEW_AND_OLD_IMAGES"},
                            :eventSourceARN
                            "arn:aws:dynamodb:us-east-1:123456789012:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899"})

(def ddb-streams-event {:Records
                        [{:eventID      "c4ca4238a0b923820dcc509a6f75849b",
                          :eventName    "INSERT",
                          :eventVersion "1.1",
                          :eventSource  "aws:dynamodb",
                          :awsRegion    "us-east-1",
                          :dynamodb
                          {:ApproximateCreationDateTime 1659810810,
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
                          {:ApproximateCreationDateTime 1659810811,
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
                          {:ApproximateCreationDateTime 1659810812,
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

