const Product = require("../Models/product");
const mongoose = require("mongoose");

const GetProduct = async (req, res) => {
    const product = await Product.find();
    console.log(product)
    res.json(product);
}

const CreateProduct = async (req, res) => {
    
    const { Name, Quantity, Category, Rating } = req.body;
    console.log(req.body)
    const product = new Product({
        Name: Name,
        Quantity: Quantity,
        Category: Category,
        Rating: Rating

    });
    const products = await Product.create(product);
    res.send('products');
}

const UpdateProduct = async (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const { Name, Quantity, Category, Rating } = req.body;
    console.log(id);
    // const product = new Product({
    //     Name: Name,
    //     Quantity:Quantity,
    //     Category: Category,
    //     Rating: Rating,
    // });
    const product = {
        Name: Name,
        Quantity: Quantity,
        Category: Category,
        Rating: Rating,
    };
    const updatedProduct = await Product.findOneAndUpdate({ _id: id }, product, { new: true });
    res.send(updatedProduct);
  };
  
  const DeleteProduct = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const { Name, Quantity, Category, Rating } = req.body;

    const product = {
        Name: Name,
        Quantity: Quantity,
        Category: Category,
        Rating: Rating,
    };
    // const deletedProduct = await Product.findOneAndDelete(product);
    const deletedProduct = await Product.deleteOne({ _id: id });
    res.send(deletedProduct);
  };
  
module.exports = {
    GetProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}