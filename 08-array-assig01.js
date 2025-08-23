console.log(`-------------------------------------------------------------`);

const fruits= ["Banana","Orange","Apple","Mango","Water Melon"];


console.log(fruits);
console.log(`-------------------------------------------------------------`);
let firstElement = fruits.slice(0,1);

console.log(`Frist Element : ${firstElement}`);
console.log(`-------------------------------------------------------------`);

let lastElement =  fruits.slice(fruits.length-1);

console.log(`Last Element : ${lastElement}`);

console.log(`-------------------------------------------------------------`);
let addElement1 = fruits.unshift("Papaya");

console.log(`Adding Papaya at first : ${fruits}`);
console.log(`-------------------------------------------------------------`);
let removeMango = fruits.splice(4,1);

console.log(`Removing Mango from fruits : ${fruits}`);

console.log(`-------------------------------------------------------------`);
let addElement2 = fruits.push("Pineapple");

console.log(`Adding Pineapple at last position : ${fruits}`);
console.log(`-------------------------------------------------------------`);
let addElement3 = fruits.splice(fruits.length-2,0,"Dragon Fruit");

console.log(`Adding Dragon Fruit before Water Melon :${fruits}`);
console.log(`-------------------------------------------------------------`);

let replaceElement = fruits.splice(2,1,"Kiwi");

console.log(`Replacing Orange with Kiwi : ${fruits}`);

console.log(`-------------------------------------------------------------`);
let element1 = fruits.slice(1,4);

console.log(`Logging the Element from index 1 to 4 : ${element1}`);

console.log(`-------------------------------------------------------------`);
let lastElement1 = fruits.slice(fruits.length-3);

console.log(`Last three Element from array : ${lastElement1}`);
console.log(`-------------------------------------------------------------`);






