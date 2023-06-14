export function setupCounter(element) {
  let counter = 0
  function notifyMe() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
    Notification.requestPermission(function(result) {
    if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Notification with ServiceWorker');
        });
    }
    });
  }
  element.addEventListener('click', () => notifyMe())
  
}
