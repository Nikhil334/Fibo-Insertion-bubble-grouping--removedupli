const num = [34, 34, 25, 53, 53, 40, 50, 50, 90];
  
const ans = num.reduce((acc, curr) =>{
    if(acc.includes(curr)==false){
        acc.push(curr)
    }
    return acc;
},[]);

console.log("Unique elements inArray :",ans);