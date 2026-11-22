const C='libras-v2',SHELL=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
const EXT=/^https:\/\/(cdn\.jsdelivr\.net|storage\.googleapis\.com|fonts\.(googleapis|gstatic)\.com)\//;
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  if(EXT.test(r.url)){e.respondWith(caches.match(r).then(h=>h||fetch(r).then(x=>{if(x.ok||x.type==='opaque'){const c=x.clone();caches.open(C).then(k=>k.put(r,c))}return x})));return}
  if(u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(C).then(k=>k.put(r,c));return x}).catch(()=>caches.match(r)))});
