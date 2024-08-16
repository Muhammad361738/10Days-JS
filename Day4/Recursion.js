// Recursion function which called it selt when the base condition is not true

// function -> function  ->  -> function -> function -> function 
//  -> function -> function -> function -> Base Condition 

function codiing (num){
    if (num === 0){
        return 
    }
    else {
        console.log(` i am doing coding `);
        codiing(num -1);
    }
}
codiing(5)

// Example 
// factorial 
function factorial (num){

     if (num === 1){
        return 1
    }
        let fact = num * factorial(num-1)
        return fact
    
}
console.log(factorial(5))