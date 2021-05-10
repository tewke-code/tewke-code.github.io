'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "7e35a68ca231d46db2bb9b491221182b",
"main.dart.js": "ecb92fa91d2c16e90a976278bf657363",
"index.html": "61547e100b31e538f4784dc3d437445a",
"/": "61547e100b31e538f4784dc3d437445a",
"assets/assets/icons/music/speaker_devices.svg": "69625faf508d3db05bc93a8a6530e84b",
"assets/assets/icons/music/music-devices/tewke_switch_device.svg": "8cdb22062f8d12c9146cb9c32a617da4",
"assets/assets/icons/music/music-devices/laptop_device.svg": "964edd6334b29d304e6b2df1a8d0aa18",
"assets/assets/icons/music/music-devices/speaker_device.svg": "ab8296b1860226ac7d9ef5c66a70132b",
"assets/assets/icons/music/music-services/spotify_logo.svg": "ee22fc1bd198535bce623976949c0381",
"assets/assets/icons/music/music-services/apple_logo.svg": "ed192078af1c3051c14c386cb91cbb91",
"assets/assets/icons/music/music-services/tune_in.svg": "943e3a149189e6b1e2ab45dbd7143e03",
"assets/assets/icons/music/music-services/amazon_music.svg": "2ddcb5aa79680fae0c41e63ed575f650",
"assets/assets/icons/music/music-services/back_arrow.svg": "07f7d767d78bc466039265dddf7638dc",
"assets/assets/icons/music/music-services/radio_play_button.svg": "c5ed2198afaa653033a9a843dca16e9b",
"assets/assets/icons/music/heart_favourite.svg": "37bcda30270cf0a8dc849a8b603d4dcf",
"assets/assets/icons/music/heart_favourite_filled.svg": "fecf067e8e12533340d079f31e348279",
"assets/assets/icons/music/queue.svg": "43d3a9b32633e7601dd50b454746f02d",
"assets/assets/icons/music/music-queue/apple_music_text.svg": "8cb9425a0b15102441026cdf38fdfad7",
"assets/assets/icons/music/music-queue/shuffle_icon.svg": "a7914de3fbf5dfcdd374215ba15e9d55",
"assets/assets/icons/music/music-queue/circular_play_button.svg": "8b66e216918e2cebccabdd4f5cacd8bf",
"assets/assets/icons/music/apple_music.svg": "ee88eac111e4dbc70fc44d003619fc6e",
"assets/assets/icons/dashboard/circular_music_icon.svg": "a5d699ef11a5c5766c398026cd555cf1",
"assets/assets/icons/dashboard/circular_thermostat_icon.svg": "cc8a9746db31a23cac5088ab63ce123b",
"assets/assets/icons/dashboard/circular_lightbulb.svg": "65126a3eda362af6f3baf54b8c44e30f",
"assets/assets/icons/dashboard/circular_video_call.svg": "bf06cc2c9841cdcf01789efa88d21f4e",
"assets/assets/icons/dashboard/filled_sun.svg": "b4a747193b434419e4f9b0f5dbb39a6f",
"assets/assets/icons/dashboard/hollow_sun.svg": "78ddc13ee337f9dad5b784aa66799533",
"assets/assets/icons/intercom/video_off.svg": "76cb6d626850ed59019db38b6b7965be",
"assets/assets/icons/intercom/video_call.svg": "6b496c0a33fd38ef978fb081d1e6d180",
"assets/assets/icons/intercom/Group188.svg": "d2faaa352b4fe4d0384734a7ed3b19a5",
"assets/assets/icons/intercom/speaker_circle.svg": "a5c455ccc9158c0190b25464f18da490",
"assets/assets/icons/intercom/video_call_circle.svg": "0b34b32fefbdd15defe9f65543a33785",
"assets/assets/icons/intercom/down_arrow.svg": "4e7c6bb877dc528dbd9a036abc3f3036",
"assets/assets/icons/intercom/up_arrow.svg": "1837e003a5a9a395c1fd60ca5f44f0b4",
"assets/assets/icons/intercom/audio_call.svg": "c9d051ee9bd49ae097287ecaae38c1e1",
"assets/assets/icons/intercom/hang_up_audio_call.svg": "5fb797bf8cc9fd5c9d3b031435528277",
"assets/assets/icons/thermostat/flame.svg": "9a66433c33b4e3a4b2f6efea4ee63c8f",
"assets/assets/icons/thermostat/ac_unit.svg": "2b9b611529150a1a6641912edea7c4ce",
"assets/assets/icons/thermostat/rain_cloud.svg": "6555403f406257580a037b12dc23e077",
"assets/assets/icons/thermostat/power.svg": "a41c708eb099f7f57dbd5d8440c9d610",
"assets/assets/icons/thermostat/line.svg": "7d5f86b1b51caf456d67c0c881fa3d2d",
"assets/assets/icons/thermostat/ellipse.svg": "7407f7eb851bf14dfa44c6977144710e",
"assets/assets/images/music/all_my_days.png": "eed91513c7da7f75a7526824d261b3af",
"assets/assets/images/music/nico.png": "52a974686205ba74f55ea84789f287fd",
"assets/assets/images/music/leonard_cohen.png": "0a34cc1fe2e344ceb39471c74cf26843",
"assets/assets/images/music/hot_chip.png": "9e60162240a5521fbbe81e020d2f8610",
"assets/assets/images/music/yo_la_tengo.png": "ca5609fa0d903328638b724e121ed47c",
"assets/assets/images/music/out_of_time.png": "f3a805025b7aab7ef292afa8c7c342f5",
"assets/assets/images/music/johnny_cash.png": "41f71b6d3f29b2ea8dc89a4cb30c413b",
"assets/assets/images/music/default_album_art.png": "b7e796124df3dac7fd81f05b2d6d2e8a",
"assets/assets/images/music/rodrigo_gabriela.png": "b614a1da0b9bc6a77096872cab54e7a1",
"assets/assets/images/music/summer.png": "a756ef00c72fdd11ef854c300e93448d",
"assets/assets/images/music/arcade_fire.png": "de7f5e443ecea6ae37a578535402c711",
"assets/assets/fonts/helveticaneue/HelveticaNeue_Medium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"assets/assets/fonts/helveticaneue/HelveticaNeueBd.ttf": "b8edca3e45f1f16bc6e20464bd8f2fff",
"assets/assets/fonts/helveticaneue/HelveticaNeue.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/helveticaneue/HelveticaNeueIt.ttf": "33baa0a123d13fcda4e6cad9c93ed2ef",
"assets/assets/fonts/helveticaneue/HelveticaNeue_Light.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "6eee6dba1725d3766c2cbf13abbda308",
"assets/NOTICES": "80cf1835057c999a2aa82113a31a0d93",
"assets/AssetManifest.json": "85e93de6594463594f682f4dbc6262b2",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "dabeb523d1f9e549fa53128216266600"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
