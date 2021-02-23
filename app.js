const express = require("express")
const port = process.env.PORT || 2090
const bodyParser = require("body-parser")
require("./models/db")
const curd = require("./router/router")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use("/curd",curd);

app.listen(port ,()=>{
    console.log(`server is running on ${port}`)
})