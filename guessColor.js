let btn = document.querySelector('#newColor');
let h1 = document.querySelector('#h1');
let par=document.querySelector('#p');
let submit=document.querySelector('#submitBtn')
let input=document.querySelector('#input')
let text=document.querySelector('#text')
let trouble=document.querySelector('#trouble')
let colorPicker=document.querySelector('#colorpicker')
let useMe=document.querySelector('#useMe')
let helper=document.querySelector('#helper')
let red=document.querySelector('#red')
let btngreen=document.querySelector('#helper2')
let greenbtn=document.querySelector('#greenbtn')
let green=document.querySelector('#green')
let btnblue=document.querySelector('#helper3')
let bluebtn=document.querySelector('#bluebtn')
let blue=document.querySelector('#blue')
let resetbtn=document.querySelector('#reset')
let last=document.querySelector('#container')
let attempts=0
let link=document.querySelector('#link')
let end = document.querySelector('#end')
let exitbtn=document.querySelector('#ok')
btn.addEventListener('click', function(){
    let r= Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b= Math.floor(Math.random()*256)
   let color=`rgb(${r},${g},${b})`
 text.classList.add('hide')
 btn.classList.add('hide')
 input.classList.remove('hide')
 submit.classList.remove('hide')
 colorPicker.classList.remove('hide')
 useMe.classList.remove('hide')
 console.log(color)
 par.innerText="Note - Answer will ony work in written in rgb(1,1,1) this format"
 submit.addEventListener('click',function(e){
    e.preventDefault()
    attempts++
   
    if (input.value===color){
       
        h1.innerText=`Congratulation You got it and it took you ${attempts} attempts !!!`
        par.innerText=''
     submit.disabled=true
     resetbtn.classList.remove('hide')
     exitbtn.classList.remove('hide')
   
     }
     else if (input.value===""){
        trouble.innerText='PLEASE ENTER A GUESS'
        }
        else if( input.value==='I quit'){
            trouble.innerText="You failed"
            resetbtn.classList.remove('hide')
            exitbtn.classList.remove('hide')
        }
     else if(input.value!==color){
        helper.classList.remove('hide')
       trouble.innerText='You got it wrong having difficulties?'  
     
    }
 helper.addEventListener('click',function(){
    red.innerText=`The first number is ${r}`
    greenbtn.innerText='Still having difficulties?'
 greenbtn.classList.remove('hide')
 btngreen.classList.remove('hide')
 helper.classList.add('hide')
 } )
 btngreen.addEventListener('click',function(){
    green.classList.remove('hide')
    green.innerText=`The Second number is ${g}`
    btngreen.classList.add('hide')
    bluebtn.innerText="Giving up ?"
    bluebtn.classList.remove('hide')
    btnblue.classList.remove('hide')
    btngreen.classList.add('hide')
 })
btnblue.addEventListener('click',function(){
    blue.classList.remove('hide')
    blue.innerText=`You Failed the last number was ${b}`
    btnblue.classList.add('hide')
    exitbtn.classList.remove('hide')
    resetbtn.classList.remove('hide')


})
 
   
 })
    document.body.style.backgroundColor=color
    document.body.style.fontWeight=900
 btn.style.backgroundColor=color
 btn.style.fontWeight=900  
 text.style.fontSize=80
 text.style.fontWeight=900
 last.style.color='#fffff'
par.style.fontSize=70
 })

