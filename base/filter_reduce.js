//map me sari value return krega filter()me jo condition true hogi wahi return krega


//filter : you have a call back function her value access hogi you have to give 
//condition(jo satisfied hogi wahi retuyrn ki jayega)

const f=[1,2,3,4,5,6]
//let fil=f.filter((item)=>item>3) 
let fil=f.filter((item)=>{ // if you open scope in this so you have to use return keyword
    return item > 4
})

console.log(fil); 
// const books=userbook.filter((item) => userbook.genre=='history')


//map() it holds the key - value pair and remember origenial insertion order of key its not itterable;

// const m=f.map((item)=>item+10) //works like afilter 
// console.log(item);

// we cann use multiple map or filter also :
const arr=[1,2,3,4,5,6]
const arry=arr.map((item)=>item*2)  //multiply all item with 2
            .map((item)=>item+1) // add 2 in those elements who multiplied by 2
            .filter((item)=>item>5) // retun the element which is true

          console.log(arry);  


//reduce ()

const mynum=[1,2,3,4,5,6]
const total=mynum.reduce((acc,curr)=>acc+curr,0)
console.log(total);

const obj=[
    {name:'abdul',price:1233},
    {name:'abdul',price:123},
    {name:'abdulraza',price:563}
]
// we are adding total prices of array
const red=obj.reduce((acc,item)=>acc+item.price,0)
console.log(red);