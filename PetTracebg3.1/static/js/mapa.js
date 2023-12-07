// Declaramos la variable marker fuera de la función initMap
var marker;

function obtenerUbicacion() {
  event.preventDefault();
  var mapDiv = document.getElementById('map');
  var selects = document.getElementById("selects");
  var mensaje = document.getElementById("mensaje");
  if (navigator.geolocation) {
    // Agregamos el argumento de opciones con un tiempo de espera de 10 segundos y una alta precisión
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitudInput = document.getElementById("latitud");
      var longitudInput = document.getElementById("longitud");

      latitudInput.value = position.coords.latitude;
      longitudInput.value = position.coords.longitude;
      selects.style.display = "none";
      // Añadimos esta línea para actualizar la posición del marcador
      marker.setPosition({lat: parseFloat(latitudInput.value), lng: parseFloat(longitudInput.value)});
      mapDiv.style.display = "block";
      mensaje.style.display = "none";

    }, mostrarError, function(error) {
      // Mostramos los select y el error cuando se agota el tiempo
      if (error.code == error.TIMEOUT) {
        selects.style.display = "inline-block";
        mostrarError(error);
      }
    }, {timeout: 1000, enableHighAccuracy: true}); // Este es el argumento de opciones
  } else {
    selects.style.display = "inline-block";
    mapDiv.style.display = "none";
    mensaje.textContent = "Tu navegador no soporta la geolocalización.";
    mensaje.style.display = "block";
  }
}

function mostrarError(error) {
  var mensaje = document.getElementById("mensaje");
  var selects = document.getElementById("selects");
  var mapDiv = document.getElementById('map');
  switch(error.code) {
    case error.PERMISSION_DENIED:
      mensaje.textContent = "El usuario no permitió el acceso a la ubicación.";
      selects.style.display = "inline-block"; 
      mapDiv.style.display = "none";
      break;
    case error.POSITION_UNAVAILABLE:
      mensaje.textContent = "No se pudo obtener la ubicación del usuario.";
      selects.style.display = "inline-block";
      mapDiv.style.display = "none";
      break;
    case error.TIMEOUT:
      mensaje.textContent = "Se agotó el tiempo de espera para obtener la ubicación.";
      selects.style.display = "inline-block"; 
      mapDiv.style.display = "none";
      break;
    case error.UNKNOWN_ERROR:
      mensaje.textContent = "Ocurrió un error desconocido.";
      selects.style.display = "inline-block";
      mapDiv.style.display = "none"; 
      break;
  }
  mensaje.style.display = "block";
}





//--------------------**funcion del mapa**-----------------------------------

// Esta función se ejecuta cuando el script de la API de Google Maps está listo
function initMap() {
  // Creamos una variable para guardar el elemento div donde se mostrará el mapa
  var mapDiv = document.getElementById('map');
  // Creamos una variable para guardar el elemento input donde se guardará la latitud
  var latInput = document.getElementById('latitud');
  // Creamos una variable para guardar el elemento input donde se guardará la longitud
  var lngInput = document.getElementById('longitud');
  // Creamos el mapa con una posición inicial y un nivel de zoom de 16
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 4.658512182837962, lng: -74.0934705734253},
    zoom: 10
  });
  // Asignamos el valor a la variable marker dentro de la función initMap
  marker = new google.maps.Marker({
    position: {lat: 4.658512182837962, lng: -74.0934705734253},
    map: map
  });
  // Añadimos un evento click al mapa que se active cuando el usuario haga clic en él
  map.addListener('click', function(event) {
    // Obtenemos las coordenadas del punto donde el usuario hizo clic
    var newPosition = event.latLng;
    // Actualizamos la posición del marcador con las nuevas coordenadas
    marker.setPosition(newPosition);
    map.panTo(newPosition);
    // Actualizamos los valores de los inputs ocultos con las nuevas coordenadas
    latInput.value = newPosition.lat();
    lngInput.value = newPosition.lng();
  });
  $('#obtenerUbicacion').click(function() {
    // Llamamos a la función obtenerUbicacion
    obtenerUbicacion();
  });
}
