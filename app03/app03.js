const express = require("express");
const proutes = require("./routes")
const app = express();
app.set("port", 5050) ;

app.use("/", proutes);

const server = app.listen(app.get("port"), function() {

    const port = server.address().port;

    console.log("Server running on port", port);
})