/*
Un service worker es un archivo de javascript que se instala en el navegador se para en el medio de la conexion entre el servidor y el cliente. Nos permite entre otras cosas hacer notificaciones Push y PWA(Progressive Web Apps)

*/
if("serviceWorker" in navigator){
	navigator.serviceWorker.register("sw.js")	
}