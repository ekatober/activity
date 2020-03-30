var activity = [
	'yoga',
	'dance',
	'arms workout',
	'bootie workout',
	'aerobics',
	'massage',
	'cookies',
	'cake',
	'poetry reading',
	'fiction club',
	'figure drawing',
	'breathwork',
	'meditation',
	'singing',
	'board games',
	'beauty salon',
	'picnic',
	'book reading',
	'breakdance',
	'qigun',
	'ask questions',
	'sex',
	'orgy',
	'cleaning',
	'jam',
	'costume',
	'bdsm',
	'ritual',
	'summon demon',
	'salt doe sculpting',
	'smile competition',
	'bar hopping',
	'call mom'
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
	'heroin chic style'

]

function newVibe() {
		var randomNumber = Math.floor(Math.random() * (vibe.length));
		document.getElementById('vibeDisplay').innerHTML = vibe[randomNumber];
	}
