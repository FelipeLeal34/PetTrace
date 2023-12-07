

import { listaBarrios,cargarBarrios } from "./cargarBarrios.js";


const barrios=listaBarrios();





const publis = document.querySelectorAll(".verPubli");
const publiModal = document.getElementById("publi-modelo");
const contenedorPubliModal = document.querySelectorAll(".contenedor-modelo-adopciones");


//  ELEMENTOS PARA EDITAR PUBLICACION
const btnEditarPubli = document.querySelectorAll(".btnEditarPubli");
const editarPubli = document.getElementById("editarPubli");


    //   BOTONES PARA ELIMINAR PUBLICACION

const btnEliminarPubli = document.querySelectorAll(".btnEliminarPubli");
const eliminarPubli = document.querySelector("#eliminarPubli");
const btnAceptar = document.querySelectorAll(".btnAceptar");
const btnCancelar = document.querySelectorAll(".btnCancelar");




const btnCerrar = document.querySelector("#btn-cerrar");

// icono ṕara cerrar formulario de agregar publicacion 
const btnCerrarModal = document.querySelectorAll(".icon-cancel");
const agregarPubli = document.querySelector("#agregarPubli");
const main = document.getElementsByTagName("main");




const btnAgregarPubli = document.querySelector("#agregar");
const aAgregarPubli = document.querySelector("#aAgregar");

var filtrosBox = document.querySelector(".filtros-box");



const localidades = ["Antonio Nariño","Barrios Unidos","Bosa","Candelaria","Chapinero","Ciudad Bolivar","Engativa","Fontibon","Kennedy",
"Los Martires","Puente Aranda","Rafel uribe","San Cristobal","Santa Fe","Suba","Teusaquillo","Tunjuelito","Usaquen","Usme"];

const valoresLocalidades = ["barriosAntonioNarino","barriosBarriosUnidos", "barriosBosa", "barriosCandelaria", 
"barriosChapinero", "barriosCiudadBolivar", "barriosEngativa", "barriosFontibon", "barriosKennedy", 
"barriosMartires",  "barriosPuenteAranda", "barriosRafaelUribe", "barriosSanCristobal", 
"barriosSantaFe", "barriosSuba", "barriosTeusaquillo", "barriosTunjuelito", "barriosUsaquen", "barriosUsme"];



const sexos = ['Macho','Hembra'];
const tamaños = ['Pequeño','Mediano','Grande'];



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



	const vacunasmas = document.getElementById("labelvacunasmas");
	vacunasmas.addEventListener("click", ()=>{
		mostrarSelect("vacunasmas");
	})




	const SelectCargarBarrios = document.getElementById("localidades");
	SelectCargarBarrios.addEventListener("change", ()=>{
		cargarBarrios("localidades");
	})



	


// -------------AGREGAR PUBLICACION-----------


document.addEventListener("DOMContentLoaded", ()=>{



	if(aAgregarPubli){
		aAgregarPubli.addEventListener("click", (e)=>{
	
			mostrarFormularioAgregar(e);
		
		}
		);
	}
});



function mostrarFormularioAgregar(e){

	e.preventDefault();

	agregarPubli.style.display = "flex";
		contenedorPubliModal[1].classList.add('contenedor-modelo');
		btnAgregarPubli.classList.add("menu-span-focus");

	btnCerrarModal.forEach( equis => {
		equis.addEventListener("click", ()=>{
			agregarPubli.style.display = "none";
			contenedorPubliModal[1].classList.remove('contenedor-modelo');
			btnAgregarPubli.classList.remove("menu-span-focus");
			
	
		});
	
	});

	agregarPubli.addEventListener("submit", ()=>{
		agregarPubli.style.display = "none";
		agregarPubli.style.position = "static";
		btnAgregarPubli.classList.remove("menu-span-focus");
	
	}
	);
}



/** PREVISUALIZAR IMAGEN **/



const inputs = document.querySelectorAll(".input-file");
const inputsText = document.querySelectorAll(".input-text");




const iconUpload = document.querySelectorAll(".icon-upload");


//PARA CADA INPUT TIPO FILE



inputs.forEach(input => {
	input.addEventListener("change", e =>{
		
		let idCompleto = input.id;
		let ultimosDosDigitos = idCompleto.slice(-2);
		var id;

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




















