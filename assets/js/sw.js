self.addEventListener("install", function (event) {
  console.log("SW Installed");
  event.waitUntil(
    caches.open("static").then(function (cache) {
      cache.addAll([
        "/",
        "/index.html",
        "/assets/js/app.js",
        "/assets/js/particles.min.js",
        "/assets/js/projects.js",
        "/assets/js/script.js",
        "/assets/css/navbar.css",
        "/assets/css/style.css",
        "/assets/css/util.css",
      ]);
    })
  );
});

self.addEventListener("activate", function () {
  console.log("SW Activated");
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (res) {
      if (res) {
        return res;
      } else {
        return fetch(event.request);
      }
    })
  );
});
