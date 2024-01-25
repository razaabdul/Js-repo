const btn=document.querySelectorAll('.button')
const bdy=document.querySelector('body')
console.log(bdy);
btn.forEach(function (item){
    //console.log((item)); traverse all button
    item.addEventListener('click',function(evnt){
    if(evnt.target.id=="grey"){
        bdy.style.backgroundColor=evnt.target.id
    }
    if(evnt.target.id=="green"){
        bdy.style.backgroundColor=evnt.target.id
    }
    if(evnt.target.id=="red"){
        bdy.style.backgroundColor=evnt.target.id
    }
    })

})

