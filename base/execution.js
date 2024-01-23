let a=10
let b=5

function raza(num1,num2){
    let total= num1+num2
    return total
}
let result=raza(a,b)
let result2=raza(10,2)
console.log(result);
console.log(result2);



function one(){
    console.log('one');
    two()                     // it this execution one or two dono execute hokr call stack  me rehenge then first execute function bahar hojyega 
}
function two(){
    console.log('two');
    three()
}
function three(){
    console.log('three');
}
one()
two()
three()    


// lifo concept runs (last in first out)

// jo bhi phele execute hota hai vo call stack me jata hai execution ke baad call stack se nikal jata hai .


//let ab>20?console.log('yes'):console.log('no');


/*
false value: false,0,-0,BigInt on,"",null,undefined,NaN

true values: "false","0","",[],{},function(){}
 learn operators:
*/