console.log('It works');



// Create an object that has a property that is an array. Log one of the elements of that array.

const person = {
	pets: ['Cat', 'Fish', 'Dog']
}

console.log(person.pets[2]);


// Create an array that has an array as one of its elements. Log one of the elements of the inner array.

const arrElements = [['dog', 'cat', 'bird'], 'fish', 'animal']

console.log(arrElements[0][2])

// Create an object that has a property that is an array. Loop over the array and log each individual element.

const arrLoop = [['dog', 'cat', 'bird'], 'fish', 'animal']
	
for(let i = 0; i < arrLoop[0].length; i++){
	console.log(arrLoop[0][i])
}









