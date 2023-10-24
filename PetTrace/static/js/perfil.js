// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function() {

// Obtener la imagen, el recuadro y el modal-content
let imagen = document.getElementById("imgperfil")
let recuadro = document.getElementById("modal1");
let imgcontent = document.getElementById("modal-content");

// Agregar un evento de click a la imagen
imagen.addEventListener("click", function() {

    let opciones = recuadro.querySelector("#opciones")
    
    //Se le da un estilo al recuadro y al div opciones
    recuadro.style.display = "flex";
    opciones.style.cssText = "display: flex; flex-direction: column; justify-content: center";

    //Si se le da click al primer a (ver imagen), se muestra el imgcontent que contiene la imagen de perfil
  // Obtener el primer elemento de la clase "categoria-filtro" (ver imagen)
  let verimg = document.getElementsByClassName("categoria-filtro")[0];
  verimg.addEventListener("click", function() {
        recuadro.style.display = "none";
        imgcontent.style.display = "flex";
  });
  

  
// Obtener el segundo elemento de la clase "categoria-filtro" (subir img)
let subir = document.getElementsByClassName("categoria-filtro")[1];

// Obtener el input de tipo file que está oculto
let input = subir.getElementsByTagName("input")[0];

// Elemento de la imagen que se recortará
let canvas = document.getElementById("canvas-cropper");

// Obtener el contexto 2D del canvas
let context = canvas.getContext("2d");

// Crear una variable para almacenar la instancia de Cropper.js 
let cropper;

// Añadir un listener al evento de clic en el div
subir.addEventListener("click", function() {
  // Disparar el evento de clic en el input
  input.click();
});

// Validar el archivo seleccionado cuando cambia el input
input.addEventListener("change", function() {
  const file = input.files[0];
  if (file) {
    const fileType = file.type;
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    
    // Verificar si el tipo de archivo es una imagen permitida
    if (allowedTypes.includes(fileType)) {
      // El archivo es una imagen válida, puedes continuar con la carga
      console.log("Imagen válida: " + file.name);

      // Crear un objeto URL para leer la imagen seleccionada
      let url = URL.createObjectURL(file);

      // Crear una instancia de Cropper.js pasando el canvas y algunas opciones
      // Crear una instancia de Cropper.js pasando el canvas y algunas opciones
// Crear una instancia de Cropper.js pasando el canvas y algunas opciones
cropper = new Cropper(canvas, {
  aspectRatio: 1, // Relación de aspecto fija a 1 (cuadrado)
  viewMode: 1, // Evitar que la imagen se salga del contenedor
  autoCropArea: 0.8, // Área inicial del recorte (80% del contenedor)
  ready: function() {
    // Crear un elemento de imagen
    const image = new Image();
    
    // Cuando la imagen se cargue, dibujarla en el canvas con Cropper.js y mostrar el modal del recortador
    image.onload = function() {
      cropper.replace(image.src);
      document.getElementById("modal-cropper").style.display = "block";
    };

    // Mostrar la URL para depuración
    console.log("URL de la imagen:", url);
    
    // Establecer la fuente de la imagen en base al objeto URL
    image.src = url;

  },
  crop: function(event) {
    // Cuando se recorte la imagen, obtener la imagen recortada y asignarla al atributo src del elemento img con id "imgperfil-modal"
    let croppedImage = cropper.getCroppedCanvas().toDataURL();
    document.getElementById("imgperfil-modal").src = croppedImage;
    
    // Revocar el objeto URL cuando ya no se necesite(no sirve)
    URL.revokeObjectURL(url);
  }
  
});
      
    } else {
      // El archivo no es una imagen válida, mostrar un mensaje de error
      alert("Por favor, selecciona un archivo de imagen válido (JPEG, PNG, GIF).");
      input.value = ""; // Limpiar la selección
    }
  }
});

// Crear una variable global para almacenar la imagen de perfil original 
let imgPerfilOriginal = document.getElementById("imgperfil-modal").src;

// Obtener el primer elemento de la clase "categoria-filtro" (ver img)
let ver = document.getElementsByClassName("categoria-filtro")[0];

// Añadir un listener al evento de clic en el div
ver.addEventListener("click", function() {
  // Asignar la imagen de perfil original al atributo src del elemento img con id "imgperfil-modal"
  document.getElementById("imgperfil-modal").src = imgPerfilOriginal;
});




// Obtener los botones de cerrar por sus id
let cerrar1 = document.getElementById("close1");
let cerrar2 = document.getElementById("close2");

//funcion para ocultar el menu desplegado
cerrar1.addEventListener("click", function() {
  recuadro.style.display = "none";
});

//funcion para ocultar vista de la imagen de perfil completa
cerrar2.addEventListener("click", function() {
  imgcontent.style.display = "none";
});


document.addEventListener("click", function(event) {
  // Comprobar si el clic ocurrió fuera del menú
  if (event.target !== recuadro && !recuadro.contains(event.target) && event.target !== imagen) {
    // Cerrar el menú si se hizo clic fuera de él
    recuadro.style.display = "none";
  }
});

});

});