// Objects 
let myDetails = {
    name : "Talha",
    Id : 183,
    course :{
        pyh : "phython",
        js : "javaScript",
        Ts : "TypeScript",
    },
    haveSeats : false,

    DesDetails (){
        console.log(`the student  details ${this.name} ${this.Id} ${this.course}`);
    }
}
// Two types of Excess 
// 1) .operator
// 2) Breaket []
console.log(myDetails.course);
console.log(myDetails["haveSeats"]);

//  Modified Object with the help of . operator
myDetails.haveSeats = true;
console.log(myDetails);
// Add more information 
myDetails.LastName = "Ali";
console.log(myDetails);
// For delete 
delete myDetails.LastName ;
console.log(myDetails);
// Also create function in object 
// Also create nested object 

// use For IN loop To access Data 
for (let myData in myDetails){
    console.log(myDetails[myData])
}
