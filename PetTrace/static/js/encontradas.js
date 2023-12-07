

import { listaBarrios,cargarBarrios } from "./cargarBarrios.js";


const barrios=listaBarrios();





const publis = document.querySelectorAll(".verPubli");
const publiModal = document.getElementById("publi-modelo");
const contenedorPubliModal = document.querySelectorAll(".contenedor-modelo-encontradas");


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
			
			seleccionarRaza(especie,'razamas');
		} else{
			
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



	const SelectCargarBarrios = document.getElementById("localidades");
	SelectCargarBarrios.addEventListener("change", ()=>{
		cargarBarrios("localidades");
	})

	const SelectCargarBarriose = document.getElementById("localidadese");
	SelectCargarBarriose.addEventListener("change", ()=>{
		cargarBarrios("localidadese");
	})

	

	







// ----------CONSULTA PARA PREVISUALIZACION DE INFORMACIÓN A EDITAR-----------------

btnEditarPubli.forEach( btn => {
	btn.addEventListener("click",e =>{


		
		var idpubli = e.target.closest(".publi").getAttribute("data-id");
		

		const url = `/informacionPubli/${idpubli}/`

		

		fetch(url,{
			method: "GET",
		})
		.then(response => response.json())
		.then(publicacion => {

		document.getElementById('editarPubli').action = `/editarPubli/${idpubli}/`;  

			document.getElementById("imgmas6").src = publicacion.data.mascota.img1;
			document.getElementById("imgmas7").src = publicacion.data.mascota.img2;
			document.getElementById("imgmas8").src = publicacion.data.mascota.img3;
			document.getElementById("imgmas9").src = publicacion.data.mascota.img4;
			document.getElementById("imgmas10").src = publicacion.data.mascota.img5;
			

			
			

			const especie = document.getElementById("especiemase");
			for (let i = 0; i < especie.options.length; i++) {
				const option = especie.options[i];
				if (option.value === publicacion.data.mascota.especiemas) {
					option.selected = true;
				}
			}
			 
			seleccionarEspecie('especiemase');
			const raza = document.getElementById("razamase");
			for (let i = 0; i < raza.options.length; i++) {
				const option = raza.options[i];
				if (option.value == publicacion.data.mascota.razamas) {
					option.selected = true;
				}
			}

			const tamaño = document.getElementById("tamañomase");
			for (let i = 0; i < tamaño.options.length; i++) {
				const option = tamaño.options[i];
				if (option.value == publicacion.data.mascota.tamañomas) {
					option.selected = true;
				}
			}

			const sexo = document.getElementById("sexomase");
			for (let i = 0; i < sexo.options.length; i++) {
				const option = sexo.options[i];
				if (option.value == publicacion.data.mascota.sexomas) {
					option.selected = true;
				}
			}

			const color = document.getElementById("colormase");
			for (let i = 0; i < color.options.length; i++) {
				const option = color.options[i];
				if (option.value == publicacion.data.mascota.colormas) {
					option.selected = true;
				}
			}

			document.getElementById("marcasmase").value = publicacion.data.mascota.marcasmas;
			document.getElementById("accesoriosmase").value = publicacion.data.mascota.accesoriosmas;
			document.getElementById("enfermedadesmase").value = publicacion.data.estado_salud.enfermedadesmas;


			const esterilizacion = document.getElementById("esterilizacionmase") ;
			for (let i = 0; i < esterilizacion.options.length; i++) {
				const option = esterilizacion.options[i];
				if (option.value == publicacion.data.estado_salud.esterilizacionmas) {
					option.selected = true;
				}
			}

			
			

			
			const localidadEncuentro = document.getElementById("localidadese");
			 
			
			for (let i = 0; i < localidadEncuentro.options.length; i++) {
				const option = localidadEncuentro.options[i];
				if (option.value == publicacion.data.publicacion.localidadEncuentro) {
					option.selected = true;
				}
			}

			cargarBarrios('localidadese');

			const barrioEncuentro = document.getElementById("barriose");
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
			


			document.getElementById("nombreDueñoe").innerHTML = publicacion.data.usuario.nombre;
			document.getElementById("numeroDueñoe").innerHTML = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoe").innerHTML = publicacion.data.usuario.email;



			


		});


		


	if(e.target.tagName === 'I' || e.target.tagName === 'P' || e.target.tagName === 'DIV' ){

		editarPubli.style.display = "flex";
		contenedorPubliModal[1].style.display = "flex";

		btnCerrarModal.forEach(equis => {
			equis.addEventListener("click",()=>{
				editarPubli.style.display = "none";
				contenedorPubliModal[1].style.display = "none";

				
		
			});

			});

			}

		});

	});


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






























