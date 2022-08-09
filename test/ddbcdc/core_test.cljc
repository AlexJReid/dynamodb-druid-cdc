(ns ddbcdc.core-test
  (:require
    #?(:clj  [clojure.test :refer :all]
       :cljs [cljs.test :refer-macros [deftest is testing]])))

(deftest sanity-check
  (testing "sanity"
    (is (= 1 1))
    (is (= 1 2))
    (is (= 1 2))
    (is (= 1 3))))

