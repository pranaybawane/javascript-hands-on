
let bankSbi = {
    customerName: "John",
    mobileNumber: 9876382736,
    accountNumber : 235562,
    availableBalance: 40933
}

let bankLocation={
    street: "raddostreet",
    city: "amravati",
    pin:444603,
    isfc : "sbin0000437",

}

let clonedBankSbi=Object.assign({},bankSbi);
console.log(`--------------------------------------------------------------------------`);
console.log(`Customer Name : ${clonedBankSbi.customerName} , Mobile No : ${clonedBankSbi.mobileNumber} , Account Number :${clonedBankSbi.accountNumber} , Available Balance :${clonedBankSbi.availableBalance}`);

console.log(`--------------------------------------------------------------------------`);
let clonedBankLocation=Object.assign({},bankLocation);

console.log(`Street : ${clonedBankLocation.street} , City : ${clonedBankLocation.city} , PinCode : ${clonedBankLocation.pin} , ISFC Code : ${clonedBankLocation.isfc}`);



let rateOfInterest ={

    homeLoanInterest: "8.5 %",
    personalLoanInterest: "10.5 %",
    deuInterest : "14 %"
}

console.log(`--------------------------Merging the BANKSBI , BANKLOCATION , RateofInterest------------------------------------------------`);
let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);

console.table(sbiDetails);

console.log(`----------------------Traversing the SBIDETAILS---------------------------------------------------`);
for (const key in sbiDetails) {
    
    const element = sbiDetails[key];
    
    console.log(`${key}  :  ${element}`);
    
}

console.log(`--------------------------------------------------------------------------`);