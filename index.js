// Callback
// Esto es una funcion normal
function calc(x, y, operation, callback){ // Callback ya se ejecuta cmo funcion en el parametro
    let result;

    switch(operation) {
        case "add":
            result = x+y;
            break;
        case "substract":
            result = x-y;
            break;
        case "multiply":
            result = x*y;
        default:
            result= "Op not valid";
            break;
    }

    callback(result)
}

function logResult (value){
    console.log(`Result: ${value}`);
}
/**
calc(100, 50, "add",logResult);
calc(100, 50, "substract",logResult);
calc(100, 50, "multiply",logResult);
*/

// SetTimeOut
function getUser(){
    console.log(`Welcome, Shrek99`);
}

setTimeout(getUser, 3000);
console.log(`Waiting for user info`);


//SetTimeout + callback + funcion anonima
setTimeout(() => console.log('Welcome, Shrek99'), 5000);