

import { listaBarrios,cargarBarrios } from "./cargarBarrios.js";


const barrios=listaBarrios();


const contenedorModal = document.getElementById("contenedor-modelo-agregarPerdidas");


// icono ṕara cerrar formulario de agregar publicacion 
const btnCerrarModal = document.querySelectorAll(".icon-cancel");
const agregarPubli = document.querySelector("#agregarPubli");
const main = document.getElementsByTagName("main");




const btnAgregarPubli = document.querySelector("#agregar");

var filtrosBox = document.querySelector(".filtros-box");


// ---------- VACUNAS QUE SE MUESTRAN DE ACUERDO A LA ESPECIE DE LA usuario


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
	
	
	
	 function seleccionarEspecie(idEspecie){
	
	
		
		let especie = document.getElementById(idEspecie).value;
		
			
		
		if(idEspecie == 'especiemas'){
			seleccionarVacunas(especie,'vacunasmas');
			seleccionarRaza(especie,'razamas');
		} else{
			seleccionarVacunas(especie,'vacunasmase');
			seleccionarRaza(especie,'razamase');
		}
	
		
	
	}

	// FUNCIONES DE LOS FORMULARIOS

	const selectEspeciemas = document.getElementById("especiemas");
	selectEspeciemas.addEventListener("change", ()=>{
		seleccionarEspecie("especiemas");
	})

	const selectEspeciemase = document.getElementById("especiemase");
	selectEspeciemase.addEventListener("change", ()=>{
		seleccionarEspecie("especiemase");
	})

	const vacunasmas = document.getElementById("labelvacunasmas");
	vacunasmas.addEventListener("click", ()=>{
		mostrarSelect("vacunasmas");
	})

	const vacunasmase = document.getElementById("labelvacunasmase");
	vacunasmase.addEventListener("click", ()=>{
		mostrarSelect("vacunasmase");
	})


	const SelectCargarBarrios = document.getElementById("localidades");
	SelectCargarBarrios.addEventListener("change", ()=>{
		cargarBarrios("localidades");
	})

	const SelectCargarBarriose = document.getElementById("localidadese");
	SelectCargarBarriose.addEventListener("change", ()=>{
		cargarBarrios("localidadese");
	})

	

	



// PETICION GET A LA BD PARA MOSTRAR LOS DATOS DE CADA PUBLICACICON EN UNA VENTANA MODAL


publis.forEach( publi => {
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

			/* let fechaExtraviom = new Date(publicacion.data.publicacion.fechaExtravio)

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

			document.getElementById("fechaExtraviom").textContent = fechaExtraviom.toLocaleString('es-CO',configuracionHora); */
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

});



const carrusel = document.querySelector(".carrusel");
let carruselSection = document.querySelectorAll(".carrusel-section");
let carruselSectionLast = carruselSection[carruselSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

carrusel.insertAdjacentElement('afterbegin',carruselSectionLast);

function next() {
	let carruselSectionFirst = document.querySelectorAll(".carrusel-section")[0];
	carrusel.style.marginLeft = "-200%";
	carrusel.style.transition = "all 0.5s";
	setTimeout(function(){
		carrusel.style.transition = "none";
		carrusel.insertAdjacentElement('beforeend',carruselSectionFirst);
			carrusel.style.marginLeft = "-100%";
	},500);
}

function before() {
	let carruselSection = document.querySelectorAll(".carrusel-section");
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

/* const iconfav = document.getElementById("agregarFav")

iconfav.addEventListener("click", function(e){
	
	if(e.target.id == "agregarFav"){
	iconfav.innerHTML = '<i class="fa-solid fa-heart" style="color: #000;" id="agregadoFav"></i>'

	} else{
		iconfav.innerHTML = '<i class="fa-regular fa-heart" style="color: #000;" id="agregarFav"></i>'

	}
}) */

	

	// CONSULTA PARA OBTERNER LAS COOKIES

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




	// CONSULTA PARA ELIMINAR PUBLICACION


btnEliminarPubli.forEach( btn => {
	btn.addEventListener("click",e =>{

		var idpubli = e.target.closest(".publi").getAttribute("data-id");

		if(e.target.tagName === 'I' || e.target.tagName === 'P' || e.target.tagName === 'DIV' ){

			eliminarPubli.style.display = "flex";
			contenedorPubliModal[2].style.display = "flex";

			
	
		btnCancelar.forEach( btn => {
			btn.addEventListener("click",e =>{
		
	
				eliminarPubli.style.display = "none";
				contenedorPubliModal[2].style.display = "none";

				
			
	
	
			});
	
		});
	
				}

		

		btnAceptar.forEach( btn => {
			btn.addEventListener("click",e =>{
		
	
				
		
				const url = `/eliminarPubli/${idpubli}/`
		
				
		
				fetch(url,{
					method: "DELETE",
					headers: {
						// Añadir el token CSRF al encabezado
						"X-CSRFToken": csrftoken
					  }
				})

				.then(data => {
			
			
			
					location.reload();
					
					
				})

				eliminarPubli.style.display = "none";
				contenedorPubliModal[2].style.display = "none";

				
				

	
			});
	
		});


		






	});
});





function mostrarFormularioAgregar(e){

	e.preventDefault();

contenedorModal.classList.add('contenedor-modelo');
	agregarPubli.style.display = "flex";
		
		btnAgregarPubli.classList.add("menu-span-focus");
		
		
	
		
		
	

	btnCerrarModal.forEach( equis => {
		equis.addEventListener("click", ()=>{
			agregarPubli.style.display = "none";
			contenedorModal.classList.remove('contenedor-modelo');
			btnAgregarPubli.classList.remove("menu-span-focus");
			
	
		});
	
	});

agregarPubli.addEventListener("submit", ()=>{
	agregarPubli.style.display = "none";
	agregarPubli.style.position = "static";
	btnAgregarPubli.classList.remove("menu-span-focus");

}
);





/** PREVISUALIZAR IMAGEN **/



const inputs = document.querySelectorAll(".input-file-a");
const inputsText = document.querySelectorAll(".input-text");




const iconUpload = document.querySelectorAll(".icon-upload");


//PARA CADA INPUT TIPO FILE



inputs.forEach(input => {
	input.addEventListener("change", e =>{
		
		let idCompleto = input.id;

		var id = idCompleto.slice(-1);
			
		if(e.target.files[0]) {
			const reader = new FileReader();
			reader.onload = function (e) {
			let file = e.target.result;	

			if(inputsText[id - 1].querySelector('img')){
	
				let inputImg = document.getElementById('imgmas'+id);
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







function mostrarSelect() {
	const selectVacunas = document.getElementById("vacunasmas");
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






/** --------------------FILTRAR--------------------------------**/





const localidades = ["Antonio Nariño","Barrios Unidos","Bosa","Candelaria","Chapinero","Ciudad Bolivar","Engativa","Fontibon","Kennedy",
"Los Martires","Puente Aranda","Rafel uribe","San Cristobal","Santa Fe","Suba","Teusaquillo","Tunjuelito","Usaquen","Usme"];

const valoresLocalidades = ["barriosAntonioNarino","barriosBarriosUnidos", "barriosBosa", "barriosCandelaria", 
"barriosChapinero", "barriosCiudadBolivar", "barriosEngativa", "barriosFontibon", "barriosKennedy", 
"barriosMartires",  "barriosPuenteAranda", "barriosRafaelUribe", "barriosSanCristobal", 
"barriosSantaFe", "barriosSuba", "barriosTeusaquillo", "barriosTunjuelito", "barriosUsaquen", "barriosUsme"];



const sexos = ['Macho','Hembra'];
const tamaños = ['Pequeño','Mediano','Grande'];


const iconCheckeado = document.createElement("i");
iconCheckeado.style.marginLeft = "10px";
iconCheckeado.classList.add("fa-solid");
iconCheckeado.classList.add("fa-check");



//ICONO FILTRAR, DE LA BARRA DEL MENU
const btnFiltrar = document.querySelector("#filtrar");

//CONTENEDOR DE LOS BOTONES APLICAR Y LIMPIAR
const btnFiltros = document.querySelector("#btnFiltros");

//CLase de cada boton APlciar y limpiar


//CONTENEDOR DE LOS FILTROSBOX, SUBFILTROSBOX Y LOS BOTONES DE FILTRAR
const filtros = document.querySelector("#filtros");



const selectFiltros = document.querySelectorAll(".categoria-filtro");
const subfiltrosBox = document.querySelector("#subfiltros-box");


var filtrosAplicados = {};
var filtrosSeleccionados = {color:{},raza:{},especie:{},sexo:{},tamaño:{},localidad:{},barrio:{},fecha:{}};



// localStorage.setItem ("filtrosSeleccionadosCookie",JSON.stringify({}));
filtrosAplicados = JSON.parse(localStorage.getItem("filtrosSeleccionadosCookie"));



function verificarFiltros(){
	for(let clave in filtrosSeleccionados){
		let valor = filtrosSeleccionados[clave];

		if(typeof valor === "object" && Object.keys(valor).length > 0){
			 
			if(filtrosBox.style.display == "flex"){
				btnFiltros.style.display = "flex";
			}else{
				btnFiltros.style.display = "none";
			}
			

		}

		
}
}


document.addEventListener("DOMContentLoaded",(event) =>{

	
if(Object.keys(filtrosAplicados).length !== 0){
		Object.assign(filtrosSeleccionados,filtrosAplicados);
		
		verificarFiltros();
	}
		
	console.log(filtrosSeleccionados);	
	console.log(filtrosAplicados);	
	

	
})




function funAgregarFiltros(lista,filtro){
	for (var i = 0; i < lista.length; i++) {
	var div = document.createElement("div");
				div.className = "categoria-filtro";
				
				var label = document.createElement("label");
				var input = document.createElement("input");
				
				input.type = 'checkbox';
				input.id = lista[i].toLowerCase().replace(/\s/g, " ");
				input.value = lista[i].toLowerCase().replace(/\s/g, " ");
				input.classList.add('subfiltros-checkbox');
				input.classList.add('subfiltros-'+filtro+'-checkbox');
				
				label.htmlFor = input.id;
				label.id = lista[i].toLowerCase() + "Id";
				label.textContent = lista[i]
				
				subfiltrosBox.appendChild(div);
				div.appendChild(label);
				label.appendChild(input);
}
}



function funFiltroEspecie(){
	subfiltrosBox.innerHTML = "";
			subfiltrosBox.innerHTML = 
				'<div class="categoria-filtro"><label for="Perro"><i class="fa-solid fa-dog"></i><input id="Perro" value="perro" class="subfiltros-checkbox subfiltros-especie-checkbox" type="checkbox">Perro</label></div>'+
				'<div class="categoria-filtro"><label for="Gato"><i class="fa-solid fa-cat"></i><input id="Gato" value="gato" class="subfiltros-checkbox subfiltros-especie-checkbox" type="checkbox">Gato</label></div>';
		
			let filtroEspecie = document.querySelectorAll('.subfiltros-especie-checkbox');
		
			filtroEspecie.forEach(option => {

				

				if (filtrosSeleccionados.especie[option.value]) {
					option.checked = true;
					option.parentNode.appendChild(iconCheckeado);
				}

				option.addEventListener("change", function() {
					
					if (this.checked) {
						filtrosSeleccionados.especie = {};
						filtrosSeleccionados.especie[this.value] = true;
						
						filtroEspecie.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
								
							}
						});
						 subfiltrosBox.style.display = "none";
					} 

					verificarFiltros();

				});

			});

}


function funFiltroLocalidad(){


	
	subfiltrosBox.innerHTML = "";




for (var i = 0; i < localidades.length; i++) {
	
	var div = document.createElement("div");
	div.className = "categoria-filtro";
	
	var label = document.createElement("label")
	var input = document.createElement("input")
	
	input.type = 'checkbox'
	input.id = localidades[i].toLowerCase().replace(/\s/g, " ");
	input.value = valoresLocalidades[i];
	input.classList.add('subfiltros-checkbox');
	input.classList.add('subfiltros-localidad-checkbox');
	
	label.htmlFor = input.id;
	label.textContent = localidades[i]
	
	subfiltrosBox.appendChild(div);
	div.appendChild(label);
	label.appendChild(input);




  
}
  var filtroLocalidad = document.querySelectorAll('.subfiltros-localidad-checkbox');

  filtroLocalidad.forEach(option => {

	if (filtrosSeleccionados.localidad[option.value]) {
		option.checked = true;
		option.parentNode.appendChild(iconCheckeado);
	}

	option.addEventListener("change", function() {
		
		if (this.checked) {
			filtrosSeleccionados.localidad = {};
			filtrosSeleccionados.localidad[this.value] = true;
			let arreglo = this.value.split("barrios");
			let resultado = arreglo[1].replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
			filtrosSeleccionados.localidad[resultado] = true;

			 
			filtroLocalidad.forEach(otherOption => {
				if (otherOption !== this) {
					otherOption.checked = false;
					
				}
			});
			 subfiltrosBox.style.display = "none";
			 
		} 

		verificarFiltros();

	});

});
}








selectFiltros.forEach(selectFiltro =>{
	selectFiltro.addEventListener("click", ()=>{

		
		
		let idSelectFiltro = selectFiltro.id
		let categoriaFiltro = document.getElementById(idSelectFiltro);
		
		selectFiltro.style.position = "relative";
		subfiltrosBox.style.display = "flex";
		if(idSelectFiltro === "filtro-color"){
			
			subfiltrosBox.innerHTML = ""
			subfiltrosBox.innerHTML = 
				
			'<div class="categoria-filtro"><label for="Rojo"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #f66151;"></i><input id="Rojo" value="rojizo" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Rojizo</label></div>'+
			'<div class="categoria-filtro"><label for="Naranja"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #ff7800;"></i><input id="Naranja" value="naranja"  class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Naranja</label></div>'+
			'<div class="categoria-filtro"><label for="Amarillo"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #f6d32d;"></i><input id="Amarillo" value="amarillo" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Amarillo</label></div>'+
			'<div class="categoria-filtro"><label for="Dorado"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #d4af37;"></i><input id="Dorado" value="dorado" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Dorado</label></div>'+
			'<div class="categoria-filtro"><label for="Gris"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #77767b;"></i><input id="Gris" value="gris" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Gris</label></div>'+
			'<div class="categoria-filtro"><label for="Marron"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #865e3c;"></i><input id="Marron" value="marron"  class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Marron</label></div>'+
			'<div class="categoria-filtro"><label for="Blanco"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #f6f5f4;"></i><input id="Blanco" value="blanco"  class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Blanco</label></div>'+
			'<div class="categoria-filtro"><label for="Negro"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #000;"></i><input id="Negro" value="negro"  class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Negro</label></div>';

			
			let filtroColor = document.querySelectorAll('.subfiltros-color-checkbox')
			
				filtroColor.forEach(option => {

					if (filtrosSeleccionados.color[option.value]) {
						option.checked = true;
						option.parentNode.appendChild(iconCheckeado);
					}

					option.addEventListener("change", function() {

						filtrosSeleccionados.color = {};
						
						if (this.checked) {
							
							filtrosSeleccionados.color[this.value] = true;
							 
							filtroColor.forEach(otherOption => {
								if (otherOption !== this) {
									otherOption.checked = false;
									
								}
							});
							 subfiltrosBox.style.display = "none";
						} 

						verificarFiltros();


					});
		
				});
			
			
			
			
			
		} else if (idSelectFiltro === "filtro-raza") {




			subfiltrosBox.innerHTML = ""

			let especieSeleccionada = Object.keys(filtrosSeleccionados.especie)[0];


			if(especieSeleccionada==null){
				funFiltroEspecie();
			} else{
				if(especieSeleccionada=="perro"){
					funAgregarFiltros(razasPerros,"raza");
				} else{
					funAgregarFiltros(razasGatos,"raza");
				}
			}
			
		
			let filtroRaza = document.querySelectorAll('.subfiltros-raza-checkbox');
		
			

			filtroRaza.forEach(option => {

				if (filtrosSeleccionados.raza[option.value]) {
					option.checked = true;
					option.parentNode.appendChild(iconCheckeado);
				}

				option.addEventListener("change", function() {
					
					if (this.checked) {
						filtrosSeleccionados.raza = {};
						filtrosSeleccionados.raza[this.value] = true;
						
						filtroRaza.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
								
							}
						});
						 subfiltrosBox.style.display = "none";
					} 

					verificarFiltros();


				
				});
	


			});


		
		} else if (idSelectFiltro === "filtro-especie") {

			
			funFiltroEspecie();


			
		} else if(idSelectFiltro === "filtro-sexo"){

			subfiltrosBox.innerHTML = "";

			funAgregarFiltros(sexos,"sexo");

			let labelM = document.getElementById("machoId");
			let iconM = document.createElement("i");
			iconM.classList.add("fa-solid");
			iconM.classList.add("fa-mars");
			labelM.prepend(iconM);

			let labelF = document.getElementById("hembraId");
			let iconF = document.createElement("i");
			iconF.classList.add("fa-solid");
			iconF.classList.add("fa-venus");
			labelF.prepend(iconF);

			


			let filtroSexo = document.querySelectorAll('.subfiltros-sexo-checkbox');
		
			filtroSexo.forEach(option => {

				if (filtrosSeleccionados.sexo[option.value]) {
					option.checked = true;
					option.parentNode.appendChild(iconCheckeado);
				}

				option.addEventListener("change", function() {
					
					if (this.checked) {
						filtrosSeleccionados.sexo = {};
						filtrosSeleccionados.sexo[this.value] = true;
						 
						filtroSexo.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
								
							}
						});

						 subfiltrosBox.style.display = "none";

					}

					verificarFiltros();

				});

			});
		
		
		
		
		
		} else if(idSelectFiltro === "filtro-tamaño"){
		
			subfiltrosBox.innerHTML = "";
			funAgregarFiltros(tamaños,"tamaño");

			let filtroTamaño = document.querySelectorAll('.subfiltros-tamaño-checkbox');
		
			

			filtroTamaño.forEach(option => {

				if (filtrosSeleccionados.tamaño[option.value]) {
					option.checked = true;
					option.parentNode.appendChild(iconCheckeado);
				}

				option.addEventListener("change", function() {
					
					if (this.checked) {
						filtrosSeleccionados.tamaño = {};
						filtrosSeleccionados.tamaño[this.value] = true;
						
						filtroTamaño.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
								
							}
						});
						 subfiltrosBox.style.display = "none";
					} 

					verificarFiltros();


				
				});
	


			});


		
		} else if (idSelectFiltro === "filtro-especie") {

			
			funFiltroEspecie();

			
		} 

		
		
		else if(idSelectFiltro === "filtro-localidad"){

			funFiltroLocalidad();
			
		} else if(idSelectFiltro === "filtro-barrio"){

			subfiltrosBox.innerHTML = "";


			let localidadSeleccionada = Object.keys(filtrosSeleccionados.localidad)[0];

			if(localidadSeleccionada == null){
				funFiltroLocalidad();
			} else{

				let listaBarrios = barrios[localidadSeleccionada];

				
				funAgregarFiltros(listaBarrios,"barrio")
			
			
			

			let filtroBarrio = document.querySelectorAll('.subfiltros-barrio-checkbox');
		
			filtroBarrio.forEach(option => {

				if (filtrosSeleccionados.barrio[option.value]) {
					option.checked = true;
					option.parentNode.appendChild(iconCheckeado);
				}

				option.addEventListener("change", function() {
					
					if (this.checked) {
						filtrosSeleccionados.barrio = {};
						filtrosSeleccionados.barrio[this.value] = true;
						 
						filtroBarrio.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
								
							}
						});


						 subfiltrosBox.style.display = "none";


					}

					verificarFiltros();

				});

			});


			}


			
	

			
			
			
																	
		} else if(idSelectFiltro === "filtro-fechaPubli"){


			subfiltrosBox.innerHTML = "";

			var div = document.createElement("div");
			div.className = "categoria-filtro";


			let label = document.createElement("label");
			let input = document.createElement("input");
			input.type = 'date';
			input.id = "fechaPubli-filtro";
			input.classList.add('subfiltros-checkbox');
			input.classList.add('subfiltros-fechaPubli-checkbox');
			

			subfiltrosBox.appendChild(div);
			div.appendChild(label);
			div.appendChild(input);


			let fechaPubli = document.getElementById("fechaPubli-filtro");

			


			fechaPubli.addEventListener("change", function() {

				filtrosSeleccionados.fecha = {};
				
				filtrosSeleccionados.fecha[this.value] = true;

				
					 
				subfiltrosBox.style.display = "none";

				

				verificarFiltros();


			});


			if (filtrosSeleccionados.fecha) {

				fechaPubli.value = Object.keys(filtrosSeleccionados.fecha)[0];
				

			} 
			

		}


	});


});






btnFiltrar.addEventListener("click", (e) => {
	e.stopPropagation();

	


    if (!btnFiltrar.classList.contains("menu-span-focus")) {
		
        btnFiltrar.classList.add("menu-span-focus");
		filtrosBox.style.display = "flex";
		verificarFiltros();

		
    }else{
		
		btnFiltrar.classList.remove("menu-span-focus");
		filtrosBox.style.display = "none";
		
		subfiltrosBox.style.display = "none";
		verificarFiltros();
		
	}




	

	 document.addEventListener("click", (event) => {

		
			if(!filtros.contains(event.target)){
				filtrosBox.style.display = "none";
				btnFiltros.style.display = "none";
				subfiltrosBox.style.display = "none"; 
				btnFiltrar.classList.remove("menu-span-focus");

			} 
		

	}); 

    
});

const btnAyL = document.querySelectorAll(".btnFiltros");
const btnAplicar = document.getElementById("btnAplicar");
const btnLimpiar = document.getElementById("btnLimpiar");

const subfiltrosCheckbox = document.querySelectorAll(".subfiltros-checkbox");

btnLimpiar.addEventListener("click", ()=>{


	localStorage.setItem ("filtrosSeleccionadosCookie",JSON.stringify({}));
	for(let clave in filtrosSeleccionados){
		let valor = filtrosSeleccionados[clave];

		if(typeof valor === "object" && Object.keys(valor).length > 0){
			 
			filtrosSeleccionados[clave] = {};
			btnFiltros.style.display = "none";
			subfiltrosBox.style.display = "none";

			subfiltrosCheckbox.forEach(checkbox =>{
				checkbox.checked = false;
			})
		} 
	}

	fetch('/perdidas/',
		{
			method : 'POST',
			headers: {'Content-Type': 'application/json',
					"X-CSRFToken": csrftoken},
			body: JSON.stringify({})

		})

		.then(data => {
			
			
			
			location.reload();
			
			verificarFiltros();
		})

})



btnAplicar.addEventListener("click",()=>{

	localStorage.setItem ("filtrosSeleccionadosCookie", JSON.stringify(filtrosSeleccionados));

		fetch('/perdidas/',
		{
			method : 'POST',
			headers: {'Content-Type': 'application/json',
					"X-CSRFToken": csrftoken},
			body: JSON.stringify(filtrosSeleccionados)

		})

		.then(data => {
			
			location.reload();
			
			
		})

		

		
		
})















