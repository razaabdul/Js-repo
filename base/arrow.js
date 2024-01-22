/*const fun= ()=>{
    const name='abdulraza'
    console.log(name);
}
fun()

// implicit or explicit return 

//implicit 

const add_num=(num1,num2)=>{
    return num1+num2
}
console.log(add_num(12,34))

//explicit return: you dont need to write return 
const add_number =(num1,num2)=> (num1+num2)
console.log(add_number(12,43));
*/



//iife  : jo function immediately call ho jaye global scope ke pollution se problem hoti hai kahi barusko hatane ke liye we use iife .



(function fun3(){     //named iife
    console.log("hi db 2")
})(); //()ye isko execute krata hai

((name)=>{ // unnamed iife
    console.log(`hi db 1 ${name}`);
})('raza');