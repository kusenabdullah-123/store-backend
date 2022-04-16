const express = require("express");
const App = express();
const ProdukRoute = require("./route/ProdukRoute");

App.use("/produk", ProdukRoute);
App.listen(5000, () => {
  console.log("server start");
});
