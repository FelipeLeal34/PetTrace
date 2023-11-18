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


/*// Esta función se encarga de obtener la posición del usuario y actualizar la posición del mapa y del marcador con esa posición
// Recibe como parámetros el mapa y el marcador
function obtenerUbicacion(map, marker) {
  event.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitudInput = document.getElementById("latitud");
      var longitudInput = document.getElementById("longitud");
      var localidadesSelect = document.getElementById("localidades");
      var barriosSelect = document.getElementById("barrios");

      latitudInput.value = position.coords.latitude;
      longitudInput.value = position.coords.longitude;
      localidadesSelect.style.display = "none";
      barriosSelect.style.display = "none";
      // Creamos una variable para guardar las coordenadas del usuario
      var userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // Actualizamos la posición del mapa y del marcador con las coordenadas del usuario
      map.panTo(new google.maps.LatLng(userPosition.lat, userPosition.lng));
      marker.setPosition(userPosition);
    }, function(error) {
      var localidadesSelect = document.getElementById("localidades");
      var barriosSelect = document.getElementById("barrios");

      localidadesSelect.style.display = "inline-block";
      barriosSelect.style.display = "inline-block";
    });
  } else {
    var localidadesSelect = document.getElementById("localidades");
    var barriosSelect = document.getElementById("barrios");

    localidadesSelect.style.display = "inline-block";
    barriosSelect.style.display = "inline-block";
  }
}


// Añadimos un evento click al botón para obtener ubicación
$('#obtenerUbicacion').click(function() {
  // Llamamos a la función obtenerUbicacion pasando el mapa y el marcador como argumentos
  obtenerUbicacion(map, marker);
});
*/
//NO ESTÁN DENTRO DE NINGUNA FUNCION
var barriosEngativa = [
  "Acapulco",
  "Bellavista Occidental",
  "Bonanza",
  "Bosque Popular",
  "Cataluña",
  "Ciudad de Honda",
  "El Dorado San Joaquín",
  "El Guali",
  "El Laurel",
  "El Paseo",
  "Estrada",
  "La Cabaña",
  "La Estradita",
  "La Europa",
  "La Marcela",
  "La Reliquia",
  "Las Ferias",
  "Metropolis",
  "Palo Blanco",
  "San Joaquín",
  "Santo Domingo",
  "Andalucia",
  "Bochica",
  "Ciudad Bachué",
  "Copetroco La Tropical",
  "El Portal del Río",
  "La Española",
  "La Palestina",
  "La Serena",
  "Los Cerecitos",
  "Los Cerezos",
  "Luis Carlos Galan",
  "Meissen - Sidauto",
  "Minuto de Dios",
  "Morisco",
  "Paris Gaitan",
  "Primavera Norte",
  "Quirigua",
  "Boyaca",
  "El Carmelo",
  "El Refugio",
  "Florencia",
  "Florida Blanca",
  "La Almeria",
  "La Granja",
  "La Soledad Norte",
  "Los Pinos Florencia",
  "Maratij",
  "Paris",
  "Santa Helenita",
  "Santa Maria del Lago",
  "Santa Rosita",
  "Tabora",
  "Veracruz",
  "Zarzamora",
  "El Encanto",
  "El Lujan",
  "El Real",
  "Los Monjes",
  "Normandia",
  "Normandia Occidental",
  "San Ignacio",
  "San Marcos",
  "Santa Cecilia",
  "Villa Luz",
  "Bochica II",
  "Bolivia",
  "Ciudadela Colsubsidio",
  "El Cortijo",
  "El Dorado",
  "Bosques de Mariana",
  "Álamos",
  "Álamos Norte",
  "El Cedro",
  "Garcés Navas",
  "Los Ángeles",
  "Molinos de Viento",
  "Plazuelas del Virrey",
  "San Basilio",
  "Santa Mónica",
  "Villa Amalia",
  "Villa Sagrario",
  "Villas de Granada",
  "Villas de Madrigal",
  "Villas El Dorado San Antonio",
  "Alameda",
  "Danubio Centauros",
  "El Cedro",
  "El Mirador",
  "El Muelle",
  "El Palmar",
  "El Triángulo",
  "El Verdún",
  "Engativá Centro",
  "Granjas El Dorado",
  "La Cabaña",
  "La Esperanza",
  "La Faena",
  "La Riviera",
  "La Tortigua",
  "Las Mercedes",
  "Las Palmas",
  "Linterama",
  "Los Laureles",
  "Los Laureles Sabanas El Dorado",
  "Marandú",
  "Porvenir",
  "Puerto Amor Playas del Jaboque",
  "San Antonio Norte",
  "San Basilio",
  "San José Obrero",
  "Santa Librada",
  "Villa Claverí I y II",
  "Villa Constanza",
  "Villa El Dorado Norte",
  "Villa Gladys",
  "Villa Mary",
  "Villa Sandra",
  "Villa Teresita",
  "Villas El Dorado San Antonio II Sector",
  "Viña del Mar",
  "El Salitre Luis María Fernández",
  "San Ignacio",
  "Los Álamos"
];

var barriosCiudadBolivar = [
  "Central de Mezclas",
  "Las Manas",
  "Mochuelo Oriental",
  "Vereda El Pedregal - La Lira",
  "Villa Jaqui",
  "Barranquitos",
  "Brazuelos Santo Domingo",
  "Esmeralda",
  "Lagunitas",
  "Paticos",
  "El Mochuelo II",
  "Urbanización Guaitiquia",
  "Arborizadora Baja",
  "Atlanta",
  "Coruña",
  "El Chircal Sur",
  "El Esquinero",
  "La Playa",
  "La Playa II",
  "Madelena",
  "Rafael Escamilla",
  "Santa Helena",
  "Santa Rosa Sur",
  "Urbanización Protecho Bogotá",
  "Urbanización Atlanta",
  "Urbanización Casa Larga",
  "Urbanización La Coruña",
  "Villa Helena",
  "Acacia III Parte Baja",
  "Acacias Sur",
  "Candelaria La Nueva",
  "Colmena",
  "Colmena III",
  "Gibraltar I y II",
  "Juan J. Rondón - La Casona",
  "Juan José Rondón",
  "Las Acacias",
  "Millán Los Sauces",
  "Puerta al Llano",
  "San Fernando",
  "San Francisco",
  "San Luis",
  "Santa Inés La Acacia",
  "Sauces - Hortalizas- Recuerdo",
  "Candelaria La Nueva",
  "Villas de Bolívar",
  "Acacia IV",
  "Alfa",
  "Altos de Jalisco",
  "Álvaro Bernal Segura",
  "Bella Flor",
  "Bella Flor Sur",
  "Bella Vista Lucero Alto",
  "Brisas del Volador",
  "Buenavista Sector A",
  "Ciudad Milagros",
  "Compartir",
  "Cordillera Sur",
  "Domingo Lain I",
  "Domingo Lain II - El Bosque",
  "Domingo Lain III",
  "El Bosque",
  "El Castillo",
  "El Mirador",
  "El Paraíso",
  "El Satélite",
  "El Triunfo Sur",
  "Estrella del Sur",
  "Florida del Sur",
  "Gibraltar Sur",
  "Gibraltar I y II",
  "Juan Pablo II",
  "La Alameda",
  "La Alameda II Sector",
  "La Cabaña",
  "La Escala III",
  "La Esmeralda Sur",
  "La Estrella Sector Lagos",
  "La Torre",
  "Las Delicias del Sur",
  "Las Manitas",
  "Las Manitas II Sector",
  "Los Alpes",
  "Los Andes Sector 5 Nutibara",
  "Lucero Alto",
  "Lucero Bajo Corporación San Isidro",
  "Lucero Bajo Sector La Conquista",
  "Lucero Medio",
  "Lucero Sur Bajo",
  "Marandú",
  "Meissen",
  "Acapulco I",
  "Arabia",
  "Bogotá Sector Tequendama",
  "Bogotá Sur. La Esperanza",
  "Buenos Aires",
  "Buenos Aires II",
  "Buenos Aires III Sector",
  "Casa de Teja",
  "Cedritos del Sur",
  "Divino Niño",
  "El Consuelo",
  "El Minuto de María",
  "El Mochuelo",
  "El Recuerdo Sur",
  "El Reflejo II",
  "El Tesorito",
  "El Tesoro",
  "El Trigal",
  "Florida Sur Alto",
  "Inés Elvira",
  "La Cumbre (Antes El Recuerdo Sur)",
  "Los Duques",
  "Minuto de María",
  "Monterrey",
  "Ocho de Diciembre",
  "Parcelación Bogotá",
  "Potreritos",
  "Quiba",
  "Quiba Urbano",
  "República de Venezuela",
  "República del Canadá",
  "Rincón del Diamante",
  "San Joaquín El Vaticano",
  "San Joaquín Vaticano-Galpón",
  "San Joaquín Vaticano-Vergel",
  "San Rafael Sur",
  "Sotavento",
  "Urbanización Buena Vista",
  "Urbanización Cerros del Sur",
  "Urbanización Chicalá",
  "Urbanización El Limonar",
  "Urbanización Mirador de San Carlos",
  "Urbanización Urapanes del Sur",
  "Villa Diana López",
  "Villas de San Joaquín",
  "Sella Estancia",
  "Sarloviento",
  "Bonanza Sur",
  "Caracolí",
  "Casa Loma II",
  "Casagrande",
  "Casaloma",
  "Casavianca",
  "Conjunto Residencial La Valvanera",
  "Cooperativa Ismael Perdomo",
  "El Cerro del Oauante",
  "El Ensueño",
  "El Cortijo",
  "El Porvenir de La Estancia",
  "El Porvenir II Etapa",
  "El Porvenir Zona C",
  "El Rincón del Porvenir",
  "El Rosal",
  "Espinos I",
  "Espinos III Sector",
  "Galicia",
  "Ismael Perdomo",
  "La Era",
  "La Carecatera II",
  "La Estanca",
  "La Primavera",
  "La Unión El Niño",
  "Los Tres Reyes - I Etapa",
  "María Cavo de la Estancia",
  "Mirador de la Primavera",
  "Peñón del Cortijo III Sector",
  "Peñón Alto",
  "Primavera Sur-Occ",
  "Proyecto Rafael Escamilla",
  "Rincón de Galicia",
  "Rincón de la Estancia",
  "Rincón de la Valvanera",
  "San Antonio del Mirador",
  "San Isidro",
  "San Isidro II",
  "San Isidro Sector Carboneras",
  "San Isidro Sector Cerrito",
  "San Isidro Sector Cerrito II",
  "San Isidro Sector Cerrito III",
  "Rafael del Alto de la Estancia",
  "Savia Viviana",
  "Viviana Sector Hermosa",
  "Santo Domingo",
  "Sierra Morena",
  "Tres Reyes II Sector",
  "Urbanización Balmoral Rincón de la Valvanera",
  "México",
  "Mirador Nutibara",
  "Naciones Unidas - Chaparro",
  "Naciones Unidas - Santa Rosa",
  "Nueva Colombia",
  "Rocío Altos del Sur",
  "San Luis Altos de Jalisco",
  "Tabor-Altaloma",
  "Tierra Linda",
  "Urbanización Compartir",
  "Urbanización El Preciso",
  "Urbanización Kalamary",
  "Urbanización La Alameda",
  "Urbanización La Escala",
  "Urbanización Las Quintas del Sur",
  "Urbanización La Serranía del Sur",
  "Villa Gloria",
  "Villa Gloria-Las Manitas",
  "Villas del Diamante",
  "Villas del Progreso",
  "Vista Hermosa",
  "Vista Hermosa",
  "Vista Hermosa Sector Capri",
  "Vista Hermosa Sector San Carlos y El Triángulo",
  "Urbanización El Arroyuelo-Predio El Almacén",
  "Urbanización El Ensueño",
  "Urbanización Rincón de la Valvanera Mz.7",
  "Urbanización Balmoral II",
  "Urbanización Barlovento",
  "Urbanización Calabria",
  "Urbanización Galicia",
  "Urbanización India Catalina",
  "Urbanización La Estancia",
  "Urbanización La Llanada",
  "Urbanización La Riviera del Sur",
  "Urbanización Las Huertas",
  "Urbanización Peñón del Cortijo"
];

var barriosUsaquen = [
  "Canaima",
  "La Floresta de La Sabana",
  "Torca",
  "Altos de Serrezuela",
  "Balcones de Vista Hermosa",
  "Balmoral Norte",
  "Buenavista",
  "Chaparral",
  "El Codito",
  "El Refugio de San Antonio",
  "El Verbenal",
  "Horizontes",
  "La Estrellita",
  "La Frontera",
  "La Llanurita",
  "Los Consuelos",
  "Marantá",
  "Maturín",
  "Medellín",
  "Mirador del Norte",
  "Nuevo Horizonte",
  "San Antonio Norte",
  "Santa Andersito",
  "Tibabita",
  "Viña del Mar",
  "Bosque de San Antonio",
  "Conjunto Camino del Palmar",
  "El Pite",
  "El Redil",
  "La Cita",
  "La Granja Norte",
  "La Uribe",
  "Los Naranjos",
  "San Juan Bosco",
  "Urbanización Los Laureles",
  "Ainsuca",
  "Alta Blanca",
  "Barrancas",
  "California",
  "Cerro Norte",
  "Danubio",
  "Don Bosco",
  "La Perla Oriental",
  "Las Areneras",
  "Milán (Barrancas)",
  "Pradera Norte",
  "San Cristóbal Norte",
  "San Cristóbal Norte parte alta",
  "San Cristóbal Norte parte baja",
  "Santa Teresa",
  "Soratama",
  "Torcoroma",
  "Villa Nydia",
  "Villa Oliva",
  "El Toberín",
  "Babilonia",
  "Darandelos",
  "Estrella del Norte",
  "Guanoa",
  "Jardín Norte",
  "La Liberia",
  "La Pradera Norte",
  "Las Orquídeas",
  "Pantanito",
  "Santa Mónica",
  "Villa Magdala",
  "Villas de Aranjuez",
  "Villas del Mediterráneo",
  "Zaragoza",
  "Acacias",
  "Antigua",
  "Belmira",
  "Bosque de Pinos",
  "Caobos Salazar",
  "Capri",
  "Cedritos",
  "Cedro Bolívar",
  "Cedro Golf",
  "Cedro Madeira",
  "Cedro Narváez",
  "Cedro Salazar",
  "El Contador",
  "El Rincón de Las Margaritas",
  "La Sonora",
  "Las Margaritas",
  "Lisboa",
  "Los Cedros",
  "Los Cedros Oriental",
  "Montearroyo",
  "Nueva Autopista",
  "Nuevo Country",
  "Sierras del Moral el Nogal",
  "Bella Suiza",
  "Bellavista",
  "Bosque Medina",
  "El Pañuelito",
  "El Pedregal",
  "Escuela de Caballería I",
  "Escuela de Infantería",
  "Francisco Miranda",
  "Ginebra",
  "La Esperanza",
  "La Glorieta",
  "Las Delicias del Carmen",
  "Sagrado Corazón",
  "San Gabriel",
  "Santa Ana",
  "Santa Ana Occidental",
  "Santa Bárbara",
  "Santa Bárbara Alta",
  "Santa Bárbara Oriental",
  "Unicerros",
  "Usaquén",
  "Country Club",
  "La Calleja",
  "La Carolina",
  "La Cristalina",
  "Prados del Country",
  "Recodo del Country",
  "Santa Coloma",
  "Soatama",
  "Toledo",
  "Torres del Country",
  "Vergel del Country",
  "Santa Bárbara Occidental",
  "Campo Alegre",
  "Molinos del Norte",
  "Multicentro",
  "Navarra",
  "Rincón del Chicó",
  "San Patricio",
  "Santa Bárbara",
  "Santa Bárbara Central",
  "Santa Bibiana",
  "Santa Paula"
];


      var barriosUsaquen = [
        "Canaima",
        "La Floresta de La Sabana",
        "Torca",
        "Altos de Serrezuela",
        "Balcones de Vista Hermosa",
        "Balmoral Norte",
        "Buenavista",
        "Chaparral",
        "El Codito",
        "El Refugio de San Antonio",
        "El Verbenal",
        "Horizontes",
        "La Estrellita",
        "La Frontera",
        "La Llanurita",
        "Los Consuelos",
        "Marantá",
        "Maturín",
        "Medellín",
        "Mirador del Norte",
        "Nuevo Horizonte",
        "San Antonio Norte",
        "Santa Andersito",
        "Tibabita",
        "Viña del Mar",
        "Bosque de San Antonio",
        "Conjunto Camino del Palmar",
        "El Pite",
        "El Redil",
        "La Cita",
        "La Granja Norte",
        "La Uribe",
        "Los Naranjos",
        "San Juan Bosco",
        "Urbanización Los Laureles",
        "Ainsuca",
        "Alta Blanca",
        "Barrancas",
        "California",
        "Cerro Norte",
        "Danubio",
        "Don Bosco",
        "La Perla Oriental",
        "Las Areneras",
        "Milán (Barrancas)",
        "Pradera Norte",
        "San Cristóbal Norte",
        "San Cristóbal Norte parte alta",
        "San Cristóbal Norte parte baja",
        "Santa Teresa",
        "Soratama",
        "Torcoroma",
        "Villa Nydia",
        "Villa Oliva",
        "El Toberín",
        "Babilonia",
        "Darandelos",
        "Estrella del Norte",
        "Guanoa",
        "Jardín Norte",
        "La Liberia",
        "La Pradera Norte",
        "Las Orquídeas",
        "Pantanito",
        "Santa Mónica",
        "Villa Magdala",
        "Villas de Aranjuez",
        "Villas del Mediterráneo",
        "Zaragoza",
        "Acacias",
        "Antigua",
        "Belmira",
        "Bosque de Pinos",
        "Caobos Salazar",
        "Capri",
        "Cedritos",
        "Cedro Bolívar",
        "Cedro Golf",
        "Cedro Madeira",
        "Cedro Narváez",
        "Cedro Salazar",
        "El Contador",
        "El Rincón de Las Margaritas",
        "La Sonora",
        "Las Margaritas",
        "Lisboa",
        "Los Cedros",
        "Los Cedros Oriental",
        "Montearroyo",
        "Nueva Autopista",
        "Nuevo Country",
        "Sierras del Moral el Nogal",
        "Bella Suiza",
        "Bellavista",
        "Bosque Medina",
        "El Pañuelito",
        "El Pedregal",
        "Escuela de Caballería I",
        "Escuela de Infantería",
        "Francisco Miranda",
        "Ginebra",
        "La Esperanza",
        "La Glorieta",
        "Las Delicias del Carmen",
        "Sagrado Corazón",
        "San Gabriel",
        "Santa Ana",
        "Santa Ana Occidental",
        "Santa Bárbara",
        "Santa Bárbara Alta",
        "Santa Bárbara Oriental",
        "Unicerros",
        "Usaquén",
        "Country Club",
        "La Calleja",
        "La Carolina",
        "La Cristalina",
        "Prados del Country",
        "Recodo del Country",
        "Santa Coloma",
        "Soatama",
        "Toledo",
        "Torres del Country",
        "Vergel del Country",
        "Santa Bárbara Occidental",
        "Campo Alegre",
        "Molinos del Norte",
        "Multicentro",
        "Navarra",
        "Rincón del Chicó",
        "San Patricio",
        "Santa Bárbara",
        "Santa Bárbara Central",
        "Santa Bibiana",
        "Santa Paula"
      ];

var barriosChapinero = [
  "Chicó Reservado",
  "Bellavista",
  "Chicó Alto",
  "El Nogal",
  "El Refugio",
  "La Cabrera",
  "Los Rosales",
  "Seminario",
  "Toscana",
  "La Esperanza Nororiental",
  "La Sureña",
  "San Isidro",
  "San Luis Altos del Cabo",
  "Bosque Calderón",
  "Bosque Calderón Tejada",
  "Chapinero Alto",
  "El Castillo",
  "El Paraíso",
  "Emaus",
  "Granada",
  "Ingemar",
  "Juan XXIII",
  "La Salle",
  "Las Acacias",
  "Los Olivos",
  "María Cristina",
  "Mariscal Sucre",
  "Nueva Granada",
  "Palomar",
  "Pardo Rubio",
  "San Martín de Porres",
  "Villa Anita",
  "Villa del Cerro",
  "Antiguo Country",
  "Chicó Norte",
  "Chicó Norte II",
  "Chicó Norte III",
  "Chicó Occidental",
  "El Chicó",
  "El Retiro",
  "Espartillal",
  "La Cabrera",
  "Lago Gaitán",
  "Porciúncula",
  "Quinta Camacho",
  "Cataluña",
  "Chapinero Central",
  "Chapinero Norte",
  "Marly",
  "Sucre"
];

var barriosSantaFe = [
  "La Merced",
  "Parque Central Bavaria",
  "Sagrado Corazón",
  "San Diego",
  "Samper",
  "San Martín",
  "Bosque Izquierdo",
  "Germania",
  "La Macarena",
  "La Paz Centro",
  "La Perseverancia",
  "La Alameda",
  "La Capuchina",
  "Veracruz",
  "Las Nieves",
  "San Victorino",
  "Santa Inés",
  "Las Cruces",
  "San Bernardo",
  "Atanasio Girardot",
  "Cartagena",
  "El Balcón",
  "El Consuelo",
  "El Dorado",
  "El Guavio",
  "El Mirador",
  "El Rocío",
  "El Triunfo",
  "Fábrica de Loza",
  "Gran Colombia",
  "La Peña",
  "Los Laches",
  "Lourdes",
  "Ramírez",
  "San Dionisio",
  "Santa Rosa de Lima",
  "Vitelma"
];

var barriosSanCristobal = [
  "Aguas Claras",
  "Altos del Zipa",
  "Amapolas",
  "Amapolas II",
  "Balcón de La Castaña",
  "Bella Vista Sector Lucero",
  "Bellavista Parte Baja",
  "Bellavista Sur",
  "Bosque de Los Alpes",
  "Buenavista Suroriental",
  "Camino Viejo San Cristóbal",
  "Cerros de San Vicente",
  "Ciudad de Londres",
  "Corinto",
  "El Balcón de La Castaña",
  "El Futuro",
  "El Ramajal",
  "El Ramajal (San Pedro)",
  "Gran Colombia (Molinos de Oriente)",
  "Horacio Orjuela",
  "La Castaña",
  "La Cecilia",
  "La Gran Colombia",
  "La Herradura",
  "La Joyita Centro (Bello Horizonte)",
  "La Playa",
  "La Roca",
  "La Sagrada Familia",
  "Las Acacias",
  "Las Columnas",
  "Las Mercedes",
  "Laureles Sur Oriental II Sector",
  "Los Alpes",
  "Los Alpes Futuro",
  "Los Arrayanes Sector Santa Inés",
  "Los Laureles Sur Oriental I Sector",
  "Macarena Los Alpes",
  "Manantial",
  "Manila",
  "Miraflores",
  "Molinos de Oriente",
  "Montecarlo",
  "Nueva España",
  "Nueva España Parte Alta",
  "Ramajal",
  "Rincón de La Victoria-Bellavista",
  "Sagrada Familia",
  "San Blas",
  "San Blas (parcelas)",
  "San Blas II Sector",
  "San Cristóbal Alto",
  "San Cristóbal Viejo",
  "San Pedro Sur Oriental",
  "San Vicente",
  "San Vicente Alto",
  "San Vicente Bajo",
  "San Vicente Sur Oriental",
  "Santa Inés",
  "Santa Inés Sur",
  "Terrazas de Oriente",
  "Triángulo",
  "Triángulo Alto",
  "Triángulo Bajo",
  "Vereda Altos de San Blas",
  "Vitelma",
  "Golconda",
  "Primero de Mayo",
  "Buenos Aires",
  "Calvo Sur",
  "La María",
  "Las Brisas",
  "Los Dos Leones",
  "Modelo Sur",
  "Nariño Sur",
  "Quinta Ramos",
  "República de Venezuela",
  "San Cristóbal Sur",
  "San Javier",
  "Santa Ana",
  "Santa Ana Sur",
  "Sosiego",
  "Velódromo",
  "Villa Albania",
  "Villa Javier",
  "Atenas",
  "20 de Julio",
  "Atenas I",
  "Ayacucho",
  "Barcelona",
  "Barcelona Sur",
  "Barcelona Sur Oriental",
  "Bello Horizonte",
  "Bello Horizonte III Sector",
  "Córdoba",
  "El Ángulo",
  "El Encanto",
  "Granada Sur",
  "Granada Sur III Sector",
  "La Joyita",
  "La Serafina",
  "Managua",
  "Montebello",
  "San Isidro",
  "San Isidro I y II",
  "San Isidro Sur",
  "San Luis",
  "Sur América",
  "Villa de Los Alpes",
  "Villa de Los Alpes I",
  "Villa Nataly",
  "20 de Julio",
  "Altamira",
  "Altamira Chiquita",
  "Altos del Poblado",
  "Altos del Virrey",
  "Altos del Zuque",
  "Bellavista Parte Alta",
  "El Pilar",
  "Bellavista Sur Oriental",
  "Buenos Aires",
  "Ciudadela Santa Rosa",
  "El Quindío",
  "El Recodo-República de Canadá",
  "El Rodeo",
  "La Colmena",
  "La Gloria",
  "La Gloria Baja",
  "La Gloria MZ 11",
  "La Gloria Occidental",
  "La Gloria Oriental",
  "La Gloria San Miguel",
  "La Grovana",
  "La Victoria",
  "La Victoria II Sector",
  "La Victoria III Sector",
  "La Ye",
  "Las Gaviotas",
  "Las Guacamayas",
  "Las Guacamayas I, II y III",
  "Malvinas",
  "Miraflores",
  "Moralba",
  "Panorama",
  "Paseito III",
  "Puente Colorado",
  "Quindío",
  "Quindío I y II",
  "San José",
  "San José Oriental",
  "San José Sur Oriental",
  "San Martín de Loba I y II",
  "San Martín Sur",
  "San Miguel",
  "Antioquia",
  "Canadá La Guirá",
  "Canadá La Guirá II Sector",
  "Canadá-San Luis",
  "Chiguaza",
  "Ciudad de Londres",
  "El Paraíso",
  "El Pinar (República del Canadá II)",
  "El Triunfo",
  "Juan Rey (La Paz)",
  "La Belleza",
  "La Nueva Gloria",
  "La Nueva Gloria II Sector",
  "La Península",
  "La Sierra",
  "Los Libertadores",
  "Los Libertadores Sector El Tesoro",
  "Los Libertadores Sector La Colina",
  "Los Libertadores Sector San Ignacio",
  "Los Libertadores Sector San Isidro",
  "Los Libertadores Sector San José",
  "Los Libertadores Sector San Luis",
  "Los Libertadores Sector San Miguel",
  "Los Libertadores Bosque Diamante Triángulo",
  "Los Pinares",
  "Los Pinos",
  "Los Puentes",
  "Nueva Delhi",
  "Nueva Gloria",
  "Nueva Roma",
  "Nuevas Malvinas (El Triunfo)",
  "República del Canadá",
  "República del Canadá-El Pinar",
  "San Jacinto",
  "San Manuel",
  "San Rafael Sur Oriental",
  "San Rafael Usme",
  "Santa Rita I, II y III",
  "Santa Rita Sur Oriental",
  "Valparaíso",
  "Villa Angélica-Canadá-La Guirá",
  "Villa Aurora",
  "Villa del Cerro",
  "Villabell",
  "Yomasa",
  "Villa Angélica",
  "El Paraíso Sur Oriental I Sector",
  "Juan Rey I y II",
  "Villa Begonia"
];

var barriosUsme = [
  "Buenos Aires",
  "Costa Rica",
  "Doña Liliana",
  "El Bosque km. 11",
  "Juan José Rondón",
  "Juan José Rondón II Sector",
  "La Cabaña",
  "La Esperanza",
  "La Flora-Parcelación San Pedro",
  "Las Violetas",
  "Los Arrayanes",
  "Los Soches",
  "Tihuaque",
  "Unión",
  "Villa Diana",
  "Villa Rosita",
  "Alaska",
  "Arrayanes",
  "Danubio Azul",
  "Daza Sector II",
  "Duitama",
  "El Porvenir",
  "El Porvenir II Sector",
  "Fiscala II La Fortuna",
  "Fiscala Sector Centro",
  "La Fiscala-Los Tres Laureles",
  "La Fiscala-Lote 16",
  "La Fiscala-Lote 16A",
  "La Fiscala Sector Daza",
  "La Fiscala Sector Norte",
  "La Fiscala Sector Rodríguez",
  "La Morena I",
  "La Morena II",
  "La Morena II (Sector Villa Sandra)",
  "Nueva Esperanza",
  "San Martín",
  "Villa Neiza",
  "Picota Sur",
  "Porvenir",
  "Almirante Padilla",
  "Altos del Pino",
  "Arizona",
  "Barranquillita",
  "Benjamin Uribe",
  "Betania",
  "Betania II",
  "Bolonia",
  "Bulevar del Sur",
  "Casa Loma II",
  "Casa Rey",
  "Casaloma",
  "Compostela I",
  "Compostela II",
  "Compostela III",
  "El Bosque",
  "El Cortijo",
  "El Curubo",
  "El Jordán",
  "El Nevado",
  "El Pedregal",
  "El Recuerdo Sur",
  "El Refugio",
  "El Refugio Sector Santa Librada",
  "El Rosal-Mirador",
  "El Rubí II Sector",
  "Gran Yomasa I",
  "Gran Yomasa II",
  "La Andrea",
  "La Aurora",
  "La Cabaña",
  "La Esperanza",
  "La Fortaleza",
  "La Regadera km. 11",
  "La Regadera Sur",
  "Las Brisas",
  "Las Flores",
  "Las Mercedes",
  "Lorenzo Alcantuz I",
  "Lorenzo Alcantuz II",
  "Los Altos del Brazuelo",
  "Marichuela III",
  "Monteblanco",
  "Montevídeo",
  "Nuevo San Luis",
  "San Joaquín-El Uval",
  "Sector Granjas de San Pedro",
  "Tenerife",
  "Urbanización Chuniza I",
  "Urbanización Jarón Monte Rubio",
  "Urbanización Líbano",
  "Urbanización Marichuela",
  "Usminia",
  "Villa Alemania",
  "Villa Alemania II Sector",
  "Villa Anita Sur",
  "Villa Israel",
  "Villa Israel II",
  "Alfonso López Sector Charalá",
  "Antonio José de Sucre I, II y III",
  "Bellavista Alta",
  "Bellavista II Sector",
  "Bosque El Limonar",
  "Bosque El Limonar II Sector",
  "Brazuelos",
  "Brazuelos Occidental",
  "Brazuelos-El Paraíso",
  "Brazuelos-La Esmeralda",
  "Centro Educativo San José",
  "Chapinerito",
  "Chicó Sur",
  "Chicó Sur II",
  "Ciudadela Cantarrana I, II y III Sector",
  "Comuneros",
  "El Brillante",
  "El Espino",
  "El Mortiño",
  "El Rubí",
  "El Tuno",
  "El Uval",
  "El Virrey Última Etapa",
  "Finca La Esperanza",
  "La Esmeralda-El Recuerdo",
  "La Esperanza km. 10",
  "Las Brisas",
  "Las Flores",
  "Las Mercedes",
  "Lorenzo Alcantuz I",
  "Lorenzo Alcantuz II",
  "Los Altos del Brazuelo",
  "Marichuela III",
  "Monteblanco",
  "Montevídeo",
  "Nuevo San Luis",
  "San Joaquín-El Uval",
  "Sector Granjas de San Pedro",
  "Tenerife",
  "Urbanización Chuniza I",
  "Urbanización Jarón Monte Rubio",
  "Urbanización Líbano",
  "Urbanización Marichuela",
  "Usminia",
  "Villa Alemania",
  "Villa Alemania II Sector",
  "Villa Anita Sur",
  "Villa Israel",
  "Villa Israel II",
  "Alfonso López Sector Buenos Aires",
  "Alfonso López Sector El Progreso",
  "Brisas del Llano",
  "El Nuevo Portal",
  "El Paraíso",
  "El Portal II Etapa",
  "El Progreso Usme",
  "El Refugio I y II",
  "El Triángulo",
  "El Uval II Sector",
  "La Huerta",
  "La Orquídea Usme",
  "La Reforma",
  "Nuevo Porvenir",
  "Nuevo Progreso-El Progreso II Sector",
  "Portal de La Vega",
  "Portal de Oriente",
  "Portal del Divino",
  "Puerta al Llano",
  "Puerta al Llano II",
  "Refugio I",
  "Villa Hermosa",
  "Arrayanes",
  "Bolonia",
  "El Bosque Central",
  "El Nuevo Portal II",
  "El Refugio I",
  "La Esperanza Sur",
  "Los Olivares",
  "Pepinitos",
  "Tocaimita Oriental",
  "Tocaimita Sur",
  "Ciudadela El Oasis",
  "Brisas del Llano",
  "Usme-Centro",
  "El Bosque km. 11",
  "El Pedregal-La Lira",
  "El Salteador",
  "La María"
];

var barriosTunjuelito = [
  "Condado de Santa Lucía",
  "Conjunto Residencial Nuevo Muzu",
  "El Carmen",
  "Escuela de Policía General Santander",
  "Fátima",
  "Isla del Sol",
  "Laguneta",
  "Nuevo Muzu",
  "Ontario",
  "Parque Metropolitano El Tunal",
  "Parque Real 1.11",
  "Rincón de Muzu",
  "Rincón de Nuevo Muzu",
  "Rincón de Venecia",
  "Samoré",
  "San Vicente",
  "San Vicente de Ferrer",
  "Santa Lucía",
  "Sejar de Ontario",
  "Ciudad Tunal",
  "Venecia",
  "Venecia Occidental",
  "Villa Ximena",
  "Abraham Lincoln",
  "San Benito",
  "San Carlos",
  "Tunalito",
  "Tunjuelito"
];

var barriosBosa = [
  "Jardines del Apogeo",
  "El Motorista",
  "Industrial",
  "La Ilusión",
  "Nuevo Chile",
  "Olarte",
  "Villa del Río",
  "Amaru",
  "Berlín",
  "Berlín de Bosa La Libertad III",
  "Betania",
  "Bosa Nova",
  "Bosa Nova II Sector",
  "Bosalinda (Holdebrando Olarte)",
  "Brasil",
  "Brasilia",
  "Campo Hermoso",
  "Casa Nueva",
  "Chicala",
  "Ciudadela La Libertad",
  "El Bosque de Bosa",
  "El Cauce",
  "El Diamante",
  "El Libertador",
  "El Paradero",
  "El Portal de La Libertad",
  "El Porvenir",
  "El Progreso",
  "El Recuerdo",
  "El Rincón de Bosa",
  "El Rodeo",
  "El Sauce",
  "Escocia",
  "Finca La Esperanza",
  "Holanda",
  "Hortelanos de Escocia",
  "Jorge Uribe Botero",
  "La Concepción",
  "La Dulcinea",
  "La Esmeralda",
  "La Estanzuela I y II",
  "La Florida",
  "La Fontana de Bosa-La Libertad",
  "La Independencia",
  "La Libertad I, II, III, IV",
  "La Magnolia",
  "La María",
  "La Palma",
  "La Paz",
  "La Portada",
  "La Portadita",
  "La Veguita",
  "Las Margaritas",
  "Las Vegas",
  "Los Ocales",
  "Los Sauces",
  "Miami",
  "New Jersey",
  "Nuestra Señora de La Paz",
  "Nueva Escocia",
  "Nueva Esperanza",
  "Porvenir",
  "San Antonio",
  "San Antonio de Bosa",
  "San Antonio de Escocia",
  "San Bernardino",
  "San Javier",
  "San Jorge",
  "San Juanito",
  "San Martín",
  "San Pedro",
  "Santa Inés",
  "Sauces",
  "Siracuza",
  "Tokio",
  "Vegas de Santana",
  "Villa Carolina",
  "Villa Clemencia",
  "Villa Colombia",
  "Villa de Los Comuneros",
  "Villa de Suaita",
  "Villa Magnolia",
  "Villa Natalia",
  "Villa Nohora",
  "Villa Sonia I y II",
  "Villas del Progreso",
  "Villas del Velero",
  "Campo Verde",
  "Andalucía I y II",
  "Antonia Santos",
  "Argelia",
  "Bosa",
  "Bosques de Meryland",
  "Brasilia-La Estación",
  "Carlos Albán",
  "Charles de Gaulle",
  "Claretiano",
  "El Jardín",
  "El Llano",
  "El Palmar",
  "El Portal de Bosa",
  "El Porvenir",
  "El Progreso",
  "El Retazo",
  "El Toche",
  "Getsemaní",
  "Grancolombiano I y II",
  "Gualoche",
  "Hermanos Barragán",
  "Humberto Valencia",
  "Islandia",
  "Israelita",
  "Jiménez de Quesada",
  "José Antonio Galán",
  "José María Carbonel",
  "La Amistad",
  "La Azucena",
  "La Estación",
  "La Riviera",
  "Laureles",
  "Llano Oriental",
  "Llanos de Bosa",
  "Manzanares",
  "Mitrani",
  "Naranjos",
  "Nueva Granada",
  "Bosa Palestina",
  "Paso Ancho",
  "Piamonte",
  "Primavera Sur",
  "San Eugenio",
  "San Pablo I sector y San Pablo II sector",
  "San Pedro",
  "Santa Lucía",
  "Urbanización Acuarela",
  "Betania",
  "Vereda San José",
  "La Esperanza",
  "Villa Anny",
  "Villa Bosa",
  "Villa Nohora",
  "Xochimilco",
  "Caldas",
  "Antonio Nariño",
  "Campo Hermoso",
  "Cañaveralejo",
  "El Anhelo",
  "El Corzo",
  "El Porvenir",
  "El Recuerdo",
  "El Regalo",
  "La Arboleda",
  "La Cabaña",
  "La Granjita",
  "La Suerte",
  "La Unión",
  "Los Centauros",
  "Osorio X",
  "Osorio XIII",
  "Parcela El Porvenir",
  "San Bernardino II",
  "San Miguel",
  "Santa Fe I, II y III",
  "Santa Fe de Bosa",
  "Villa Alegre",
  "Villa Alegría",
  "Villa Esmeralda",
  "Villa Karen",
  "El Matorral",
  "El Matorral de San Bernardino",
  "El Triunfo",
  "El Triunfo de San Bernardino",
  "La Vega de San Bernardino Bajo",
  "Potreritos",
  "San Bernardino Sector Potrerito",
  "San Bernardino XIX, XVI, XVII, XVIII, XXII y XXV",
  "Ciudadela El Recreo"
];

var barriosKennedy = [
  "Agrupación Pio X",
  "Agrupación Multifamiliar Villa Emilia",
  "Alférez Real",
  "Américas Central",
  "Américas Occidental I, II y III Etapa",
  "Antiguo Hipódromo de Techo II Etapa",
  "Carvajal II Sector",
  "Centroaméricas",
  "Ciudad Kennedy",
  "Conjunto Res. El Rincón de Mandalay",
  "Floresta Sur",
  "Fundadores",
  "Glorieta de las Américas",
  "Hipotecho",
  "Igualdad I Sector",
  "Igualdad II Sector",
  "La Floresta",
  "La Igualdad",
  "La Llanura",
  "La Llanura Manzana P",
  "Las Américas",
  "Las Américas Sector Galán",
  "Los Sauces",
  "Mandalay Etapa A Sector II",
  "Mandalay I Sector",
  "Marsella III Sector",
  "Multifamiliares Villa Adriana Mz. H",
  "Nueva Marsella I, II y III Sector",
  "Provivienda Oriental",
  "Santa Rosa de Carvajal",
  "Urb. Los Laureles Sauces-Robles",
  "Villa Adriana",
  "Villa Claudia",
  "Agrupación de Vivienda Talavera",
  "Alq. de la Fragua Sector El Paraíso",
  "Alquerías de la Fragua",
  "Alquerías de la Reina",
  "Alquerías de la Fragua Villa Nueva",
  "Alquerías de la Fragua, Sector Santa Yolanda",
  "Bombay",
  "Carimagua I Sector",
  "Carvajal",
  "Carvajal Osorio",
  "Carvajal Techo I Sector",
  "Condado El Rey",
  "Delicias",
  "Desarrollo Nueva York",
  "El Pencil",
  "El Progreso I y II Sector",
  "El Triángulo",
  "Floralia I y II Sector",
  "Gerona",
  "Guadalupe",
  "La Campiña",
  "La Chucua",
  "Las Torres",
  "Los Cristales",
  "Lucerna",
  "Milenta II y III Sector",
  "Multifamiliar Carimagua",
  "Nueva York",
  "Provivienda",
  "Provivienda Occidental",
  "Salvador Allende",
  "San Andrés",
  "San Andrés II Sector",
  "Super Manzana 6A",
  "Tayrona Comercial",
  "Urb. Nueva Delicias",
  "Urb. Renania antes La Chucua",
  "Urbanización Carvajal",
  "Urbanización Las Delicias",
  "Valencia La Chucua",
  "Villa Nueva",
  "Aloha Sector Norte",
  "Agrupación de Vivienda Pio XII",
  "Andalucía",
  "Andalucía II Sector",
  "Bavaria Techo II Sector, I y II Etapa",
  "Bosques de Castilla",
  "Ciudad Don Bosco",
  "Ciudad Favidi",
  "Ciudad Techo 1",
  "El Castillo",
  "El Condado de la Paz",
  "El Portal de las Américas",
  "El Rincón de Castilla",
  "El Rincón de Los Ángeles",
  "El Tintal",
  "El Vergel",
  "El Vergel Lote 4",
  "El Vergel Occidental",
  "Lagos de Castilla",
  "Las Dos Avenidas I Etapa",
  "Las Dos Avenidas II Etapa",
  "Monterrey",
  "Multifamiliares El Ferrol",
  "Nuestra Señora de la Paz",
  "Osorio",
  "Oviedo",
  "Pio XII",
  "San José Occidental",
  "San Juan del Castillo",
  "Santa Catalina Sector I y II",
  "Santa Cecilia",
  "Urb. Castilla",
  "Urb. Castilla Los Madriles",
  "Urbanización Bavaria",
  "Urbanización Castilla La Nueva",
  "Urbanización Castilla Los Mandriles",
  "Urbanización Castilla Real",
  "Santa Paz-Santa Elvira",
  "Vereda El Tintal",
  "Urbanización Unir Uno Predio Calandaima",
  "Calandaima",
  "Conjunto Residencial Prados de Castilla I, II y III",
  "Galán",
  "Osorio",
  "Santa Fe del Tintal",
  "Tintala",
  "Paro Cañizares",
  "Chucua de la Vaca",
  "El Amparo",
  "El Llantito",
  "El Olivo",
  "El Portal de Patio Bonito",
  "El Saucedal",
  "La Concordia",
  "La Esperanza",
  "La María",
  "Llano Grande",
  "Maria Paz",
  "Pinar del Río",
  "Pinar del Río II",
  "San Carlos",
  "Villa de la Loma",
  "Villa de la Loma II Sector Mz. 31 y 32",
  "Villa de la Torre",
  "Villa Emilia, Amparo II Sector",
  "Villa Nelly",
  "Villa Nelly - Los Alisos",
  "Vista Hermosa (Portal Patio Bonito)",
  "Alfonso López Michelsen",
  "Britalita",
  "Calarcá",
  "Calarcá II",
  "Casa Blanca Sur",
  "Class",
  "El Almenar",
  "El Carmelo",
  "Gran Britalia",
  "La Esperanza",
  "La Maria",
  "Pastranita I Sector",
  "Santa Maria de Kennedy",
  "Vegas de Santa Ana",
  "Villa Andrea",
  "Villa Anita",
  "Villa Clemencia Sector Villa Grata",
  "Villa Nelly",
  "Villa Zarzamora",
  "Villas de Kennedy",
  "Altamar",
  "Avenida Cundinamarca",
  "Barranquillita",
  "Bellavista",
  "Campo Hermoso",
  "Ciudad de Cali",
  "Ciudad Galán",
  "Ciudad Granada",
  "Dindalito",
  "El Paraíso",
  "El Patio III Sector",
  "El Rosario",
  "El Rosario III",
  "El Saucedal",
  "El Triunfo",
  "Horizonte Occidente",
  "Jazmín Occidental",
  "La Rivera",
  "La Rivera II Sector",
  "Las Acacias",
  "Las Brisas",
  "Las Palmeras",
  "Las Palmitas",
  "Las Vegas",
  "Los Almendros",
  "Nueva Esperanza",
  "Parques del Tintal (Campo Alegre Londoño)",
  "Patio Bonito I",
  "Patio Bonito II Sector",
  "Puente La Vega",
  "San Dionisio",
  "San Marino",
  "Santa Mónica",
  "Sector II Altamar",
  "Sumapaz",
  "Tayrona",
  "Tintalito",
  "Tintalito II",
  "Tocarema",
  "Urb. Dindalito I Etapa",
  "Villa Alexandra",
  "Villa Andrés",
  "Villa Hermosa",
  "Villa Mendoza",
  "Las Margaritas",
  "Osorio XI",
  "Osorio XII",
  "Aloha",
  "Alsacia",
  "Urbanización Castilla Reservado",
  "Urbanización Catania",
  "Urbanización Catania (Castilla)",
  "Urbanización Pio XII",
  "Urbanización Pio XII",
  "Valladolid",
  "Villa Alsacia"
];

var barriosFontibon = [
  "Arabia",
  "Atahualpa",
  "Bahía Solano",
  "Batavia",
  "Belén",
  "Betania",
  "Centenario",
  "Cofradía",
  "El Carmen",
  "El Cuco",
  "El Cuco La Estancia",
  "El Guadual",
  "El Jordán",
  "El Pedregal",
  "El Rubí",
  "El Tapete",
  "Ferrocaja",
  "Flandes",
  "Fontibón Centro",
  "La Cabaña",
  "La Giralda",
  "La Laguna",
  "Las Flores",
  "Palestina",
  "Rincón Santo",
  "Salamanca",
  "San Pedro Los Robles",
  "Torcoroma",
  "Unidad Residencial Montecarlo",
  "Valle Verde",
  "Veracruz",
  "Versalles",
  "Villa Beatriz",
  "Villa Carmenza",
  "Villemar",
  "Ambalema",
  "Bohíos",
  "El Portal",
  "El Refugio",
  "El Triángulo",
  "Florencia",
  "Jericó",
  "La Aldea",
  "La Estación",
  "La Perla",
  "La Zelfita",
  "Las Brisas",
  "Prados de La Alameda",
  "Puente Grande",
  "San Pablo",
  "Selva Dorada",
  "Villa Liliana",
  "Moravia",
  "Kazandra",
  "Carlos Lleras",
  "La Esperanza Norte",
  "Salitre Nor - Occidental",
  "Sausalito",
  "El Franco",
  "Granjas de Techo",
  "Montevideo",
  "Paraíso Bavaria",
  "Visión Semindustrial",
  "Bosque de Modelia",
  "Baleares",
  "Capellana",
  "El Rincón de Modelia",
  "Fuentes del Dorado",
  "La Esperanza",
  "Mallorca",
  "Modelia",
  "Modelia Occidental",
  "Santa Cecilia",
  "Tarragona",
  "El Jardín",
  "La Rosita",
  "Puerta de Teja",
  "San José",
  "Veracruz",
  "El Bogotano"
];

var barriosSuba = [
  "La Academia",
  "Conejera",
  "Guaymaral",
  "Gibraltar",
  "Guicani",
  "Mirandela",
  "Nueva Zelanda",
  "Oikos",
  "San Felipe",
  "San Jose de Bavaria",
  "Santa Catalina",
  "Tejares del Norte",
  "Villa Nova",
  "Villa del Prado",
  "Villa Lucy",
  "Britalia",
  "Britalia San Diego",
  "Calima Norte",
  "Cantagallo",
  "Cantalejo",
  "El Paraiso de los 12 Apostoles",
  "Gilmar",
  "Granada Norte",
  "Granjas de Namur",
  "La Chocita",
  "Los Eliseos",
  "Pijao de Oro",
  "Portales del Norte",
  "San Ciprano",
  "Villa Delia",
  "Villa Delia-Britalia Norte",
  "Vista Bella",
  "Alcala",
  "Atabanza",
  "Bernal y Forero",
  "Cacigua",
  "Canodromo",
  "La Sultana",
  "Libertadores",
  "Los Prados de la Sultana",
  "Madeira",
  "Manuela Arluz",
  "Mazuren",
  "Niza IX",
  "Prado Pinzon",
  "Prado Sur",
  "Prado Veraniego",
  "Prado Veraniego Norte",
  "Prado Veraniego Sur",
  "San Jose de Spring",
  "San Jose del Prado",
  "Santa Helena",
  "Tarragona",
  "Tierra Linda",
  "Victoria Norte",
  "Villa Morena",
  "Alhambra",
  "Batan",
  "El Recreo de los Frailes",
  "Estoril",
  "Larco",
  "Malibu",
  "Monaco",
  "Pasadena",
  "Puente Largo",
  "Atenas",
  "Calatayud",
  "Prados del Salitre",
  "Rincon de Santa Ines",
  "San Francisco",
  "Santa Isabel",
  "Suba Centro",
  "Tuna Alta",
  "Tuna Baja",
  "Turingia",
  "Vereda Suba Cerros",
  "Villa del Campo",
  "Villa Esperanza",
  "Villa Hermosa",
  "Villa Susana",
  "Alcaparros",
  "Almirante Colon",
  "Almonacid",
  "Altos de Chozica",
  "Altos de la Esperanza",
  "Amberes",
  "Antonio Granados",
  "Arrayanes",
  "Aures",
  "Bochalema",
  "Catalina",
  "Ciudad Hunza",
  "Costa Azul",
  "Costa Rica",
  "El Aguinaldo",
  "El Arenal",
  "El Carmen",
  "El Cerezo",
  "El Condor",
  "El Jordan La Esperanza",
  "El Poa",
  "El Naranjal",
  "El Ocal",
  "El Palmar",
  "El Portico",
  "El Progreso",
  "El Refugio de Suba",
  "El Rubi"
];

var barriosBarriosUnidos = [
  "Villa Calazanz",
  "Conjunto Residencial Calla 100",
  "Entrerríos",
  "Escuela Militar",
  "La Castellana",
  "La Patria",
  "Los Andes",
  "Rionegro",
  "Urbanización San Martín",
  "Vizcaya",
  "12 de Octubre",
  "Jorge Eliecer Gaitán",
  "José Joaquín Vargas",
  "La Libertad",
  "Entre Ríos",
  "Rincón del Salitre",
  "El Labrador",
  "Metropolis",
  "Popular Modelo",
  "San Fernando",
  "San Fernando Occidental",
  "San Miguel",
  "Simón Bolívar",
  "11 de Noviembre",
  "Alcázares Norte",
  "Baquero",
  "Benjamín Herrera",
  "Chapinero Noroccidental",
  "Colombia",
  "Concepción Norte",
  "Juan XXIII",
  "La Aurora",
  "La Esperanza",
  "La Merced Norte",
  "La Paz",
  "Los Alcázares",
  "Muequeta",
  "Polo Club",
  "Quinta Mutis",
  "Rafael Uribe",
  "San Felipe",
  "Santa Sofía",
  "Siete de Agosto",
  "El Rosario"
];

var barriosTeusaquillo = [
  "Banco Central",
  "Alfonso López",
  "Belalcázar",
  "Campin",
  "Chapinero Occidental",
  "Galerías",
  "San Luis",
  "Armenia",
  "Estrella",
  "La Magdalena",
  "La Soledad",
  "Las Américas",
  "Palermo",
  "Quesada",
  "Santa Teresita",
  "Teusaquillo",
  "El Salitre",
  "La Esmeralda",
  "Nicolás de Federmán",
  "Nuevo Campin",
  "Pablo VI",
  "Quirinal",
  "Rafael Núñez",
  "Acevedo Tejada",
  "Cama Vieja",
  "Centro Nariño",
  "El Recuerdo",
  "Gran América",
  "Quinta Paredes",
  "Ciudad Salitre Sur-Oriental",
  "Ciudad Salitre Nor-Oriental"
];

var barriosMartires = [
  "Eduardo Santos",
  "El Progreso",
  "El Vergel",
  "Santa Isabel",
  "Veraguas",
  "Colseguros",
  "El Listón",
  "Florida",
  "La Estanzuela",
  "La Favorita",
  "La Pepita",
  "La Sabana",
  "Paloquemao",
  "Panamericano",
  "Ricaurte",
  "Samper Mendoza",
  "San Fason",
  "San Victorino",
  "Santa Fe",
  "Usatamá",
  "Voto Nacional"
];

var barriosAntonioNarino = [
  "Caracas",
  "Ciudad Berna",
  "Ciudad Jardín Sur",
  "La Hortúa",
  "Policarpa",
  "Sevilla",
  "Eduardo Frei",
  "La Fragua",
  "La Fragueta",
  "Luna Park",
  "Restrepo",
  "Restrepo Occidental",
  "San Antonio",
  "San Jorge Central II Sector",
  "Santander",
  "Santander Sur",
  "SENA",
  "Villa Mayor Oriental"
];

var barriosPuenteAranda = [
  "La Guaca",
  "Bochica",
  "Carabelas",
  "Ciudad Montes",
  "El Sol",
  "Jazmín",
  "Jorge Gaitán Cortes",
  "La Asunción",
  "La Camelia",
  "Los Comuneros",
  "Ponderosa",
  "Primavera",
  "Remanso",
  "San Eusebio",
  "Santa Matilde",
  "Tibana",
  "Torremolinos",
  "Villa Inés",
  "Alquería",
  "Autopista Muzu",
  "La Coruña",
  "Los Sauces",
  "Muzu",
  "Ospina Pérez",
  "Santa Rita",
  "Tejar",
  "Villa del Rosario",
  "Villa Sonia",
  "Barcelona",
  "Brisas del Galán",
  "Brasilia",
  "Camelia Sur",
  "Colón",
  "Galán",
  "La Pradera",
  "La Trinidad",
  "El Arpa y la Lira",
  "Milenta",
  "San Francisco",
  "San Gabriel",
  "San Rafael",
  "San Rafael Industrial",
  "Cundinamarca",
  "El Ejido",
  "Gorgonzola",
  "Industrial Centenario",
  "La Florida Occidental",
  "Los Ejidos",
  "Pensilvania",
  "Batallón Caldas",
  "Centro Industrial",
  "Ortezal",
  "Puente Aranda",
  "Salazar Gómez"
];

var barriosCandelaria = [
  "Nueva Santa Fe de Bogotá",
  "Belén",
  "Candelaria",
  "Centro Administrativo",
  "La Catedral",
  "La Concordia",
  "Las Aguas",
  "Santa Bárbara"
];

var barriosRafaelUribe = [
  "Gustavo Restrepo",
  "Hospital San Carlos",
  "San José Sur",
  "San Luis",
  "Sociego Sur",
  "Bravo Páez",
  "Centenario",
  "Claret",
  "Inglés",
  "Libertador",
  "Murillo Toro",
  "Olaya",
  "Quiroga",
  "Quiroga Central",
  "Quiroga Sur",
  "Santa Lucía",
  "Santiago Pérez",
  "Villa Mayor",
  "Carmen del Sol",
  "Bravo Páez",
  "Carmen del Sol I Sector",
  "Centenario",
  "Claret",
  "El Recuerdo San Jorge Alto",
  "El Triunfo",
  "El Triunfo Sur",
  "Granjas San Pablo",
  "Granjas Santa Sofía",
  "Inglés",
  "La Resurrección",
  "Las Colinas",
  "Las Lomas",
  "Libertador",
  "Luis López de Mesa",
  "Marco Fidel Suárez",
  "Marco Fidel Suárez La Cañada",
  "Murillo Toro",
  "Olaya",
  "Resurrección",
  "Río de Janeiro El Pesebre",
  "San Jorge Sur",
  "San Jorge-Gloria Gaitán",
  "San Juanito",
  "San Justino",
  "Santa Lucía",
  "Santiago Pérez",
  "Terrazas de San Jorge",
  "Villa Mayor",
  "Antonio Morales Galavis",
  "Arboleda Sur",
  "Callejón Santa Bárbara",
  "Cerros de Oriente",
  "Danubio del Sur",
  "El Consuelo",
  "El Mirador Sur I y II",
  "El Pensil",
  "El Playón",
  "El Puerto La Loma de San Carlos",
  "El Rosal",
  "El Socorro",
  "Govaroba",
  "Govaroba II",
  "Guiparma",
  "La Esperanza",
  "La Merced Sur",
  "La Merced Sur San Ignacio",
  "La Picota",
  "La Playa",
  "La Providencia Media",
  "Los Chircales",
  "Los Molinos",
  "Marco Fidel Suárez",
  "Marruecos",
  "Mirador de Marrocos",
  "Mirador Los Molinos II Sector",
  "Molinos del Sur",
  "Nuevo Pensilvania Sur",
  "Playón La Playita III",
  "Pradera Sur",
  "Príncipe de Bochica",
  "Puente de San Bernardo",
  "Puerto Rico",
  "Socorro III Sector",
  "Villa del Sol",
  "Villa Gladys",
  "Villa Morales",
  "Villas del Recuerdo",
  "Antonio Morales II",
  "Buenos Aires La Esperanza Parc. La Fisc.",
  "Diana Turbay",
  "Diana Turbay Arrayanes",
  "Diana Turbay Cultivos",
  "El Bosque de los Molinos (San Justino)",
  "El Portal",
  "El Portal II Sector",
  "La Esperanza Alta",
  "La Marqueza",
  "La Paz",
  "La Paz (El Cebadal)",
  "La Picota Oriental",
  "La Reconquista",
  "La Reconquista (Villa Esther)",
  "Los Arrayanes II",
  "Los Puentes",
  "Palermo Sur",
  "Palermo Sur - Brisas",
  "Palermo Sur (El Triángulo)",
  "Palermo Sur Los Arrayanes",
  "Palermo Sur Oswaldo Gómez",
  "Palermo Sur San Marcos",
  "Palermo Sur Santa Fonseca",
  "San Agustín",
  "San Agustín II Sector",
  "Serranía - Sector Cultivos"
];

export function cargarBarrios(idLocalidad) {
  var localidades = document.getElementById(idLocalidad);
  if(localidades.id == "localidades"){
    var barrios = document.getElementById("barrios");
  } else{
    var barrios = document.getElementById("barriose");
  }

    var seleccionLocalidad = localidades.value;

    // Limpiar el select de barrios antes de cargar nuevos elementos
    barrios.innerHTML = "";


    

    if (seleccionLocalidad === "Usaquén") {
      

      for (var i = 0; i < barriosUsaquen.length; i++) {
        var option = document.createElement("option");
        option.text = barriosUsaquen[i];
        option.value = barriosUsaquen[i].toLowerCase();
        barrios.add(option);
      }
    }else if (seleccionLocalidad === "Chapinero") {
        
    
        for (var i = 0; i < barriosChapinero.length; i++) {
          var option = document.createElement("option");
          option.text = barriosChapinero[i];
          option.value = barriosChapinero[i].toLowerCase();
          barrios.add(option);
        }
      }else if (seleccionLocalidad === "Santa Fe") {
        
    
        for (var i = 0; i < barriosSantaFe.length; i++) {
          var option = document.createElement("option");
          option.text = barriosSantaFe[i];
          option.value = barriosSantaFe[i].toLowerCase();
          barrios.add(option);
        }
      }else if (seleccionLocalidad === "San Cristóbal") {
        
        for (var i = 0; i < barriosSanCristobal.length; i++) {
          var option = document.createElement("option");
          option.text = barriosSanCristobal[i];
          option.value = barriosSanCristobal[i].toLowerCase();
          barrios.add(option);
        }
      }else if (seleccionLocalidad === "Usme") {
       
        for (var i = 0; i < barriosUsme.length; i++) {
          var option = document.createElement("option");
          option.text = barriosUsme[i];
          option.value = barriosUsme[i].toLowerCase();
          barrios.add(option);
        }
      }else if (seleccionLocalidad === "Tunjuelito") {
        
        for (var i = 0; i < barriosTunjuelito.length; i++) {
          var option = document.createElement("option");
          option.text = barriosTunjuelito[i];
          option.value = barriosTunjuelito[i].toLowerCase();
          barrios.add(option);
        }
      }else if (seleccionLocalidad === "Bosa") {
        
    
        for (var i = 0; i < barriosBosa.length; i++) {
          var option = document.createElement("option");
          option.text = barriosBosa[i];
          option.value = barriosBosa[i].toLowerCase();
          barrios.add(option);
        }
      }else if (seleccionLocalidad === "Kennedy") {
        
    
        for (var i = 0; i < barriosKennedy.length; i++) {
          var option = document.createElement("option");
          option.text = barriosKennedy[i];
          option.value = barriosKennedy[i].toLowerCase();
          barrios.add(option);
        }
      }else if(seleccionLocalidad === "Fontibón") {
          
      
          for (var i = 0; i < barriosFontibon.length; i++) {
            var option = document.createElement("option");
            option.text = barriosFontibon[i];
            option.value = barriosFontibon[i].toLowerCase();
            barrios.add(option);
          }
        }else if (seleccionLocalidad === "Suba") {
          
      
          for (var i = 0; i < barriosSuba.length; i++) {
            var option = document.createElement("option");
            option.text = barriosSuba[i];
            option.value = barriosSuba[i].toLowerCase();
            barrios.add(option);
          }
        }else if (seleccionLocalidad === "Barrios Unidos") {
          
      
          for (var i = 0; i < barriosBarriosUnidos.length; i++) {
            var option = document.createElement("option");
            option.text = barriosBarriosUnidos[i];
            option.value = barriosBarriosUnidos[i].toLowerCase();
            barrios.add(option);
          }
        }else if (seleccionLocalidad === "Teusaquillo") {
          
      
          for (var i = 0; i < barriosTeusaquillo.length; i++) {
            var option = document.createElement("option");
            option.text = barriosTeusaquillo[i];
            option.value = barriosTeusaquillo[i].toLowerCase();
            barrios.add(option);
          }
        } else if (seleccionLocalidad === "Los Mártires") {
          
      
          for (var i = 0; i < barriosMartires.length; i++) {
            var option = document.createElement("option");
            option.text = barriosMartires[i];
            option.value = barriosMartires[i].toLowerCase();
            barrios.add(option);
          }
        }else if (seleccionLocalidad === "Antonio Nariño") {
          
      
          for (var i = 0; i < barriosAntonioNarino.length; i++) {
            var option = document.createElement("option");
            option.text = barriosAntonioNarino[i];
            option.value = barriosAntonioNarino[i].toLowerCase();
            barrios.add(option);
          }
        }else if (seleccionLocalidad === "Puente Aranda") {
          
      
          for (var i = 0; i < barriosPuenteAranda.length; i++) {
            var option = document.createElement("option");
            option.text = barriosPuenteAranda[i];
            option.value = barriosPuenteAranda[i].toLowerCase();
            barrios.add(option);
          }
        }else if (seleccionLocalidad === "La Candelaria") {
          
      
          for (var i = 0; i < barriosCandelaria.length; i++) {
            var option = document.createElement("option");
            option.text = barriosCandelaria[i];
            option.value = barriosCandelaria[i].toLowerCase();
            barrios.add(option);
          }
        }else if (seleccionLocalidad === "Rafael Uribe") {
          
      
          for (var i = 0; i < barriosRafaelUribe.length; i++) {
            var option = document.createElement("option");
            option.text = barriosRafaelUribe[i];
            option.value = barriosRafaelUribe[i].toLowerCase() ;
            barrios.add(option);
          }
        }else if (seleccionLocalidad === "Ciudad Bolívar") {
          
      
          // Cargar los barrios de Ciudad Bolívar
          for (var i = 0; i < barriosCiudadBolivar.length; i++) {
            var option = document.createElement("option");
            option.text = barriosCiudadBolivar[i];
            option.value = barriosCiudadBolivar[i].toLowerCase() ;

            barrios.add(option);
          }

        }else if (seleccionLocalidad === "Engativá") {
         
      
          for (var i = 0; i < barriosEngativa.length; i++) {
            var option = document.createElement("option");
            option.text = barriosEngativa[i];
            option.value = barriosEngativa[i].toLowerCase() ;
            barrios.add(option);
          }

          
        }

        
}




   export function listaBarrios(){
    
  return {barriosAntonioNarino,barriosBarriosUnidos, barriosBosa, barriosCandelaria, 
    barriosChapinero, barriosCiudadBolivar, barriosEngativa, barriosFontibon, barriosKennedy, 
    barriosMartires, barriosMartires, barriosPuenteAranda, barriosRafaelUribe, barriosSanCristobal, 
    barriosSantaFe, barriosSuba, barriosTeusaquillo, barriosTunjuelito, barriosUsaquen, barriosUsme}
  }







//funcion del mapa

/*

var latitudInput;
var longitudInput;
var map;

function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;

        mostrarMapa(latitud, longitud);
      },
      function (error) {
        console.log(error);
        mostrarUbicacionManual();
      }
    );
  } else {
    console.log("Geolocalización no soportada");
    mostrarUbicacionManual();
  }
}

function mostrarMapa(latitud, longitud) {
  latitudInput.value = latitud;
  longitudInput.value = longitud;

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitud, lng: longitud },
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position: { lat: latitud, lng: longitud },
    map: map,
  });

  // Mostrar el mapa y ocultar la ubicación manual
  document.getElementById("map").style.display = "block";
  document.getElementById("ubicacionManual").style.display = "none";
}

function mostrarUbicacionManual() {
  // Ocultar el mapa y mostrar la ubicación manual
  document.getElementById("map").style.display = "none";
  document.getElementById("ubicacionManual").style.display = "block";
}

function initMap() {
  latitudInput = document.getElementById("latitud");
  longitudInput = document.getElementById("longitud");
}*/




