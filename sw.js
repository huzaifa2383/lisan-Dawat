
const CACHE_NAME = 'lisaan-dawat-v4';
const APP_FILES = [
  './',
  './index.html',
  './manifest.webmanifest'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_FILES);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();

    await Promise.all(
      names
        .filter(name =>
          name.startsWith('lisaan-dawat-') &&
          name !== CACHE_NAME
        )
        .map(name => caches.delete(name))
    );

    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  if (
    request.method !== 'GET' ||
    url.origin !== self.location.origin
  ) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, {
          cache: 'no-store'
        });

        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put('./index.html', response.clone());
        }

        return response;
      } catch (error) {
        const cache = await caches.open(CACHE_NAME);
        return await cache.match('./index.html') ||
               await cache.match('./');
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);

    if (cached) return cached;

    try {
      const response = await fetch(request);

      if (response && response.ok) {
        cache.put(request, response.clone());
      }

      return response;
    } catch (error) {
      return cached || Response.error();
    }
  })());
});
