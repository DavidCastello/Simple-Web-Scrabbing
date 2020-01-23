var text = document.documentElement.innerHTML; // carga el inner HTML de la página ya cargada en el buscador
//console.log(text);

var cut_text = [];

var tickets = [];

function getParts(str) {

    var parts = str.split('href="#comentarios"'); // partimos el texto en substrings cada vez que encontremos esta cadena
	
	return parts;
}


cut_text = getParts(text);

var num_parts = cut_text.length;

for (i = 1; i < num_parts; i++) {

	tickets[i-1] = cut_text[i].substring(212, 215); // la subcadena [i+1] del inner HTML contiene el número de comentarios entre los índices 212 y 215 (verificar en caso de fallo)

}

var scrabbed = tickets.toString();

console.log("Total occurences:", tickets.length);
console.log("LIST:", scrabbed);