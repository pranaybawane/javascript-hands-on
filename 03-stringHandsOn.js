console.log(`=================================================================`);

function stringHandsOn() {
    
var str = "   Hey you are doing good, keep it up  "

console.log(`Given String : ${str}`);

var strLength = str.length ;

console.log(`=================================================================`);

console.log(`Total Length of string : ${strLength}`);

var strFinal = str.trim();
console.log(`=================================================================`);

console.log(`String after removing leading and trailing spaces : ${strFinal}`);

console.log(`=================================================================`);

console.log(`Final length of String : ${strFinal.length}`);

console.log(`=================================================================`);

console.log(`First Character : ${strFinal.charAt(0)}  and Last Character : ${strFinal.charAt(strFinal.length-1)}`);

console.log(`=================================================================`);

var totalWords = strFinal.split(" ");

console.log(`words in string : ${totalWords}`);

console.log(`=================================================================`);

console.log(`The count of total words available in string : ${totalWords.length}`);

console.log(`=================================================================`);

console.log(`The index of word "good" : ${strFinal.indexOf("good")}`);

console.log(`=================================================================`);

console.log(`Substring starting from index 22 : ${strFinal.substring(22)}`);

console.log(`=================================================================`);

console.log(`Is string ends with " up " : ${strFinal.endsWith("up")}`);

console.log(`=================================================================`);

console.log(`Is string starts "Hey" : ${strFinal.startsWith("Hey")} `);


}

stringHandsOn();