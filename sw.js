self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Just lets network requests pass through normally
    e.respondWith(fetch(e.request).catch(() => console.log("Offline mode not fully set up.")));
});
