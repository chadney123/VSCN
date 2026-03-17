self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Simple pass-through for PWA compliance
  e.respondWith(fetch(e.request));
});
