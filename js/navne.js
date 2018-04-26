/*

TODO:
	- Større udvalg af navne
		- Importere lister af navne
	- Funktionalitet til at vælge mellem køn
	- Favoritliste
*/

document.getElementById("knap").addEventListener("click", function() {
	document.getElementById("resultat").innerHTML = "<strong>" + findNavn() + "</strong>";
});

function findNavn() {

	var fornavne, efternavne;

	fornavne = ["Birthe","Søren","Else","Kurt","Bjarne","Gertrud","Kamma","Raphael"];
	efternavne = ["Andersen","Vasquez","Johnson","Jönsson","Petersen","Nyborg"];

	return navn = fornavne[rand(fornavne.length)] + " " + efternavne[rand(efternavne.length)];

	//Funktion som spytter tilfældelige heltal ud mellem 0 og max 
	function rand (max) {
		return Math.floor(Math.random()*max);	
};
}