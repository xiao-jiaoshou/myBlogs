/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "293a9440156beccd492a7e0edccbb5e8"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.fef0ee14.js",
    "revision": "27ff1c0942065413d61eea98a0d04ae0"
  },
  {
    "url": "assets/js/10.536d4cff.js",
    "revision": "a67b5b890cae646e172dc8e5140f67dd"
  },
  {
    "url": "assets/js/11.e3e77ef4.js",
    "revision": "d05318d9a3c3a34c4406d9f7108c1e74"
  },
  {
    "url": "assets/js/12.f25b8557.js",
    "revision": "a0afab7ef8afa273165a21082874c7bb"
  },
  {
    "url": "assets/js/13.665ce0ec.js",
    "revision": "3130f6cea0515e294a4d8e3a6daf6239"
  },
  {
    "url": "assets/js/14.ea616527.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.92bf9ad9.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.8659b153.js",
    "revision": "d033044aaec6b34224e8ed3d4b86549a"
  },
  {
    "url": "assets/js/17.85e574f5.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
  },
  {
    "url": "assets/js/18.0aef85ba.js",
    "revision": "fc84691c0892cc60b633e6bd7852e7fa"
  },
  {
    "url": "assets/js/4.1ace6332.js",
    "revision": "ef6ed30fe655c1f2e83d42c6dcfbb735"
  },
  {
    "url": "assets/js/5.a3f14b16.js",
    "revision": "74edda22319e7e930102cff48d8a0a0f"
  },
  {
    "url": "assets/js/6.7c911a6f.js",
    "revision": "84577c89ced861633ba67cbdd2cda3d6"
  },
  {
    "url": "assets/js/7.63b4df15.js",
    "revision": "0c4cab82dd1bdf72eae35a07fdc99b91"
  },
  {
    "url": "assets/js/8.85ae13b9.js",
    "revision": "0fdbe356535365944e0ae86af746a958"
  },
  {
    "url": "assets/js/9.75ef85fd.js",
    "revision": "8753dff7e23be266fe0527623142a3cd"
  },
  {
    "url": "assets/js/app.94cabb05.js",
    "revision": "c295bde88d4fe99d80b4a0383c7e9ec6"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.c5897f7a.js",
    "revision": "87a31bc352aa9f4ce4290b2dc3b78390"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "e978974f8f883459fb6a83b4d52e2bec"
  },
  {
    "url": "categories/java/index.html",
    "revision": "772470361a92923ac43a82087287e798"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e465e848d83326ac99874d23f843255a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1a906d7f1961a049fc8a6684e8c86922"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ef5a223521b2ca8e97e7fae3312a92cc"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "916f0aef1fb4f79eb770b4b7e05c46e5"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "641b84c6c5100fe92c92ad264944f67c"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "e636ba55bba6596dc300419e1bcee49c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ccbec317ac4fa1264d833c5f79eb3cb9"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e9f299bcf10038042d9b25cdb4ace834"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2a90ee0012ea2218a793268ba45cf883"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fa09a37200a15cea28fe6a78f765c1f1"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9d949e258598a6a1c6bcd29a2dc538d1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a1552ef70c8f5ba4b7ac3026ca821bd2"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "23c30a8c8b4fb4b4d38343850856387d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b39359eb27063daeb6060d1487fcea14"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3aaf346a22eab4bd9913f526aeda8d00"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "da8e7003e4bde832d24260412a18d7e1"
  },
  {
    "url": "timeline/index.html",
    "revision": "ced20ac65bc7df1eb383be4f53a810e4"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "154e1847426ecfcc358e2e9f77f7f7e8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "e5e3becbf9ab7d88ebac02d6267b7071"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "9b20d1a01df63df97a40437f9fc971e1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f38f85d95b63820e4b6ca2feeba6acbc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f6d6e16dce1809b84b8918deef437abb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
