const CACHE = "promeza-v97";
const ASSETS = [
  "./styles.css",
  "./i18n.js", "./airtable.js",
  "./ui.jsx", "./auth.jsx", "./shell.jsx", "./map.jsx", "./home.jsx",
  "./lists.jsx", "./profile.jsx", "./forms.jsx", "./duplicates.jsx",
  "./interactions.jsx", "./tasks.jsx", "./pipeline.jsx", "./projects.jsx",
  "./attachments.jsx", "./campaigns.jsx", "./calendar.jsx", "./goals.jsx",
  "./county.jsx", "./app.jsx", "./msal-browser.min.js",
  "./data_churches.js", "./data.js",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  // Delete old caches. Do NOT claim clients — claiming fires controllerchange
  // on open pages, which can cause reload loops and interrupt Microsoft login.
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (!e.request.url.startsWith(self.location.origin)) return;
  const url = new URL(e.request.url);
  const isHTML = url.pathname === "/" || url.pathname.endsWith(".html") || url.pathname.endsWith("/");
  if (isHTML) {
    // Network-first for HTML: always picks up new deployments on next load
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) { const clone = res.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); }
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  // Assets: cache-first, network fallback
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      if (res.ok) { const clone = res.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); }
      return res;
    }))
  );
});
