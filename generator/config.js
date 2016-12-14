/**
 * TODO
 */
var config = {};

config.gateway = {};
config.gateway.host = "http://gateway";
config.gateway.port = 8000;

config.services = {};
config.services.convertor = "http://convertor-service:8080/";
config.services.generator = "http://generator-service:8070/";

module.exports = config;
