const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const database = require('./database.config');

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
    if(process.env.NODE_ENV !== 'production'){
        console.log("Database Connected");
    }
}).catch((error)=> {
    console.error("Can't connect to database", error.message);
})

const studentAPI = require('./routes/student.routes');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/student' , studentAPI);


const server = app.listen(PORT , ()=> {
    if(process.env.NODE_ENV !== 'production') {
        console.log("Connected to port " + PORT);
    }
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

// 404 Handler
app.use((req,res,next)=>{
    next(createError(404))
})

// error Handler
app.use((err,req,res,next)=>{
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})