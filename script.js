

RACES = ["Aarakocra","Aasimar","Bugbear","Centaur","Changling","Dragonborn","Dwarf","Elf","Firbolg","Genasi",
	"Githyanki","Githzerai","Gnome","Goblin","Goliath","Half Elf","Half Orc","Halfling","Human","Hobgoblin",
	"Kalashtar","Kenku","Kobold","Lizardfolk","Loxodon","Locathah","Minotaur","Orc","Shifter","Simic Hybrid",
	"Tabaxi","Tiefling","Tortle","Triton","Vedalken","Verdan","Warforged","Yuan-ti"]

CLASSES = ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock",
	"Wizard","Artificer","Blood Hunter"]

function getRandomInt(limit){
	return Math.floor(Math.random()*limit)
}

function getRace(){
	return RACES[getRandomInt(RACES.length)]
}

function getClass(){
	return CLASSES[getRandomInt(CLASSES.length)]
}

$(function(){
	console.log("init");
	$('#generateCharacter').click(function(){
		$('#raceDisp')[0].innerHTML = getRace();
		$('#classDisp')[0].innerHTML = getClass();
		console.log(`${getRace()} ${getClass()}`);
	});
});