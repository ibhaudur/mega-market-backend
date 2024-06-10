import Product from "../models/product.model.js";

export const ProductIndex = async (req, res) => {
  try {
    const ProductList = await Product.find();
    res.json(ProductList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const ProductById = async (req, res) => {
  try {
    const ProductById = await Product.findById(req.params.id);
    if (ProductById == null) {
      res.status(404).json({ message: "Cannot find Product!" });
    } else {
      res.json(ProductById);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const ProductCreate = async (req, res) => {
  const newProduct = new Product({
    productName: req.body.productName,
    price: req.body.price,
  });

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ msg: { message: err.message } });
  }
};
export const ProductUpdate = async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        productName: req.body.productName,
        price: req.body.price,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const ProductDelete = async (req, res) => {
  const ProductById = await Product.findById(req.params.id);
  if (ProductById == null) {
    res.status(400).json({ message: "There is No Data!" });
  } else {
    try {
      await Product.deleteOne({ _id: req.params.id });
      res.json({ message: "Deleted Successfully!" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
