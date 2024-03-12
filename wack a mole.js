const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll('.hole')];
const scoreEl = document.querySelector('.score span');
const timerEl = document.getElementById("timer");
let score = 0;
let timeLeft = 10;
let gameActive = true;
let timerInterval;
const sound = new Audio('girish.mp4')

function updateTimer() {
  timerEl.innerHTML = "Time remaining: " + timeLeft + " seconds";
  timeLeft--;
  if (timeLeft < 0) {
    timerEl.innerHTML = "<span style='font-size: 24px;'>Time's up!</span>";
    clearInterval(timerInterval);
    gameActive = false;
    showFinalScore();
  }
}

function run() {
  if (!gameActive) return;
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];

  if (hole.querySelector('.mole')) {
    setTimeout(run, 100);
    return;
  }

  const img = document.createElement('img');
  img.classList.add('mole');
  img.src = 'g.jpg';

  img.addEventListener('click', function() {
    score += 10;
    scoreEl.textContent = score;
    sound.play();
    img.src = '';
    clearTimeout(timer);
    setTimeout(function() {
      hole.removeChild(img);
      run();
    }, 500);
  });

  hole.appendChild(img);

  const timer = setTimeout(function() {
    hole.removeChild(img);
    run();
  }, 1500);
}

function showFinalScore() {
  scoreEl.innerHTML = "Congratulations! The game has ended and you scored " + score + " points. <button><a href='file:///C:/Users/sakriyas/Downloads/Callback_Methods_CODE/ArrowFunctions/mainpage.html'>Exit</a></button>";
}

timerInterval = setInterval(updateTimer, 750);
run();

window.addEventListener('mousemove', function(e) {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
});

window.addEventListener('mousedown', function() {
  cursor.classList.add('active');
});

window.addEventListener('mouseup', function() {
  cursor.classList.remove('active');
});
