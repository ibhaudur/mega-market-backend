import express from "express";
import productRoute from "./routes/product.route.js";
import connectDB from "./lib/db.js";

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.json({ message: "Hello Meesakari!" });
});

app.use("/product", productRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
