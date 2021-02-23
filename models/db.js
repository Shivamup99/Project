const mongoose = require("mongoose")
const url ="mongodb+srv://Shivam:Shivam@up12@cluster0.zbxyo.mongodb.net/CURD?retryWrites=true&w=majority"

mongoose.connect(url ,{useCreateIndex:true,useFindAndModify:true,useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})