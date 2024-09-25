//This Our Code 

// const requestUrl="https://api.github.com/users/Muhammad361738";
// const xhr=new XMLHttpRequest();
//  xhr.open ('GET',requestUrl);
// xhr.onreadystatechange=function(){
// console.log(xhr.readyState);
// if(xhr.readyState===4){
// const data=JSON.parse(this.responseText)
// console.log(typeof data)
// console.log(data.followers)
// console.log(data.login)
// console.log(data.following)
// }
// }
// xhr.send();
//const PIC=document.querySelector(".pic")


//from SOME HELP IN CHATGPT
const requestUrl = "https://api.github.com/users/Muhammad361738";

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
let followers;
let log;

// Set up the event handler for readystatechange
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);

    if (xhr.readyState === 4) {
     
            // Parse the response data
            const data = JSON.parse(this.responseText);
       
            // Log the data
            // console.log(typeof data);
            // document.write("Followers: ", data.followers);
            // document.write("Login: ", data.login);
            // document.write("Following: ", data.following);

            // Add image to the page
             //"https://avatars.githubusercontent.com/u/160308178?v=4";
                
            const pic = document.createElement('img');  
            pic.src =  data.avatar_url;  
            
            document.body.appendChild(pic);
        pic.style.borderRadius="50%"
        const Ele=document.createElement('div')
    followers= data.followers
    log=data.login
const myDoc=document.body.appendChild(Ele)
myDoc.innerHTML=`folllowers ${followers}`

};
}
xhr.send();





