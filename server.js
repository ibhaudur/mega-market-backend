const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.method);
  res.json({ message: "Hello Meesakari!" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
