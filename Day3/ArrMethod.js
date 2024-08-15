// map 
// return a new array 
let myNum = [1,2,3,4,5,6,7,8,9];
function Double (numb2){
    return numb2 * numb2;
}
let fiveTimeResult=myNum.map(Double)
console.log(fiveTimeResult)
// filter 
let myArrowFilter=myNum.filter( (num1) => {
    return num1 < 5
})
console.log(myArrowFilter);
console.log(myNum)

// reduce 
let summ=myNum.reduce((acc,curr)=>{
     return acc + curr
},0);
console.log(summ);
// combine filter reduce method 
let sum2=myNum.filter((numFilter)=>{
    return numFilter > 5
}).reduce((firvalue,secValue)=>{
    return firvalue + secValue
},0)
console.log(sum2);