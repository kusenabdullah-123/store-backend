const { readFileSync } = require("fs");
const path = require("path");
const getProdukModel = async () => {
  const lokasi = path.join(__dirname, "");
  const produk = await readFileSync(`${lokasi}/Produk.json`, "utf-8");
  return JSON.parse(produk);
};

module.exports = { getProdukModel };
