$(function(){
	var geo = navigator.geolocation;
	var opciones={}
	function geo_error(){
		console.log("HHhmmm...this is akward.... no puedo saber donde estas");
	}
	function geo_exito(posicion){
		var lat = posicion.coords.latitude;
		var lon = posicion.coords.longitude;
		var mapa = new image();
		mapa.src="http://maps.googleapis.com/maps/api/staticmap?zoom=13&size300x300&sensor=false&center="+lat+","+lon;
		$('#geo').append(mapa);
	}
	geo.getCurrentPosition(geo_exito, geo_error, opciones);

});