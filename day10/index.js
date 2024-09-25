// const myPromise = new Promise((resolve,reject)=>{
//     let error = true
//     if(!error){
//        resolve("hello")
//     }else{
//         reject ("go back to home their is some deficulties")
//     }
// })
// myPromise.then(()=>{
//     console.log("their is n o error ");
// }).catch(()=>{
//     console.log("ERooooooor")
// })


// fetch("https://the-trivia-api.com/v2/questions")
// .then((data)=>{
//     return data.json();
// })
// .then((data2)=>{
//     console.log(data2);
// }).catch((err)=>{
//     console.log(err)
// })

const PromiseOne=new Promise((resolve,reject)=>{

setTimeout(function(){
    let error=false;
    if(!error){
resolve({username:"Zain Ali Shah", pass:"123",email:"shahtalha@.com",uni:"Duet"})
    }else{
        reject("Error :Something went wrong")
    }

},1000)


})
PromiseOne.then((data)=>{
console.log(data);
    
    return data
 
}).then((data2)=>{
console.log("username: ",data2.username)
console.log("password: ",data2.pass);
console.log("Email: ",data2.email);
console.log("University: ", data2.uni);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("finally your jobe is done!");
})