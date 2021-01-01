const greet=(type)=>{
    if(type==="formal"){
        return function(topic){
            console.log("hi")
        }
    } 
    else if(type==="casual"){
        return function(topic){
            console.log("hello")
        }
    }
}
greet("formal")("a");