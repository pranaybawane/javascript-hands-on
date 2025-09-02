console.log(`--------------------------------------------------------------------------------`);

const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];

console.log(`arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]`);

console.log( `----------------Element with index numbers  from arrayNumbers-------------------`);



arrayNumbers.forEach((element,index) => {

    console.log(`${index} : ${element}`);
    
    
});


let positiveNumbers = [];

arrayNumbers.forEach(element => {

    if (element>0) {

        positiveNumbers.push(element);  
    }
    
});

console.log(`-----------------------------Positive Numbers--------------------------------`);


console.log(`Positive Numbers from arrayNumbers : [${positiveNumbers}] `);


let negativeNumbers = [];

arrayNumbers.forEach(element => {
    if (element<0) {

        negativeNumbers.push(element);
        
    }
});

console.log(`--------------------------------Negative Numbers-----------------------------`);

console.log(`Negative Numbers from arrayNumbers : [${negativeNumbers}]`);


let evenNumbers = [];

arrayNumbers.forEach(element => {

    if (element%2==0) {
        
        evenNumbers.push(element);
    }
    
});
console.log(`---------------------------Even Numbers------------------------------------`);

console.log(`Even numbers from arrayNumbers : [${evenNumbers}]`);


let sum =0;

arrayNumbers.forEach(element => {

    sum=sum+element;
    
});

console.log(`-----------------------------Sum of arrayNumbers---------------------------`);


console.log(` Sum of all element from arrayNumbers : ${sum}`);


let evenIndexElement = [];

arrayNumbers.forEach((element,index) => {

    if (index%2==0) {
        
        evenIndexElement.push(element);
        
    }
    
});

console.log(`------------------------Even Indexed array Element-------------------------`);


console.log(`Even indexed element from arrayNumbers : [${evenIndexElement}]`);


