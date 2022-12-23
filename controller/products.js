const Product = require("../models/products");

const getAllProducts  = async(req,res) => {

    const {compnay,name,featured,sort} = req.query;
    const queryObject = {};

    if(compnay){
        queryObject.compnay = compnay;
    }

    if(featured){
        queryObject.featured = featured;
    }

    if(name){
        queryObject.name = {$regex:name,$options:"i"};
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
    }

    const myData = await apiData;
    res.status(200).json({myData});
};

const getAllProductsTesting  = async(req,res) => {
    const myData = await apiData;
    res.status(200).json({myData});
}

module.exports = {getAllProducts,getAllProductsTesting};   