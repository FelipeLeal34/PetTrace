import { cargarBarrios } from "./cargarBarrios.js";




const publis = document.querySelectorAll(".verPubli");
const publiModal = document.getElementById("publi-modelo");
const editarPubli = document.getElementById("editarPubli");
const editarPubli = document.getElementById("editarPubli");
const btnCerrar = document.querySelector("#btn-cerrar");

// icono ṕara cerrar formulario de agregar publicacion 
const btnCerrarModal = document.querySelector("#icon-cancel");
const agregarPubli = document.querySelector("#agregarPubli");
const main = document.getElementsByTagName("main");




const btnAgregarPubli = document.querySelector("#agregar");

var filtrosBox = document.querySelector(".filtros-box");


// PETICION GET A LA BD PARA MOSTRAR LOS DATOS DE CADA PUBLICACICON EN UNA VENTANA MODAL


publis.forEach( publi => {
	publi.addEventListener("click",e =>{


		
		let idpubli = e.target.closest(".publi").getAttribute("data-id")
		console.log(e.target);

		const url = `/verPubliModal/${idpubli}/`

		

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
			document.getElementById("fechaExtraviom").textContent = publicacion.data.publicacion.fechaExtravio;
			document.getElementById("recompensam").textContent = publicacion.data.publicacion.recompensa;
			
			document.getElementById("nombreDueño").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueño").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueño").textContent = publicacion.data.usuario.email;
			
			
// ------------CONSULTA PARA EL FORMULARIO DE EDITAR---------



			
// ------------CONSULTA PARA EL FORMULARIO DE EDITAR---------




			/*document.getElementById("img2e").src = publicacion.data.mascota.img2;
			document.getElementById("img3e").src = publicacion.data.mascota.img3;
			document.getElementById("img4e").src = publicacion.data.mascota.img4;
			document.getElementById("img5e").src = publicacion.data.mascota.img5;*/
			/*document.getElementById("img2e").src = publicacion.data.mascota.img2;
			document.getElementById("img3e").src = publicacion.data.mascota.img3;
			document.getElementById("img4e").src = publicacion.data.mascota.img4;
			document.getElementById("img5e").src = publicacion.data.mascota.img5;*/

			
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
			let fecha = publicacion.data.publicacion.fechaExtravio;
			fechaExtravio.value = new Date(fecha).toISOString().slice(0, 16);


			document.getElementById("recompensae").value = publicacion.data.publicacion.recompensa;




			





















			
		  
		})
		

	//let idpubli = e.target.parentNode.children[0].value;
	main[0].classList.add("fondo-oscuro");


	if(e.target.tagName === 'I' || e.target.tagName === 'P' || e.target.tagName === 'DIV' ){
		editarPubli.style.display = "flex";
		editarPubli.style.position = "fixed";
	} else{
		publiModal.style.display = "flex";
	publiModal.style.position = "fixed";
	btnCerrar.addEventListener("click",()=>{
		publiModal.style.display = "none";
		main[0].classList.remove("fondo-oscuro");

	});


	}
	





	

	
	
	
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
		
	
		
		
	

	btnCerrarModal.addEventListener("click", ()=>{
		agregarPubli.style.display = "none";
		btnAgregarPubli.classList.remove("menu-span-focus");
		main[0].classList.remove("fondo-oscuro");

	});

	
	

}
);



agregarPubli.addEventListener("submit", ()=>{
	agregarPubli.style.display = "none";
	agregarPubli.style.position = "static";
	btnAgregarPubli.classList.remove("menu-span-focus");

}
);

window.addEventListener("click",function(event) {
	if (event.target == agregarPubli) {
	  agregarPubli.style.display = "none";
	}
  });


	













/** ------------------PREVISUALIZAR IMAGEN EN EL FORMULARIO------------------------ **/



const inputs = document.querySelectorAll(".input-file");
const inputsText = document.querySelectorAll(".input-text");


inputs.forEach(input => {
	input.addEventListener("change", e =>{
	let id = input.id.charAt(input.id.length -1) - 1;
		if(e.target.files[0]) {
			const reader = new FileReader();
			reader.onload = function (e) {
			let img = e.target.result;	
			inputsText[id].innerHTML= "<img src='"+img+"'>";
			}

			reader.readAsDataURL(e.target.files[0]);

			

		} else{
			inputsText[id].innerHTML = "<span class='icon-upload'></span> <p>click para subir imagen</p>"
		}
})


	})





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


// ------------- RAZAS QUE SE MUESTRAN DE ACUERDO A LA ESPECIE DE LA MASCOTA -----------


function seleccionarRaza(especie,idRaza){

	

	var razamas = document.getElementById(idRaza);

	razamas.innerHTML="";

if(especie == "perro"){

	var razasPerros = ['Pastor aleman','Doberman','Boyero de berna','Rottweiler','Akita','Labrador retriever',
						'Golder retriever','Border collie','Siberian husky','Bulldog inglés','Beagle','Criollo'];

	for(let i = 0 ; i < razasPerros.length; i++){
		let option = document.createElement('option');
		option.text = razasPerros[i];
		option.value = razasPerros[i];
		razamas.add(option);

	}

	

} else{

	var razasGatos = ['Maine coon','Bengalí','Persa','Himalayo','Britanico de pelo corto',
	'egipcio','siamés','Fold escocés','Ragdoll','Angora','Criollo'];

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






// ----------AL HACER CLICK EN EL LABEL SE DESPLIEGA EL SELECT-------


function mostrarSelect(id) {
	var select = document.getElementById(id);
	if (select.style.display === "none") {
		select.style.display = "block";
		setTimeout(() => {
			select.style.opacity = "1";
		}, 10); // Retrasamos la aparición para que la animación sea visible
	} else {
		select.style.opacity = "0";
		setTimeout(() => {
			select.style.display = "none";
		}, 300); // Retrasamos la desaparición para que la animación sea visible
	}
}






/**
	 --------------------FILTRAR--------------------------------
 */




const btnFiltrar = document.querySelector("#filtrar");


btnFiltrar.addEventListener("click", (e) => {
	e.stopPropagation();
    if (!btnFiltrar.classList.contains("menu-span-focus")) {
        btnFiltrar.classList.add("menu-span-focus");
		filtrosBox.style.display = "flex";
		
    }else{
		btnFiltrar.classList.remove("menu-span-focus");
		filtrosBox.style.display = "none";
		
	}

    
});

const selectFiltros = document.querySelectorAll(".categoria-filtro");
const subfiltrosBox = document.querySelector("#subfiltros-box")

selectFiltros.forEach(selectFiltro =>{
	selectFiltro.addEventListener("click", ()=>{
		
		let idSelectFiltro = selectFiltro.id
		let categoriaFiltro = document.getElementById(idSelectFiltro);
		
		selectFiltro.style.position = "relative";
		subfiltrosBox.style.display = "flex";
		if(idSelectFiltro === "filtro-color"){
			subfiltrosBox.innerHTML = 
				
			'<div class="categoria-filtro"><label for="Rojo"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #f66151;"></i><input id="Rojo" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Rojizo</label></div>'+
			'<div class="categoria-filtro"><label for="Naranja"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #ff7800;"></i><input id="Naranja" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Naranja</label></div>'+
			'<div class="categoria-filtro"><label for="Amarillo"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #f6d32d;"></i><input id="Amarillo" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Amarillo</label></div>'+
			'<div class="categoria-filtro"><label for="Dorado"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #d4af37;"></i><input id="Dorado" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Dorado</label></div>'+
			'<div class="categoria-filtro"><label for="Gris"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #77767b;"></i><input id="Gris" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Gris</label></div>'+
			'<div class="categoria-filtro"><label for="Marron"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #865e3c;"></i><input id="Marron" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Marron</label></div>'+
			'<div class="categoria-filtro"><label for="Blanco"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #f6f5f4;"></i><input id="Blanco" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Blanco</label></div>'+
			'<div class="categoria-filtro"><label for="Negro"><i class="fa-solid fa-droplet subfiltros-color-icon" style="color: #000;"></i><input id="Negro" class="subfiltros-checkbox subfiltros-color-checkbox" type="checkbox">Negro</label></div>';

			
				const checkboxOptions = document.querySelectorAll(".subfiltros-color-checkbox");
			
				checkboxOptions.forEach(option => {
					option.addEventListener("change", function() {
						
						if (this.checked) {
							checkboxOptions.forEach(otherOption => {
								if (otherOption !== this) {
									otherOption.checked = false;
								}
							});
							subfiltrosBox.style.display = "none";
						}
					});
				});
			
			
			



			
			
		} else if(idSelectFiltro == "filtro-raza"){

			subfiltrosBox.innerHTML = 
			
			'<div class="categoria-filtro"><p>Pastor alemán</p></div>'+
			' <div class="categoria-filtro"><p>Doberman</p> </div>'+
			' <div class="categoria-filtro"><p>Boyero de Berna</p> </div>'+
			'<div class="categoria-filtro"><p>Rottweiler</p> </div>'+
			' <div class="categoria-filtro"><p>Akita</p> </div>'+
		
			' <div class="categoria-filtro"><p>Labrador retriever</p> </div>'+
			' <div class="categoria-filtro"><p>Golden retriever</p> </div>'+
			'<div class="categoria-filtro"><p>Border collie</p></div>'+
			'<div class="categoria-filtro"><p>Siberian Husky</p></div>'+
			'<div class="categoria-filtro"><p>Bulldog inglés</p></div>'+
			'<div class="categoria-filtro"><p>Beagle</p></div>'
		
 

			}
		})


	})










 
