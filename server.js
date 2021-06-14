const express= require("express");

const app=express();

const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));




app.get("/",function(req,res)
{

    res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res)
{

  console.log(req.body)
  var num1=Number(req.body.num1)
  var num2=Number(req.body.num2)
  var sum =num1 + num2;
  res.send("addition of the number is "+ sum)






})





app.get("/contacts",function(req,res)
{
    console.log(" request made at contact route")
    res.send("hello you are in contacts ...contact me at Deepak@100");
})

app.get("/about",function(req,res)
{
  res.send("you are here at about page of calculator ..it calculates the numbers  ")
})


app.listen(3000,function()
{
    console.log(" server started at port 3000");
});
