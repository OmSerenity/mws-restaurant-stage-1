/* This script checks if the browser supports service workers and acts as an indicator: If the browser does,
then it registers the file "sw.js" as the service worker, then logs a record of it to the console */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(function(registration) {
      console.log('Service Worker is now registered');
    });
}
    /*
    .catch(function(err) {
                        console.error(err);
                    })
        } else {
            console.log("The browser does not support Service Worker");
        }
*/