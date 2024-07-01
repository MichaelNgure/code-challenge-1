// Net Salary Calculator. Gets input of basic salary and benefits

const ps = require("prompt-sync");
const prompt = ps({sigint: true});
const basicSalary = prompt(("What is your basic salary? "));
const benefits = prompt(("What are your total benefits? "));

const grossSalary = parseInt(basicSalary, 10) + parseInt(benefits, 10)
console.log(`Gross Salary: ${grossSalary}`)

const nhifDeducted = nhifDeduction()
console.log(`NHIF Deductions: ${nhifDeducted}`)

const payAsYouEarn = paye()
console.log(`PAYE: ${payAsYouEarn}`)

const nssfDeducted = nssfDeduction()
console.log(`NSSF Deductions: ${nssfDeducted}`)

const netSalary = grossSalary - (payAsYouEarn + nhifDeducted + nssfDeducted)
console.log(`Net Salary: ${netSalary}`)

function nhifDeduction(){
    if (grossSalary <= 5999){
        return 150
    }
    if (grossSalary >= 6000 && grossSalary <= 7999){
        return 300
    }
    if (grossSalary >= 8000 && grossSalary <= 11999){
        return 400
    }
    if (grossSalary >= 12000 && grossSalary <= 14999){
        return 500
    }
    if (grossSalary >= 15000 && grossSalary <= 19999){
        return 600
    }
    if (grossSalary >= 20000 && grossSalary <= 24999){
        return 750
    }
    if (grossSalary >= 25000 && grossSalary <= 29999){
        return 850
    }
    if (grossSalary >= 30000 && grossSalary <= 34999){
        return 900
    }
    if (grossSalary >= 35000 && grossSalary <= 39999){
        return 950
    }
    if (grossSalary >= 40000 && grossSalary <= 44999){
        return 1000
    }
    if (grossSalary >= 45000 && grossSalary <= 49999){
        return 1100
    }
    if (grossSalary >= 50000 && grossSalary <= 59999){
        return 1200
    }
    if (grossSalary >= 60000 && grossSalary <= 69999){
        return 1300
    }
    if (grossSalary >= 70000 && grossSalary <= 79999){
        return 1400
    }
    if (grossSalary >= 80000 && grossSalary <= 89999){
        return 1500
    }
    if (grossSalary >= 90000 && grossSalary <= 99999){
        return 1600
    }
    if (grossSalary >= 100000){
        return 1700
    }
}

function paye(){
    if (grossSalary <= 24000){
        return 0.1 * grossSalary
    }
    if (grossSalary >  24000 && grossSalary <= 32333){
        return 0.25 * grossSalary
    }
    if (grossSalary >  32333 && grossSalary <= 500000){
        return 0.3 * grossSalary
    }
    if (grossSalary >  500000 && grossSalary <= 800000){
        return 0.325 * grossSalary
    }
    if (grossSalary > 800000){
        return 0.35 * grossSalary
    }
}

function nssfDeduction (){
    return grossSalary * 0.06
}
