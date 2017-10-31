Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

const firstNamesM = [
	'Edgard',
	'Hippolyte',
	'Edmond',
	'Philogène',
	'Hubert',
	'Alfred',
	'Justinien',
	'Philémon',
	'Edmond',
	'Marcellin',
	'Hyacinthe',
	'Ignace',
	'Ambroise',
	'Théophile',
	'Constant',
	'Leopold',
	'Maximilien',
	'Ernest',
	'Garnier',
	'Firmin',
	'Gaston',
	'Melchior',
	'Hector',
	'Abélard',
	'Anastase',
	'Cornélius',
	'Eudorien',
];

const firstNamesF = [
	'Cunégonde',
	'Chantal',
	'Joséphine',
	'Antoinette',
	'Célestine',
	'Léonie',
	'Cordélie',
	'Brunehilde',
	'Félicienne',
	'Gervaise',
	'Guillemine',
	'Hermandine',
	'Honorine',
	'Isadora',
	'Idomène',
	'Ludivine',
	'Léontine',
	'Magdalène',
	'Modestine',
	'Nathanaëlle',
	'Ombertine',
	'Philomène',
	'Patronille',
	'Sédonie',
	'Tempérance',
	'Théophanie',
	'Ursuline',
	'Victoire',
	'Zéphirine',
];

const firstNamesN = [
	'Camille',
	'Dominique',
	'Ambroise',
	'Candide',
	'Modeste',
	'Prudence',
	'Ambroise',
	'Adama',
	'Olympe',
];

const lastNames = [
	"de Gontrandière",
	"de la Mirandière",
	"de Montmorancy",
	"de Choiseul-Praslin",
	"de Caulaincourt",
	"de Laboissière",
	"de Faucigny-Lucinge",
	"de Montesquiou-Fezensac",
	"de Châteauneuf-Randon",
	"d'Angerville",
	"d'Anthouard",
	"d'Archambault",
	"de Bazelaire",
	"de Goislard",
	"de Raimbouville",
	"de Guéheneuc",
	"de Gondrecourt",
	"de Kerguiziau",
	"du Tournel",
	"d'Auvrecher",
	"de Vraincourt",
	"de Montfort",
	"de Boucheporn",
	"de Boishue",
	"de Monsabert",
	"de Kermadec",
	"de Kervasdoué",
];

const firstNames = {
	'M': firstNamesM,
	'F': firstNamesF,
	'N': firstNamesN,
};

$(document).ready(function () {
    createName("M");

    $("#refresh-name").click(function () {
        createName($('input[name=gender]:checked').val());
    });
});

const createName = function(gender) {
	const lastName1 = lastNames.randomElement();
	const lastName2 = lastNames.filter((value) => {
		return value != lastName1;
	}).randomElement();

	const firstName1 = firstNames[gender].randomElement();
	const firstName2 = firstNames[gender].filter((value) => {
		return value != firstName1;
	}).randomElement();

	const name = `${firstName1}-${firstName2} ${lastName1} ${lastName2}`;

	$('#name').html(name);
}