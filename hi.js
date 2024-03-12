let boxes=document.querySelectorAll('#box')
let resetbtn=document.querySelector('#reset')
let newGameBtn=document.querySelector('#newgame')
let winningMessage=document.querySelector('.winningmsg')
let msg = document.querySelector('#msg')
let button=document.querySelector('#ok')
let turnO=true;
let click=0

let winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]
boxes.forEach(function(box){
    box.addEventListener('click',function(){
     if (turnO){
        box.innerText="O"
        turnO=false
     }
     else{
        box.innerText ="X"
        turnO=true
     }
    box.disabled=true 
    click++
checkWinner()})

})
let reset=function(){
    turnO=true
    enablebox()
    winningMessage.classList.add('hide')
click=0
}
let disablebox=function(){
    for(let box of boxes){
        box.disabled=true
    }
}
let enablebox=function(){
    for(let box of boxes){
        box.disabled=false
        box.innerText=''
        
    }
}
let showWinner=function(winner){
    msg.innerText=`Congratulation your winner is ${winner} `
   winningMessage.classList.remove('hide')
   button.classList.remove('hide')}

let checkWinner = function(){
    for( let pattern of winningPattern){
    let pos1value=boxes[pattern[0]].innerText
    let pos2value=boxes[pattern[1]].innerText
    let pos3value=boxes[pattern[2]].innerText
    if (pos1value!=''&& pos2value!='' && pos3value!=''){
        if(pos1value===pos2value&&pos2value===pos3value){
        showWinner(pos1value)
        disablebox()
    }else if(click==9){
            msg.innerHTML=" The match is a draw";
            winningMessage.classList.remove("hide");
            button.classList.remove('hide')
           }    
  
    }
}
}
newGameBtn.addEventListener('click',reset)
resetbtn.addEventListener('click',reset)
