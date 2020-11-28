
const findstrmodel = require("../model/findstrmodel");

const maxmincontroller = async(req, res)=>{
    const text = req.body.text;
    const find_text = req.body.find_text;
    const respose = await findstrmodel(text, find_text);

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