const findstrmodel  = async(text) =>{
    var check_type_text = typeof text; 
    if(check_type_text !== 'string'){
      respose = {
          status: false,
          massge: "Type not match Text only"
      }
       return respose
   }
    var data_set = {
        "(": ")"
    }
    var open_text = "("
    var stack = []
    var check
    var result 
    for(check = 0 ; check < text.length; check ++){
        if(text[check] === open_text ){
          stack.push(open_text)
        }else if(text[check] === data_set[open_text]){
            stack.pop()
        }
        
    }

    if (stack.length === 0){
        result = true
    }else{
        result = false
    }
    
    respose = {
      status: true,
      data: result
    }
      return respose
  }
  
  module.exports = findstrmodel;