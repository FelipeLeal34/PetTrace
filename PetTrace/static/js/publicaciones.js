import { cargarBarrios } from "./cargarBarrios.js";


const publis = document.querySelectorAll(".verPubli");


//VENTANAS MODELO DE CADA APARTADO
const publiModalPerdidas = document.getElementById("publi-modelo-perdidas");
const publiModalEncontradas = document.getElementById("publi-modelo-encontradas");
const publiModalAdopciones = document.getElementById("publi-modelo-adopciones");

// FORMULARIO DE EDITAR DE CADA APARTADO

const editarPubliPerdidas = document.getElementById("editarPubliPerdidas");
const editarPubliEncontradas = document.getElementById("editarPubliEncontradas");
const editarPubliAdopciones = document.getElementById("editarPubliAdopciones");





// CONTENEDORES DE VENTANAS MODALES
const contenedorModalPerdidas = document.querySelectorAll(".contenedor-modelo-perdidas");
const contenedorModalEncontradas = document.querySelectorAll(".contenedor-modelo-encontradas");
const contenedorModalAdopciones = document.querySelectorAll(".contenedor-modelo-adopciones");




//ORDEN VENTANAS MODELO

/* 0 -> publicacion modelo 
1 -> agregar publicacion
2 -> editar publicacion
3 -> eliminar publicacion */




//  ELEMENTOS PARA EDITAR PUBLICACION
const btnEditarPubli = document.querySelectorAll(".btnEditarPubli");
const editarPubli = document.getElementById("editarPubli");


const btnCerrar = document.querySelector("#btn-cerrar");

// icono ṕara cerrar formulario de agregar publicacion 
const btnCerrarModal = document.querySelectorAll(".icon-cancel");
const agregarPubli = document.querySelector("#agregarPubli");
const main = document.getElementsByTagName("main");
var filtrosBox = document.querySelector(".filtros-box");



//	FUNCIONES DE FORMULARIOS

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


// ---------------CODIGO PARA MOSTRAR LA VENTANA MODAL-------------






const carrusel = document.querySelector(".carrusel");
let carruselSection = document.querySelectorAll(".carrusel-section");
let carruselSectionLast = carruselSection[carruselSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

carrusel.insertAdjacentElement('afterbegin',carruselSectionLast);

function next() {
	let carruselSectionFirst = document.querySelectorAll(".carrusel-section")[0];
	carrusel.style.marginLeft = "-200%";
	carrusel.style.transition = "all 0.5s";
	setTimeout(function(){
		carrusel.style.transition = "none";
		carrusel.insertAdjacentElement('beforeend',carruselSectionFirst);
			carrusel.style.marginLeft = "-100%";
	},500);
}

function before() {
	let carruselSection = document.querySelectorAll(".carrusel-section");
let carruselSectionLast = carruselSection[carruselSection.length - 1];
	carrusel.style.marginLeft = "0";
	carrusel.style.transition = "all 0.5s";
	setTimeout(function(){
		carrusel.style.transition = "none";
		carrusel.insertAdjacentElement('afterbegin',carruselSectionLast);
			carrusel.style.marginLeft = "-100%";
	},500);
}


btnRight.addEventListener('click', function(){
	next();
})


btnLeft.addEventListener('click', function(){
	before();
})




publis.forEach( publi => {
	publi.addEventListener("click",e =>{


		var idpubli = e.target.closest(".publi").getAttribute("data-id");
		var apartado = e.target.closest(".publi").getAttribute("data-apartado");


		
		var mensaje = {'apartado':apartado};
		const url = `/informacionPubli/${idpubli}/`;


		fetch(url,{
			method: "POST",
      headers: {'Content-Type': 'application/json',
      "X-CSRFToken": csrftoken},
      body: JSON.stringify(mensaje)
		})
		.then(response => response.json())
		.then(publicacion => {


			// ---------CONSULTA PARA LA VENTANA MODELO------------------

			if(apartado == 'perdidas'){

				document.getElementById("img2mP").src = publicacion.data.mascota.img2;
			document.getElementById("img3mP").src = publicacion.data.mascota.img3;
			document.getElementById("img4mP").src = publicacion.data.mascota.img4;
			document.getElementById("img5mP").src = publicacion.data.mascota.img5;

			
			document.getElementById("nombremasmP").textContent = publicacion.data.mascota.nombremas;
			document.getElementById("especiemasmP").textContent = publicacion.data.mascota.especiemas;
			document.getElementById("razamasmP").textContent = publicacion.data.mascota.razamas;
			document.getElementById("tamañomasmP").textContent = publicacion.data.mascota.tamañomas;
			document.getElementById("sexomasmP").textContent = publicacion.data.mascota.sexomas;
			document.getElementById("colormasmP").textContent = publicacion.data.mascota.colormas;
			document.getElementById("edadmasmP").textContent = publicacion.data.mascota.edadmas + " años";
			document.getElementById("marcasmasmP").textContent = publicacion.data.mascota.marcasmas;
			document.getElementById("accesoriosmasmP").textContent = publicacion.data.mascota.accesoriosmas;
			document.getElementById("enfermedadesmasmP").textContent = publicacion.data.estado_salud.enfermedadesmas;
			document.getElementById("esterilizacionmasmP").textContent = publicacion.data.estado_salud.esterilizacionmas;
			document.getElementById("medicamentosmasmP").textContent = publicacion.data.estado_salud.medicamentosmas;
			document.getElementById("vacunasmasmP").textContent = publicacion.data.estado_salud.vacunasmas;
			document.getElementById("localidadExtraviom").textContent = publicacion.data.publicacion.localidadExtravio;
			document.getElementById("barrioExtraviom").textContent = publicacion.data.publicacion.barrioExtravio;

			document.getElementById("fechaExtraviom").textContent = publicacion.data.publicacion.fechaExtravio; 
			document.getElementById("horaExtraviom").textContent = publicacion.data.publicacion.horaExtravio; 

			document.getElementById("recompensam").textContent = publicacion.data.publicacion.recompensa;
			
			document.getElementById("nombreDueñoP").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueñoP").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoP").textContent = publicacion.data.usuario.email;
			


			} else if(apartado == 'encontradas'){

				document.getElementById("img2mE").src = publicacion.data.mascota.img2;
			document.getElementById("img3mE").src = publicacion.data.mascota.img3;
			document.getElementById("img4mE").src = publicacion.data.mascota.img4;
			document.getElementById("img5mE").src = publicacion.data.mascota.img5;

			

			document.getElementById("especiemasmE").textContent = publicacion.data.mascota.especiemas;
			document.getElementById("razamasmE").textContent = publicacion.data.mascota.razamas;
			document.getElementById("tamañomasmE").textContent = publicacion.data.mascota.tamañomas;
			document.getElementById("sexomasmE").textContent = publicacion.data.mascota.sexomas;
			document.getElementById("colormasmE").textContent = publicacion.data.mascota.colormas;

			document.getElementById("marcasmasmE").textContent = publicacion.data.mascota.marcasmas;
			document.getElementById("accesoriosmasmE").textContent = publicacion.data.mascota.accesoriosmas;
			document.getElementById("enfermedadesmasmE").textContent = publicacion.data.estado_salud.enfermedadesmas;
			document.getElementById("esterilizacionmasmE").textContent = publicacion.data.estado_salud.esterilizacionmas;


			document.getElementById("localidadEncuentrom").textContent = publicacion.data.publicacion.localidadEncuentro;
			document.getElementById("barrioEncuentrom").textContent = publicacion.data.publicacion.barrioEncuentro;

			document.getElementById("fechaEncuentrom").textContent = publicacion.data.publicacion.fechaEncuentro; 
			document.getElementById("horaEncuentrom").textContent = publicacion.data.publicacion.horaEncuentro; 
			
			document.getElementById("nombreDueñoE").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueñoE").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoE").textContent = publicacion.data.usuario.email;






			} else{
			
				document.getElementById("img2mA").src = publicacion.data.mascota.img2;
			document.getElementById("img3mA").src = publicacion.data.mascota.img3;
			document.getElementById("img4mA").src = publicacion.data.mascota.img4;
			document.getElementById("img5mA").src = publicacion.data.mascota.img5;

			
			document.getElementById("nombremasmA").textContent = publicacion.data.mascota.nombremas;
			document.getElementById("especiemasmA").textContent = publicacion.data.mascota.especiemas;
			document.getElementById("razamasmA").textContent = publicacion.data.mascota.razamas;
			document.getElementById("tamañomasmA").textContent = publicacion.data.mascota.tamañomas;
			document.getElementById("sexomasmA").textContent = publicacion.data.mascota.sexomas;
			document.getElementById("colormasmA").textContent = publicacion.data.mascota.colormas;
			document.getElementById("edadmasmA").textContent = publicacion.data.mascota.edadmas + " años";
			document.getElementById("personalidadmasmA").textContent = publicacion.data.mascota.personalidadmas;
			document.getElementById("entrenamientomasmA").textContent = publicacion.data.mascota.entrenamientomas;
			document.getElementById("socializacionmasmA").textContent = publicacion.data.mascota.socializacionmas;
			document.getElementById("enfermedadesmasmA").textContent = publicacion.data.estado_salud.enfermedadesmas;
			document.getElementById("esterilizacionmasmA").textContent = publicacion.data.estado_salud.esterilizacionmas;
			document.getElementById("medicamentosmasmA").textContent = publicacion.data.estado_salud.medicamentosmas;
			document.getElementById("vacunasmasmA").textContent = publicacion.data.estado_salud.vacunasmas;
			document.getElementById("motivoAdopcionm").textContent = publicacion.data.publicacion.motivoAdopcion;
			document.getElementById("requisitosAdopcionm").textContent = publicacion.data.publicacion.requisitosAdopcion;
			document.getElementById("localidadAdopcionm").textContent = publicacion.data.publicacion.localidadAdopcion;
			document.getElementById("barrioAdopcionm").textContent = publicacion.data.publicacion.barrioAdopcion;

			
			document.getElementById("nombreDueñoA").textContent = publicacion.data.usuario.nombre;
			document.getElementById("telefonoDueñoA").textContent = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoA").textContent = publicacion.data.usuario.email;
			}



		})

		if(apartado == 'perdidas'){


			publiModalPerdidas.style.display = "flex";
			contenedorModalPerdidas[0].classList.add('contenedor-modelo');
			


		btnCerrarModal.forEach(equis => {
			equis.addEventListener("click",()=>{
				publiModalPerdidas.style.display = "none";
				contenedorModalPerdidas[0].classList.remove('contenedor-modelo');
				
			});

			});

	


} else if(apartado == 'encontradas'){

	
			publiModalEncontradas.style.display = "flex";
			contenedorModalEncontradas[0].classList.add('contenedor-modelo');
			
		

		btnCerrarModal.forEach(equis => {
			equis.addEventListener("click",()=>{
				publiModalEncontradas.style.display = "none";
				contenedorModalEncontradas[0].classList.remove('contenedor-modelo');
				
			});

			});

		

} else{

		
		publiModalAdopciones.style.display = "flex";
		contenedorModalAdopciones[0].classList.add('contenedor-modelo');


		btnCerrarModal.forEach(equis => {
			equis.addEventListener("click",()=>{
				publiModalAdopciones.style.display = "none";
				contenedorModalAdopciones[0].classList.remove('contenedor-modelo');
			});

			});

		
}
		
	

});

});



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



	const selectEspeciemase = document.querySelectorAll(".especiemase");
	selectEspeciemase.forEach(select => {
		select.addEventListener("change", ()=>{
			seleccionarEspecie("especiemase");
		})
	})

	const vacunasmase = document.querySelectorAll(".labelvacunasmase");
	selectEspeciemase.forEach(select => {
		select.addEventListener("click", ()=>{
			mostrarSelect("vacunasmase");
	})

	})
	const SelectCargarBarriose = document.querySelectorAll(".localidadese");
	selectEspeciemase.forEach(select => {
		SelectCargarBarriose.addEventListener("change", ()=>{
			cargarBarrios("localidadese");
		})
	})
	



	btnEditarPubli.forEach( btn => {
		btn.addEventListener("click",e =>{
	
	
			var idpubli = e.target.closest(".publi").getAttribute("data-id");
			var apartado = e.target.closest(".publi").getAttribute("data-apartado");
	
	
			var mensaje = {'apartado':apartado};
			const url = `/informacionPubli/${idpubli}/`;
	
	
			fetch(url,{
				method: "POST",
		  headers: {'Content-Type': 'application/json',
		  "X-CSRFToken": csrftoken},
		  body: JSON.stringify(mensaje)
			})
			.then(response => response.json())
			.then(publicacion => {
	
	
				// ---------CONSULTA PARA LA VENTANA MODELO------------------
	
				if(apartado == 'perdidas'){
					
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
			//const fecha = new Date(publicacion.data.publicacion.fechaExtravio);
			//fechaExtravio.value = fecha.toISOString().slice(0, 16);
			fechaExtravio.value = publicacion.data.publicacion.fechaExtravio;


			const horaExtravio = document.getElementById("horaExtravioe");
			
			horaExtravio.value = publicacion.data.publicacion.horaExtravio;
			


			document.getElementById("recompensae").value = publicacion.data.publicacion.recompensa;


			document.getElementById("nombreDueñoe").innerHTML = publicacion.data.usuario.nombre;
			document.getElementById("numeroDueñoe").innerHTML = publicacion.data.usuario.telefono;
			document.getElementById("correoDueñoe").innerHTML = publicacion.data.usuario.email;
				
	
	
				} else if(apartado == 'encontradas'){
	

					
	
	
				} else{
				
					document.getElementById('editarPubliAdopciones').action = `/editarPubli/${idpubli}/`;  

					document.getElementById("imgmas6A").src = publicacion.data.mascota.img1;
					document.getElementById("imgmas7A").src = publicacion.data.mascota.img2;
					document.getElementById("imgmas8A").src = publicacion.data.mascota.img3;
					document.getElementById("imgmas9A").src = publicacion.data.mascota.img4;
					document.getElementById("imgmas10A").src = publicacion.data.mascota.img5;
					
		
					
					document.getElementById("nombremaseA").value = publicacion.data.mascota.nombremas;
		
					const especie = document.getElementById("especiemaseA");
					for (let i = 0; i < especie.options.length; i++) {
						const option = especie.options[i];
						if (option.value === publicacion.data.mascota.especiemas) {
							option.selected = true;
						}
					}
					 
					seleccionarEspecie('especiemase');
					const raza = document.getElementById("razamaseA");
					for (let i = 0; i < raza.options.length; i++) {
						const option = raza.options[i];
						if (option.value == publicacion.data.mascota.razamas) {
							option.selected = true;
						}
					}
		
					const tamaño = document.getElementById("tamañomaseA");
					for (let i = 0; i < tamaño.options.length; i++) {
						const option = tamaño.options[i];
						if (option.value == publicacion.data.mascota.tamañomas) {
							option.selected = true;
						}
					}
		
					const sexo = document.getElementById("sexomaseA");
					for (let i = 0; i < sexo.options.length; i++) {
						const option = sexo.options[i];
						if (option.value == publicacion.data.mascota.sexomas) {
							option.selected = true;
						}
					}
		
					const color = document.getElementById("colormaseA");
					for (let i = 0; i < color.options.length; i++) {
						const option = color.options[i];
						if (option.value == publicacion.data.mascota.colormas) {
							option.selected = true;
						}
					}
		
					document.getElementById("edadmaseA").value = publicacion.data.mascota.edadmas;
		
		
					document.getElementById("enfermedadesmaseA").value = publicacion.data.estado_salud.enfermedadesmas;
		
		
					const esterilizacion = document.getElementById("esterilizacionmaseA") ;
					for (let i = 0; i < esterilizacion.options.length; i++) {
						const option = esterilizacion.options[i];
						if (option.value == publicacion.data.estado_salud.esterilizacionmas) {
							option.selected = true;
						}
					}
		
					document.getElementById("medicamentosmaseA").value = publicacion.data.estado_salud.medicamentosmas;
		
		
					const selectVacunas = document.getElementById("vacunasmaseA");
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
		
					document.getElementById("personalidadmaseA").value = publicacion.data.mascota.personalidadmas;
					document.getElementById("entrenamientomaseA").value = publicacion.data.mascota.entrenamientomas;
					document.getElementById("socializacionmaseA").value = publicacion.data.mascota.socializacionmas;
		
		
		
					document.getElementById("motivoAdopcione").value = publicacion.data.publicacion.motivoAdopcion;
		
					document.getElementById("requisitosAdopcione").value = publicacion.data.publicacion.requisitosAdopcion;
		
		
		
		
					
					const localidadAdopcion = document.getElementById("localidadeseA");
					 
					
					for (let i = 0; i < localidadAdopcion.options.length; i++) {
						const option = localidadAdopcion.options[i];
						if (option.value == publicacion.data.publicacion.localidadAdopcion) {
							option.selected = true;
						}
					}
		
					cargarBarrios('localidadese');
		
					const barrioAdopcion = document.getElementById("barrioseA");
					for (let i = 0; i < barrioAdopcion.options.length; i++) {
						const option = barrioAdopcion.options[i];
						if (option.value == publicacion.data.publicacion.barrioAdopcion) {
							option.selected = true;
						}
					}
		
					
		
		
		
		
					document.getElementById("nombreDueñoeA").innerHTML = publicacion.data.usuario.nombre;
					document.getElementById("numeroDueñoeA").innerHTML = publicacion.data.usuario.telefono;
					document.getElementById("correoDueñoeA").innerHTML = publicacion.data.usuario.email;
		
		
					


				}
	
	
	
			})

			if(e.target.tagName === 'I' || e.target.tagName === 'P' || e.target.tagName === 'DIV' ){

			if(apartado == 'perdidas'){
	
	
				editarPubliPerdidas.style.display = "flex";
				contenedorModalPerdidas[2].classList.add('contenedor-modelo');
				


			btnCerrarModal.forEach(equis => {
				equis.addEventListener("click",()=>{
					editarPubliPerdidas.style.display = "none";
					contenedorModalPerdidas[2].classList.remove('contenedor-modelo');
					
				});
	
				});

		


	} else if(apartado == 'encontradas'){

		
				editarPubliEncontradas.style.display = "flex";
				contenedorModalEncontradas[2].classList.add('contenedor-modelo');
				
			

			btnCerrarModal.forEach(equis => {
				equis.addEventListener("click",()=>{
					editarPubliEncontradas.style.display = "none";
					contenedorModalEncontradas[2].classList.remove('contenedor-modelo');
					
				});
	
				});

			

	} else{

			
			editarPubliAdopciones.style.display = "flex";
			contenedorModalAdopciones[2].classList.add('contenedor-modelo');


			btnCerrarModal.forEach(equis => {
				equis.addEventListener("click",()=>{
					editarPubliAdopciones.style.display = "none";
					contenedorModalAdopciones[2].classList.remove('contenedor-modelo');
				});
	
				});

	}

}


	
	});
	
	});

	



	






const agregarFav = document.querySelectorAll(".agregarFav");


agregarFav.forEach(agregarFav => {

agregarFav.addEventListener("click", function(e){
	
	var idpubli = e.target.closest(".publi").getAttribute("data-id");
		

		const url = `/agregarFav/${idpubli}/`

		

		fetch(url,{
			method: "GET",
			headers: {
	
				"X-CSRFToken": csrftoken
			  }
		})
		.then(response => response.json())
		.then(respuesta => {

			if(respuesta.success){
				if(respuesta.saved){
					agregarFav.innerHTML = '<i class="fa-solid fa-heart" style="color: red; "></i>';
				} else{
					agregarFav.innerHTML = '<i class="fa-regular fa-heart" style="color: black; "></i>';
				}
				
			} else{
				console.log(respuesta.message);
			}



}) 

})
})







// CONSULTA PARA ELIMINAR PUBLICACION



const btnEliminarPubli = document.querySelectorAll(".btnEliminarPubli");
const eliminarPubli = document.querySelector("#eliminarPubli");
const btnAceptar = document.querySelectorAll(".btnAceptar");
const btnCancelar = document.querySelectorAll(".btnCancelar");

btnEliminarPubli.forEach( btn => {
btn.addEventListener("click",e =>{

    var idpubli = e.target.closest(".publi").getAttribute("data-id");

    if(e.target.tagName === 'I' || e.target.tagName === 'P' || e.target.tagName === 'DIV' ){

        eliminarPubli.style.display = "flex";
        contenedorPubliModal[2].style.display = "flex";

        

    btnCancelar.forEach( btn => {
        btn.addEventListener("click",e =>{
    

            eliminarPubli.style.display = "none";
            contenedorPubliModal[2].style.display = "none";

            
        


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

            .then(data => {
        
        
        
                location.reload();
                
                
            })

            eliminarPubli.style.display = "none";
            contenedorPubliModal[2].style.display = "none";

            
            


        });

    });


    






});
});