require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");

const ProductJson = require("./Product.json");  

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL);
        await Product.create(ProductJson);
        console.log("Success"); 
    }catch(error){
        console.log(error);
    }
};

start();