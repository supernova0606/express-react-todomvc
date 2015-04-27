"use strict";
var normalizedPath = path.join(__dirname, "routes");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./routes/" + file);
});