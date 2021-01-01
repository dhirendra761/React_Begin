function createBase(x){
    
    return function add(y) {
        return x+y;
    }
}




var addSix=createBase(6);
console.log(addSix(10))//16
console.log(addSix(21))//27