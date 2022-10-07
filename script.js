RACES = 				[ "Aarakocra",
									"Aasimar",
									"Bugbear",
									"Centaur",
									"Changeling",
									"Dragonborn",
									"Dwarf",
									"Elf",
									"Firbolg",
									"Genasi",
									"Githyanki",
									"Githzerai",
									"Gnome",
									"Goblin",
									"Goliath",
									"Half Elf",
									"Half Orc",
									"Halfling",
									"Human",
									"Hobgoblin",
									"Kalashtar",
									"Kenku",
									"Kobold",
									"Lizardfolk",
									"Loxodon",
									"Locathah",
									"Minotaur",
									"Orc",
									"Shifter",
									"Simic Hybrid",
									"Tabaxi",
									"Tiefling",
									"Tortle",
									"Triton",
									"Vedalken",
									"Verdan",
									"Warforged",
									"Yuan-ti",
									"Owlin",
									"Fairy",
									"Harengon",
									"Satyr",
									"Grung"
								]

STAT_CHANGES = 	[
								 [0, 2, 0, 0, 1, 0],
								 [0, 0, 0, 0, 0, 2],
								 [2, 1, 0, 0, 0, 0],
								 [2, 0, 0, 0, 1, 0],
								 [0, 1, 0, 0, 0, 1],
								 [2, 0, 0, 0, 0, 1],
								 [0, 0, 2, 0, 0, 0],
								 [0, 2, 0, 0, 0, 0],
								 [1, 0, 0, 0, 2, 0],
								 [0, 0, 2, 0, 0, 0],
								 [2, 0, 0, 1, 0, 0],
								 [2, 0, 0, 0, 2, 0],
								 [0, 0, 0, 2, 0, 0],
								 [0, 2, 1, 0, 0, 0],
								 [2, 0, 1, 0, 0, 0],
								 [0, 0, 0, 0, 0 ,2],
								 [2, 0, 1, 0, 0, 0],
								 [0, 2, 0, 0, 0, 0],
								 [1, 1, 1, 1, 1, 1],
								 [0, 0, 2, 1, 0, 0],
								 [0, 0, 0, 0, 2, 1],
								 [0, 2, 0, 0, 1, 0],
								 [-2, 2, 0, 0, 0, 0],
								 [0, 0, 2, 0, 1, 0],
								 [0, 0, 2, 0, 1, 0],
								 [2, 1, 0, 0, 0, 0],
								 [1, 0, 0, 0, 0, 0],
								 [2, 0, 1, -2, 0, 0],
								 [0, 1, 0, 0, 0, 0],
								 [0, 0, 2, 0, 0, 0],
								 [0, 2, 0, 0, 0, 1],
								 [0, 0, 0, 0, 0, 2],
								 [2, 0, 0, 0, 1, 0],
								 [1, 0, 1, 0, 0, 1],
								 [0, 0, 0, 2, 1, 0],
								 [0, 0, 1, 0, 0, 2],
								 [1, 0, 1, 0, 0, 0],
								 [0, 0, 0, 1, 0, 2],
								 [0, 0, 0, 0, 0, 0],
								 [0, 0, 0, 0, 0, 0],
								 [0, 0, 0, 0, 0, 0],
								 [1, 0, 0, 0, 0, 2],
								 [0, 2, 1, 0, 0, 0]
								]

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

function generateStat(){
	rolls = []
	for(var i = 0; i < 4; i++){
		rolls.push(getRandomInt(6)+1);
	}
	rolls.sort()
	console.log(rolls);
	return rolls[1]+rolls[2]+rolls[3]
}

stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]

function updateDisplay(){
	race = getRace()
	$('#raceDisp')[0].innerHTML = race;
	$('#classDisp')[0].innerHTML = getClass();

	for(var i = 0; i < stats.length; i++){
		newStat = generateStat();
		newStat += STAT_CHANGES[RACES.indexOf(race)][i]
		$("#" + stats[i])[0].innerHTML = newStat;
	}
}

$(function(){
	console.log("init");
	$('#generateCharacter').click(updateDisplay);
	updateDisplay();
});