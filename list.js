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
if (guess==='q'){console.log("You quit!!")}

else {console.log( `You got it it took you ${attempts} guesses`);}


let form = document.querySelector("form")
let ip=document.querySelector ('input')
let list = document.querySelector('ul')
let btn=document.querySelector('#submit')
form.addEventListener("submit",function(e){
    e.preventDefault(); 
    let username=ip.value
       let li=document.createElement('li') 
       li.innerText=username
      list.append(li)
      ip.value=""
      
        
      
})

