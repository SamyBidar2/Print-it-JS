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

// Création d'un élément Div et ajout de la classe
for(var i=0; i<slides.length; i++){
    // Récupérer l'élément avec la classe "dots"
    var dotsContainer = document.querySelector('.dots');

    // Créer une nouvelle balise <div> avec la classe "dot"
    var newDot = document.createElement('div');
    newDot.className = 'dot';

	// Si on est sur le premier élément, alors on lui ajoute la classe 'dot_selected'	
	if(i === 0){
		newDot.classList.add('dot_selected');
	}

    // Ajouter la nouvelle balise <div> à l'élément avec la classe "dots"
    dotsContainer.appendChild(newDot);
}


 

console.log(slides.length);
	

image=document.getElementById("ImageBaniere");
texte=document.getElementById("TexteBanniere");
let NumeroSlide=0;


function ChangeSlide(sens){
	console.log("clic " + sens);

	//supprimer la classe dot_selected pour pouvoir l'ajouter ensuite sur le prochain Div.
	document.querySelectorAll('.dots .dot')[NumeroSlide].classList.remove('dot_selected');
	
	//permet de faire la boucle lorsqu'on arrive au dernier slide
	NumeroSlide = NumeroSlide + sens;
	if(NumeroSlide >= slides.length)
		NumeroSlide = 0;

	if(NumeroSlide < 0)
		NumeroSlide = slides.length -1;


	console.log(NumeroSlide);
	image.src="./assets/images/slideshow/" + slides[NumeroSlide].image;
	texte.innerHTML=slides[NumeroSlide].tagLine;
	document.querySelectorAll('.dots .dot')[NumeroSlide].classList.add('dot_selected');
}


// EventListeners sur les flèches remplacé par le log dans la fonction
	// var FlecheGauche = document.getElementById('FlecheGauche');
	// FlecheGauche.addEventListener('click', function(){
	// 	console.log('Clic Gauche')
	// });
	// var FlecheDroite = document.getElementById('FlecheDroite');
	// FlecheDroite.addEventListener('click', function(){
	// 	console.log('Clic Droit')
	// });