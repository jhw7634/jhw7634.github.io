// 앱으로 설치했을 때 인터넷 없이도 열리게: 온라인이면 새로 받아 저장해 두고, 끊기면 저장해 둔 것을 씀
// 깃허브 페이지는 브라우저가 10분간 옛 파일을 재사용하게 하므로 no-cache로 매번 새 버전을 확인함
const CACHE = "aice";
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "index.html", "questions.js", "lessons.js", "basic.js", "manifest.webmanifest", "icon-192.png", "icon-512.png"]))); });
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request, { cache: "no-cache" })
    .then(r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; })
    .catch(() => caches.match(e.request)));
});
