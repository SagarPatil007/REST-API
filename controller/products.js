const products = require("../models/products");
const Product = require("../models/products");

const getAllProducts  = async(req,res) => {

    const {compnay,name,featured,sort,select} = req.query;
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

    if(select){
        let selectData = select.split(",").join(" ");
        apiData = apiData.select(selectData);
    }

    let page  = Number(req.query.page) || 1; 
    let limit = Number(req.query.limit) || 3;

    let skip = (page -1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData;
    res.status(200).json({myData,nbHits:myData.length});
};

const getAllProductsTesting  = async(req,res) => {
    const myData = await Product.find(req.query).select("name");
    res.status(200).json({myData});
}

module.exports = {getAllProducts,getAllProductsTesting};   