const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check speed and calculate demerit points
function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointThreshold = 12;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);

        console.log(`Points: ${demeritPoints}`);

        // Check if license should be suspended
        if (demeritPoints > demeritPointThreshold) {
            console.log("License suspended");
        }
    }
}

// Prompt the user for input
rl.question("Please enter the speed of the car: ", (input) => {
    const speed = Number(input); // Convert input to a number
    if (isNaN(speed)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        checkSpeed(speed); // Call the speed checking function
    }
    rl.close(); // Close the readline interface
});
