import { listaBarrios,cargarBarrios } from "./cargarBarrios.js";


const barrios=listaBarrios();





const publis = document.querySelectorAll(".verPubli");
const publiModal = document.getElementById("publi-modelo");


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
						'Golder retriever','Border collie','Siberian husky','Bulldog inglés','Beagle','Criollo'];


	var razasGatos = ['Maine coon','Bengalí','Persa','Himalayo','Britanico de pelo corto',
	'egipcio','siamés','Fold escocés','Ragdoll','Angora','Criollo'];

	
	
	
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
	SelectCargarBarrios.addEventListener("click", ()=>{
		cargarBarrios("localidades");
	})

	const SelectCargarBarriose = document.getElementById("localidadese");
	SelectCargarBarriose.addEventListener("click", ()=>{
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

			document.getElementById("recompensam").textContent = publicacion.data.publicacion.recompensa;
			
			document.getElementById("nombreDueño").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueño").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueño").textContent = publicacion.data.usuario.email;
			
			

		})
		

	//let idpubli = e.target.parentNode.children[0].value;
	main[0].classList.add("fondo-oscuro");

		publiModal.style.display = "flex";
	publiModal.style.position = "fixed";

	

		btnCerrar.addEventListener("click",()=>{
		publiModal.style.display = "none";
		main[0].classList.remove("fondo-oscuro");
		
		});


	
		
	
});

});


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
			

			
			document.getElementById("nombremase").value = publicacion.data.mascota.nombremas;

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

			document.getElementById("edadmase").value = publicacion.data.mascota.edadmas;
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

			document.getElementById("medicamentosmase").value = publicacion.data.estado_salud.medicamentosmas;


			const selectVacunas = document.getElementById("vacunasmase");
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
			

			
			const localidadExtravio = document.getElementById("localidadese");
			 
			
			for (let i = 0; i < localidadExtravio.options.length; i++) {
				const option = localidadExtravio.options[i];
				if (option.value == publicacion.data.publicacion.localidadExtravio) {
					option.selected = true;
				}
			}

			cargarBarrios('localidadese');

			const barrioExtravio = document.getElementById("barriose");
			for (let i = 0; i < barrioExtravio.options.length; i++) {
				const option = barrioExtravio.options[i];
				if (option.value == publicacion.data.publicacion.barrioExtravio) {
					option.selected = true;
				}
			}

			

			const fechaExtravio = document.getElementById("fechaExtravioe");
			const fecha = new Date(publicacion.data.publicacion.fechaExtravio);
			fechaExtravio.value = fecha.toISOString().slice(0, 16);
			


			document.getElementById("recompensae").value = publicacion.data.publicacion.recompensa;


		});


		main[0].classList.add("fondo-oscuro");


	if(e.target.tagName === 'I' || e.target.tagName === 'P' || e.target.tagName === 'DIV' ){
		editarPubli.style.display = "flex";
		editarPubli.style.position = "fixed";

		btnCerrarModal.forEach(equis => {
			equis.addEventListener("click",()=>{
				editarPubli.style.display = "none";
				main[0].classList.remove("fondo-oscuro");
		
			});

			});

			}

		});

	});


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
			main[0].classList.add("fondo-oscuro");
	
		btnCancelar.forEach( btn => {
			btn.addEventListener("click",e =>{
		
	
				eliminarPubli.style.display = "none";
				main[0].classList.remove("fondo-oscuro");
			
	
	
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

				eliminarPubli.style.display = "none";
				main[0].classList.remove("fondo-oscuro");
				

	
			});
	
		});


		






	});
});






// ------------------EDITAR PUBLICACION----------------------------



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

	
















// -------------AGREGAR PUBLICACION-----------



btnAgregarPubli.addEventListener("click", ()=>{
	

	
	
		
		
		
		agregarPubli.style.display = "flex";
		agregarPubli.style.position = "fixed";
		btnAgregarPubli.classList.add("menu-span-focus");
		main[0].classList.add("fondo-oscuro");
		
	
		
		
	

	btnCerrarModal.forEach( equis => {
	equis.addEventListener("click", ()=>{
		agregarPubli.style.display = "none";
		btnAgregarPubli.classList.remove("menu-span-focus");
		main[0].classList.remove("fondo-oscuro");

	});

});

	
	

}
);



agregarPubli.addEventListener("submit", ()=>{
	agregarPubli.style.display = "none";
	agregarPubli.style.position = "static";
	btnAgregarPubli.classList.remove("menu-span-focus");

}
);




	













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
 













const localidades = ["Antonio Nariño","Barrios Unidos","Bosa","Candelaria","Chapinero","Ciudad Bolivar","Engativa","Fontibon","Kennedy",
"Los Martires","Puente Aranda","Rafel uribe","San Cristobal","Santa Fe","Suba","Teusaquillo","Tunjuelito","Usaquen","Usme"];

const valoresLocalidades = ["barriosAntonioNarino","barriosBarriosUnidos", "barriosBosa", "barriosCandelaria", 
"barriosChapinero", "barriosCiudadBolivar", "barriosEngativa", "barriosFontibon", "barriosKennedy", 
"barriosMartires",  "barriosPuenteAranda", "barriosRafaelUribe", "barriosSanCristobal", 
"barriosSantaFe", "barriosSuba", "barriosTeusaquillo", "barriosTunjuelito", "barriosUsaquen", "barriosUsme"];






const selectFiltros = document.querySelectorAll(".categoria-filtro");
const subfiltrosBox = document.querySelector("#subfiltros-box")

var filtrosSeleccionados = {color:{},raza:{},especie:{},localidad:{},barrio:{}};

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
				label.textContent = lista[i]
				
				subfiltrosBox.appendChild(div);
				div.appendChild(label);
				label.appendChild(input);
}
}



function funFiltroEspecie(){
	subfiltrosBox.innerHTML = "";
			subfiltrosBox.innerHTML = 
				'<div class="categoria-filtro"><label for="Perro"><input id="Perro" value="perro" class="subfiltros-checkbox subfiltros-especie-checkbox" type="checkbox">Perro</label></div>'+
				'<div class="categoria-filtro"><label for="Gato"><input id="Gato" value="gato" class="subfiltros-checkbox subfiltros-especie-checkbox" type="checkbox">Gato</label></div>';
		
			let filtroEspecie = document.querySelectorAll('.subfiltros-especie-checkbox');
		
			filtroEspecie.forEach(option => {

				if (filtrosSeleccionados.especie[option.value]) {
					option.checked = true;
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
	}

	option.addEventListener("change", function() {
		
		if (this.checked) {
			filtrosSeleccionados.localidad = {};
			filtrosSeleccionados.localidad[this.value] = true;
			 
			filtroLocalidad.forEach(otherOption => {
				if (otherOption !== this) {
					otherOption.checked = false;
					
				}
			});
			 subfiltrosBox.style.display = "none";
			 
		} 

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
				
			'<div class="categoria-filtro"><label for="Rojo"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #f66151;"></i><input id="Rojo" value="rojo" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Rojizo</label></div>'+
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
					}

					option.addEventListener("change", function() {

						
						
						if (this.checked) {
							filtrosSeleccionados.color = {};
							filtrosSeleccionados.color[this.value] = true;
							 
							filtroColor.forEach(otherOption => {
								if (otherOption !== this) {
									otherOption.checked = false;
									
								}
							});
							 subfiltrosBox.style.display = "none";
						} 


					

					


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


				
				});
	


			});


		
		} else if (idSelectFiltro === "filtro-especie") {

			
			funFiltroEspecie();


			
			
		} else if(idSelectFiltro === "filtro-localidad"){

			
			funFiltroLocalidad();
			
			
		} else if(idSelectFiltro === "filtro-barrio"){

			subfiltrosBox.innerHTML = ""


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

				});

			});


			}


			
	

			
			
			
																	
		} else if(idSelectFiltro === "filtro-fechaPubli"){


			subfiltrosBox.innerHTML = "";

			var div = document.createElement("div");
			div.className = "categoria-filtro";


			label = document.createElement("label");
			input = document.createElement("input");
			input.type = 'date';
			input.id = "fechaPubli-filtro";
			input.classList.add('subfiltros-checkbox');
			input.classList.add('subfiltros-fechaPubli-checkbox');
			

			subfiltrosBox.appendChild(div);
			div.appendChild(label);
			div.appendChild(input);

		}













	});



});


const btnFiltrar = document.querySelector("#filtrar");
const btnFiltros = document.querySelector("#btnFiltros");


btnFiltrar.addEventListener("click", (e) => {
	e.stopPropagation();

	


    if (!btnFiltrar.classList.contains("menu-span-focus")) {
		
        btnFiltrar.classList.add("menu-span-focus");
		filtrosBox.style.display = "flex";
		subfiltrosBox.addEventListener("click",()=>{
			
			console.log(filtrosSeleccionados)
			
			for(let clave in filtrosSeleccionados){
				let valor = Object.keys(filtrosSeleccionados[clave][0]);

				console.log(clave + ": " + valor);
				 if(!valor == null){
					btnFiltros.style.display = "flex";
				}  
			}
			
		})

		


		
    }else{
		
		btnFiltrar.classList.remove("menu-span-focus");
		filtrosBox.style.display = "none";
		btnFiltros.style.display = "none";
		subfiltrosBox.style.display = "none";
		
	}

	/* document.addEventListener("click", (event) => {

		
			if(!filtrosBox.contains(event.target)){
				filtrosBox.style.display = "none";
				subfiltrosBox.style.display = "none";
				btnFiltrar.classList.remove("menu-span-focus");

			} 
		

	}); */

    
});



