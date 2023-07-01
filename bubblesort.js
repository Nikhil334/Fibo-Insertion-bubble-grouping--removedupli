arr= [1,4,2,6,3,5]
let l=arr.length;

function bubble(acc,curr){
    return Math.min(acc,curr);
}

for( let i=0;i<l;i++){
    let e = arr.reduce(bubble)
    console.log(e);
    let index = arr.indexOf(e);
    arr.splice(index,1);
}