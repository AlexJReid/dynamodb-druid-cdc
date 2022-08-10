// Load ClojureScript implemented handler (no deps)
const handler = require('./dist/ddbcdc/index.js').handler;

// Load example payload
const event = require('./example.json');

// Run it
handler(event, null, console.log);
