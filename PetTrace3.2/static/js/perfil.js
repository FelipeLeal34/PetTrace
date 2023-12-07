//----------------------------**Esta funcion es para editar la descripcion del perfil**---------------------------------

// Esta función muestra el formulario y oculta el enlace
function mostrarFormulario() {
  document.getElementById("enlace-editar").style.display = "none";
  document.getElementById("formulario-editar").style.display = "block";
}

// Esta función envía el formulario al servidor usando AJAX
function enviarFormulario() {
  // Obtenemos el valor del input
  var descripcion = document.getElementById("input-descripcion").value;
  // Creamos un objeto FormData para enviar los datos del formulario
  var formData = new FormData();
  formData.append("descripcion", descripcion);
  // Creamos un objeto XMLHttpRequest para hacer la petición
  var xhr = new XMLHttpRequest();
  // Definimos la URL de la vista que recibe los datos
  var url = "/editar-descripcion/";
  // Abrimos la conexión con el método POST
  xhr.open("POST", url, true);
  // Definimos la función que se ejecutará cuando la petición cambie de estado
  xhr.onreadystatechange = function() {
      // Si la petición se completó con éxito
      if (xhr.readyState == 4 && xhr.status == 200) {
          // Parseamos la respuesta JSON
          var respuesta = JSON.parse(xhr.responseText);
          // Si la respuesta tiene el atributo success
          if (respuesta.success) {
              // Actualizamos el texto de la descripción con el valor devuelto por el servidor
              document.getElementById("texto-descripcion").innerHTML = respuesta.descripcion;
              // Ocultamos el formulario y mostramos el enlace
              document.getElementById("formulario-editar").style.display = "none";
              document.getElementById("enlace-editar").style.display = "inline-flex";
          } else {
              // Si la respuesta tiene un error, lo mostramos en la consola
              console.log(respuesta.error);
          }
      }
  };
  // Enviamos la petición con los datos del formulario
  xhr.send(formData);
}

//----------------------------**Esto es para hacer que cambie la imagen de perfil**---------------------------------
document.addEventListener("DOMContentLoaded", function() {
  // Obtener la imagen, el recuadro y el modal-content
  // Obtener el elemento img con id "imgperfil"
  let imagen = document.getElementById("imgperfil");
  let recuadro = document.getElementById("modal1");
  let imgcontent = document.getElementById("modal-content");

  // Agregar un evento de clic a la imagen
  imagen.addEventListener("click", function() {

      let opciones = recuadro.querySelector("#opciones")

      //Se le da un estilo al recuadro y al div opciones
      recuadro.style.cssText = "position: absolute; display: flex";
      opciones.style.cssText = "display: flex; flex-direction: column; justify-content: center; text-align: center;";

      // Si se le da clic al primer a (ver imagen), se muestra el imgcontent que contiene la imagen de perfil
      // Obtener el primer elemento de la clase "categoria-filtro" (ver imagen)
      let verimg = document.getElementsByClassName("categoria-filtro")[0];
      verimg.addEventListener("click", function() {
          recuadro.style.display = "none";
          imgcontent.style.display = "flex";
      });

  });

// Obtener el segundo elemento de la clase "categoria-filtro" (subir img)
let subir = document.getElementsByClassName("categoria-filtro")[1];

// Obtener el formulario y el input de tipo file
let divFormulario = document.getElementById("cont_imgForm");


// Añadir un listener al evento de clic en el div
subir.addEventListener("click", function() {
    // Disparar el evento de clic en el input
    recuadro.style.display = "none";
    divFormulario.style.display = "flex";
});

let labelSubir = document.getElementById("file-input");
let inputSubir = document.getElementById("id_imagen");
let enviar = document.getElementById("btnSubir");


// Función para mostrar la vista previa de la imagen
function mostrarVistaPrevia() {
    var reader = new FileReader();
    reader.onload = function() {
      var output = document.getElementById('imgsubir');
      output.src = reader.result;
    }
    // Asegúrate de que haya un archivo seleccionado antes de leerlo
    if(inputSubir.files.length > 0) {
      reader.readAsDataURL(inputSubir.files[0]);
    }
  }


labelSubir.addEventListener("click", function(){
    inputSubir.click();
    enviar.style.display = "inline-block";
    
});

// Agrega el evento change al input de tipo file para activar la vista previa
inputSubir.addEventListener("change", mostrarVistaPrevia);





  // Obtener los botones de cerrar por sus id
  let cerrar1 = document.getElementById("close1");
  let cerrar2 = document.getElementById("close2");
  let cerrar3 = document.getElementById("close3");
  // Función para ocultar el menú desplegado
  cerrar1.addEventListener("click", function() {
      recuadro.style.display = "none";
  });

  // Función para ocultar vista de la imagen de perfil completa
  cerrar2.addEventListener("click", function() {
      imgcontent.style.display = "none";
  });

    // Función para ocultar vista de la imagen de perfil completa
    cerrar3.addEventListener("click", function() {
        divFormulario.style.display = "none";
    });

  document.addEventListener("click", function(event) {
      // Comprobar si el clic ocurrió fuera del menú
      if (event.target !== recuadro && !recuadro.contains(event.target) && event.target !== imagen) {
          // Cerrar el menú si se hizo clic fuera de él
          recuadro.style.display = "none";
      }
  });

});
