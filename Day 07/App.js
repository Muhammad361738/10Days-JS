//EVENTS TODAY TPIC WE LEARN EVENTS
// const bttn=document.querySelector(".btn");
// console.log(bttn);
//Second Method to use Events
// bttn.onmouseover=function (){
//     console.log("Learn JavaScript");
// }
//Third Type We Apply The Event
//ADD EVEVT & EREMOVE EVENT
//1) ADD EVENT THERE ARE THREE ARGUMENT
                     //event name   functions call back boolean by default is false
// bttn.addEventListener("click",()=>{

//     bttn.classList.add("btn1");
// })

//REMOVE
// function click1(){
//     console.log("Click 1")
// }
// function click2(){
//     console.log("Click 2")
// }

// bttn.addEventListener("click",click1)
// bttn.addEventListener("click",click2)
// bttn.removeEventListener("click",click2)



//-------------part 2--------------------------------------//
//-----------Event Flow------------
// const OutEle=document.querySelector(".outer");
// const BtnEle=document.querySelector(".btn");


// OutEle.addEventListener("click",(e)=>{
//     console.log("you click on div");
//     e.stopPropagation()
//     },true)


// //false neechy se upper   
// //true upper se neechy

// BtnEle.addEventListener("click",(e)=>{
// console.log("you click on button");
// e.stopPropagation()
// },true)



//prevent 


const GoogEle=document.getElementById("Google");

GoogEle.addEventListener("click",(e)=>{
    console.log("Click On GOOGLE BUTTON");
    e.preventDefault()
},false)