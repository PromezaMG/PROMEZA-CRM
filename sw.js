const CACHE = "promeza-v116";
const ASSETS = [
  "./styles.css",
  "./i18n.js", "./airtable.js",
  "./ui.jsx", "./auth.jsx", "./shell.jsx", "./map.jsx", "./home.jsx",
  "./lists.jsx", "./profile.jsx", "./forms.jsx", "./duplicates.jsx",
  "./interactions.jsx", "./tasks.jsx", "./pipeline.jsx", "./projects.jsx",
  "./attachments.jsx", "./campaigns.jsx", "./calendar.jsx", "./goals.jsx",
  "./county.jsx", "./app.jsx", "./msal-browser.min.js",
  "./data_churches.js",
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
  // App code (HTML + JSX + CSS + the small logic .js files): network-first, so a
  // new deployment is ALWAYS picked up on the next online load. Falls back to
  // cache only when offline. This avoids users getting stuck on a stale version.
  // Big/static assets (data_churches.js, msal, images, fonts) stay cache-first below.
  const isCode = isHTML || /\.(jsx|css)$/.test(url.pathname) || /\/(i18n|airtable|app)\.js$/.test(url.pathname);
  if (isCode) {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) { const clone = res.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); }
        return res;
      }).catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
    return;
  }
  // Big/static assets: cache-first (ignoreSearch so ?v=104 matches cached ./file), network fallback
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(cached => cached || fetch(e.request).then(res => {
      if (res.ok) { const clone = res.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); }
      return res;
    }))
  );
});
