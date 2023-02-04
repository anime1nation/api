const Product = require("../models/productModel");

async function getProducts(res, req) {
  try {
    const products = await Product.first();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getProducts };
