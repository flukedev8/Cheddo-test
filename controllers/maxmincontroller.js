const { check } = require("express-validator");

const maxminmodel = require("../model/maxminmodel");

const maxmincontroller = async(req, res)=>{
    const array = req.body.array;
    const respose = await maxminmodel(array)

    if(respose.status){
        res.status(200).json({
            success: true,
            massge: "Result",
            data: respose.data
        });
    }else{
        res.status(200).json({
            success: false,
            massge: respose.massge
        }); 
    }
}

module.exports = maxmincontroller;