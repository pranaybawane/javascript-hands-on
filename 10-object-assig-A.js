
let professor = {

    firstName : "John",
    lastName: "Abruszi",
    age : 49 ,
    salary : 90000,
    college : "COEP ",
    degrees: {
        engineering: "CSS",
        PHD: 'Adv Computing',
        Diploma: "Computer Science"
    },
    certificates: ["Hacker Rank Participation","Certificates in IFE course","Certificate in Adv Programming"]

}

console.log(` --------- ADDING NEW PROPERTY totalExperience:"14 years"---------------`);

professor.totalExperience="14 years";

console.table(professor);

console.log(`----------- Modifying or Updating the previous properties age,college,engineering-----------`);

professor.age=55;
professor.college="VJTI";
professor.degrees.engineering="Information Technology";

console.table(professor);

console.log(`---------------Adding new element "Oracle Certificate" at 2 index of certificates array-------------`);


professor.certificates.splice(2,0,"Oracle Certified");

console.log(` Certificates : ${professor.certificates}`);

console.log(`----------------Traversing Certificate Array----------------`);

for (const element of professor.certificates) {

console.log(element);
    
}
