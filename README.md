angular-rest-mysql
==================

CORS configuration of a REST PHP server so that it can be used by an angular application

This code is described in more details in the article [here](http://TBD).

It details how to set up a local development configuration with two servers.

An angular application is ran by grunt on port 9000, while a web server is used
as a REST service on port 80. The REST server uses PHP and Slim to communicate
with a mysql database backend.

The article describes how to tune the CORS configuration to avoid `Access-Control-Allow-Origin`
and `X-Requested-With` error messages.