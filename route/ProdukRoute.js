const { Router } = require("express");
const { getProduk } = require("../controller/ProdukController");
const route = Router();
route.get("/", (req, res) => {
  getProduk(req, res);
});

module.exports = route;
