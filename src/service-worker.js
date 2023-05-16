// src/service-worker.js or src/service-worker.ts
self.addEventListener("fetch", (event) => {
  console.log(
    "🚀 ~ file: service-worker.js:3 ~ self.addEventListener ~ event:",
    event
  );
  event.respondWith(fetch(event.request));
});
