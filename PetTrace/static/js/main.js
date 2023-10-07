 import { listaBarrios } from './cargarBarrios.js';


const publis = document.querySelectorAll(".verPubli");
const publiModal = document.querySelectorAll(".publi-modelo");
const btnCerrar = document.querySelector("#btn-cerrar");
const btnCerrarModal = document.querySelector("#icon-cancel");
const agregarPubli = document.querySelector(".agregarPubli");
const main = document.getElementsByTagName("main");




const btnAgregarPubli = document.querySelector("#agregar");





publis.forEach( publi => {
	publi.addEventListener("click",e =>{

	let idpubli = e.target.parentNode.children[0].value;
	main[0].classList.add("fondo-oscuro");

	publiModal[idpubli-1].style.display = "flex";
	publiModal[idpubli-1].style.position = "fixed"

	btnCerrar.addEventListener("click",()=>{
		publiModal[idpubli-1].style.display = "none";
		main[0].classList.remove("fondo-oscuro");

	});

	
	
	
});







btnAgregarPubli.addEventListener("click", ()=>{
	

	
	
		
		
		
		agregarPubli.style.display = "flex";
		agregarPubli.style.position = "fixed";
		btnAgregarPubli.classList.add("menu-span-focus");
		main[0].classList.add("fondo-oscuro");
		
	
		
		
	

	btnCerrarModal.addEventListener("click", ()=>{
		agregarPubli.style.display = "none";
		btnAgregarPubli.classList.remove("menu-span-focus");
		main[0].classList.remove("fondo-oscuro");

	})

	
	

}
)



agregarPubli.addEventListener("submit", ()=>{
	agregarPubli.style.display = "none";
	agregarPubli.style.position = "static";
	btnAgregarPubli.classList.remove("menu-span-focus");

}
)

window.addEventListener("click",function(event) {
	if (event.target == agregarPubli) {
	  agregarPubli.style.display = "none";
	}
  });


	



});









/** PREVISUALIZAR IMAGEN **/



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





//VACUNAS PERROS

function seleccionarVacunas(){

var especie = document.getElementById('especiemas');
var vacunasmas = document.getElementById('vacunasmas');


vacunasmas.innerHTML="";

if(especie.value == "perro"){

	vacunasmas.innerHTML = 
	
	' <option value="moquillo">moquillo</option> ' + 
	'<option value="parvovirosis">parvovirosis</option> ' +
	' <option value="pentavalente">pentavalente</option>' +
	' <option value="coranavirus canino">coranavirus canino</option>' +
	' <option value="rabia">rabia</option>' +
	' <option value="tos de perreras">tos de perreras</option>' 



	

} else if(especie.value == "gato"){

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






/** --------------------FILTRAR--------------------------------
 */




const btnFiltrar = document.querySelector("#filtrar");
const filtrosBox = document.querySelector(".filtros-box");

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



// FIlTROS




const selectFiltros = document.querySelectorAll(".categoria-filtro");
const subfiltrosBox = document.querySelector("#subfiltros-box")

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
					option.addEventListener("change", function() {
						
						if (this.checked) {
							filtroColor.forEach(otherOption => {
								if (otherOption !== this) {
									otherOption.checked = false;
								}
							});
							 subfiltrosBox.style.display = "none";
						}

						

					let colorElegido = null;

					filtroColor.forEach(checkbox => {
						if(checkbox.checked){
							colorElegido = checkbox.value;
							alert(colorElegido);
						}
						

					
					})

					


					});
				});
			
			
			



			
			
		} else if (idSelectFiltro === "filtro-raza") {
			subfiltrosBox.innerHTML = ""
			subfiltrosBox.innerHTML = 
				'<div class="categoria-filtro"><label for="PastorAleman"><input id="PastorAleman" value="Pastor Alemán" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Pastor Alemán</label></div>'+
				'<div class="categoria-filtro"><label for="Doberman"><input id="Doberman" value="Doberman" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Doberman</label></div>'+
				'<div class="categoria-filtro"><label for="BoyeroDeBerna"><input id="BoyeroDeBerna" value="Boyero de Berna" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Boyero de Berna</label></div>'+
				'<div class="categoria-filtro"><label for="Rottweiler"><input id="Rottweiler" value="Rottweiler" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Rottweiler</label></div>'+
				'<div class="categoria-filtro"><label for="Akita"><input id="Akita" value="Akita" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Akita</label></div>'+
				'<div class="categoria-filtro"><label for="LabradorRetriever"><input id="LabradorRetriever" value="Labrador retriever" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Labrador retriever</label></div>'+
				'<div class="categoria-filtro"><label for="GoldenRetriever"><input id="GoldenRetriever" value="Golden retriever" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Golden retriever</label></div>'+
				'<div class="categoria-filtro"><label for="BorderCollie"><input id="BorderCollie" value="Border collie" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Border collie</label></div>'+
				'<div class="categoria-filtro"><label for="SiberianHusky"><input id="SiberianHusky" value="Siberian Husky" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Siberian Husky</label></div>'+
				'<div class="categoria-filtro"><label for="BulldogIngles"><input id="BulldogIngles" value="Bulldog inglés" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Bulldog inglés</label></div>'+
				'<div class="categoria-filtro"><label for="Beagle"><input id="Beagle" value="Beagle" class="subfiltros-checkbox subfiltros-raza-checkbox" type="checkbox">Beagle</label></div>';
		
			let filtroRaza = document.querySelectorAll('.subfiltros-raza-checkbox');
		
			filtroRaza.forEach(option => {
				option.addEventListener("change", function() {
					if (this.checked) {
						filtroRaza.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
							}
						});
						subfiltrosBox.style.display = "none";
					}
		
					let razaElegida = null;
					filtroRaza.forEach(checkbox => {
						if (checkbox.checked) {
							razaElegida = checkbox.value;
							alert(razaElegida);
						}
					});
				});
			});
		
		} else if (idSelectFiltro === "filtro-especie") {

			subfiltrosBox.innerHTML = ""
			subfiltrosBox.innerHTML = 
				'<div class="categoria-filtro"><label for="Perro"><input id="Perro" value="Perro" class="subfiltros-checkbox subfiltros-especie-checkbox" type="checkbox">Perro</label></div>'+
				'<div class="categoria-filtro"><label for="Gato"><input id="Gato" value="Gato" class="subfiltros-checkbox subfiltros-especie-checkbox" type="checkbox">Gato</label></div>';
		
			let filtroEspecie = document.querySelectorAll('.subfiltros-especie-checkbox');
		
			filtroEspecie.forEach(option => {
				option.addEventListener("change", function() {
					if (this.checked) {
						filtroEspecie.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
							}
						});
						subfiltrosBox.style.display = "none";
					}
		
					let especieElegida = null;
					filtroEspecie.forEach(checkbox => {
						if (checkbox.checked) {
							especieElegida = checkbox.value;
							alert(especieElegida);
						}
					});
				});
			});



			
			
		} else if(idSelectFiltro === "filtro-localidad"){

			subfiltrosBox.innerHTML = ""

			let localidades = ["Usaquen","Chapinero","Santa fe","San Cristobal","Usme","Tunjuelito","Bosa","Kennedy","Fontibon",
			"Engativa","Suba","Barrios Unidos",
			"Teusaquillo","Los Martires","Antonio Nariño","Puente Aranda","La candelaria","Rafael Uribe","Ciudad bolivar"];


			for (var i = 0; i < localidades.length; i++) {
				var div = document.createElement("div");
				div.className = "categoria-filtro";
				
				var label = document.createElement("label")
				var input = document.createElement("input")
				
				input.type = 'checkbox'
				input.id = localidades[i].toLowerCase().replace(/\s/g, " ");
				input.value = localidades[i].toLowerCase().replace(/\s/g, " ");
				input.classList.add('subfiltros-checkbox');
				input.classList.add('subfiltros-localidad-checkbox');
				
				label.htmlFor = input.id;
				label.textContent = localidades[i]
				
				subfiltrosBox.appendChild(div);
				div.appendChild(label);
				label.appendChild(input);




			  }
			  let filtroLocalidad = document.querySelectorAll('.subfiltros-localidad-checkbox');
		
			filtroLocalidad.forEach(option => {
				option.addEventListener("change", function() {
					if (this.checked) {
						filtroLocalidad.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
							}
						});
						subfiltrosBox.style.display = "none";
					}
		
					let localidadElegida = null;
					filtroLocalidad.forEach(checkbox => {
						if (checkbox.checked) {
							localidadElegida = checkbox.value;
							alert(localidadElegida);
						}
					});
				});
			});

			const barrios = listaBarrios();
			
		} else if(idSelectFiltro === "filtro-barrio"){
			console.log(barrios.barriosAntonioNarino);
		}
		

																	
	

	})











})
