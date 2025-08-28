
function Bank(bankName,location,ifscCode,branchCode) {

    this.bankName=bankName,
    this.location=location,
    this.ifscCode=ifscCode,
    this.branchCode=branchCode

}
console.log(`-------------------------------------------------------------------------------------------------------`);

let yesBank=new Bank("Yes Bank","Amravati","YESB0009",78636);
console.log(`Bank Details : Bank Name - ${yesBank.bankName} , Location - ${yesBank.location} , ISFC Code - ${yesBank.ifscCode} , Branch Code - ${yesBank.branchCode}`);


let sbiBank= new Bank("SBI bank","Nagpur","SBIN00023",942797);
console.log(`Bank Details : Bank Name - ${sbiBank.bankName} , Location - ${sbiBank.location} , ISFC Code - ${sbiBank.ifscCode} , Branch Code - ${sbiBank.branchCode}`);

let mahBank= new Bank("Maharashtra Bank","Paratwada","MAHAB0098",53535);
console.log(`Bank Details : Bank Name - ${mahBank.bankName} , Location - ${mahBank.location} , ISFC Code - ${mahBank.ifscCode} , Branch Code - ${mahBank.branchCode}`);

let axisbank = new Bank("Axis Bank","Pune","AXIS87547",746467);
console.log(`Bank Details : Bank Name - ${axisbank.bankName} , Location - ${axisbank.location} , ISFC Code - ${axisbank.ifscCode} , Branch Code - ${axisbank.branchCode}`);

console.log(`-----------------------------------------Adding Prototype-------------------------------------------------`);

Bank.prototype.openTime="9 AM IST";

Bank.prototype.closeTime="6 PM IST";


console.log(` Open Time for SBI BANK : ${sbiBank.openTime} and its Close Time : ${sbiBank.closeTime}`);
console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`Bank Name - ${axisbank.bankName} and its Close Time : ${axisbank.closeTime}`);

console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`Bank Name - ${yesBank.bankName} , Branch Code - ${yesBank.branchCode} , Open Time - ${yesBank.openTime}`);

console.log(`-------------------------------------------------------------------------------------------------------`);


