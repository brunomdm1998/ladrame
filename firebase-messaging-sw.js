importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD9L3huvvYNiKbpC1NUwoMpY0D3XhTjqMQ",
  authDomain: "ladrame-95d90.firebaseapp.com",
  projectId: "ladrame-95d90",
  storageBucket: "ladrame-95d90.firebasestorage.app",
  messagingSenderId: "214404716079",
  appId: "1:214404716079:web:780f60acdba8b3903518da"
});

const messaging = firebase.messaging();

// 🔥 NOTIFICACIONES CUANDO LA APP ESTÁ CERRADA
messaging.onBackgroundMessage(function(payload) {

  console.log("Push recibido en background:", payload);

  let title = "LADRAME 🐕";
  let body = "Nueva solicitud cerca de ti";
  let url = "/LADRAME.html";

  if (payload.notification) {
    title = payload.notification.title || title;
    body = payload.notification.body || body;
  }

  if (payload.data) {
    if (payload.data.title) title = payload.data.title;
    if (payload.data.body) body = payload.data.body;
    if (payload.data.url) url = payload.data.url;
  }

  self.registration.showNotification(title, {
    body: body,
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    badge: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    data: { url }
  });

});

// 🔥 CLICK EN LA NOTIFICACIÓN
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || "/LADRAME.html";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(urlToOpen) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});