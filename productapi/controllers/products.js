const getAllProducts = async (req,res) =>{
    res.status(200).json({msg: "Getting All Products"})
}

const getAllProductsTesting = async (req,res) =>{
    res.status(200).json({msg:"Testing all products"})
}

module.exports  = {getAllProducts,getAllProductsTesting}