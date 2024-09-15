// Dom is Document object model and Bom is Browser object Model

/*
Element node 
Attribute node 
Comment node 
documenty node 

*/

// Accessability 
/*
getElementById()
getElementByClass()
getElementByTagName()
querryselector()
querrySelectorAll()

*/
    
// let Name=document.getElementById("myName")
// console.log(Name);

// const det = document.getElementsByClassName("dtail")
// console.log(det);

// let myDet = document.querySelector("ul")
// console.log(myDet)
// introduction od dom 
const details = document.querySelector(".hide")

const btn = document.querySelector(".show")

btn.addEventListener("click", ()=>{
    details.textContent
    console.log(details)
   console.log("clicked");
})
