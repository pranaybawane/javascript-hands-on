console.log(`======================================================================`);


function greaterNumber(n1,n2)  {

     var greatNum = n1>n2 ? n1 : n2 ;

 console.log(`The greatest number amgong ${n1} and ${n2} : ${greatNum}`);
 
} 
greaterNumber(10 ,-10);
greaterNumber(800,899);

console.log(`======================================================================`);

function isEvenOrOddNum (num) {


   var result = num % 2 == 0 ? "Even" : "Odd" ;

   console.log(`Given Number ${num} : ${result}`);
   
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`======================================================================`);

function isEvenOrOddNum (num) {


   var result = num % 2 == 0 ? "True" : "False" ;

   console.log(`Given Number ${num} is Even  : ${result}`);
   
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`======================================================================`);

function wordLength( str) {

    var length =  str.length ;

      var result = length%2 == 0 ? "Even Length" : "Odd Length";
    
      console.log(`Following name has ${str} : ${result}`);
      
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");