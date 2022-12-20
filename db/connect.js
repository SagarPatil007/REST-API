const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDB = (uri) =>{
    // console.log("Connected to db");
    return mongoose.connect(uri,{
        useNewUrlParser :true,
        UseUnifiedTopology :true,
    });
};

module.exports = connectDB;