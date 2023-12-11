import { cargarBarrios } from "./cargarBarrios.js";



const publis = document.querySelectorAll(".verPubli");




// FORMULARIO DE EDITAR DE CADA APARTADO

const editarPubliPerdidas = document.getElementById("editarPubliPerdidas");
const editarPubliEncontradas = document.getElementById("editarPubliEncontradas");
const editarPubliAdopciones = document.getElementById("editarPubliAdopciones");





// CONTENEDORES DE VENTANAS MODALES
const contenedorModalPerdidas = document.querySelectorAll(".contenedor-modelo-perdidas");
const contenedorModalEncontradas = document.querySelectorAll(".contenedor-modelo-encontradas");
const contenedorModalAdopciones = document.querySelectorAll(".contenedor-modelo-adopciones");




const contenedorModalEliminar = document.querySelector(".contenedor-modelo-eliminar");

const btnEliminarPubli = document.querySelectorAll(".btnEliminarPubli");
const eliminarPubli = document.querySelector("#eliminarPubli");
const btnAceptar = document.querySelectorAll(".btnAceptar");
const btnCancelar = document.querySelectorAll(".btnCancelar");







//ORDEN VENTANAS MODELO

/* 0 -> publicacion modelo 
1 -> editar publicacion*/





//  ELEMENTOS PARA EDITAR PUBLICACION
const btnEditarPubli = document.querySelectorAll(".btnEditarPubli");
const editarPubli = document.getElementById("editarPubli");


const btnCerrar = document.querySelector("#btn-cerrar");

// icono ṕara cerrar formulario de agregar publicacion 
const btnCerrarModal = document.querySelectorAll(".icon-cancel");
const agregarPubli = document.querySelector("#agregarPubli");
const main = document.getElementsByTagName("main");
var filtrosBox = document.querySelector(".filtros-box");



//	FUNCIONES DE FORMULARIOS

function seleccionarVacunas(especie,idVacunas){


	let vacunasmas = document.getElementById(idVacunas);
	
	
	vacunasmas.innerHTML="";
	
	if(especie == "perro"){
	
		var vacunasPerro = ['moquillo','parvovirosis','pentavalente','coronavirus canino','rabia','tos de perreras']
	
		for(let i = 0 ; i < vacunasPerro.length; i++){
			let option = document.createElement('option');
			option.text = vacunasPerro[i];
			option.value = vacunasPerro[i];
			vacunasmas.add(option);
	
		}
	
	
		
	
	} else{
	
		var vacunasGatos = ['moquillo','trivalente','leucemia','gripe felina','rabia','peritonitis infecciosa felina','clamidiosis felina']
	
		for(let i = 0 ; i < vacunasGatos.length; i++){
			let option = document.createElement('option');
			option.text = vacunasGatos[i];
			option.value = vacunasGatos[i];
			vacunasmas.add(option);
	
		}
	
	
	
	} 
	
	}


	var razasPerros = ['Pastor aleman','Doberman','Boyero de berna','Rottweiler','Akita','Labrador retriever',
						'Golder retriever','Border collie','Siberian husky','Bulldog ingles','Beagle','Criollo'];


	var razasGatos = ['Maine coon','Bengali','Persa','Himalayo','Britanico de pelo corto',
	'egipcio','siames','Fold escoces','Ragdoll','Angora','Criollo'];

	
	
	
	// ------------- RAZAS QUE SE MUESTRAN DE ACUERDO A LA ESPECIE DE LA MASCOTA -----------
	
	
	function seleccionarRaza(especie,idRaza){
	
		
	
		var razamas = document.getElementById(idRaza);
	
		razamas.innerHTML="";
	
	if(especie == "perro"){
	
		
	
		for(let i = 0 ; i < razasPerros.length; i++){
			let option = document.createElement('option');
			option.text = razasPerros[i];
			option.value = razasPerros[i];
			razamas.add(option);
	
		}
	
		
	
	} else{
	
		
	
		for(let i = 0 ; i < razasGatos.length; i++){
			let option = document.createElement('option');
			option.text = razasGatos[i];
			option.value = razasGatos[i];
			razamas.add(option);
	
		}
	
	
	
	} 
	
		
	}


	function mostrarSelect(idSelectVacunas) {
		const selectVacunas = document.getElementById(idSelectVacunas);
		if (selectVacunas.style.display === "none") {
			selectVacunas.style.display = "block";
			setTimeout(() => {
				selectVacunas.style.opacity = "1";
			}, 10); // Retrasamos la aparición para que la animación sea visible
		} else {
			selectVacunas.style.opacity = "0";
			setTimeout(() => {
				selectVacunas.style.display = "none";
			}, 300); // Retrasamos la desaparición para que la animación sea visible
		}
	}
	
	
	
	
	 function seleccionarEspecie(idEspecie){
	
	
		
		let especie = document.getElementById(idEspecie).value;
		
			
		
			if(idEspecie == "especiemaseP"){

				seleccionarVacunas(especie,'vacunasmaseP');
				seleccionarRaza(especie,'razamaseP');

			} else if(idEspecie == "especiemaseE"){

				seleccionarRaza(especie,'razamaseE');

			} else{
				seleccionarVacunas(especie,'vacunasmaseA');
				seleccionarRaza(especie,'razamaseA');
			}
			
		
	
		
	
	}





function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // ¿El nombre de la cookie es el que buscamos?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


const csrftoken = getCookie('csrftoken');


// ---------------CODIGO PARA MOSTRAR LA VENTANA MODAL-------------




function carrusel(apartado){


const carrusel = apartado.querySelector(".carrusel");
let carruselSection = apartado.querySelectorAll(".carrusel-section");
let carruselSectionLast = carruselSection[carruselSection.length - 1];

const btnLeft = apartado.querySelector("#btn-left");
const btnRight = apartado.querySelector("#btn-right");

carrusel.insertAdjacentElement('afterbegin',carruselSectionLast);

function next() {
	let carruselSectionFirst = apartado.querySelectorAll(".carrusel-section")[0];
	carrusel.style.marginLeft = "-200%";
	carrusel.style.transition = "all 0.5s";
	setTimeout(function(){
		carrusel.style.transition = "none";
		carrusel.insertAdjacentElement('beforeend',carruselSectionFirst);
			carrusel.style.marginLeft = "-100%";
	},500);
}

function before() {
	let carruselSection = apartado.querySelectorAll(".carrusel-section");
let carruselSectionLast = carruselSection[carruselSection.length - 1];
	carrusel.style.marginLeft = "0";
	carrusel.style.transition = "all 0.5s";
	setTimeout(function(){
		carrusel.style.transition = "none";
		carrusel.insertAdjacentElement('afterbegin',carruselSectionLast);
			carrusel.style.marginLeft = "-100%";
	},500);
}


btnRight.addEventListener('click', function(){
	next();
})


btnLeft.addEventListener('click', function(){
	before();
})

}




var opcionesFecha = {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	hour12: true
  };


  function cargarComentarios(contenedorComentarios,comentario){



		var fecha = new Date(comentario['fechacom']);
		var fechacom = fecha.toLocaleDateString('es-CO',opcionesFecha);

		var div = document.createElement('div');
		div.classList.add("comentario");
		div.innerHTML = `
		<div class="comentario-info">
			<div class="img-usuario-contenedor">
				<img src="${comentario['fotoperfil']}" class="img-usuario">
			</div>
			<a href="/perfil/${comentario['id_usuario']}/"><h4>${comentario['nombreusu']}</h4></a>
		</div>
		
		
		<div class="comentario-texto">
			<p>${comentario['comentario']}</p>
		</div>

		<div class="fechacom"><p class="fechacomen">${fechacom}</p></div>


	`;

	contenedorComentarios.append(div);
	
}


function agregarComentario(form,comentarioInput,url){

	form.addEventListener("submit", (e)=> {
		e.preventDefault();

		let comentario = document.getElementById(String(comentarioInput)).value;


		if(comentario){
			var data = new FormData ();
		data.append('comentario',comentario);
		
		let xhr = new XMLHttpRequest();
		
		xhr.open ("POST", url);
		
		xhr.send (data);

		comentario = ""
		
		xhr.onreadystatechange = function(){

			if (this.readyState == 4) {
				// Verificar si el código de estado es 200, que significa que la respuesta fue exitosa
				if (this.status == 200) {
				// Obtener la respuesta del servidor en formato JSON
				let respuesta = JSON.parse(this.responseText);

					if(respuesta.exito != true){
						alert('no se pudo publicar tu comentario')
					}

				}

			}

		};
		}
		})

}


var intervalo;
async function actualizarComentarios(idpubli,contenedorComentarios,publiModal){


	if(publiModal.style.display == "flex"){

		var primerultimoid = 0;
		var segundoultimoid;
		var claves;
	
		// Usamos await para esperar a que se resuelva la promesa
		let response = await fetch(`/cargarComentarios/${idpubli}/?ultimoid=${primerultimoid}&mensaje=primerapeticion`,{
			method: "GET"});
		let comentarios = await response.json();			
	
			 if(Object.keys(comentarios).length != 0){
	
				claves = Object.keys(comentarios);
				primerultimoid = claves[claves.length - 1];
				
			for(let comentario in comentarios){
				
			cargarComentarios(contenedorComentarios,comentarios[comentario]);
			}
	
		} 
	
		// Ahora podemos asignar el valor de segundoultimoid sin usar then()
		segundoultimoid = primerultimoid;

		
	
		intervalo =  setInterval(async function(){
	
			// Usamos await de nuevo para esperar a que se resuelva la promesa
			let response = await fetch(`/cargarComentarios/${idpubli}/?ultimoid=${segundoultimoid}&mensaje=segundapeticion`,{
				method: "GET"});
			let comentarios = await response.json();
	

			 if(Object.keys(comentarios).length != 0){
	
				
				claves = Object.keys(comentarios);
				segundoultimoid = claves[claves.length - 1];

								
				for(let comentario in comentarios){
	
				 cargarComentarios(contenedorComentarios,comentarios[comentario]);
				}
	
			} 
	
			
		}, 2000); 


	}  else{

		clearInterval(intervalo);
	}
}


let publiModalPerdidas = document.getElementById("publi-modelo-perdidas");
let contenedorComentariosPerdidas = document.getElementById("comentariosPerdidas");
let comentariosPerdidasForm = document.getElementById("comentariosPerdidasForm");
let comentarioInputPerdidas = document.getElementById("comentarioPerdidas");


let publiModalEncontradas = document.getElementById("publi-modelo-encontradas");
let contenedorComentariosEncontradas = document.getElementById("comentariosEncontradas");
let comentariosEncontradasForm = document.getElementById("comentariosEncontradasForm");
let comentarioInputEncontradas = document.getElementById("comentarioEncontradas");

let publiModalAdopciones = document.getElementById("publi-modelo-adopciones");
let contenedorComentariosAdopciones = document.getElementById("comentariosAdopciones");
let comentariosAdopcionesForm = document.getElementById("comentariosAdopcionesForm");
let comentarioInputAdopciones = document.getElementById("comentarioAdopciones");








publis.forEach( publi => {
	publi.addEventListener("click",e =>{


		let idpubli = e.target.closest(".publi").getAttribute("data-id");
		let apartado = e.target.closest(".publi").getAttribute("data-apartado");

		let mensaje = {'apartado':apartado};
		const url = `/informacionPubli/${idpubli}/`;
		let urlcomen = `/agregarComentario/${idpubli}/`;


		if(apartado == "perdidas"){

			contenedorComentariosPerdidas.id += "-" + idpubli;
			comentariosPerdidasForm.id += "-" + idpubli;
			comentarioInputPerdidas.id += "-" + idpubli;

			var form = document.getElementById("comentariosPerdidasForm-"+idpubli);
			var contenedorComentarios = document.getElementById("comentariosPerdidas-"+idpubli);
			var comentarioInput = document.getElementById("comentarioPerdidas-"+idpubli);

		} else if(apartado == "encontradas"){

			contenedorComentariosEncontradas.id += "-" + idpubli;
			comentariosEncontradasForm.id += "-" + idpubli;
			comentarioInputEncontradas.id += "-" + idpubli;

			var form = document.getElementById("comentariosEncontradasForm-"+idpubli);
			var contenedorComentarios = document.getElementById("comentariosEncontradas-"+idpubli);
			var comentarioInput = document.getElementById("comentarioEncontradas-"+idpubli);
		} else{

			contenedorComentariosAdopciones.id += "-" + idpubli;
			comentariosAdopcionesForm.id += "-" + idpubli;
			comentarioInputAdopciones.id += "-" + idpubli;

			var form = document.getElementById("comentariosAdopcionesForm-"+idpubli);
			var contenedorComentarios = document.getElementById("comentariosAdopciones-"+idpubli);
			var comentarioInput = document.getElementById("comentarioAdopciones-"+idpubli);

		}




		fetch(url,{
			method: "POST",
      headers: {'Content-Type': 'application/json',
      "X-CSRFToken": csrftoken},
      body: JSON.stringify(mensaje)
		})
		.then(response => response.json())
		.then(publicacion => {


			// ---------CONSULTA PARA LA VENTANA MODELO------------------

			if(apartado == 'perdidas'){


			document.getElementById("img2mP").src = publicacion.data.mascota.img2;
			document.getElementById("img3mP").src = publicacion.data.mascota.img3;
			document.getElementById("img4mP").src = publicacion.data.mascota.img4;
			document.getElementById("img5mP").src = publicacion.data.mascota.img5;

			carrusel(publiModalPerdidas);

			
			document.getElementById("nombremasmP").textContent = publicacion.data.mascota.nombremas;
			document.getElementById("especiemasmP").textContent = publicacion.data.mascota.especiemas;
			document.getElementById("razamasmP").textContent = publicacion.data.mascota.razamas;
			document.getElementById("tamañomasmP").textContent = publicacion.data.mascota.tamañomas;
			document.getElementById("sexomasmP").textContent = publicacion.data.mascota.sexomas;
			document.getElementById("colormasmP").textContent = publicacion.data.mascota.colormas;
			document.getElementById("edadmasmP").textContent = publicacion.data.mascota.edadmas + " años";
			document.getElementById("marcasmasmP").textContent = publicacion.data.mascota.marcasmas;
			document.getElementById("accesoriosmasmP").textContent = publicacion.data.mascota.accesoriosmas;
			document.getElementById("enfermedadesmasmP").textContent = publicacion.data.estado_salud.enfermedadesmas;
			document.getElementById("esterilizacionmasmP").textContent = publicacion.data.estado_salud.esterilizacionmas;
			document.getElementById("medicamentosmasmP").textContent = publicacion.data.estado_salud.medicamentosmas;
			document.getElementById("vacunasmasmP").textContent = publicacion.data.estado_salud.vacunasmas;
			document.getElementById("localidadExtraviom").textContent = publicacion.data.publicacion.localidadExtravio;
			document.getElementById("barrioExtraviom").textContent = publicacion.data.publicacion.barrioExtravio;

			document.getElementById("fechaExtraviom").textContent = publicacion.data.publicacion.fechaExtravio; 
			document.getElementById("horaExtraviom").textContent = publicacion.data.publicacion.horaExtravio; 

			document.getElementById("recompensam").textContent = publicacion.data.publicacion.recompensa;
			
			document.getElementById("nombreDueñoP").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueñoP").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoP").textContent = publicacion.data.usuario.email;


			
			contenedorComentarios.innerHTML = "";
			comentarioInput.value = "";

			
			agregarComentario(form,comentarioInput.id,urlcomen);
			

			} else if(apartado == 'encontradas'){

			document.getElementById("img2mE").src = publicacion.data.mascota.img2;
			document.getElementById("img3mE").src = publicacion.data.mascota.img3;
			document.getElementById("img4mE").src = publicacion.data.mascota.img4;
			document.getElementById("img5mE").src = publicacion.data.mascota.img5;

			carrusel(publiModalEncontradas);

			document.getElementById("especiemasmE").textContent = publicacion.data.mascota.especiemas;
			document.getElementById("razamasmE").textContent = publicacion.data.mascota.razamas;
			document.getElementById("tamañomasmE").textContent = publicacion.data.mascota.tamañomas;
			document.getElementById("sexomasmE").textContent = publicacion.data.mascota.sexomas;
			document.getElementById("colormasmE").textContent = publicacion.data.mascota.colormas;

			document.getElementById("marcasmasmE").textContent = publicacion.data.mascota.marcasmas;
			document.getElementById("accesoriosmasmE").textContent = publicacion.data.mascota.accesoriosmas;
			document.getElementById("enfermedadesmasmE").textContent = publicacion.data.estado_salud.enfermedadesmas;
			document.getElementById("esterilizacionmasmE").textContent = publicacion.data.estado_salud.esterilizacionmas;


			document.getElementById("localidadEncuentrom").textContent = publicacion.data.publicacion.localidadEncuentro;
			document.getElementById("barrioEncuentrom").textContent = publicacion.data.publicacion.barrioEncuentro;

			document.getElementById("fechaEncuentrom").textContent = publicacion.data.publicacion.fechaEncuentro; 
			document.getElementById("horaEncuentrom").textContent = publicacion.data.publicacion.horaEncuentro; 
			
			document.getElementById("nombreDueñoE").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueñoE").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoE").textContent = publicacion.data.usuario.email;


			contenedorComentarios.innerHTML = "";
			comentarioInput.value = "";

			
			agregarComentario(form,comentarioInput.id,urlcomen);



			} else{
			
				document.getElementById("img2mA").src = publicacion.data.mascota.img2;
			document.getElementById("img3mA").src = publicacion.data.mascota.img3;
			document.getElementById("img4mA").src = publicacion.data.mascota.img4;
			document.getElementById("img5mA").src = publicacion.data.mascota.img5;

			carrusel(publiModalAdopciones);

			
			document.getElementById("nombremasmA").textContent = publicacion.data.mascota.nombremas;
			document.getElementById("especiemasmA").textContent = publicacion.data.mascota.especiemas;
			document.getElementById("razamasmA").textContent = publicacion.data.mascota.razamas;
			document.getElementById("tamañomasmA").textContent = publicacion.data.mascota.tamañomas;
			document.getElementById("sexomasmA").textContent = publicacion.data.mascota.sexomas;
			document.getElementById("colormasmA").textContent = publicacion.data.mascota.colormas;
			document.getElementById("edadmasmA").textContent = publicacion.data.mascota.edadmas + " años";
			document.getElementById("personalidadmasmA").textContent = publicacion.data.mascota.personalidadmas;
			document.getElementById("entrenamientomasmA").textContent = publicacion.data.mascota.entrenamientomas;
			document.getElementById("socializacionmasmA").textContent = publicacion.data.mascota.socializacionmas;
			document.getElementById("enfermedadesmasmA").textContent = publicacion.data.estado_salud.enfermedadesmas;
			document.getElementById("esterilizacionmasmA").textContent = publicacion.data.estado_salud.esterilizacionmas;
			document.getElementById("medicamentosmasmA").textContent = publicacion.data.estado_salud.medicamentosmas;
			document.getElementById("vacunasmasmA").textContent = publicacion.data.estado_salud.vacunasmas;
			document.getElementById("motivoAdopcionm").textContent = publicacion.data.publicacion.motivoAdopcion;
			document.getElementById("requisitosAdopcionm").textContent = publicacion.data.publicacion.requisitosAdopcion;
			document.getElementById("localidadAdopcionm").textContent = publicacion.data.publicacion.localidadAdopcion;
			document.getElementById("barrioAdopcionm").textContent = publicacion.data.publicacion.barrioAdopcion;

			
			document.getElementById("nombreDueñoA").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueñoA").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoA").textContent = publicacion.data.usuario.email;



			contenedorComentarios.innerHTML = "";
			comentarioInput.value = "";

			
			agregarComentario(form,comentarioInput.id,urlcomen);

			}



		})



		if(apartado == 'perdidas'){


			publiModalPerdidas.style.display = "flex";
			contenedorModalPerdidas[0].classList.add('contenedor-modelo');
			actualizarComentarios(idpubli,contenedorComentarios,publiModalPerdidas);
			
			
			
			btnCerrarModal.forEach(equis => {
				equis.addEventListener("click",()=>{
					publiModalPerdidas.style.display = "none";
					contenedorModalPerdidas[0].classList.remove('contenedor-modelo');
					contenedorComentariosPerdidas.id = 'comentariosPerdidas';
					comentariosPerdidasForm.id = 'comentariosPerdidasForm';
					comentarioInputPerdidas.id = 'comentarioPerdidas';
					actualizarComentarios(idpubli,contenedorComentarios,publiModalPerdidas);

					
			});

			});

			
} else if(apartado == 'encontradas'){

	
			publiModalEncontradas.style.display = "flex";
			contenedorModalEncontradas[0].classList.add('contenedor-modelo');
			actualizarComentarios(idpubli,contenedorComentarios,publiModalEncontradas);
			
			
			
			btnCerrarModal.forEach(equis => {
				equis.addEventListener("click",()=>{
					publiModalEncontradas.style.display = "none";
					contenedorModalEncontradas[0].classList.remove('contenedor-modelo');
					contenedorComentariosEncontradas.id = 'comentariosEncontradas';
					comentariosEncontradasForm.id = 'comentariosEncontradasForm';
					comentarioInputEncontradas.id = 'comentarioEncontradas';
					actualizarComentarios(idpubli,contenedorComentarios,publiModalEncontradas);

			
	});

	});

		

} else{

		
	publiModalAdopciones.style.display = "flex";
	contenedorModalAdopciones[0].classList.add('contenedor-modelo');
	actualizarComentarios(idpubli,contenedorComentarios,publiModalAdopciones);
	
	
	
	btnCerrarModal.forEach(equis => {
		equis.addEventListener("click",()=>{
			publiModalAdopciones.style.display = "none";
			contenedorModalAdopciones[0].classList.remove('contenedor-modelo');
			contenedorComentariosAdopciones.id = 'comentariosAdopciones';
			comentariosAdopcionesForm.id = 'comentariosAdopcionesForm';
			comentarioInputAdopciones.id = 'comentarioAdopciones';
			actualizarComentarios(idpubli,contenedorComentarios,publiModalAdopciones);

			
	});

	});

		
}	



});

});






let btnOpciones = document.querySelectorAll(".trespuntos");
let menuOpcionesPubli = document.querySelectorAll(".menuOpcionesPubli");

btnOpciones.forEach((btnOpcion,i) => {
	btnOpcion.addEventListener("click", e =>{
		menuOpcionesPubli[i].style.display = "flex";
		e.stopPropagation();

		
	});


	});

	document.addEventListener("click", (event) => {

		menuOpcionesPubli.forEach(menuOpcion =>{
			if(!menuOpcion.contains(event.target)){
				menuOpcion.style.display = "none";
			}
		})


	});



	const selectEspeciemase = document.querySelectorAll(".especiemase");
	selectEspeciemase.forEach(select => {
		select.addEventListener("change", ()=>{
			let id = String(select.id)
			seleccionarEspecie(id);
		})
	})

	const vacunasmase = document.querySelectorAll(".labelvacunasmase");
	vacunasmase.forEach(select => {
		select.addEventListener("click", ()=>{
			let idSelectVacuna = select.getAttribute("for") 
			mostrarSelect(idSelectVacuna);
	})

	})
	const SelectCargarBarriose = document.querySelectorAll(".localidadese");
	SelectCargarBarriose.forEach(select => {
		select.addEventListener("change", ()=>{

			let id = select.id
			cargarBarrios(id);
		})
	})
	



	/** PREVISUALIZAR IMAGEN **/



const inputs = document.querySelectorAll(".input-file");
const inputsText = document.querySelectorAll(".input-text");




const iconUpload = document.querySelectorAll(".icon-upload");


//PARA CADA INPUT TIPO FILE



inputs.forEach(input => {
	input.addEventListener("change", e =>{

		let form = e.target.closest('form');
		
		let apartado = form.querySelector(".nombreApartado").value;
		console.log(e.target);
		console.log(apartado);
		
		let idCompleto = input.id;
		let ultimosDosDigitos = idCompleto.slice(-2);
		let id;

		if(ultimosDosDigitos>0){
			id = ultimosDosDigitos;

		} else{
			id = idCompleto.slice(-1);
			
		}

	
		if(e.target.files[0]) {
			const reader = new FileReader();
			reader.onload = function (e) {
			let file = e.target.result;	

			if(inputsText[id - 1].querySelector('img')){

				let inputImg;

				if(apartado=="perdidas"){
					inputImg = document.getElementById('Pimgmas'+id);

				} else if(apartado=="encontradas"){
					inputImg = document.getElementById('Eimgmas'+id);

				} else{
					inputImg = document.getElementById('Aimgmas'+id);

				}
	
				inputImg.src = file;

			} else{
				
				
				let img = document.createElement("img");
				img.src = file;		
				img.id = "imgmas"+id;
				
				inputsText[id - 1].removeChild(iconUpload[id - 1]);
				
				inputsText[id - 1].appendChild(img);

			

			}

			}

			reader.readAsDataURL(e.target.files[0]);


		}
})


	})




	btnEditarPubli.forEach( btn => {
		btn.addEventListener("click",e =>{
	
	
			var idpubli = e.target.closest(".publi").getAttribute("data-id");
			var apartado = e.target.closest(".publi").getAttribute("data-apartado");
	
	
			var mensaje = {'apartado':apartado};
			const url = `/informacionPubli/${idpubli}/`;

			console.log(apartado);
	
	
			fetch(url,{
				method: "POST",
		  headers: {'Content-Type': 'application/json',
		  "X-CSRFToken": csrftoken},
		  body: JSON.stringify(mensaje)
			})
			.then(response => response.json())
			.then(publicacion => {
	
	
				// ---------CONSULTA PARA LA VENTANA MODELO------------------
	
				if(apartado == 'perdidas'){
					
			document.getElementById('editarPubliPerdidas').action = `/editarPubli/${idpubli}/`;  

			document.getElementById("Pimgmas6").src = publicacion.data.mascota.img1;
			document.getElementById("Pimgmas7").src = publicacion.data.mascota.img2;
			document.getElementById("Pimgmas8").src = publicacion.data.mascota.img3;
			document.getElementById("Pimgmas9").src = publicacion.data.mascota.img4;
			document.getElementById("Pimgmas10").src = publicacion.data.mascota.img5;
			

			
			document.getElementById("nombremaseP").value = publicacion.data.mascota.nombremas;

			const especie = document.getElementById("especiemaseP");
			for (let i = 0; i < especie.options.length; i++) {
				const option = especie.options[i];
				if (option.value === publicacion.data.mascota.especiemas) {
					option.selected = true;
				}
			}
			 
			seleccionarEspecie('especiemaseP');
			const raza = document.getElementById("razamaseP");
			for (let i = 0; i < raza.options.length; i++) {
				const option = raza.options[i];
				if (option.value == publicacion.data.mascota.razamas) {
					option.selected = true;
				}
			}

			const tamaño = document.getElementById("tamañomaseP");
			for (let i = 0; i < tamaño.options.length; i++) {
				const option = tamaño.options[i];
				if (option.value == publicacion.data.mascota.tamañomas) {
					option.selected = true;
				}
			}

			const sexo = document.getElementById("sexomaseP");
			for (let i = 0; i < sexo.options.length; i++) {
				const option = sexo.options[i];
				if (option.value == publicacion.data.mascota.sexomas) {
					option.selected = true;
				}
			}

			const color = document.getElementById("colormaseP");
			for (let i = 0; i < color.options.length; i++) {
				const option = color.options[i];
				if (option.value == publicacion.data.mascota.colormas) {
					option.selected = true;
				}
			}

			document.getElementById("edadmaseP").value = publicacion.data.mascota.edadmas;
			document.getElementById("marcasmaseP").value = publicacion.data.mascota.marcasmas;
			document.getElementById("accesoriosmaseP").value = publicacion.data.mascota.accesoriosmas;
			document.getElementById("enfermedadesmaseP").value = publicacion.data.estado_salud.enfermedadesmas;


			const esterilizacion = document.getElementById("esterilizacionmaseP") ;
			for (let i = 0; i < esterilizacion.options.length; i++) {
				const option = esterilizacion.options[i];
				if (option.value == publicacion.data.estado_salud.esterilizacionmas) {
					option.selected = true;
				}
			}

			document.getElementById("medicamentosmaseP").value = publicacion.data.estado_salud.medicamentosmas;


			const selectVacunas = document.getElementById("vacunasmaseP");
			const vacunas = String(publicacion.data.estado_salud.vacunasmas);
			const listaVacunas = vacunas.split(',');
			
			for(let i = 0; i < selectVacunas.options.length; i++) {
				for(let j=0;j<listaVacunas.length;j++){
					let option = selectVacunas.options[i];
					if (option.value == listaVacunas[j]) {
						option.selected = true;
					}
				}

					
			}
			

			
			const localidadExtravio = document.getElementById("localidadeseP");
			 
			
			for (let i = 0; i < localidadExtravio.options.length; i++) {
				const option = localidadExtravio.options[i];
				if (option.value == publicacion.data.publicacion.localidadExtravio) {
					option.selected = true;
				}
			}

			cargarBarrios('localidadeseP');

			const barrioExtravio = document.getElementById("barrioseP");
			for (let i = 0; i < barrioExtravio.options.length; i++) {
				const option = barrioExtravio.options[i];
				if (option.value == publicacion.data.publicacion.barrioExtravio) {
					option.selected = true;
				}
			}

			

			const fechaExtravio = document.getElementById("fechaExtravioe");
			//const fecha = new Date(publicacion.data.publicacion.fechaExtravio);
			//fechaExtravio.value = fecha.toISOString().slice(0, 16);
			fechaExtravio.value = publicacion.data.publicacion.fechaExtravio;


			const horaExtravio = document.getElementById("horaExtravioe");
			
			horaExtravio.value = publicacion.data.publicacion.horaExtravio;
			


			document.getElementById("recompensaeP").value = publicacion.data.publicacion.recompensa;


			document.getElementById("nombreDueñoeP").innerHTML = publicacion.data.usuario.nombre;
			document.getElementById("numeroDueñoeP").innerHTML = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoeP").innerHTML = publicacion.data.usuario.email;
				
	
	
	} else if(apartado == 'encontradas'){
	

			document.getElementById('editarPubliEncontradas').action = `/editarPubli/${idpubli}/`;  

			document.getElementById("Eimgmas6").src = publicacion.data.mascota.img1;
			document.getElementById("Eimgmas7").src = publicacion.data.mascota.img2;
			document.getElementById("Eimgmas8").src = publicacion.data.mascota.img3;
			document.getElementById("Eimgmas9").src = publicacion.data.mascota.img4;
			document.getElementById("Eimgmas10").src = publicacion.data.mascota.img5;
			

			
			

			const especie = document.getElementById("especiemaseE");
			for (let i = 0; i < especie.options.length; i++) {
				const option = especie.options[i];
				if (option.value === publicacion.data.mascota.especiemas) {
					option.selected = true;
				}
			}
			 
			seleccionarEspecie('especiemaseE');
			const raza = document.getElementById("razamaseE");
			for (let i = 0; i < raza.options.length; i++) {
				const option = raza.options[i];
				if (option.value == publicacion.data.mascota.razamas) {
					option.selected = true;
				}
			}

			const tamaño = document.getElementById("tamañomaseE");
			for (let i = 0; i < tamaño.options.length; i++) {
				const option = tamaño.options[i];
				if (option.value == publicacion.data.mascota.tamañomas) {
					option.selected = true;
				}
			}

			const sexo = document.getElementById("sexomaseE");
			for (let i = 0; i < sexo.options.length; i++) {
				const option = sexo.options[i];
				if (option.value == publicacion.data.mascota.sexomas) {
					option.selected = true;
				}
			}

			const color = document.getElementById("colormaseE");
			for (let i = 0; i < color.options.length; i++) {
				const option = color.options[i];
				if (option.value == publicacion.data.mascota.colormas) {
					option.selected = true;
				}
			}

			document.getElementById("marcasmaseE").value = publicacion.data.mascota.marcasmas;
			document.getElementById("accesoriosmaseE").value = publicacion.data.mascota.accesoriosmas;
			document.getElementById("enfermedadesmaseE").value = publicacion.data.estado_salud.enfermedadesmas;


			const esterilizacion = document.getElementById("esterilizacionmaseE") ;
			for (let i = 0; i < esterilizacion.options.length; i++) {
				const option = esterilizacion.options[i];
				if (option.value == publicacion.data.estado_salud.esterilizacionmas) {
					option.selected = true;
				}
			}

			
			

			
			const localidadEncuentro = document.getElementById("localidadeseE");
			 
			
			for (let i = 0; i < localidadEncuentro.options.length; i++) {
				const option = localidadEncuentro.options[i];
				if (option.value == publicacion.data.publicacion.localidadEncuentro) {
					option.selected = true;
				}
			}

			cargarBarrios('localidadeseE');

			const barrioEncuentro = document.getElementById("barrioseE");
			for (let i = 0; i < barrioEncuentro.options.length; i++) {
				const option = barrioEncuentro.options[i];
				if (option.value == publicacion.data.publicacion.barrioEncuentro) {
					option.selected = true;
				}
			}

			

			const fechaEncuentro = document.getElementById("fechaEncuentroe");
			//const fecha = new Date(publicacion.data.publicacion.fechaEncuentro);
			//fechaEncuentro.value = fecha.toISOString().slice(0, 16);
			fechaEncuentro.value = publicacion.data.publicacion.fechaEncuentro;


			const horaEncuentro = document.getElementById("horaEncuentroe");
			
			horaEncuentro.value = publicacion.data.publicacion.horaEncuentro;
			


			document.getElementById("nombreDueñoeE").innerHTML = publicacion.data.usuario.nombre;
			document.getElementById("numeroDueñoeE").innerHTML = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoeE").innerHTML = publicacion.data.usuario.email;

	
	
} else{
				
					document.getElementById('editarPubliAdopciones').action = `/editarPubli/${idpubli}/`;  

					document.getElementById("Aimgmas6").src = publicacion.data.mascota.img1;
					document.getElementById("Aimgmas7").src = publicacion.data.mascota.img2;
					document.getElementById("Aimgmas8").src = publicacion.data.mascota.img3;
					document.getElementById("Aimgmas9").src = publicacion.data.mascota.img4;
					document.getElementById("Aimgmas10").src = publicacion.data.mascota.img5;
					
		
					
					document.getElementById("nombremaseA").value = publicacion.data.mascota.nombremas;
		
					const especie = document.getElementById("especiemaseA");
					for (let i = 0; i < especie.options.length; i++) {
						const option = especie.options[i];
						if (option.value === publicacion.data.mascota.especiemas) {
							option.selected = true;
						}
					}
					 
					seleccionarEspecie('especiemaseA');
					const raza = document.getElementById("razamaseA");
					for (let i = 0; i < raza.options.length; i++) {
						const option = raza.options[i];
						if (option.value == publicacion.data.mascota.razamas) {
							option.selected = true;
						}
					}
		
					const tamaño = document.getElementById("tamañomaseA");
					for (let i = 0; i < tamaño.options.length; i++) {
						const option = tamaño.options[i];
						if (option.value == publicacion.data.mascota.tamañomas) {
							option.selected = true;
						}
					}
		
					const sexo = document.getElementById("sexomaseA");
					for (let i = 0; i < sexo.options.length; i++) {
						const option = sexo.options[i];
						if (option.value == publicacion.data.mascota.sexomas) {
							option.selected = true;
						}
					}
		
					const color = document.getElementById("colormaseA");
					for (let i = 0; i < color.options.length; i++) {
						const option = color.options[i];
						if (option.value == publicacion.data.mascota.colormas) {
							option.selected = true;
						}
					}
		
					document.getElementById("edadmaseA").value = publicacion.data.mascota.edadmas;
		
		
					document.getElementById("enfermedadesmaseA").value = publicacion.data.estado_salud.enfermedadesmas;
		
		
					const esterilizacion = document.getElementById("esterilizacionmaseA") ;
					for (let i = 0; i < esterilizacion.options.length; i++) {
						const option = esterilizacion.options[i];
						if (option.value == publicacion.data.estado_salud.esterilizacionmas) {
							option.selected = true;
						}
					}
		
					document.getElementById("medicamentosmaseA").value = publicacion.data.estado_salud.medicamentosmas;
		
		
					const selectVacunas = document.getElementById("vacunasmaseA");
					const vacunas = String(publicacion.data.estado_salud.vacunasmas);
					const listaVacunas = vacunas.split(',');
					
					for(let i = 0; i < selectVacunas.options.length; i++) {
						for(let j=0;j<listaVacunas.length;j++){
							let option = selectVacunas.options[i];
							if (option.value == listaVacunas[j]) {
								option.selected = true;
							}
						}
		
					}
		
					document.getElementById("personalidadmaseA").value = publicacion.data.mascota.personalidadmas;
					document.getElementById("entrenamientomaseA").value = publicacion.data.mascota.entrenamientomas;
					document.getElementById("socializacionmaseA").value = publicacion.data.mascota.socializacionmas;
		
		
		
					document.getElementById("motivoAdopcione").value = publicacion.data.publicacion.motivoAdopcion;
		
					document.getElementById("requisitosAdopcione").value = publicacion.data.publicacion.requisitosAdopcion;
		
		
		
		
					
					const localidadAdopcion = document.getElementById("localidadeseA");
					 
					
					for (let i = 0; i < localidadAdopcion.options.length; i++) {
						const option = localidadAdopcion.options[i];
						if (option.value == publicacion.data.publicacion.localidadAdopcion) {
							option.selected = true;
						}
					}
		
					cargarBarrios('localidadeseA');
		
					const barrioAdopcion = document.getElementById("barrioseA");
					for (let i = 0; i < barrioAdopcion.options.length; i++) {
						const option = barrioAdopcion.options[i];
						if (option.value == publicacion.data.publicacion.barrioAdopcion) {
							option.selected = true;
						}
					}
		
					
		
		
		
		
					document.getElementById("nombreDueñoeA").innerHTML = publicacion.data.usuario.nombre;
					document.getElementById("numeroDueñoeA").innerHTML = publicacion.data.usuario.telefono;
					document.getElementById("correoDueñoeA").innerHTML = publicacion.data.usuario.email;
		
		
					


				}
	
	
	
			})

			if(e.target.tagName === 'I' || e.target.tagName === 'P' || e.target.tagName === 'DIV' ){

			if(apartado == 'perdidas'){
	
	
				editarPubliPerdidas.style.display = "flex";
				contenedorModalPerdidas[1].classList.add('contenedor-modelo');
				


			btnCerrarModal.forEach(equis => {
				equis.addEventListener("click",()=>{
					editarPubliPerdidas.style.display = "none";
					contenedorModalPerdidas[1].classList.remove('contenedor-modelo');
					
				});
	
				});

		


	} else if(apartado == 'encontradas'){

		
				editarPubliEncontradas.style.display = "flex";
				contenedorModalEncontradas[1].classList.add('contenedor-modelo');
				
			

			btnCerrarModal.forEach(equis => {
				equis.addEventListener("click",()=>{
					editarPubliEncontradas.style.display = "none";
					contenedorModalEncontradas[1].classList.remove('contenedor-modelo');
					
				});
	
				});

			

	} else{

			
			editarPubliAdopciones.style.display = "flex";
			contenedorModalAdopciones[1].classList.add('contenedor-modelo');


			btnCerrarModal.forEach(equis => {
				equis.addEventListener("click",()=>{
					editarPubliAdopciones.style.display = "none";
					contenedorModalAdopciones[1].classList.remove('contenedor-modelo');
				});
	
				});

	}

}


	
	});
	
	});

	


// CONSULTA PARA ELIMINAR PUBLICACION





btnEliminarPubli.forEach( btn => {
btn.addEventListener("click",e =>{

    var idpubli = e.target.closest(".publi").getAttribute("data-id");
	var apartado = e.target.closest(".publi").getAttribute("data-apartado");

	console.log(idpubli);

    if(e.target.tagName === 'I' || e.target.tagName === 'P' || e.target.tagName === 'DIV' ){

        eliminarPubli.style.display = "flex";
        contenedorModalEliminar.classList.add('contenedor-modelo');

        

    btnCancelar.forEach( btn => {
        btn.addEventListener("click",e =>{
    

            eliminarPubli.style.display = "none";
            contenedorModalEliminar.classList.remove('contenedor-modelo');

            
        


        });

    });

            }

    

    btnAceptar.forEach( btn => {
        btn.addEventListener("click",e =>{
    

            
    
            const url = `/eliminarPubli/${idpubli}/`

	
	
			var mensaje = {'apartado':apartado};

			fetch(url,{
				method: "DELETE",
		  headers: {'Content-Type': 'application/json',
		  "X-CSRFToken": csrftoken},
		  body: JSON.stringify(mensaje)
			})

            .then(data => {
        
        
        
                location.reload();
                
                
            })


        });

    });



});
});


const agregarFav = document.querySelectorAll(".agregarFav");


agregarFav.forEach(agregarFav => {

agregarFav.addEventListener("click", function(e){
	
	var idpubli = e.target.closest(".publi").getAttribute("data-id");
	var apartado = e.target.closest(".publi").getAttribute("data-apartado");
		

		const url = `/agregarFav/${idpubli}/`

		

		var mensaje = {'apartado':apartado};

			fetch(url,{
				method: "POST",
		  headers: {'Content-Type': 'application/json',
		  "X-CSRFToken": csrftoken},
		  body: JSON.stringify(mensaje)
			})

		.then(response => response.json())
		.then(respuesta => {

			if(respuesta.success){
				if(respuesta.saved){
					agregarFav.innerHTML = '<i class="fa-solid fa-heart" style="color: red; "></i>';
				} else{
					agregarFav.innerHTML = '<i class="fa-regular fa-heart" style="color: black; "></i>';
				}
				
			} else{
				console.log(respuesta.message);
			}



}) 

})
})