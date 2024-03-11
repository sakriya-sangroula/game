let btn = document.querySelector('#hi');
let h1 = document.querySelector('h1');



btn.addEventListener('click', function(){
 color=rancol()
 
    document.body.style.backgroundColor=color
    document.body.style.fontWeight=900
   
})
let rancol= ()=>{
 let r = Math.floor(Math.random()*256)
let g = Math.floor(Math.random()*256)
let b= Math.floor(Math.random()*256)
return `rgb(${r} ,${g} ,${b})` }


