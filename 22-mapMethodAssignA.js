

const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

let arrayAdd10 = arrayNumbers.map((element)=>{
    return element+10;
})

console.log(`-----------------------------------------------------------------------------------------------------------`);


console.log(`Given arrayNumbers : ${arrayNumbers}`);

console.log(`-----------------------------------------------------------------------------------------------------------`);

console.log(`Array after adding 10 to each element : ${arrayAdd10}`);

console.log(`-----------------------------------------------------------------------------------------------------------`);


let arrayCube = arrayNumbers.map((element)=>{
    return element*element*element;
})

console.log(`Array after performing CUBE operation on each element : ${arrayCube}`);

console.log(`-----------------------------------------------------------------------------------------------------------`);

let arrayAddIndex = arrayNumbers.map((element,index)=>{
    return element+index;
})

console.log(`Array after adding to Index Number to each corresponding element : ${arrayAddIndex}`);

console.log(`-----------------------------------------------------------------------------------------------------------`);


