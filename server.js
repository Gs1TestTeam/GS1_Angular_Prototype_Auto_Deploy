var express = require("express");
var app = express();

var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

// setup the static folder 
app.use(express.static(__dirname + "/dist/GS1-Angular-Prototype")); 

// handle "404" errors
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/dist/GS1-Angular-Prototype/index.html"));
});

// setup a 'route' to listen on the default url path
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// Start the server
app.listen(HTTP_PORT, function(){ 
    console.log("Server listening on port: " + HTTP_PORT);
});