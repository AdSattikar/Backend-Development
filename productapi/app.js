const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000

const products_routes = require("./routes/products")

//router middleware 
app.use("/api/products",products_routes)

const start = async () =>{
    try{
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

start();