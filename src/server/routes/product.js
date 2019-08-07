/* Defines Product API */

const fs = require("fs");
const path = require("path");

/* Load product data from static json file for now, until we have the database */
const productsFilePath = path.join(__dirname, "../mock/products.json");

/* Define REST Methods (Currently only GET ) */
module.exports = {
  products: function(req, res) {
    let readable = fs.createReadStream(productsFilePath);
    return readable.pipe(res);
  }
};
