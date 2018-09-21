// console.log('hey')
// Create an object that has a property that is an array. Log one of the elements of that array.

const andy = {
	name: 'Andy',
	age: 27,
	location: 'West Loop',
	hobbies: ['Memes', 'Fantasy Football', 'Writing code', 'petting all the dogs']
}

console.log(andy.hobbies[andy.hobbies.length-1]);

// Create an object that has a property that is an object. Log one of the properties of that inner object.

const myDog = {
	name: 'Max',
	goodBoy: true,
	age: 4,
	breed: 'Corgboy',
	favoriteToy: {
		type: 'tennis ball',
		color: 'green',
		isSanitary: false
	}
}

console.log(myDog.favoriteToy.isSanitary);

// Create an object that has a property that is a function (method). Call that method.

const cellPhone = {
	brand: 'Apple',
	model: '6s',
	case: true,
	ring () {
		console.log('ring ring riiiiiing');
	}
}

cellPhone.ring();























