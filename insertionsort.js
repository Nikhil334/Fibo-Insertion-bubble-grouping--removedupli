let arr=[1,7,3,4,2,6,5]

function insertion(acc,curr){
    let i=0;
    while(i<acc.length && curr<acc[i]) 
    i++;
    acc.splice(i,0,curr);
    return  acc;
}
let arr1 = arr.reduce(insertion,[]);
console.log(arr1.reverse());