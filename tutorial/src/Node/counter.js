function counter(){
    var count=0;
    return function add(){
        return count =count+1;
          
         
    }
    }

var a=counter();
console.log(a());
console.log(a());
console.log(a());
console.log(a());