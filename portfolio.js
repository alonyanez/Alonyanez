//Ascii face
const cool = require("cool-ascii-faces");

//Definition for local server
const express = require("express");
const app = express();
const path = require('path');

//used port
const port = process.env.PORT || 8080;
const request = require("request");

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    //console.log("Requested / route")
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.listen(port, ()=>{
    console.log(`Server ready at ${port}`)
    console.log("Localhost:8080")
    console.log(cool())
});


//URL
const base_api_url = "/portfolio/v1";
const url = "/portfolio";