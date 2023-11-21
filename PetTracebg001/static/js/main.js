const publis = document.querySelectorAll(".verPubli");
const publiModal = document.getElementById("publi-modelo");
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




			/*document.getElementById("img2e").src = publicacion.data.mascota.img2;
			document.getElementById("img3e").src = publicacion.data.mascota.img3;
			document.getElementById("img4e").src = publicacion.data.mascota.img4;
			document.getElementById("img5e").src = publicacion.data.mascota.img5;*/

			
			document.getElementById("nombremase").value = publicacion.data.mascota.nombremas;
			/*document.getElementById("razamase").textContent = publicacion.data.mascota.razamas;
			document.getElementById("sexomase").textContent = publicacion.data.mascota.sexomas;
			document.getElementById("colormase").textContent = publicacion.data.mascota.colormas;
			document.getElementById("edadmase").textContent = publicacion.data.mascota.edadmas;
			document.getElementById("marcasmase").textContent = publicacion.data.mascota.marcasmas;
			document.getElementById("accesoriosmase").textContent = publicacion.data.mascota.accesoriosmas;
			document.getElementById("enfermedadesmase").textContent = publicacion.data.estado_salud.enfermedadesmas;
			document.getElementById("esterilizacionmase").textContent = publicacion.data.estado_salud.esterilizacionmas;
			document.getElementById("medicamentosmase").textContent = publicacion.data.estado_salud.medicamentosmas;
			document.getElementById("vacunasmase").textContent = publicacion.data.estado_salud.vacunasmas;
			document.getElementById("localidadExtravioe").textContent = publicacion.data.publicacion.localidadExtravio;
			document.getElementById("barrioExtravioe").textContent = publicacion.data.publicacion.barrioExtravio;
			document.getElementById("fechaExtravioe").textContent = publicacion.data.publicacion.fechaExtravio;
			document.getElementById("recompensae").textContent = publicacion.data.publicacion.recompensa;
			document.getElementById("nombreDueñoe").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueñoe").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoe").textContent = publicacion.data.usuario.email;*/
			
		  
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



btnOpciones = document.querySelectorAll(".trespuntos");
menuOpcionesPubli = document.querySelectorAll(".menuOpcionesPubli")

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
// ---------- VACUNAS QUE SE MUESTRAN DE ACUERDO A LA ESPECIE DE LA usuario

function seleccionarVacunas(especie,idVacunas){


var vacunasmas = document.getElementById(idVacunas);


vacunasmas.innerHTML="";

if(especie == "perro"){

	vacunasmas.innerHTML = 
	
	' <option value="moquillo">moquillo</option> ' + 
	'<option value="parvovirosis">parvovirosis</option> ' +
	' <option value="pentavalente">pentavalente</option>' +
	' <option value="coranavirus canino">coranavirus canino</option>' +
	' <option value="rabia">rabia</option>' +
	' <option value="tos de perreras">tos de perreras</option>' 



	

} else if(especie == "gato"){

	vacunasmas.innerHTML = 

	' <option value="moquillo">moquillo</option> ' + 
	'<option value="trivalente">trivalente</option> ' +
	' <option value="leucemia">leucemia</option>' +
	' <option value="gripe felina">gripe felina</option>' +
	' <option value="rabia">rabia</option>' +
	' <option value="Peritonitis infecciosa felina">Peritonitis infecciosa felina</option>' +
	' <option value="Clamidiosis felina">Clamidiosis felina</option>' 


} else{
	vacunasmas.innerHTML="";
}

}


// ------------- RAZAS QUE SE MUESTRAN DE ACUERDO A LA ESPECIE DE LA MASCOTA -----------


function seleccionarRaza(especie,idRaza){

	var razamas = document.getElementById(idRaza);

	razamas.innerHTML="";

if(especie == "perro"){

	razamas.innerHTML = 
	

	'<option value="pastoraleman">Pastor alemán</option>'+
	' <option value="doberman">Doberman </option>'+
	' <option value="boyerodeberna">Boyero de Berna </option>'+
	'<option value="rottweiler">Rottweiler </option>'+
	' <option value="akita">Akita </option>'+

	' <option value="labradorretriever">Labrador retriever </option>'+
	' <option value="goldenretriever">Golden retriever </option>'+
	'<option value="bordercollie">Border collie</option>'+
	'<option value="siberianhusky">Siberian Husky</option>'+
	'<option value="bulldogingles">Bulldog inglés</option>'+
	'<option value="criollo">Criollo</option>'+
	'<option value="beagle">Beagle</option>'

	

} else if(especie == "gato"){

	razamas.innerHTML = 

	' <option value="mainecoon">Maine coon</option> ' + 
	'<option value="bengali">Bengalí</option> ' +
	' <option value="persa">Persa</option>' +
	' <option value="himalayo">Himalayo</option>' +
	' <option value="britanico">Britanico de pelo corto</option>' +
	' <option value="egipcio">egipcio</option>' +
	' <option value="siames">siamés</option>' +
	' <option value="foldescoces">Fold escocés</option>' +
	' <option value="ragdoll">Ragdoll</option>' +
	' <option value="angora">Angora</option>' +
	' <option value="criollo">criollo</option>' 


} else{
	razamas.innerHTML="";
}

	
}



function seleccionarEspecie(idEspecie){


	
	var especie = document.getElementById(idEspecie).value;
	
		
	
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

/*--------------------Foto de perfil usuarios------------------------------*/
// Obtener la imagen y el modal
var img = document.getElementById("imgperfil");
var modal = document.getElementById("modal1");
var modalImg = document.getElementById("imgperfil-modal");
var span = document.getElementsByClassName("close")[0];

// Función para abrir el modal al hacer click en la imagen
function abrirModal() {
  modal.style.display = "block";
  modalImg.src = img.src;
}

// Asignar la función al evento click de la imagen y el data-modal
img.onclick = abrirModal;
modal.onclick = abrirModal;

// Función para cerrar el modal al hacer click en la X
function cerrarModal() {
  modal.style.display = "none";
}

// Asignar la función al evento click del span
span.onclick = cerrarModal;
