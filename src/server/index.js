/* Import Express.js */
const express = require("express");
/* Declare app as express js.*/
const netbuttikAPI = express();
/* Declare static folder for assests */
netbuttikAPI.use(express.static("dist"));
/* Import other required modules*/
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

/* Define Netbuttik API Server */
netbuttikAPI.use(cors());
netbuttikAPI.use(bodyParser.json({ limit: "50mb" }));
netbuttikAPI.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
netbuttikAPI.use(morgan("tiny"));

/* Load API routes */
const productRoute = require("./routes/product");

/* Start app on port 8080 */
netbuttikAPI.listen(8080, () =>
  console.log("Express Server Listening on port 8080!")
);

const router = express.Router();

router.get("/api", (req, res) => {
  res.send("Netbutikk API Server Homepage");
});

/* Product API routes */
router.get("/api/products", productRoute.products);

/* Bind router to API Server */
netbuttikAPI.use(router);
