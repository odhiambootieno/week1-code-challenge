function speedDetector() {
    // Prompt user for input
    let speed = prompt("Please enter the speed of the car (in km/h):");

    // Convert input to a number
    speed = Number(speed);

    // Check if the input is a valid number
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;
    let demeritPoints = 0;

    // Check the speed against the limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points for every 5 km/h above the speed limit
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);

        // Check if the license should be suspended
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Call the function
speedDetector();