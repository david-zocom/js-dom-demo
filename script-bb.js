const data = [
	{ art: 'kakadua', pris: 20 },
	{ art: 'häst', pris: 15 },
	{ art: 'orm', pris: 500 },
	{ art: 'sydöjättemoa', pris: 15000 },
	{ art: 'Enhörning', pris: 10000000}
];

const AnimalModel = Backbone.Model.extend({});

const AnimalView = Backbone.View.extend({
	render: function() {
		let art = this.model.get('art');
		let pris = this.model.get('pris');
		let content = `${art} ... ${pris}kr`;
		//this.$el.html(`<div class="card">${content}</div>`);
		$('#animalCards').append(`<div class="card">${content}</div>`);
	}
})

let animals = data.map(animal => new AnimalModel(animal));
let animalViews = animals.map(
	animalModelInstance => new AnimalView({ model: animalModelInstance })
);

function renderEverything() {
	$('#animalCards').html('');
	animalViews.forEach(view => view.render());
}

$(document).ready(function() {
	renderEverything();
})



//
