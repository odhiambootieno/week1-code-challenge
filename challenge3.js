function calculateNetSalary() {
    // Prompt user for input
    let basicSalary = parseFloat(prompt("Enter your basic salary (Ksh):"));
    let benefits = parseFloat(prompt("Enter your benefits (Ksh):"));

    // Validate inputs
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Please enter valid numbers for salary and benefits.");
        return;
    }

    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;
    console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);

    // Calculate (PAYE) KRA Tax 
    let tax;
    if (grossSalary <= 24000) {
        tax = 0;
    } else if (grossSalary <= 32333) {
        tax = (grossSalary - 24000) * 0.10;
    } else if (grossSalary <= 40000) {
        tax = (grossSalary - 32333) * 0.15 + (8333 * 0.10); // Previous bracket
    } else if (grossSalary <= 60000) {
        tax = (grossSalary - 40000) * 0.20 + (7667 * 0.15) + (8333 * 0.10); // Previous brackets
    } else {
        tax = (grossSalary - 60000) * 0.30 + (20000 * 0.20) + (20000 * 0.15) + (8333 * 0.10); // Previous brackets
    }
    console.log(`PAYE Tax: Ksh ${tax.toFixed(2)}`);

    // Calculate NHIF Deduction
    let nhifDeduction = (grossSalary > 15000) ? 500 : 0;
    console.log(`NHIF Deduction: Ksh ${nhifDeduction}`);

    // Calculate NSSF Deduction
    let nssfDeduction = 200;
    console.log(`NSSF Deduction: Ksh ${nssfDeduction}`);

    // Calculate Net Salary
    let netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction);
    console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);

}

// Call the function
calculateNetSalary();