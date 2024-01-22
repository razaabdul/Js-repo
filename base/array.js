/*
const arr=[1,2,3,4,5,6,'raza','abdul']
arr.pop()
arr.push(8)
console.log(arr);

console.log(typeof(ar));
let a =arr.join() //join string and convert object into string
console.log(typeof(a)); 


console.log(arr.slice(1,5));// slice string
console.log(arr.splice(2,5)); // skip splice string  




const a=['raza','abdul','abdulraza']
const b=['start','end']
a.push(b) // push add nested arry
console.log(a);
const c=a.concat(b) // concat add two arrays
console.log(c);

const ad=[...a, ...b]
console.log(ad);//sread operator also add two array

const another_array=[1,2,3,[4,5,6],6,[,7,5,4,3]]
console.log(another_array.flat(Infinity)); // add nested array together\

// convert any data in array

let ar1 = 100
let ar2 = 200
let ar3 = 300
console.log(Array.from('raza')) // convert into array
console.log(Array.of(ar1,ar2,ar3));// convert all int into single array



//objects  single terms , literals

const mysym= Symbol("key1")// its is primitive data type symbol represent unique identefier
//literal object
const e_detail={
    name:"abdul raaza",
    [mysym]:'mysymbol',// this is the way to take symbol as a key 
    email:'googl@gmail.com',
    address:'kota ,india',
    logged_in:false
}

console.log(e_detail.email) // ager kisi ne key string type me dedi " email " you cannot access like this

console.log(e_detail['email'])// good practice

 console.log( typeof e_detail[mysym])// taking symbol valu

 e_detail.email='abdul@gmail'// update email
 Object.freeze(e_detail)//ye  freeze krdeta hai  you cannot update the value 
 e_detail.email="raza@gmail.com"
 console.log(e_detail);

// you can add function  in any variable

e_detail.raza =function(){
    console.log(`hi i am raza ${this.name}`);

}
console.log(e_detail.raza());



const obj={
    name:'abdulraza',
    new:{
        name:'raza',
        abdul:{

            name:'razabdul'
        }
    }
}


console.log(obj.new.abdul.name);
*/
/*
const arr1={1:'a',2:"b"}
const arr2={5:'c',2:"b"}
const arr3=Object.assign({},arr1,arr2) // allow you to assign two objects {} this will assign value in arr3
const arr4 ={...arr1,...arr2} //  help to concate
console.log(arr4);
console.log(arr1);

console.log(Object.keys(arr1));//***      get keys 

console.log(arr1.hasOwnProperty(1));// check property axist or not  

*/

//destructure object 

const ar={
    name:'raza',
    email:'abdulraza',
    address:'kota india'
}

let {address:add}=ar
console.log(add);

