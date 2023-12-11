//----------------------------**Esta funcion es para editar la descripcion del perfil**---------------------------------
function mostrarFormulario(campo) {
    // Ocultar todos los formularios de edición
    var formularios = document.querySelectorAll('.formulario-editar');
    var recuadro = document.getElementById("modal1");
    formularios.forEach(function(formulario) {
        formulario.style.display = 'none';
    });

    // Mostrar el formulario específico y actualizar el título
    var formularioEditar = document.getElementById("formulario-editar-" + campo);
    if (formularioEditar) {
        formularioEditar.style.display = "flex";
        recuadro.style.display = "none";
        

        // Actualizar el título con el nombre del campo
        var titulo = formularioEditar.querySelector('h1');
        titulo.textContent = "Editar " + campo.replace('_', ' ');

        // Pre-cargar el valor actual en el campo de entrada
        var valorActual;
        if (campo === "nombre_usuario") {
            valorActual = document.getElementById("nombre-usuario").textContent.replace("Nombre de usuario: ", "").trim();
        } else if (campo === "descripcion") {
            valorActual = document.getElementById("texto-descripcion").textContent.trim();
        } else if (campo === "telefono") {
            valorActual = document.getElementById("valor-telefono").textContent.trim();
        } else if (campo === "correo") {
            valorActual = document.getElementById("valor-correo").textContent.trim();
        }

        // Establecer el valor actual en el campo de entrada
        var input = formularioEditar.querySelector('.inputInfoUsu');
        if (input) {
            input.value = valorActual;
        }
    }

    // Si el campo es 'ubicacion', mostrar los selects para editar la ubicación
    if (campo === "ubicacion") {
        var selects = document.getElementById('formulario-editar-ubicacion'); 
        if (selects) {
            selects.style.display = 'flex';
        }
    }
}



function enviarFormulario(campo) {
    var nuevoValor = document.getElementById("input-" + campo).value;
    // Validar si el campo es 'correo' y si tiene un formato de correo electrónico válido
    if (campo === "correo" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nuevoValor)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return; // Detener la ejecución de la función si la validación falla
    }

    var formData = new FormData();
    formData.append("nuevo_valor", nuevoValor);
    formData.append("campo_editar", campo);

    // Obtener el valor del csrfmiddlewaretoken
    var csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    formData.append('csrfmiddlewaretoken', csrftoken);

    var xhr = new XMLHttpRequest();
    // Asegúrate de tener el ID del usuario disponible para construir la URL
    var userId = document.querySelector('[name="userId"]').value; // Reemplaza con el método correcto para obtener el ID del usuario
    var url = "/editar-usuario/" + encodeURIComponent(userId) + "/";
    xhr.open("POST", url, true);
    // Añadir el header de CSRF-Token
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
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
                alert("Se editó el " + campo.replace('_', ' ') + " correctamente");
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

function guardarUbicacion() {
    var localidadSeleccionada = document.getElementById('localidadesRegistro').value;
    var barrioSeleccionado = document.getElementById('barriosRegistro').value;

    // Validar que se hayan seleccionado valores en ambos select
    if (!localidadSeleccionada || !barrioSeleccionado) {
        alert("Por favor, seleccione una localidad y un barrio.");
        return;
    }

    // Crear un objeto FormData para enviar los datos
    var formData = new FormData();
    formData.append("campo_editar", "localidad_barrio");
    formData.append("nuevo_valor", localidadSeleccionada + ", " + barrioSeleccionado);

    // Obtener el valor del csrfmiddlewaretoken
    var csrftoken = getCookie('csrftoken');
    formData.append('csrfmiddlewaretoken', csrftoken);

    // Obtener el ID del usuario
    var userId = document.querySelector('[name="userId"]').value; // Reemplaza con el método correcto para obtener el ID del usuario    

    // Crear la petición AJAX
    var xhr = new XMLHttpRequest();
    var url = "/editar-usuario/" + encodeURIComponent(userId) + "/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var respuesta = JSON.parse(xhr.responseText);
            if (respuesta.success) {
                // Actualizar el texto de la ubicación en la página
                var valorUbicacion = document.getElementById('valor-ubicacion');
                if (valorUbicacion) {
                    valorUbicacion.textContent = localidadSeleccionada + ", " + barrioSeleccionado;
                }

                // Ocultar los selects después de guardar
                var selects = document.getElementById('formulario-editar-ubicacion');
                if (selects) {
                    selects.style.display = 'none';
                    alert("Se editó la ubicación correctamente");
                }

                // Mostrar el enlace de editar ubicación nuevamente
                var enlaceEditar = document.getElementById('enlace-editar-ubicacion');
                if (enlaceEditar) {
                    enlaceEditar.style.display = 'inline';
                }
            } else {
                alert("Hubo un error al guardar la ubicación: " + respuesta.error);
            }
        }
    };

    xhr.send(formData);
}

// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

//----------------------------**Esto es para hacer que cambie la imagen de perfil**---------------------------------
document.addEventListener("DOMContentLoaded", function() {
  // Obtener la imagen, el recuadro y el modal-content
  // Obtener el elemento img con id "imgperfil"
  let imagen = document.getElementById("imgperfil");
  let recuadro = document.getElementById("modal1");
  let imgcontent = document.getElementById("modal-content");
  var formularios = document.querySelectorAll('.formulario-editar');

  // Agregar un evento de clic a la imagen
  imagen.addEventListener("click", function() {

      let opciones = recuadro.querySelector("#opciones")

      //Se le da un estilo al recuadro y al div opciones
      recuadro.style.display = "flex";
      opciones.style.cssText = "display: flex; flex-direction: column; justify-content: center; text-align: center;";
      // Si se le da clic al primer a (ver imagen), se muestra el imgcontent que contiene la imagen de perfil

      formularios.forEach(function(formulario) {
        formulario.style.display = 'none';
    });

      let verimg = document.getElementsByClassName("categoria-filtro")[0];
      verimg.addEventListener("click", function() {
          recuadro.style.display = "none";
          imgcontent.style.display = "flex";
          document.body.style.overflow = 'hidden';
      });

  });

// Obtener el segundo elemento de la clase "categoria-filtro" (subir img)
let subir = document.getElementsByClassName("categoria-filtro")[1];

// Obtener el formulario y el input de tipo file
let divFormulario = document.getElementById("cont_imgForm");

if(subir){
    // Añadir un listener al evento de clic en el div
    subir.addEventListener("click", function() {
        // Disparar el evento de clic en el input
        recuadro.style.display = "none";
        divFormulario.style.display = "flex";
        document.body.style.overflow = 'hidden';
    });
}

let labelSubir = document.getElementById("file-input");
let inputSubir = document.getElementById("id_imagen");
let enviar = document.getElementById("btnSubir");

//funcion para que solo acepte imagenes
inputSubir.addEventListener("change", function(event) {
    let archivo = event.target.files[0];
    let tiposPermitidos = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
    
    if (archivo && !tiposPermitidos.includes(archivo.type)) {
      alert("Por favor, seleccione un archivo de imagen válido (PNG, JPEG, GIF, WebP).");
      inputSubir.value = '';
    }
  });

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

if(labelSubir){
    labelSubir.addEventListener("click", function(){
        inputSubir.click();
        enviar.style.display = "inline-block";
        
    });
}
if(inputSubir){
    // Agrega el evento change al input de tipo file para activar la vista previa
    inputSubir.addEventListener("change", mostrarVistaPrevia);
}

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
      document.body.style.overflow = 'auto';
  });

    // Función para ocultar vista de la imagen de perfil completa
    cerrar3.addEventListener("click", function() {
        divFormulario.style.display = "none";
        document.body.style.overflow = 'auto';
    });

    // Seleccionar todos los botones de cierre
    var botonesCerrar = document.querySelectorAll('.close');

    // funcion para cerrar los formularios con el close
    botonesCerrar.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Aquí 'this' se refiere al botón que fue clickeado
            // Subir dos niveles en el DOM para encontrar el div 'formulario-editar'
            var formulario = this.closest('.formulario-editar');
            
            // Ocultar el formulario
            if (formulario) {
                formulario.style.display = 'none';
            }
        });
    });
    // funcion para que se guarde el formulario luego que se presione enter
    var inputs = document.querySelectorAll('.inputInfoUsu');
    inputs.forEach(function(input) {
        input.addEventListener('keypress', function(event) {
            // Verificar si la tecla presionada es Enter
            if (event.key === 'Enter' || event.keyCode === 13) {
                // Obtener el campo correspondiente al input
                var campo = input.id.replace('input-', '');
                // Llamar a la función que guarda el formulario
                enviarFormulario(campo);
            }
        });
    });



    //funcion para cerrar recuadro cuando se de click fuera de este
  document.addEventListener("click", function(event) {
      // Comprobar si el clic ocurrió fuera del menú
      if (event.target !== recuadro && !recuadro.contains(event.target) && event.target !== imagen) {
          // Cerrar el menú si se hizo clic fuera de él
          recuadro.style.display = "none";
      }
  });

})


const labelApartados = document.querySelectorAll(".apartados-a-perfil");
const publicaciones = document.getElementById("publicaciones");
let apartadoActual = 1;
let numeroApartados = 4;
let $contenedor = document.querySelector("#apartados-contenedor");
let anchoApartado = publicaciones.offsetWidth;


window.addEventListener("resize", function() {
  location.reload()
  anchoApartado = publicaciones.offsetWidth;

});


labelApartados.forEach(label => {
  label.addEventListener("click", function(event){
    cambiarApartado(event);
  })
})
// Funciones




function cambiarApartado(event) {
  event.preventDefault(); // Evitar que se recargue la página
  let apartado = event.target.dataset.apartado; // Obtener el número del apartado
  apartadoActual = parseInt(apartado); // Convertirlo a número entero
  actualizarCarrusel(apartadoActual); // Actualizar el carrusel con el nuevo apartado
}

function actualizarCarrusel(apartadoActual) {
  let desplazamiento = -anchoApartado * (apartadoActual - 1);
  $contenedor.style.transform = `translateX(${desplazamiento}px)`;
  
}


