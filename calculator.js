const express = require("express");
const bodyParser = require("body-parser");
const { ppid } = require("process");
const PORT = 3000;

// Setting up the application
const app = express()
app.use(bodyParser.urlencoded({extended: true}));



//Setting up the home route
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    result = num1+num2
    res.send(`<h1>The result of this calculation is ${result}<h1/>`)
 })


 //Setting up the bmiCalculator route

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    yourBmi = Math.round(weight/(height*height))
    res.send(`<h1>The result of this calculation is ${yourBmi}<h1/>`)
 })



 //Configuring port etc
app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})