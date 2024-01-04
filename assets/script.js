const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides.length);
image=document.getElementById("ImageBaniere");
texte=document.getElementById("TexteBanniere");
// let CompteurDroite=0;
let NumeroSlide=0;
let Gauche= -1;
let Droite= 1;

// function droite(){
// 	console.log("clic droite");
// 	CompteurDroite=CompteurDroite+1;

// 	image.src="./assets/images/slideshow/" + slides[CompteurDroite].image;

// }

function ChangeSlide(sens){
	console.log("clic");

	//permet de faire la boucle lorsqu'on arrive au dernier slide
	NumeroSlide = NumeroSlide + sens;
	if(NumeroSlide > slides.length -1)
		NumeroSlide = 0;

	if(NumeroSlide < 0)
		NumeroSlide = slides.length -1;

	console.log(NumeroSlide);
	image.src="./assets/images/slideshow/" + slides[NumeroSlide].image;
	texte.content= slides[NumeroSlide].tagLine;

}
