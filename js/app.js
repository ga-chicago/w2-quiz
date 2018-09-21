//QUIZ

//PART 1

//1. Create an object that has a property that is an array. Log one of the elements of that array.

const fil = {
	age: 27,
	height: 'medium',
	GAstudent: true,
	stuff: [
		'laptop', 't-shirt', 'sneakers', 'backpack'
	]
};

console.log(fil.stuff[2]);

//2. Create an object that has a property that is an object. Log one of the properties of that inner object.

const link = {
	age: undefined,
	height: 'short',
	GAstudent: false,
	sword: {
		name: 'Master Sword',
		magic: true,
		length: 'medium',
	}
}

console.log(link.sword.name);

//3. Create an object that has a property that is a function (method). Call that method.

const youngLink = {
	age: undefined,
	height: 'short',
	GAstudent: false,
	attack: () => {
		console.log('HYAH!')
	}
}

youngLink.attack();


//PART 2

//2. Create a function that returns an array. Log an element of the array.

const boatNameSuggestor = () => {
	return boatNameList = [
		'The Alfalfa', 'The Salty Sardine', 'The Fox Confessor', 'The Marie Antoinette'
	];
};

console.log(boatNameSuggestor()[1]);

//3. 

const motherShip = {
	engines: 8, 
	class: 'dreadnaught',
	launchEscapePod: () => {
		return escapePod = {
			engines: 2,
			class: 'rescue vessle'
		}
	}
};

console.log(motherShip.launchEscapePod().engines)

//8. Create an object that has a method that returns an object that has an array. Log an element of that array.

const mario = {
	favColor: 'red',
	mustache: true,
	eatsPowerStar: () => {
		return rainbowMario = {
			favColor: ['red', 'orange', 'yellow', 'green', 'blue', 'pink']
		}
		
	}
};

console.log(mario.eatsPowerStar().favColor[3]);


