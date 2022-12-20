const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",function(req,res){
    res.send("I am listing on port 3000");
});

const start = async () =>{
    try{
        app.listen(PORT,function(){
            console.log(`App running on localhost::${PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}


start();