// Demonstrates interop between JS and the built ClojureScript library.

// Load example payload used for all demos
const event = require('./example.json');

// Default handler uses watches dimensions rating, location, language and status
const handler = require('../dist/index.js').handler;
handler(event, null, console.log);

// BYO Lambda function. Just process the change events.
const processDynamoDBStreamEvent = require('../dist/index.js').processDynamoDBStreamEvent;
console.log(processDynamoDBStreamEvent(event, ["rating", "location", "language", "status"], "PK"));
