console.log("works");

// Create an object that has a property that is an array. Log one of the elements of that array.
const fil = {
	name: ["fil"],
	hair: ["brown"]
};
console.log(fil.name[0]);
console.log(fil.hair[0]);
// Create an object that has a property that is an object. Log one of the properties of that inner object.
const josh ={
	name: {
		name: "josh"
	}
};
console.log(josh.name.name);
// Create an object that has a property that is a function (method). Call that method.
// const funct1 = {
// 	meth1: () => {
// 		console.log("hi");
// 		meth1();

// 	}
// }
// console.log(meth1());
// Create an array that has an object in it. Log one of the properties of that object.
// Create an array that has an array as one of its elements. Log one of the elements of the inner array.
const arr1 = [[
	"1", "2" , "3"
]
];
console.log(arr1[0][1]);
// Create an array that has a function as one of its elements. Call that function.
// Create an object that has a property that is an array. Loop over the array and log each individual element.
// Create an array that has an array as one of its elements. Loop over the second array and log each individual element.
// Bonus: make each element of the outer array an array as well. Using two for loops, loop over each array in the outer array and log those elements.


//Combine objects arrays and functions more than one lvl deep
// Create a function that returns an object. Log a property of that object (hint: call the function and then call a property on the return value).
const functTwo = () => {
	const greg = {
		name: "greg"
	}
	return greg.name;
}
console.log(functTwo());
// Create a function that returns an array. Log an element of the array.
const functOne = () => {
	return ["1"];
}
console.log(functOne());
// Create a function that returns an object that has an array. Log one of the elements of that array.
const functThree = () => {
	const rube = {
		names: ["ben","roo"]
	}
	return rube.names[0];
}
console.log(functThree());
// Create a function that returns an object that has an object. Log one of the properties of the inner object.
// Create a function that returns an object that has a method. Call that inner function (method).
// Create a function that returns a function. Call that inner function
// Create an object that has a method that returns an object. Log a property of the inner object.
// Create an object that has a method that returns an object that has an array. Log an element of that array.
// Create an object that has a method that returns an object that has an object. Log a property of the inner object.
// Create an object that has a method that returns an object that has another method. Call the inner method.
// Create an object that has a method that returns a function. Call that function.
// Create an array that has a function that returns an object. Log a property of the object.
// Create an array that has a function that returns an object that has an array. Log an element of the inner array.
// Create an array that has a function that returns an object that has an object. Log a property of the inner object.
// Create an array that has a function that returns an object that has a method. Call that method.
// Create an array that has a function that returns a function. Call the inner function
//------//

//Create a callback
// Define two functions and set them to variables
const functFour = () => {
	console.log("hi");
}
// The second function takes a parameter
const functFive = (functFour) => {
	console.log("bye");

}

// Call the second function, passing in the variable that references the first function as the parameter
// In the definition of the second function, invoke (call) the parameter that is being passed into it. Remember, this parameter is a function
