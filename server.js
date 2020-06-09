const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/src/index.html"));
});

app.listen(HTTP_PORT, function(){
    console.log("Server listening on port: " + HTTP_PORT);
})


