let timeLeft = 90;
let timerInterval;
let spawnInterval;
let spawnSpeed = 1000;
const timerElement = document.getElementById('timer');

function startTimer() {
  timerElement.textContent = timeLeft;
  timerElement.classList.add('text-red-500', 'font-bold', 'text-lg');
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft % 10 === 0 && timeLeft !== 90 && timeLeft > 0) {
    increaseSpawnSpeed();
  }

  if (timeLeft <= 0) {
    endGame();
  }
}

function increaseSpawnSpeed() {
  spawnSpeed = Math.max(200, spawnSpeed - 150);
  clearInterval(spawnInterval);
  spawnInterval = setInterval(spawnCockroach, spawnSpeed);
  showSpeedUpNotification();
}

function showSpeedUpNotification() {
  const notification = document.getElementById('speedUpNotification');
  notification.classList.remove('hidden');
  notification.classList.add(
    'bg-yellow-300',
    'text-black',
    'font-bold',
    'py-2',
    'px-4',
    'rounded-lg',
    'shadow-lg',
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2'
  );
  setTimeout(() => notification.classList.add('hidden'), 1000);
}

function endGame() {
  clearInterval(spawnInterval);
  clearInterval(timerInterval);
  const gameOverScreen = document.getElementById('gameOverScreen');
  const finalScore = document.getElementById('finalScore');
  finalScore.textContent = score;
  gameOverScreen.classList.remove('hidden');
  gameOverScreen.classList.add(
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'bg-black',
    'bg-opacity-75',
    'text-white',
    'z-50',
    'fixed',
    'inset-0'
  );
}

function setSpawnInterval(interval) {
  spawnInterval = interval;
}