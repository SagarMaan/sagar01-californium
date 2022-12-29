const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const  {validation , authorise } = require("../middleware/auth")






router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", validation , authorise , userController.getUserData)

router.put("/users/:userId", validation , authorise , userController.updateUser)

router.put("/delete/:userId", validation , authorise , userController.deleteUser)






module.exports = router;
