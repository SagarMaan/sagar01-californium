const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://SagarMaan:yHJBlRWQ0FdJmdj6@chaudhary-shaab-db.cueddss.mongodb.net/Middleware", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const firstMiddleWear = function (req, res, next) {
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + " "
                    + (currentdate.getMonth()+1)  + " " 
                    + currentdate.getFullYear() + "  "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    let ip = req.ip
    let url= req.originalUrl
    console.log(`${datetime}  ${ip}  ${url}`)
    next()    
}

app.use( firstMiddleWear)


app.use('/', route);


app.listen(5000, function () {
    console.log('Express app running on port ' + (5000))
});
