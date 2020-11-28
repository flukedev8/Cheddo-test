const findstrmodel  = async(text) =>{
    var check_type_text = typeof text; 
    if(check_type_text !== 'string'){
      respose = {
          status: false,
          massge: "Type not match Text only"
      }
       return respose
   }
    
    respose = {
      status: true,
      data: result
    }
      return respose
  }
  
  module.exports = findstrmodel;