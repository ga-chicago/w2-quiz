console.log("JS IS RUNNING");


// Combine objects, arrays, and functions
// COMPLETE ANY 3


// Create an object that has a property that is an array. Log one of the elements of that array.
const dogs = {
	myDogs: ['Zelda', 'Jaena']
}
console.log(dogs.myDogs[0]);


// Create an object that has a property that is a function (method). Call that method.
const cats = {
	meow(){
		console.log("meooowww");
	}
}
cats.meow();


// Create an array that has a function as one of its elements. Call that function.
const birds = [ 
	chirp = () => {
		console.log("chirpCHIRP I am BIRB");
	}
]
birds[0]();

// COMMIT 1




// Combine objects, arrays, and functions more than one level deep
// COMPLETE ANY 3


// Create a function that returns an array. Log an element of the array.
const snakes = () => {
	return ['hisss', 'chomp!'];
}
console.log(snakes()[1]);

// Create a function that returns an object that has an array. Log one of the elements of that array.
const bears = () => {
	return {
		name: 'balou',
		quotes: ['Petit d\'hom!', 'Il en faut peu pour etre heureux']
	}
}
console.log(bears().quotes[1]);

// Create an object that has a method that returns an object that has an object. Log a property of the inner object.
const tigers = {
	name: 'Sher Khan',
	attack(){
		return {
			weapon: {claws: 'sharp', teeth: 'suPER SHARP'}
		}
	}
}
console.log(tigers.attack().weapon.teeth);


// 🔴 The commit message should read: 
// "Commit 2 - Combine objects, arrays, and functions more than one level deep"
































