@app
node-events

@http
post /my-event
get /hello

@static

@events
my-event

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
