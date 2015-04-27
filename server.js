'use strict';

// Load the router component
var ExpressReact = require('express-react');

// Get express and the application running
var express = require('express');

// Prepare node-jsx. With this, we can require jsx files as if they were .js.
// We need this so that we can run the application before sending it off to browserify.
require('node-jsx').install({
  extension: '.jsx',
  additionalTransform: function(src){
    // This way, we don't have to append this stupid pragma every time,
    // we know that the extension is .jsx
    return "/** @jsx React.DOM */\n" + src;
  }
});

// Create server
var app = express();
app.use(ExpressReact.router);
app.http = require('http').createServer(app);
app.http.listen(process.env.PORT || 4000);