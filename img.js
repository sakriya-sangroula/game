
const img = document.createElement('img');
img.classList.add('mole');
img.src = 'mole.png';

img.addEventListener('click', function() {
  score += 10;
  scoreEl.textContent = score;
  sound.play();
  img.src = 'mole-whacked.png';
  clearTimeout(timer);
  setTimeout(function() {
    hole.removeChild(img);
    run();
  }, 500);
});

hole.appendChild(img);