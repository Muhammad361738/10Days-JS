

// setTimeout(()=>{
//     console.log("print : ",2)
//     console.log("print :", 1);
//     console.log("why iam late ")
// },0)

// console.log("print : ",3) //

const start = document.querySelector("#str")

const stop = document.querySelector("#sto");
let myDesplay =document.querySelector(".mydiv")
let date ;
let mystop
start.addEventListener('click',()=>{
   mystop = setInterval( ()=>{
        date= new Date()
         myDesplay.innerHTML = date.toLocaleString()
        console.log(myDate);
 
    },1000) 
})
stop.addEventListener("click",()=>{
     clearInterval(mystop)
})
