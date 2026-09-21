const express=require("express");
const morgan=require("morgan");
const app=express();
const PORT=3000

app.use(morgan());

const logMiddleware=(req,res,next)=>{
    //console.log(req.name)
    req.name="John Doe"; 
    console.log(`Method:${req.method} URL:${req.url} Time: ${new Date().toLocaleString()}`) //or ("Request url:",req.url,"Request method:",req.method);
    //res.send("Hello from middleware")  
    next();
}
//morgan is replaceable of upeer commited code


const apiCheckMiddleware=(req,res,next)=>{
    if(req.query.API_KEY==="1234"){
        console.log("Authenticated");
        next();
    }else{
        res.send("API invalid");
    }
}
 
app.use(logMiddleware);
//app.use(apiCheckMiddleware); //globlal midleware


app.get("/",(req,res)=>{
    console.log("Request name:",req.name);
    console.log("Radhe Radhe");
    res.send("Radhe Radhe");
})

app.get("/data",(req,res)=>{     //route level middleware
    console.log("Hello Data");
    res.json({
        city:"New York",
        country:"USA",
        temp:32,
        humidity:80
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port $ {PORT}`)
})