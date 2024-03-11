let h1 = document.querySelector('#h1');
let startGameBtn = document.querySelector('#startGameBtn');
let maxNumber = document.querySelector('#maxNumber');
let maxNumberBtn = document.querySelector('#maxNumberBtn');
let guess = document.querySelector('#guessNumber');
let guessNumberBtn = document.querySelector('#guessNumberBtn');
let h2 = document.querySelector('#h2');

startGameBtn.addEventListener('click', function(){
    startGameBtn.classList.add('hide')
    let maximum= parseInt (prompt("Enter a  maximum number") ) 
    while(!maximum )  {
      maximum= parseInt (prompt("Enter a valid number") ) 
    }
    const requirednum =Math.floor(Math.random()*maximum)+1
    console.log(requirednum)
    let guess = (prompt ("Enter a guess or type q to end the game" ));
    let attempts =1
    while( parseInt(guess)!==requirednum){
      if(guess==='q' )break;
         
       guess=parseInt(guess)
    
      if( guess > requirednum)  
      {guess = prompt ("Too high try a smaller number")
    ;attempts++;}
    
     else if (guess<requirednum){ guess=prompt("Too low try a bigger number") ;attempts++;}
      else{ guess=(prompt("Invilid.Enter a valid  number or type q to end the game"))
    }
    } 
    if (guess==='q'){h1.innerText=("You quit!!")}
    
    else {h1.innerText= `You got it it took you ${attempts} guesses`;}
})    