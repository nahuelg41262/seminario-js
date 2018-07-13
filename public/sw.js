
self.addEventListener("install",function(e){
	e.waitUntil(
		caches.open("pwa")
		.then(function(cache){
			return cache.addAll([
				"/",
				"/bundle.js",
				"/estilos.css",
				"/home",
				"/contacto"
			])
		})
	)
})

self.addEventListener("fetch",function(e){
	e.respondWith(
		caches.match(e.request)
		.then(function(recurso){
			return recurso || fetch(e.request).then(function(res){return res.text()})
		})
	)
})