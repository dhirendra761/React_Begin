function Increment(){
    let count=0;
    return {
        toString(){
            return count++;
        }
    }
}
let increment1=new Increment();
let increment2=Increment();

console.log(increment1 == +increment2);
console.log(`Val:${increment1}`)
console.log(`Val:${increment1}`)
console.log(`Val:${increment1}`)
console.log(`Val:${increment1}`)