const CACHE_NAME = 'kill-the-cockroaches-v5';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/js/game.js',
  '/assets/js/mute.js',
  '/assets/js/reset.js',
  '/assets/js/sound.js',
  '/assets/js/timer.js',
  '/assets/js/install-pwa.js',
  '/assets/js/cursor.js',
  '/assets/js/network.js',
  '/assets/img/cockroach.png',
  '/assets/img/cockroach-dead.png',
  '/assets/img/slipper-cursor.png',
  'https://cdn.tailwindcss.com',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
