
//printing table 1 to 10 
// for (let i=1;i<10;i++){
//     for (let j=1;j<10;j++){
//         console.log(i,"*",j,i*j);
//     }
// }

// const array=['raaza','abdul','abdulraza']
// let result=""

// for (let i=0;i<array.length;i++){
//     result+=array[i]
    
// }
// console.log(result);

// let score=1
// do{
//     console.log('hi');
//     score++
// }while(score<10);



const arr=[1,2,3,4,5,'raza',6,7,8]
for (const i in arr){
    console.log(arr[i]);
 }

// for in loop we use for objects/array  (for..of and for..in loop)
const obj={
    name:'dhfukdhj',
    emial:'sjfgdhj',
    address:"uahsgdhhdks",
}
for(const i in obj){
    // console.log(i,obj[i]);
}


const ar=['raza','abdul',1,2,3,4,5]
ar.forEach=(item)=>{
console.log(item);
}

//foreach
const data=[{
    name:'abdul',
    email:'raza@'
},{
    name:'abdul',
    email:'raza@'
},{
    name:'abdul',
    email:'raza@'
}]

data.forEach=(item)=>{
    console.log(item.name);
}