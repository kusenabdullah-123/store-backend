const { getProdukModel } = require("../model/ProdukModel");
const getProduk = async (req, res) => {
  const data = await getProdukModel();

  res.json({ dataProduk: data });
};

module.exports = { getProduk };
