import { listaBarrios,cargarBarrios } from "./cargarBarrios.js";




const barrios=listaBarrios();


// --------------------FILTRAR--------------------------------


const localidades = ["Antonio Nariño","Barrios Unidos","Bosa","Candelaria","Chapinero","Ciudad Bolivar","Engativa","Fontibon","Kennedy",
"Los Martires","Puente Aranda","Rafel uribe","San Cristobal","Santa Fe","Suba","Teusaquillo","Tunjuelito","Usaquen","Usme"];

const valoresLocalidades = ["barriosAntonioNarino","barriosBarriosUnidos", "barriosBosa", "barriosCandelaria", 
"barriosChapinero", "barriosCiudadBolivar", "barriosEngativa", "barriosFontibon", "barriosKennedy", 
"barriosMartires",  "barriosPuenteAranda", "barriosRafaelUribe", "barriosSanCristobal", 
"barriosSantaFe", "barriosSuba", "barriosTeusaquillo", "barriosTunjuelito", "barriosUsaquen", "barriosUsme"];



const sexos = ['Macho','Hembra'];
const tamaños = ['Pequeño','Mediano','Grande'];

var razasPerros = ['Pastor aleman','Doberman','Boyero de berna','Rottweiler','Akita','Labrador retriever',
'Golder retriever','Border collie','Siberian husky','Bulldog ingles','Beagle','Criollo'];


var razasGatos = ['Maine coon','Bengali','Persa','Himalayo','Britanico de pelo corto',
'egipcio','siames','Fold escoces','Ragdoll','Angora','Criollo'];


const iconCheckeado = document.createElement("i");
iconCheckeado.style.marginLeft = "10px";
iconCheckeado.classList.add("fa-solid");
iconCheckeado.classList.add("fa-check");

const filtrosBox = document.getElementById("filtros-box");

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

if(filtrosAplicados){
if(Object.keys(filtrosAplicados).length !== 0){
		Object.assign(filtrosSeleccionados,filtrosAplicados);
		btnFiltrar.classList.add("menu-span-focus");
		
		verificarFiltros();
	}
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
		
		filtrosBox.style.display = "flex";
		
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

