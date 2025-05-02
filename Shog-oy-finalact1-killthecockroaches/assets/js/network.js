const offlineScreen = document.getElementById('offlineScreen');
let isOnline = true;

function updateOnlineStatus() {
  isOnline = navigator.onLine;
  offlineScreen.classList.toggle('hidden', isOnline);
  isOnline ? backgroundMusic.play() : backgroundMusic.pause();
}

window.addEventListener('offline', updateOnlineStatus);
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('load', updateOnlineStatus);