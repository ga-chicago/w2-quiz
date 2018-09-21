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

