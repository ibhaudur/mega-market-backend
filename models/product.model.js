import { Schema } from "mongoose";

const schema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: number,
    required: true,
  },
});

const Product = model("Product", schema);

export default Product;
