// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [200, 300, 250, 112, 10, 158]

// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0

/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (week of weeklyMiles) {
    totalMiles += week

}

// Declare a new variable to store the average miles over time
let averageMiles = totalMiles / weeklyMiles.length

// Output the average miles and the total miles to the console
console.log(`The travelling salesperson averages ${averageMiles} a week for a total of ${totalMiles}.`)