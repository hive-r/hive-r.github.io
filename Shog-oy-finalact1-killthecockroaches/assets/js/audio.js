const squishSound = new Audio('assets/sounds/squish.mp3');
const backgroundMusic = new Audio('assets/sounds/pixel-party-218705.mp3');

backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

let isMuted = false;

document.addEventListener('DOMContentLoaded', () => {
  backgroundMusic.play().catch(() => {
    document.addEventListener('click', () => backgroundMusic.play(), { once: true });
  });
});

function toggleMute() {
  isMuted = !isMuted;
  isMuted ? backgroundMusic.pause() : backgroundMusic.play();
  squishSound.muted = isMuted;
  updateMuteButtonIcon();
}

function updateMuteButtonIcon() {
  const muteIcon = document.getElementById('muteBtnIcon');
  if (muteIcon) muteIcon.className = isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
}

function playSquishSound() {
  if (!isMuted) {
    squishSound.currentTime = 0;
    squishSound.play();
  }
}

document.getElementById('muteBtn').addEventListener('click', toggleMute);
