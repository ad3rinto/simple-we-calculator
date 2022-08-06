const express = require("express");
const PORT = 3000;


const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})