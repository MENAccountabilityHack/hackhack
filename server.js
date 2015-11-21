"use strict";

var Hapi    = require("hapi");
var server  = new Hapi.Server();
var port    = process.env.PORT || 8000;

var options = {
	port: port
};

server.connection(options);

server.register(require("inert"), function (err) {

    if (err) {
        throw err;
    }

    server.route([
        {
            method: "GET",
            path: "/{param*}",
            handler: {
                directory: {
                    path: "./public",
                    listing: true
                }
            }
        },
        {
            method: "GET",
            path: "/data",
            handler: function(req, rep){
                        var Wreck = require('wreck');
                        var uri = 'http://lda.data.parliament.uk/answeredquestions.json?AnsweringBody=Prime%20Minister';

                        Wreck.get(uri, function (err, res, payload) {
                            rep(payload);
                    });
                }
        }
    ]);

    server.start(function () {
        console.log("Server running at: http://localhost:" + server.info.port); //eslint-disable-line no-console
    });
});
