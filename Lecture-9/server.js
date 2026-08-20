//npm init -y
// npm install express nodemon 
// npm start



const express=require("express");
const app=express();
const PORT=3000;

app.get("/",(req,res)=>{
    res.send("Hello Students");
});
app.get("/about",(req,res)=>{
    res.send("Hello from About");
});

app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
});