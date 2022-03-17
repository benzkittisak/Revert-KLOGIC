const express = require('express');
const studentModel = require('../models/student.model');
const studentRoute = express.Router();


studentRoute.route("/").get((req,res,next)=>{ 
    studentModel.find((error,data) =>{ 
        if(error) return next(error);
        else res.json(data);
    })
})

module.exports = studentRoute;