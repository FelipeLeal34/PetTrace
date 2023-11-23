const publi = document.querySelectorAll(".verPubli");
const publiModal = document.querySelector(".publi-modelo");
const btnCerrar = document.querySelector("#btn-cerrar");





publi[0].addEventListener("click",()=>{
	publiModal.style.display = "block";



});

btnCerrar.addEventListener("click",()=>{
	publiModal.style.display = "none";
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

var especie = document.getElementById('especiemas').value;
var vacunasmas = document.getElementById('vacunasmas');

if(especie == "perro"){{
	vacunasmas.innerHTML = '<option value="">Seleccione una</option> <option value="moquillo">moquillo</option> <option value="parvovirosis">parvovirosis</option> '

}








 
