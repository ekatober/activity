var activity = [
	'bubik',
	'chia',
	'plak plak',
	'Westerbeke junior',
	'Cherry',
	'Candy',
	'Cucumber',
	'Cheburashka',
	'Ultra Turbo 3000',
	'Suren XXX',
	'Sub OG',
	'Fatality',
	'6 feet',
	'Kubik Rubik',
	'Herlum tomato',
	'Electric socket',
	'Bazuk',
	'Bling Bling',
	
]
function newActivity() {
		var randomNumber = Math.floor(Math.random() * (activity.length));
		document.getElementById('activityDisplay').innerHTML = activity[randomNumber];
	}
