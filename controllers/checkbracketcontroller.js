
const checkbracketmodel = require("../model/checkbracketmodel");

const checkbracketcontroller = async(req, res)=>{
    const text = req.body.text;
    const respose = await checkbracketmodel(text);

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

module.exports = checkbracketcontroller;