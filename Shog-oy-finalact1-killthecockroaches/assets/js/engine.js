window.onload = function () {
  document.getElementById('muteBtn').addEventListener('click', toggleMute);
  document.getElementById('playAgainBtn').addEventListener('click', startGame);

  const startBtn = document.getElementById('startBtn');
  const startScreen = document.getElementById('startScreen');

  startBtn.addEventListener('click', () => {
    startScreen.remove();
    startGame();
  });
};

let score = 0;
const scoreElement = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

function startGame() {
  const interval = setInterval(spawnCockroach, 1000);
  setSpawnInterval(interval);
  startTimer();
}

function spawnCockroach() {
  if (!isOnline) return;

  const cockroach = document.createElement('div');
  cockroach.classList.add(
    'cockroach',
    'absolute',
    'w-12',
    'h-20',
    'bg-[url("assets/img/cockroach.png")]',
    'bg-cover',
    'cursor-pointer',
    'transition-transform',
    'hover:scale-125',
    'animate-pop'
  );

  const maxX = gameArea.clientWidth - 48;
  const maxY = gameArea.clientHeight - 48;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  cockroach.style.left = `${x}px`;
  cockroach.style.top = `${y}px`;

  cockroach.addEventListener('pointerdown', () => {
    score++;
    scoreElement.textContent = score;
    playSquishSound();

    const posX = cockroach.style.left;
    const posY = cockroach.style.top;

    cockroach.remove();

    const deadCockroach = document.createElement('div');
    deadCockroach.classList.add(
      'dead-cockroach',
      'absolute',
      'w-12',
      'h-20',
      'bg-[url("assets/img/cockroach-dead.png")]',
      'bg-contain',
      'bg-no-repeat',
      'opacity-100',
      'transition-opacity',
      'pointer-events-none',
      'overflow-visible'
    );
    deadCockroach.style.left = posX;
    deadCockroach.style.top = posY;

    gameArea.appendChild(deadCockroach);

    setTimeout(() => {
      deadCockroach.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
      deadCockroach.remove();
    }, 3000);
  });

  gameArea.appendChild(cockroach);

  setTimeout(() => {
    cockroach.remove();
  }, 1000);
}