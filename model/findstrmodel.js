const findstrmodel  = async(text,find_text) =>{
  var len_find_text = find_text.length;
  var check_type_text = typeof text;
  var check_type_find_text = typeof find_text; 
  if(check_type_text !== 'string' || check_type_find_text !== 'string'){
    respose = {
        status: false,
        massge: "Type not match Text only"
    }
     return respose
 }
  var result = 0
  var find 
  for(find = 0 ; find < text.length ; find ++){
        var check = text.substring(find,find+len_find_text)
        if (check === find_text){
            result = 1
        }
      
  }
  respose = {
    status: true,
    data: result
  }
    return respose
}

module.exports = findstrmodel;