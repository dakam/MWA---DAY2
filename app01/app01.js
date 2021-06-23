const express = require("express");
const app = express();
app.set("port", 5050);
app.get("/", function(req, res) {
    res.status(200).send("App01 Server running on port 5050");

})
const server = app.listen(app.get("port"), function() {

    console.log("Listening on port", server.address().port);

})