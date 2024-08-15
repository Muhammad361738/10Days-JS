// // Function 
// //  syntax
// function myProblem (){
//     console.log(`To Learn English `)
// }
// myProblem();
// // Expression

// // 1) Named function 
// let myFunction = function name (name){
//     console.log(`my name is is ${name}`)
// }
// myFunction("Talha");
// // 2) Anoymoyous function which have only function key word
// let rectangle = function (height, width){ // parameter 
//     return height * width
// }
// console.log(rectangle(7,7)) // Argument 
// // 3) Arraw function 
// const Arrowfun = (num) => {return num*num}
// console.log(Arrowfun(6));
// //  Neasted function 
// function outer (name1){
//     console.log(`hello world ${name1}`);
//     function inner (name){
//         console.log(`hello function ${name} `);
//     }
//     inner ("zain");

// }
// outer("Talha");

// musth example 


function vowel (str){
    count = 0 ;
    let char = "aeiouAEIOU"

    for (let vowels of str){
      
        if (char.includes(vowels) ){
        count ++
        }
     }
    return count 
}
console.log(vowel("Talhaaaaaa"))