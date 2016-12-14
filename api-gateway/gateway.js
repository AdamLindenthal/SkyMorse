/**
 * Simple "gateway" service, that routes the incoming requests to services not visible to the outside world.
 * Also serves the static content (web UI).
 */
var express = require('express')
var remote = require('request')
var config = require('./config')
var app = express()

app.get('/api/v1/convert', (request, response) => {
    remote(config.services.convertor + "?text=" + request.query.text, (error, remoteResponse, body) => {
        if (!error && remoteResponse.statusCode == 200) {
            response.send(JSON.parse(body).morse);
        } else {
            response.status(500).send({ error: "Error caught"});
            console.log("Error " + error);
        }
    });
});

app.get('/api/v1/generate', (request, response) => {
    console.log("Generation request received");
    var query = "?morse=" + request.query.morse;
    if (request.query.hasOwnProperty("dot")) {
        query += "&dot=" + request.query.dot;
    }
    if (request.query.hasOwnProperty("freq")) {
        query += "&freq=" + request.query.freq;
    }
    console.log(query);
    remote(config.services.generator + query).pipe(response);
});

app.use(express.static('web'));


app.use((err, req, res, next) => {
    console.log("ERROR caught: " + err);
    res.status(500).send({ error: "Error caught"});
});


var port = config.gateway.port;
app.listen(port, function () {
    console.log('Gateway up on port ' + port)
})