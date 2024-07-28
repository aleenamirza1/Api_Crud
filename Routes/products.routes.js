const express = require("express");
const app = express();

const { CreateProduct, GetProduct } = require("../Controllers/product.controllers");

const router = express();

router.route('/').get(GetProduct);
router.route('/').get(CreateProduct);



module.exports = router;