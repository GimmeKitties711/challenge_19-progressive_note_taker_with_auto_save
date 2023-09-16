const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  // 'style' refers to CSS files, 'script' refers to JS files, and 'worker' refers to the service worker
  // the includes() method checks if the array includes an element, and request.destination returns the type of resource sought out by request, e.g. 'script'
  new StaleWhileRevalidate({
  // this request strategy responds with the cached version of the resource if it is available, and waits for the network response otherwise. it will cache responses with a status code of 200 - each successful request updates the cache with the network response.
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
      // requires either statuses or headers for the response to be considered cacheable, in this case we use statuses
        statuses: [0, 200],
      }),
    ],
  })
);
