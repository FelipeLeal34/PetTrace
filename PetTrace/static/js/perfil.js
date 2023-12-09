//----------------------------**Esta funcion es para editar la descripcion del perfil**---------------------------------

// Esta función muestra el formulario y oculta el enlace
function mostrarFormulario(campo) {
  alert("Editando campo: " + campo);

  // Ocultar todos los formularios de edición
  var formularios = document.querySelectorAll('.formulario-editar');
  formularios.forEach(function(formulario) {
      formulario.style.display = 'none';
  });

  // Mostrar el formulario específico
  var formularioEditar = document.getElementById("formulario-editar-" + campo);
  if (formularioEditar) {
      formularioEditar.style.display = "block";
  }
}

function enviarFormulario(campo) {
  var nuevoValor = document.getElementById("input-" + campo).value;

  var formData = new FormData();
  formData.append("nuevo_valor", nuevoValor);
  formData.append("campo_editar", campo);

  var xhr = new XMLHttpRequest();
  var url = "/editar-usuario/";
  xhr.open("POST", url, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var respuesta = JSON.parse(xhr.responseText);
          if (respuesta.success) {
              // Actualizar el texto o valor según el campo editado
              if (campo === "descripcion") {
                  document.getElementById("texto-descripcion").innerHTML = respuesta.nuevo_valor;
              } else if (campo === "telefono") {
                  document.getElementById("telefono").innerHTML = "Telefono: " + respuesta.nuevo_valor;
              } else if (campo === "correo") {
                  document.getElementById("correo").innerHTML = "Correo: " + respuesta.nuevo_valor;
              } else if (campo === "nombre_usuario") {
                  document.getElementById("nombre-usuario").innerHTML = "Nombre de usuario: " + respuesta.nuevo_valor;
              } else if (campo === "localidad") {
                  document.getElementById("localidad").innerHTML = "Ubicación: " + respuesta.nuevo_valor;
              }

              // Ocultar el formulario después de la edición
              var formularioEditar = document.getElementById("formulario-editar-" + campo);
              if (formularioEditar) {
                  formularioEditar.style.display = "none";
              }

              // Mostrar el enlace de editar nuevamente
              var enlaceEditar = document.getElementById("enlace-editar-" + campo);
              if (enlaceEditar) {
                  enlaceEditar.style.display = "inline-flex";
              }
          } else {
              console.log(respuesta.error);
          }
      }
  };
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
