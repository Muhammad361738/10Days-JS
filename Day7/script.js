
function myDiv (claName,mycolor,myBgc,myContant) {
let newEle= document.createElement("div");

newEle.className = `${claName}`

 newEle.style.color = `${mycolor}`;
newEle.style.backgroundColor= `${myBgc}`

newEle.innerHTML= `${myContant}`

document.body.appendChild(newEle)

newEle.style.padding="10px"
newEle.style.borderRadius="30px"
newEle.style.margin="10px"
newEle.style.display= "inline"

}

myDiv("main","white","black","Talha&zain  Efforts in their codding journey")
myDiv("karachi","orange","yellow","chai aur code ")

