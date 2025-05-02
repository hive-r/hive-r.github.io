const playAgainBtn = document.getElementById('playAgainBtn');

playAgainBtn.addEventListener('click', resetGame);

function resetGame() {
  gameOverScreen.classList.add('hidden');
  gameArea.classList.remove('hidden');
  muteBtn.classList.remove('hidden');

  clearInterval(spawnInterval);
  clearInterval(timerInterval);

  spawnSpeed = 1000;
  console.log(`Spawn speed reset to ${spawnSpeed}ms`);

  score = 0;
  scoreElement.textContent = score;

  timeLeft = 90;
  timerElement.textContent = timeLeft;

  gameArea.innerHTML = '';
}