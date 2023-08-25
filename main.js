const publis = document.querySelectorAll(".verPubli");
const publiModal = document.querySelectorAll(".publi-modelo");
const btnCerrar = document.querySelector("#btn-cerrar");
const btnCerrarModal = document.querySelector(".icon-cancel");
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






/**
	 --------------------FILTRAR--------------------------------
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










 
