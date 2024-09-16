
function myDiv (classs,mycol) {
let newEle= document.createElement("div");

classs = newEle.className 
 

 mycol =newEle.style.color;
// mycol=this.col
newEle.style.backgroundColor= "blue"

newEle.innerHTML= "my first div with java script"

document.body.appendChild(newEle)

}

myDiv("main","red")
// myDiv("karachi")