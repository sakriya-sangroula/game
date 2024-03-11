let p1btn = document.querySelector('#button1')
let p2btn = document.querySelector('#button2')

let p1display=document.querySelector('#p1')
let p2display= document.querySelector('#p2')

let reset=document.querySelector('#reset')
let gameScore=document.querySelector('#playto')
let p1Score=0
let p2Score=0
let p3Score=0
let winningScore=1
let gameover=false
p1btn.addEventListener('click',function(){
    if(!gameover){ p1Score++
    if(p1Score===winningScore){
        p1display.classList.add("won")
        p2display.classList.add('lost')
        gameover=true 
        p1btn.disabled=true
        p2btn.disabled=true 
        
    }
       p1display.textContent=p1Score
       
     }
})
p2btn.addEventListener('click',function(){
    if(!gameover){ p2Score++
    if(p2Score===winningScore){
        gameover=true
        p2display.classList.add("won")
        p1display.classList.add('lost')
       
        p1btn.disabled=true
        p2btn.disabled=true
   
       }
       p2display.textContent=p2Score
      
     }
})

reset.addEventListener('click',restart) 

gameScore.addEventListener("change",function(){
 winningScore =parseInt(this.value)
 restart()
})
function restart(){
    gameover=false
    p1Score=0
    p2Score=0
    

    p1display.textContent=p1Score
    p2display.textContent=p2Score
    
    p1display.classList.remove("won","lost")
        p2display.classList.remove('lost','won')
        
        p1btn.disabled=false
       p2btn.disabled=false
      
}