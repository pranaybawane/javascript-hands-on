console.log(`-----------------------------------------------------------------------`);

const array =[20,31,40,25,23,11,29,9,60,2,11];
console.log(array);
console.log(`-----------------------------------------------------------------------`);
let totalElement = array.length;
console.log(`Total elements available is array : ${totalElement}`);

console.log(`-----------------------------------------------------------------------`);
let firstElement = array.slice(0,1);
let lastElement = array.slice(array.length-1);

console.log(`First Element : ${firstElement} and Last Element : ${lastElement}`);

console.log(`-----------------------------------------------------------------------`);
let lastElement1 = array.splice(array.length-3,1);

console.log(`Logging the third last Element in the array : ${lastElement1}`);
console.log(`-----------------------------------------------------------------------`);
let evenNumbers = "";

for (const element of array) {
    
    if (element%2==0) {

        evenNumbers=evenNumbers +element + ",";
       
        
    }
}
console.log( `Even Numbers from array : ${evenNumbers}`);

console.log(`-----------------------------------------------------------------------`);
let oddNumbers = "";

for (const element1 of array) {

    if (element1%2!=0) {

        oddNumbers=oddNumbers+ element1 + ",";
        
    }
    
}
console.log(`Odd Numbers from array : ${oddNumbers}`);
console.log(`-----------------------------------------------------------------------`);

let evenPosition= "";

let sumEven = 0;

for (let index = 0; index < array.length-1; index++) {
    
    if (index%2==0) {

       let element2 = array[index];

       evenPosition = evenPosition+ ","+ element2;  

       sumEven=sumEven+element2;
        
    }
    
}

console.log(`Even Position array elements : ${evenPosition}`);
console.log(` Sum of Even Position array elements : ${sumEven}`);
console.log(`-----------------------------------------------------------------------`);
let oddPosition ="";

let sumOdd = 0;

for (let index = 0; index < array.length; index++) {
    
    if (index%2!=0) {

        let element3=array[index];

        oddPosition= oddPosition+","+element3;

        sumOdd=sumOdd+element3;
        
    }
    
}

console.log(`Odd Position elements from array : ${oddPosition}`);
console.log(`Sum of odd position elements : ${sumOdd}`);
console.log(`-----------------------------------------------------------------------`);

let sumArray = 0;

for (const element4 of array) {

    sumArray=sumArray+element4;
    
}

console.log(` Sum of all elements in array: ${sumArray}`);

console.log(`-----------------------------------------------------------------------`);
let multiple5 = "";

for (const element5 of array) {
    
    if (element5%5==0) {

        multiple5=multiple5+","+element5;
        
    }
}
console.log(`Element which are multiple of 5 : ${multiple5}`);

console.log(`-----------------------------------------------------------------------`);
let isInclude = array.includes(115);

console.log(`Is number 115 available in array : ${isInclude}`);
console.log(`-----------------------------------------------------------------------`);
let isInclude1 = array.includes(23);

console.log(`Is number 23 available in array : ${isInclude1}`);

console.log(`-----------------------------------------------------------------------`);
let addElement = array.splice(3,0,55,66);

console.log(` Adding 55 , 66 at index 3 : ${ array}`);
console.log(`-----------------------------------------------------------------------`);
let deleteElement = array.splice(4,3);

console.log(`Deleting the 3 element from index 4 from array : ${array}`);

console.log(`-----------------------------------------------------------------------`);










