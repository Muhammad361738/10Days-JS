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

// Set up the event handler for readystatechange
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);

    if (xhr.readyState === 4) {
     
            // Parse the response data
            const data = JSON.parse(this.responseText);

            // Log the data
            console.log(typeof data);
            console.log("Followers: ", data.followers);
            console.log("Login: ", data.login);
            console.log("Following: ", data.following);

            // Add image to the page
             //"https://avatars.githubusercontent.com/u/160308178?v=4";
                
            const img = document.createElement('img');  
            img.src =  data.avatar_url;  
            document.body.appendChild(img);
        
    
};
}
xhr.send();





