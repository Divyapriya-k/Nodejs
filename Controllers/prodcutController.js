const products = [
    {id:1,name:"iphone12",price:25000},
    {id:2,name:"laptop",price:50000},
    {id:3,name:"headset",price:25000},
    {id:4,name:"printer",price:5000},
]

//get method 
export const getproducts = (req,res)=>
{
    res.status(200).json({data:products})
}

//get method by id 
export const getproductsById = (req,res)=>
{
    const productId = req.params.id;
    //console.log("productId",productId);

    const productDetail = products.find(ele=>ele.id==productId)
    if(!productDetail){
        return res.status(404).json({message:"product not found"});
    }
    res.status(200).json({message:"products retrieved successfully",data:productDetail})
}

//post method 
export const createProduct = (req,res)=>
{
    const {name,price} = req.body
    const newProduct = {
        id:products.length+1,
        name:name,
        price:price
    }
    products.push(newProduct)
    res.status(200).json({message:"product added successfully",data:newProduct})
}

//put /update 
export const updateProduct = (req, res) => {
    const productId = req.params.id;
    const { name, price } = req.body;
    const index = products.findIndex((ele) => ele.id == productId);
    if (index === -1) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    products[index].name = name;
    products[index].price = price;
    res
      .status(200)
      .json({ message: "Product Updated Successfully", data: products[index] });
  };

  //delete method

export const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const index = products.findIndex((ele) => ele.id == productId);
    if (index === -1) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    products.splice(index, 1);
    res.status(200).json({ message: "Product deleted successfully" });
  };