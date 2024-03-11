let h1 = document.querySelector('#h1');
let startGameBtn = document.querySelector('#startGameBtn');
let maxNumber = document.querySelector('#maxNumber');
let maxNumberBtn = document.querySelector('#maxNumberBtn');
let guess = document.querySelector('#guessNumber');
let guessNumberBtn = document.querySelector('#guessNumberBtn');
let h2 = document.querySelector('#h2');

startGameBtn.addEventListener('click', function(){
  maxNumber.classList.remove('hide');
  maxNumberBtn.classList.remove('hide');
  startGameBtn.classList.add('hide');
});

maxNumberBtn.addEventListener('click', function(e){
    e.preventDefault();
    let maximum = parseInt(maxNumber.value);
    if (!maximum || isNaN(maximum)) {
        h1.innerText = "Enter a Valid Value to Play";
    } else {
        h1.innerText = 'Guess The Number';
        maxNumber.classList.add('hide');
        maxNumberBtn.classList.add('hide');
        guess.classList.remove('hide');
        guessNumberBtn.classList.remove('hide');
        h2.classList.remove('hide')
        
        const requirednum = Math.floor(Math.random() * maximum) + 1;
        console.log(requirednum);
        
        guessNumberBtn.addEventListener('click', function(){
            let attempts = 1;
            let guessedNumber = parseInt(guess.value); // Get the current guessed number
            while (guessedNumber !== requirednum) {
                attempts++
                if (guessedNumber > requirednum) {
                    h2.innerText = 'TOO HIGH TRY A SMALLER NUMBER';
                    attempts++;
                    break
                } else if (guessedNumber < requirednum) {
                    h2.innerText = 'TOO LOW TRY A BIGGER NUMBER';
                    
                    break
                } else {
                    h2.innerText = 'ENTER A VALID NUMBER';
                    
                    break
                }
                
                
           
            } guessedNumber = parseInt(guess.value); // Update guessedNumber with new guess
        
            if (guessedNumber === requirednum) {
                h1.innerText = `Congratulation You got it `;
            }
        });
    }
});