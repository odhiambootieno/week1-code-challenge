function getStudentGrade() {
    // Prompt user for input
    let marks = prompt("Enter the student's marks (0 to 100):");

    // Convert input to a number
    marks = Number(marks);

    // Check if the input is a valid number
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Enter a number between 0 and 100.");
        return;
    }

// Determine the grade based on the marks
let grade;
if (marks > 79) {
    grade = 'A';
} else if (marks >= 60) {
    grade = 'B';
} else if (marks >= 49) {
    grade = 'C';
} else if (marks >= 40) {
    grade = 'D';
} else {
    grade = 'E';
}

// Output the grade
console.log(`The student's grade is: ${grade}`);
}

// Call the function
getStudentGrade();