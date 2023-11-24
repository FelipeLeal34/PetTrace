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
              document.getElementById("enlace-editar").style.display = "block";
          } else {
              // Si la respuesta tiene un error, lo mostramos en la consola
              console.log(respuesta.error);
          }
      }
  };
  // Enviamos la petición con los datos del formulario
  xhr.send(formData);
}


//----------------------------**Esto es para hacer el recortador de la imagen**---------------------------------
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
    recuadro.style.cssText = "position: absolute; display: flex";
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
      cropper = new Cropper(canvas, {
        aspectRatio: 1, // Relación de aspecto fija a 1 (cuadrado)
        viewMode: 1, // Evitar que la imagen se salga del contenedor
        autoCropArea: 0.8, // Área inicial del recorte (80% del contenedor)
        ready: function() {
          // Crear un elemento de imagen
          const image = new Image();
          
          // Cuando la imagen se cargue, dibujarla en el canvas con Cropper.js y mostrar el modal del recortador
          image.onload = function() {
            // Destruir la instancia anterior de Cropper.js si existe
            if (cropper) {
              cropper.destroy();
            }
            // Inicializar una nueva instancia de Cropper.js con la nueva imagen y las mismas opciones
            cropper = new Cropper(image, {
              aspectRatio: 1,
              viewMode: 1,
              autoCropArea: 0.8,
              ready: function() {
                document.getElementById("modal-cropper").style.display = "block";
              },
              crop: function(event) {
                // Cuando se recorte la imagen, obtener la imagen recortada y asignarla al atributo src del elemento img con id "imgperfil-modal"
                let croppedImage = cropper.getCroppedCanvas().toDataURL();
                document.getElementById("imgperfil-modal").src = croppedImage;
                
                // Revocar el objeto URL cuando ya no se necesite(no sirve)
                //URL.revokeObjectURL(url);
              }
            });
            // Reemplazar la imagen en el canvas con la nueva imagen
            cropper.replace(image.src); 
          };

          // Mostrar la URL para depuración
          console.log("URL de la imagen:", url);
          
          // Establecer la fuente de la imagen en base al objeto URL
          image.src = url;

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




const labelApartados = document.querySelectorAll(".apartados-a-perfil");
const publicaciones = document.getElementById("publicaciones");
let apartadoActual = 1;
let numeroApartados = 4;
let anchoApartado = publicaciones.offsetWidth;
let $contenedor = document.querySelector("#apartados-contenedor");


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
  actualizarCarrusel(); // Actualizar el carrusel con el nuevo apartado
}

function actualizarCarrusel() {
  let desplazamiento = -anchoApartado * (apartadoActual - 1);
  $contenedor.style.transform = `translateX(${desplazamiento}px)`;
  
}




/* publis.forEach( publi => {
	publi.addEventListener("click",e =>{


		
		var idpubli = e.target.closest(".publi").getAttribute("data-id");
		

		const url = `/informacionPubli/${idpubli}/`

		

		fetch(url,{
			method: "GET",
		})
		.then(response => response.json())
		.then(publicacion => {


			// ---------CONSULTA PARA LA VENTANA MODELO------------------


			document.getElementById("img2m").src = publicacion.data.mascota.img2;
			document.getElementById("img3m").src = publicacion.data.mascota.img3;
			document.getElementById("img4m").src = publicacion.data.mascota.img4;
			document.getElementById("img5m").src = publicacion.data.mascota.img5;

			
			document.getElementById("nombremasm").textContent = publicacion.data.mascota.nombremas;
			document.getElementById("especiemasm").textContent = publicacion.data.mascota.especiemas;
			document.getElementById("razamasm").textContent = publicacion.data.mascota.razamas;
			document.getElementById("tamañomasm").textContent = publicacion.data.mascota.tamañomas;
			document.getElementById("sexomasm").textContent = publicacion.data.mascota.sexomas;
			document.getElementById("colormasm").textContent = publicacion.data.mascota.colormas;
			document.getElementById("edadmasm").textContent = publicacion.data.mascota.edadmas;
			document.getElementById("marcasmasm").textContent = publicacion.data.mascota.marcasmas;
			document.getElementById("accesoriosmasm").textContent = publicacion.data.mascota.accesoriosmas;
			document.getElementById("enfermedadesmasm").textContent = publicacion.data.estado_salud.enfermedadesmas;
			document.getElementById("esterilizacionmasm").textContent = publicacion.data.estado_salud.esterilizacionmas;
			document.getElementById("medicamentosmasm").textContent = publicacion.data.estado_salud.medicamentosmas;
			document.getElementById("vacunasmasm").textContent = publicacion.data.estado_salud.vacunasmas;
			document.getElementById("localidadExtraviom").textContent = publicacion.data.publicacion.localidadExtravio;
			document.getElementById("barrioExtraviom").textContent = publicacion.data.publicacion.barrioExtravio;

			 let fechaExtraviom = new Date(publicacion.data.publicacion.fechaExtravio)

			const configuracionHora = {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: true,
				timeZone: 'America/Bogota',
			  };

			document.getElementById("fechaExtraviom").textContent = fechaExtraviom.toLocaleString('es-CO',configuracionHora); 
			document.getElementById("fechaExtraviom").textContent = publicacion.data.publicacion.fechaExtravio; 
			document.getElementById("horaExtraviom").textContent = publicacion.data.publicacion.horaExtravio; 

			document.getElementById("recompensam").textContent = publicacion.data.publicacion.recompensa;
			
			document.getElementById("nombreDueño").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueño").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueño").textContent = publicacion.data.usuario.email;
			
			

		})
		

	//let idpubli = e.target.parentNode.children[0].value;
	
		publiModal.style.display = "flex";
		contenedorPubliModal[3].style.display = "flex";

	

		btnCerrar.addEventListener("click",()=>{
		publiModal.style.display = "none";
	
		contenedorPubliModal[3].style.display = "none";
	
		
		});


	
		
	
});

}); */