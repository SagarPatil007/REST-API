const getAllProducts  = async(req,res) => {
    res.status(200).json({"msg":"I am getting all products"});
};

const getAllProductsTesting  = async(req,res) => {
    res.status(200).json({"msg":"I am getting all products testing"});
};

module.exports = {getAllProducts,getAllProductsTesting};