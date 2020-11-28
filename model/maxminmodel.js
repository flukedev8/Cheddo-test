
const maxminmodel  = async(array) =>{
    var respose = null;
    var check ;
    for(check = 0 ; check < array.length ; check ++){
        var type  = array[check];
        var check_type = typeof type;
        if(check_type !== 'number'){
            respose = {
                status: false,
                massge: "Type not match number only"
            }
            return respose
        }
    }
    var max_nubmer  = 0;
    var min_number  = array[0] ;
    var find 
    for (find = 0 ; find < array.length; find ++){
        if (max_nubmer < array[find]){
            max_nubmer = array[find];
        }
        if (min_number > array[find]){
            min_number = array[find];
        }
    }
    respose = {
        status: true,
        data: {
            max: max_nubmer,
            min: min_number
        }
    }
    return respose
}

module.exports = maxminmodel;