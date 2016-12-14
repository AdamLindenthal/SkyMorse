/**
 * Service for generating audio data based on textual morse code representation.
 */
var http = require('http'),
    url = require('url'),
    generator = require('./generator.js');

var handleRequest = function(request, response) {

    var query = url.parse(request.url,true).query;
    var morse = query.morse;
    var freq = query.freq || 880;
    var dot = query.dot || 60;

    if (typeof morse === 'undefined') {
        response.writeHead(400);
        response.end("Parameter missing. Usage: ?morse=url-encoded-text");
    } else {
        response.writeHead(200, { "Content-Type" : "audio/wav", "Content-Disposition": "inline"});
        response.write(generator.toAudio(morse, freq, dot));
        response.end();
    }
};
var www = http.createServer(handleRequest);
www.listen(8070);