// Service worker for offline use. Generated into out/sw.js by scripts/postbuild.ts
// (VERSION and PRECACHE are filled in at build time).
const VERSION = "af3f1d8967";
const BASE = "/chess-trainer";
const PRECACHE = ["/chess-trainer/404/","/chess-trainer/404.html","/chess-trainer/__next.__PAGE__.txt","/chess-trainer/__next._full.txt","/chess-trainer/__next._tree.txt","/chess-trainer/_next/static/chunks/07fmet6emzzfc.js","/chess-trainer/_next/static/chunks/0amf4w0b5f5n6.js","/chess-trainer/_next/static/chunks/0cz1d0mv5g_q7.js","/chess-trainer/_next/static/chunks/0hga0k7ep9t43.js","/chess-trainer/_next/static/chunks/0mfs6a6as6n80.js","/chess-trainer/_next/static/chunks/0vqvb05zecwbr.js","/chess-trainer/_next/static/chunks/0zwo4euiyg0jp.js","/chess-trainer/_next/static/chunks/16z_ht34hvupy.js","/chess-trainer/_next/static/chunks/195pocpkt0as7.js","/chess-trainer/_next/static/chunks/19mx3mg6lkumu.js","/chess-trainer/_next/static/chunks/1_p2ao2qcixc1.js","/chess-trainer/_next/static/chunks/1t9kx1y1ldvt8.js","/chess-trainer/_next/static/chunks/2hhj95i7j8axw.js","/chess-trainer/_next/static/chunks/2r5dr1oaz-nu-.js","/chess-trainer/_next/static/chunks/30lx6j-dizv1c.js","/chess-trainer/_next/static/chunks/310vm2bl3xxpt.js","/chess-trainer/_next/static/chunks/39u3ld3zqxqqm.js","/chess-trainer/_next/static/chunks/3fntmmi971322.js","/chess-trainer/_next/static/chunks/3nl7lm4ofhdiu.js","/chess-trainer/_next/static/chunks/3ut0wv9qd_tm1.css","/chess-trainer/_next/static/chunks/42i02fq_354o_.js","/chess-trainer/_next/static/chunks/turbopack-02aadk07ws9-v.js","/chess-trainer/_next/static/csi7Ke1wj6ZWjaSh5YkjF/_buildManifest.js","/chess-trainer/_next/static/csi7Ke1wj6ZWjaSh5YkjF/_clientMiddlewareManifest.js","/chess-trainer/_next/static/csi7Ke1wj6ZWjaSh5YkjF/_ssgManifest.js","/chess-trainer/_next/static/media/4fa387ec64143e14-s.2tuy5pz7dlieh.woff2","/chess-trainer/_next/static/media/53b9e256198e5412-s.390ncx5urfkfu.woff2","/chess-trainer/_next/static/media/5ce348bf30bf5439-s.31988l_ccedte.woff2","/chess-trainer/_next/static/media/6306c77e7c8268e4-s.2dbetqa9o8jxf.woff2","/chess-trainer/_next/static/media/7178b3e590c64307-s.21jp631_3pja2.woff2","/chess-trainer/_next/static/media/797e433ab948586e-s.p.0r6juujl39pe6.woff2","/chess-trainer/_next/static/media/7d817b4c03b0c5f1-s.1uyisp29ctx0d.woff2","/chess-trainer/_next/static/media/8a480f0b521d4e75-s.1qq4vpdcun5oj.woff2","/chess-trainer/_next/static/media/bbc41e54d2fcbd21-s.1rgnod-3esatf.woff2","/chess-trainer/_next/static/media/caa3a2e1cccd8315-s.p.0wgildi0cnwt9.woff2","/chess-trainer/_next/static/media/favicon.2vob68tjqpejf.ico","/chess-trainer/_next/static/media/fef07dbb0973bf53-s.3p2_lha1f2xer.woff2","/chess-trainer/_not-found/__next._full.txt","/chess-trainer/_not-found/__next._not-found.__PAGE__.txt","/chess-trainer/_not-found/__next._tree.txt","/chess-trainer/_not-found/","/chess-trainer/_not-found/index.txt","/chess-trainer/academy/__next._full.txt","/chess-trainer/academy/__next._tree.txt","/chess-trainer/academy/__next.academy.__PAGE__.txt","/chess-trainer/academy/","/chess-trainer/academy/index.txt","/chess-trainer/data/puzzles.json","/chess-trainer/data/version.json","/chess-trainer/favicon.ico","/chess-trainer/game/__next._full.txt","/chess-trainer/game/__next._tree.txt","/chess-trainer/game/__next.game.__PAGE__.txt","/chess-trainer/game/","/chess-trainer/game/index.txt","/chess-trainer/games/__next._full.txt","/chess-trainer/games/__next._tree.txt","/chess-trainer/games/__next.games.__PAGE__.txt","/chess-trainer/games/","/chess-trainer/games/index.txt","/chess-trainer/icons/apple-touch-icon.png","/chess-trainer/icons/icon-192.png","/chess-trainer/icons/icon-512.png","/chess-trainer/icons/maskable-512.png","/chess-trainer/","/chess-trainer/index.txt","/chess-trainer/lesson/__next._full.txt","/chess-trainer/lesson/__next._tree.txt","/chess-trainer/lesson/__next.lesson.__PAGE__.txt","/chess-trainer/lesson/","/chess-trainer/lesson/index.txt","/chess-trainer/manifest.webmanifest","/chess-trainer/progress/__next._full.txt","/chess-trainer/progress/__next._tree.txt","/chess-trainer/progress/__next.progress.__PAGE__.txt","/chess-trainer/progress/","/chess-trainer/progress/index.txt","/chess-trainer/quiz/__next._full.txt","/chess-trainer/quiz/__next._tree.txt","/chess-trainer/quiz/__next.quiz.__PAGE__.txt","/chess-trainer/quiz/","/chess-trainer/quiz/index.txt","/chess-trainer/settings/__next._full.txt","/chess-trainer/settings/__next._tree.txt","/chess-trainer/settings/__next.settings.__PAGE__.txt","/chess-trainer/settings/","/chess-trainer/settings/index.txt","/chess-trainer/train/__next._full.txt","/chess-trainer/train/__next._tree.txt","/chess-trainer/train/__next.train.__PAGE__.txt","/chess-trainer/train/","/chess-trainer/train/index.txt","/chess-trainer/weaknesses/__next._full.txt","/chess-trainer/weaknesses/__next._tree.txt","/chess-trainer/weaknesses/__next.weaknesses.__PAGE__.txt","/chess-trainer/weaknesses/","/chess-trainer/weaknesses/index.txt"];
const CACHE = `chess-trainer-${VERSION}`;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("chess-trainer-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return; // e.g. Chess.com deadlines: always live

  // Hashed build files never change: cache first.
  if (url.pathname.startsWith(`${BASE}/_next/static/`)) {
    event.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => cache(req, res))));
    return;
  }
  // Everything else (pages, data, icons): network first, falling back to the cache when offline.
  event.respondWith(
    fetch(req)
      .then((res) => cache(req, res))
      .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match(`${BASE}/`))),
  );
});

function cache(req, res) {
  if (res.ok) {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}
