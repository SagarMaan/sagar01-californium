const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")

const commonMiddleware = require ("../middleware/Middleware")


router.post("/createUser",commonMiddleware.validateHeader , userController.createUser)

router.post("/createProduct", productController.createProduct)

router.post("/createOrders" ,commonMiddleware.validateHeader, orderController.createOrder)




module.exports = router;