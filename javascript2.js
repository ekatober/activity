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
	'Rubik's cube',
	'Herlum tomato',
	'Electric socket',
	'Bazuk',
	'Bling Bling',
	
]
function newActivity() {
		var randomNumber = Math.floor(Math.random() * (activity.length));
		document.getElementById('activityDisplay').innerHTML = activity[randomNumber];
	}

var vibe = [
	'80s style',
	'90s babe style',
	'playboy house style',
	'reverse situation style',
	'weirdo style',
	'glamour',
	'beach style',
	'with wigs',
	'swagalishious style',
	'victorian style',
	'italian',
	'french',
	'hippie',
	'japanese',
	'disco',
	'furcoats',
	'german/nazi',
	'miami style',
	'hawaii',
	'anime club',
	'scater style',
	'heroin chic style',
	'office style'

]

function newVibe() {
		var randomNumber = Math.floor(Math.random() * (vibe.length));
		document.getElementById('vibeDisplay').innerHTML = vibe[randomNumber];
	}
