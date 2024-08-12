// // Introduction 

// // Topic 1 -------- Variables
// // let 
// // var
// // const
// let courseName = "js";
// var courseId = 123;
// const courseDep = "computerScience";
// console.log(courseName);
// console.log(courseId);
// console.log(courseDep);
// console.table([courseName,courseId,courseDep]);

// // Topic  2 ------- ReAsign   And    Redecleare 
//  //const a = 5 ; trow Error not reassign  or Reinitialize 
// a=6;
// console.log(a);
//  let b= "muhammad Talha";
//  b= "zain Ali Shah";
//  console.log(b);
//  var c= "Muhammmad waqr";
//  var c = "Salman";
//  console.log(c);
//  console.log(c);

//  // Topic 3 Scope Of Variable 

//  // Two Types 
//  // 1) Global Scope
//  // 2) Block Scope  => Further Divide in 1)function Scope [var]
//  //                                      2) locale Scope  [let , const]


//  // Topic Data types 
//  // There are two types data types in java Script 
//  // 1) Primatives  =====|number| == |Boolean|=|string|=|null|=|UNdefined|=Symbol = Bigint
//  //2) Non Primatives          ===pending
 
//  // number  *****
//  let num1 = 45
//  console.log(typeof num1);
//  // Boolean *******
//  let Bool1 = true;
//  console.log(typeof Bool1);
//  // String ********
//  let str1 = " string";
//  console.log(typeof str1);

// topic -5
// data type conversion 
// two types
// 1) implicit ===> done by compiler 
// 2) Explicit ===> done by programer
// let myNum = '6'*2;
// console.log(myNum) ;
//let myNumber = 45;
// myNumber.toString();
// console.log(typeof myNumber.toString());
 

// Topic -6 Operators
// Five types 
// Arithematic +  -  *  /   %
// Logical     &  ||  !  
// comperasion ==  !==  >  >=  <  =< 
// Assignment  =  +=  -=  *=  /=   
// Bitwise    

// // Examples 
// let a = 5;
// let b = 6 ;
// // Examples Of Arithematic Operator
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// //   Examples of Lofical operator
// // console.log(a&b) // Both statement ate true then Block of code will be work
// // console.log(a||b)  // only one statement will be true then block of code will be work
// // console.log(!a)  this operator oposite you statement if !true == false
// // Example of compersion operator 
// console.log(a==b)
// console.log(a!==b)
// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)
// console.log(a+=b)




 // ********************************TOPIC 07 (Conditional  Statement  ) *************************************************************************
//  let mName="zain ali shah";
//  if(myName =="zain ali shah"){
//     console.log("yes your identify");

//  }else{
// console.log("you are not identify ");
//  }

//  let num1=7;
//  if(num1==8){
//     console.log("number is 8")
//  }else if(num1==9){
//     console.log("number is 9")
//  }else{
//     console.log("is not number  ")
//  }


//******* NESTED IF ELSE */
// let num1=8;
// if(num1<10){
//     if(num1<9){
//         console.log("num1 is small than 9 and 10");
//     }
// }else{
//     console.log("num1 is greater than 9 and 10");
// }

//*******************Switch Case  */

// switch(expressions){
//     case 1:
//     console.log("today is monday");
//     break;
//     case 2:
//     console.log("today is tuesday");
//     break;
//     case 4:
//     console.log("today is thursday");
//     break;
// }





//*******************TOPIC 08 LOOPS ************************************/
// //THERE ARE THREE TYPES OF LOOP (FOR LOOP , WHILE LOOP , DO WHILE LOOP)
// for loop statement  intialization , conditions ,increment/ decrement

// for(i=1;i<=10;i++){
//     console.log(2*i);
// }

//while loop
// let i=1; // initializations
// while(i<=5){  //conditions
//     console.log(i);
//     i++;  //increment/decrement
// }

//do while loop

// let i=1;  // initializations
// do{
    
//     console.log(i);
//     i++;  //increment/decrement

// }while(i<=5)  //conditions

