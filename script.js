console.log('rad 1');
const data = [
	{
		art: 'kakadua',
		pris: 20
	},
	{
		art: 'häst',
		pris: 15
	},
	{
		art: 'orm',
		pris: 500
	},
	{
		art: 'sydöjättemoa',
		pris: 15000
	}
];

console.log('data:', data);
$(document).ready(function() {
	renderAnimals();
})

function renderAnimals() {
	console.log('renderAnimals');
	// rensa eventuella gamla element
	// gör om djur-objekten till DOM-element
	// lägg till alla DOM-element till #animalCards
	$('#animalCards').html('');
	let elements = data.map(renderSingleAnimal);
	elements.forEach(element => {
		$('#animalCards').append(element);
		console.log('renderAnimals elements forEach');
	});
	console.log('renderAnimals elements:', elements);
}
function renderSingleAnimal(animal) {
	// animal är ett objekt med egenskaperna art och pris.
	// vi ska returnera ett DOM-element: <div class="card"> Kakadua ... 20kr </div>
	let content = `${animal.art} ... ${animal.pris}kr`;
	let div = $(`<div class="card">${content}</div>`);
	return div;
	// 1. document.createElement(tag name)
	// 2. $(html string)
}

// () - parentes
// {} - blockparentes, curly braces
// [] - square brackets, hakparentes
// , - kommatecken
// : - kolon
// ; - semikolon
// / - snestreck, forward slash
// \ - backslash
// '' - apostrof, strängar i JS
// "" - citattecken, quote, HTML, CSS, JS
// `` - grav, backticks, JS
// ´´ - accent (används ej i JavaScript)
// $ - dollartecken

//
