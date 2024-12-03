const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate the grade based on student marks
function generateGrade(marks) {
    // Check if the input is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return; // Exit the function if the input is invalid
    }

    // Determine the grade based on the input marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade to the console
    console.log(`The grade for the marks ${marks} is: ${grade}`);
}

// Prompt the user for input
rl.question("Please enter the student marks (0-100): ", (input) => {
    const marks = Number(input); // Convert input to a number
    generateGrade(marks); // Call the grade generation function
    rl.close(); // Close the readline interface
});
