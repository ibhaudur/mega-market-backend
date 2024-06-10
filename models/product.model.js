import { Schema, model } from "mongoose";

const schema = new Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = model("Product", schema);

export default Product;
