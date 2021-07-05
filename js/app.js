console.log('quiz')

//---------------QUIZ

// Create an object that has a property that is an array. Log one of the elements of that array.

const object = {
	days: ['first','second','third']
}
console.log(object.days[0])

// Create an object that has a property that is an object. Log one of the properties of that inner object.

const house = {
	room: { closet:['clothes','shoes','random boxes']

	}
}
console.log(house.room.closet[0])
// Create an object that has a property that is a function (method). Call that method.

const car = {
	accelerate(){
		console.log('vroom vroom')
	}
}
console.log(car.accelerate())
// Create an array that has an object in it. Log one of the properties of that object.

const school = [{
	'students': 100,
	'classrooms': 6,
	'teachers': 8
}]
console.log(school[0].teachers)

// Create an array that has an array as one of its elements. Log one of the elements of the inner array.

const xGames = [['bmx','skateboarding'],['scootering','rollerblading']]

console.log(xGames[0][0])


// Create an array that has a function as one of its elements. Call that function.

const arrWithFunction = [activate() => {
	console.log('something happen')
}]
activate()

// Create an object that has a property that is an array. Loop over the array and log each individual element.




// Create an array that has an array as one of its elements. Loop over the second array and log each individual element.




// Bonus: make each element of the outer array an array as well. Using two for loops, loop over each array in the outer array and log those elements.