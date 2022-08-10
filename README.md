# dynamodb-druid-cdc

Example code from [Using change data capture to perform flexible aggregations with DynamoDB and Druid](https://alexjreid.dev/posts/druid-cdc/)

This is a ClojureScript implementation that will yield the exported JavaScript function `handler` in `dist/ddbcdc/index.js` with `npm run release:lambda`. A built version of `dist/ddbcdc/index.js` is included in the Releases section.

This can be directly used as a Lambda function. Actual deployment is left up to you.

Tests can be run using `npm test`. They are also run on every commit to this repository with GitHub Actions.

The implementation will of course run Clojure with a tiny bit of effort if that is your bag.

It would probably be less hassle to just implement this directly in JavaScript as it is so simple, but I also wanted to experiment with ClojureScript. Maybe this is a good (?) reference for running simple Clojure code on Lambda without the JVM if Java libraries are not needed.
