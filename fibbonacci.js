
function fibsol(acc,curr,i){
    acc.push(i>2?acc[i-1]+acc[i-2]:i);
    return acc;
}
const fib = (n)=>{
var arr = new Array(n).fill(1).reduce(fibsol,[]);
return arr;
}
console.log(fib(10));