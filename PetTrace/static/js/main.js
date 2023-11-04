import { listaBarrios } from "./cargarBarrios.js";


const barrios=listaBarrios();




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
 


function agregarCamposFiltros(){

	

	const categoriasFiltros = ["filtro-color","filtro-raza","filtro-especie","filtro-localidad","filtro-barrio","filtro-fechaPubli"];
	const iconosFiltros = ["fa-droplet","fa-paw","fa-dog","fa-map-location-dot","fa-house","fa-calendar-days"];
	const textosFiltros = ["Color","Raza","Especie","Localidad","Barrio","Fecha de publicación"];


	for(let j = 1; j<6 ; j++){
		let div = document.createElement("div");
		let i = document.createElement("i");
		let p = document.createElement("p");

		div.classList.add('categoria-filtro');
		div.id = categoriasFiltros[j];
		i.classList.add('fa-solid');
		i.classList.add(iconosFiltros[j]);
		p.textContent = textosFiltros[j];


		filtrosBox.appendChild(div);
		div.appendChild(i);
		div.appendChild(p);

		

		
	}
}


function eliminarCamposFiltros(){
	filtrosBox = "";
}*/




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






const localidades = ["Antonio Nariño","Barrios Unidos","Bosa","Candelaria","Chapinero","Ciudad Bolivar","Engativa","Fontibon","Kennedy",
"Los Martires","Puente Aranda","Rafel uribe","San Cristobal","Santa Fe","Suba","Teusaquillo","Tunjuelito","Usaquen","Usme"];

const valoresLocalidades = ["barriosAntonioNarino","barriosBarriosUnidos", "barriosBosa", "barriosCandelaria", 
"barriosChapinero", "barriosCiudadBolivar", "barriosEngativa", "barriosFontibon", "barriosKennedy", 
"barriosMartires",  "barriosPuenteAranda", "barriosRafaelUribe", "barriosSanCristobal", 
"barriosSantaFe", "barriosSuba", "barriosTeusaquillo", "barriosTunjuelito", "barriosUsaquen", "barriosUsme"];






const selectFiltros = document.querySelectorAll(".categoria-filtro");
const subfiltrosBox = document.querySelector("#subfiltros-box")

var filtrosSeleccionados = {color:{},raza:{},especie:{},localidad:{},barrio:{}};

function funFiltroLocalidad(){


	
	subfiltrosBox.innerHTML = ""




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
			console.log(filtrosSeleccionados);
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
							console.log(filtrosSeleccionados);
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
		
			/*filtroRaza.forEach(option => {
				option.addEventListener("change", function() {
					if (this.checked) {
						filtroRaza.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
							}
						});
						subfiltrosBox.style.display = "none";
					}
		
					
				});
			});*/

			filtroRaza.forEach(option => {

				if (filtrosSeleccionados.raza[option.value]) {
					option.checked = true;
				}

				option.addEventListener("change", function() {
					
					if (this.checked) {
						filtrosSeleccionados.raza = {};
						filtrosSeleccionados.raza[this.value] = true;
						console.log(filtrosSeleccionados);
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

			subfiltrosBox.innerHTML = ""
			subfiltrosBox.innerHTML = 
				'<div class="categoria-filtro"><label for="Perro"><input id="Perro" value="Perro" class="subfiltros-checkbox subfiltros-especie-checkbox" type="checkbox">Perro</label></div>'+
				'<div class="categoria-filtro"><label for="Gato"><input id="Gato" value="Gato" class="subfiltros-checkbox subfiltros-especie-checkbox" type="checkbox">Gato</label></div>';
		
			let filtroEspecie = document.querySelectorAll('.subfiltros-especie-checkbox');
		
			filtroEspecie.forEach(option => {

				if (filtrosSeleccionados.color[option.value]) {
					option.checked = true;
				}

				option.addEventListener("change", function() {
					
					if (this.checked) {
						filtrosSeleccionados.especie = {};
						filtrosSeleccionados.especie[this.value] = true;
						console.log(filtrosSeleccionados);
						filtroEspecie.forEach(otherOption => {
							if (otherOption !== this) {
								otherOption.checked = false;
								
							}
						});
						 subfiltrosBox.style.display = "none";
					} 

				});

			});



			
			
		} else if(idSelectFiltro === "filtro-localidad"){

			
			funFiltroLocalidad();
			
			
		} else if(idSelectFiltro === "filtro-barrio"){

			subfiltrosBox.innerHTML = ""


			let localidadSeleccionada = Object.keys(filtrosSeleccionados.localidad)[0];

			if(localidadSeleccionada == null){
				funFiltroLocalidad();
			} else{

				let listaBarrios = barrios[localidadSeleccionada];

				

			
			
			
			for(let i=0;i<listaBarrios.length;i++){




				//console.log(listaBarrios[i]);

				
				var div = document.createElement("div");
				div.className = "categoria-filtro";
				
				var label = document.createElement("label");
				var input = document.createElement("input");
				
				input.type = 'checkbox';
				input.id = listaBarrios[i].toLowerCase().replace(/\s/g, " ");
				input.value = listaBarrios[i].toLowerCase().replace(/\s/g, " ");
				input.classList.add('subfiltros-checkbox');
				input.classList.add('subfiltros-barrio-checkbox');
				
				label.htmlFor = input.id;
				label.textContent = listaBarrios[i]
				
				subfiltrosBox.appendChild(div);
				div.appendChild(label);
				label.appendChild(input);
			

			
					} 

			let filtroBarrio = document.querySelectorAll('.subfiltros-barrio-checkbox');
		
			filtroBarrio.forEach(option => {

				if (filtrosSeleccionados.barrio[option.value]) {
					option.checked = true;
				}

				option.addEventListener("change", function() {
					
					if (this.checked) {
						filtrosSeleccionados.barrio = {};
						filtrosSeleccionados.barrio[this.value] = true;
						console.log(filtrosSeleccionados);
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
