const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://SagarMaan:yHJBlRWQ0FdJmdj6@chaudhary-shaab-db.cueddss.mongodb.net/newDB",
 {
    useNewUrlParser: true
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen( 4000, function () {
    console.log('Express app running on port ' + ( 4000 ))
});
