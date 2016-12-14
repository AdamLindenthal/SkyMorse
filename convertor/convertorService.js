/**
 * Service for converting the given text to morse code.
 */
var http = require('http'),
    url = require('url'),
    conversion = require('./conversion.js');

var handleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url);
    var query = url.parse(request.url,true).query;
    var text = query.text;
    if (typeof text === 'undefined') {
        response.writeHead(400);
        response.end("Parameter missing. Usage: ?text=url-encoded-text");
    } else {
        response.writeHead(200);
        var result = {
            text : query.text,
            morse: conversion.toMorse(query.text)
        };
        response.end(JSON.stringify(result));
    }
};
var www = http.createServer(handleRequest);
www.listen(8080);