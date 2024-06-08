export const ProductIndex = (req, res) => {
  res.json({ msg: "Hi " });
};

export const ProductCreate = async (req, res) => {
  const newProduct = new Product({
    productName: req.body.productName,
    price: req.body.price,
  });

  try{
                    const product = await newProduct.save()
                    res.json()   
  }
};
