"use strict";

var Hapi = require("hapi");
var server = new Hapi.Server();

var options = {
	port: 8000
};

server.connection(options);

server.register(require("inert"), function (err) {

    if (err) {
        throw err;
    }

    server.route({
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: "./public",
                listing: true
            }
        }
    });

    server.start(function () {
        console.log("Server running at: http://localhost:" + server.info.port); //eslint-disable-line no-console
    });
});
