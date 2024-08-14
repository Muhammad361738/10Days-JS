// // Topic 9 
// Break    &     continue
// //       break 
// for (let i = 0; i<= 10; i++){
//     if (i == 5){
//         break ;
//     }
//     console.log(i)
// }
// //      continue 
// for (let i = 0; i <= 10 ; i++){
//     if (i==3){
//         continue ;
//     }
//     console.log (i)
// };
// for (let i = 0; i<=3;i++){
//        for(var j=0; j<=3; j++){
//         if (i==j){
//             continue
//     }
//     console.log(i,j);
//     }
// }
//  *********************  Topic 10 
// Array *****************************
let myArray = [];
for (let i = 0; i<=20; i++){
    if(i%2 ==0){
        myArray.unshift(i)
    }
}
console.log(myArray)
myArray.pop()
console.log(myArray);
console.log(myArray.length); // 10
console.log(myArray[9]); //9

// Topic 11Array Method***************
//  push () push element in array
let myNum = [];
myNum.push(40,58,76,83,61,67,20)
console.log(myNum);

// pop(); remove element in array from last element 
// myArray.pop();

console.log(myNum.pop())
let summ =0;
for (let i = 0; i<myNum.length;i++){
    summ += myNum[i]
}
let myper = summ/550 *100;

console.log(myper)

// shift() remove element from array from first index
myNum.shift();
console.log(myNum);

// unshift ()  add element in array in first index 
myNum.unshift(40);

// concat  merge two array in each other 
let mynum2 = [54,54,46,67,63,76]
let mytotnum = myNum.concat(mynum2);
console.log(mytotnum);


// indexof()  return the index of your element 
// indexOf();

// reverse (); reverse the order of array
console.log(mytotnum.reverse());

// sort () print element in assending order 
console.log(mytotnum.sort());
console.log(mytotnum.length)
let sum = 0;
let myPer;
for (let i = 0 ; i<mytotnum.length;i++){
    sum += mytotnum[i]
}

myPer = sum/1100 * 100
console.log(myPer)


console.log(myper)
console.log(summ)