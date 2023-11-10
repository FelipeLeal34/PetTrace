

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

const iconfav = document.getElementById("agregarFav")

iconfav.addEventListener("click", function(e){
	
	if(e.target.id == "agregarFav"){
	iconfav.innerHTML = '<i class="fa-solid fa-heart" style="color: #000;" id="agregadoFav"></i>'

	} else{
		iconfav.innerHTML = '<i class="fa-regular fa-heart" style="color: #000;" id="agregarFav"></i>'

	}
})
