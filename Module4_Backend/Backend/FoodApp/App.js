const express = require("express");
//express is abstraction over node.js for writing backend

const app = express();
//initializing a server
app.use(express.json());
//post accept geeting the data for req

app.get("/",function(req,res){
console.log("hello from home page");
res.send("<h1>Hey from backend</h1>");

})
//frontend - req /
//function -> route path

let user = {

};

app.get("/user", function(req,res){
    console.log("users");
    res.json(user); //as its an object key value pair so using json
})

app.post("/user",function(req,res){
    
    console.log("req.data",req.body);
    user = req.body;
    res.status(200).send("data received and user updated");
})
//updating info
app.patch("/user",function(req,res){
    let obj = req.body;
    for(let key in obj){
        user[key] = obj[key];
    }
    res.status(200).json(user); //print user on postman
})

app.delete("/user",function(req,res){
    user = {};
    res.status(200).json(user);
})

//template routes
app.get("/user/:id",function(req,res){
    console.log(req.params,req.params.id);
    res.status(200).send("Hello");
})
//localhost:8080 ??
app.listen(3000,function(){
console.log("server started");
})