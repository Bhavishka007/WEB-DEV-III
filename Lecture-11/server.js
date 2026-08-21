const express = require("express");   //first import
const app = express()

app.use(express.json())

app.get("/:id", (req, res) => {
    //console.log(req.url)
    //console.log(req.method)
    //console.log(req.headers)
    console.log(req.params.id)
    res.send("Hii Sir from id route")
})
app.get("/", (req, res) => {
    console.log(req.query.name)
    console.log(req.query.age)
    res.send("hii sir from / route")
})
app.get("/",(req,res)=>{
    
})

app.listen(3000, () => console.log("server is running on port 3000"));