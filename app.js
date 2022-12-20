require("dotenv").config();
const express = require('express');
const app = express();

const connectDB = require("./db/connect")
const products_routes = require("./routes/products");

app.get("/",function(req,res){
    res.send("I am listing on port 3000");
});

//Middleware
 
app.use("/api/products",products_routes);

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(process.env.PORT,function(){
            console.log(`App running on localhost:${process.env.PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();