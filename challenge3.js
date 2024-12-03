const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate PAYE tax based on the provided tax bands
function calculatePAYE(grossSalary) {
    let tax = 0;

    // PAYE Tax Bands (KRA)
    if (grossSalary <= 24000) {
        tax = 0;
    } else if (grossSalary <= 32333) {
        tax = (grossSalary - 24000) * 0.1; // 10%
    } else if (grossSalary <= 40000) {
        tax = (32333 - 24000) * 0.1 + (grossSalary - 32333) * 0.15; // 15%
    } else if (grossSalary <= 60000) {
        tax = (32333 - 24000) * 0.1 + (40000 - 32333) * 0.15 + (grossSalary - 40000) * 0.2; // 20%
    } else {
        tax = (32333 - 24000) * 0.1 + (40000 - 32333) * 0.15 + (60000 - 40000) * 0.2 + (grossSalary - 60000) * 0.3; // 30%
    }

    return tax;
}

// Function to calculate NHIF deduction based on gross salary
function calculateNHIF(grossSalary) {
    if (grossSalary < 6000) return 150;
    if (grossSalary < 8000) return 300;
    if (grossSalary < 11000) return 400;
    if (grossSalary < 14000) return 500;
    if (grossSalary < 20000) return 600;
    return 750; // For 20,000 and above
}

// Function to calculate NSSF deduction based on gross salary
function calculateNSSF(grossSalary) {
    const nssfDeduction = grossSalary * 0.06; // 6% of gross salary
    return Math.min(nssfDeduction, 1080); // Capped at Ksh 1,080
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const totalDeductions = paye + nhif + nssf;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        totalDeductions,
        netSalary
    };
}

// Prompt the user for input
rl.question("Please enter your basic salary: ", (basicSalaryInput) => {
    const basicSalary = Number(basicSalaryInput); // Convert input to a number

    rl.question("Please enter your benefits: ", (benefitsInput) => {
        const benefits = Number(benefitsInput); // Convert input to a number

        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log("Please enter valid numbers for salary and benefits.");
        } else {
            const salaryDetails = calculateNetSalary(basicSalary, benefits);
            console.log(`Gross Salary: Ksh ${salaryDetails.grossSalary.toFixed(2)}`);
            console.log(`PAYE Tax: Ksh ${salaryDetails.paye.toFixed(2)}`);
            console.log(`NHIF Deduction: Ksh ${salaryDetails.nhif.toFixed(2)}`);
            console.log(`NSSF Deduction: Ksh ${salaryDetails.nssf.toFixed(2)}`);
            console.log(`Total Deductions: Ksh ${salaryDetails.totalDeductions.toFixed(2)}`);
            console.log(`Net Salary: Ksh ${salaryDetails.netSalary.toFixed(2)}`); // Added missing backtick here
        }

        rl.close(); // Close the readline interface
    });
});