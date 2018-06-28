const cacheName = 'restaurant-app-v1';
/* lists website files to cache */

const filesToCache = [
    '/',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'index.html',
    'restaurant.html',
    'js/main.js',
    'js/dbhelper.js',
    'js/restaurant_info.js',
    'css/styles.css',
    'data/restaurants.json'
];

/* Create cache & add files.*/
self.addEventListener('install', function(event) {
    console.log('Service worker is now installing');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {cache.addAll(filesToCache);})
    )
});

self.addEventListener('activate', function(event) {
    console.log('Service worker is now activating');
  });

/* Fetches event listener & intercepts all requests*/
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
           /* console.log('Returning data for ' + event.request.url + ' from origin: ' + response); */
            return response || fetch(event.request)
        })
    )
});
