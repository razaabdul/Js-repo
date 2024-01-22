/*
function new_fun(n){
    if (n==1){
        return 1
    }
    else{
        return n*new_fun(n-1)
    }
}
console.log(new_fun(5))


function rest_operator(n,m,...num1){ //rest operator we use when we dont know the argument count
    //n,m will take first arguments remiang takes rest 
    return num1

}
console.log(rest_operator(12,23,34,45,56));


const obj={
    name:'abdul',
    email:'abdul@gmail.com',
    address:'india',
}


function detail(de){
    return `my name is ${de.name} address ${de.email}`
} 

console.log(detail())
*/
/*
const arr=['raza','abdul']
function new_detail(n){
    return n[1]
}
console.log(new_detail(arr))*/
/*
function func1(){

    const fist_name='raza'

    function fun2(){
        const lastname='abdul'
        console.log(lastname+fist_name);
    }
fun2()
}
func1()

*/


//hosting  you can create function multiple types
/*
addone(5)  // you can call it from anywhere
function addone(num){
    return num+1
} 
console.log(addone(5));
*/

const call_fun = function(num){
    return num +1
}   
console.log(call_fun(5)) // you cannot call it before declare