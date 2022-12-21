const express = require('express');
const router = express.Router();
const BookModel = require("../models/bookModel.js")
const AuthorModel = require("../models/authorModel")
const BookController = require("../controllers/bookController")

  

router.post("/createBookList", BookController.createBookData )

     
router.post("/createAuthorList", BookController.createAuthorData)
router.get("/findauthorbyid", BookController.findauthorbyid)
router.put("/updatePrice",BookController.updatePrice)
router.get("/bookPrice" , BookController.bookPrice)

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;