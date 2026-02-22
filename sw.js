self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("dayssince").then(cache=>{
      return cache.addAll(["./","index.html"]);
    })
  );
});