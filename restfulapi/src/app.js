const express = require('express')
require("./db/conn")

const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 3000

// app.get("/",(req,res)=>{
//     res.send("Hello")
// })

//create new students
app.post("/students",(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=> console.log(`Server running at port ${port}`));