const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.post("/postman", UserController.createBook  )

router.get("/getBooks", UserController.getBookData)

module.exports = router;