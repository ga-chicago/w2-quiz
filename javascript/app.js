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
const hissingSnakes = () => {
	return ['hisss', 'chomp!'];
}
console.log(hissingSnakes()[1]);

// Create a function that returns an object that has an array. Log one of the elements of that array.
const dancingBears = () => {
	return {
		name: 'balou',
		quotes: ['Petit d\'hom!', 'Il en faut peu pour etre heureux']
	}
}
console.log(dancingBears().quotes[1]);

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



// Create a callback

// Define two functions and set them to variables
// The second function takes a parameter
// Call the second function, passing in the variable that references the first function as the parameter
// In the definition of the second function, invoke (call) the parameter that is being passed into it. Remember, this parameter is a function

const growl = () => {
	return "RRROAAWWOORR";
}

const 



// Commit 3 

// 🔴 The commit message should read: 
// "Commit 3 - Create a callback"



























