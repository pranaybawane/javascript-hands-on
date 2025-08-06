console.log(`=================================================================`);


var isEvenOrOdd = function (num) {

    var result = num%2==0 ;

    if (result) {

        console.log(`Given number ${num} is : EVEN`);
        
        
    } else {

        console.log(`Given number ${num} is : ODD`);
        
        
    }

    
}

isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);

console.log(`=================================================================`);

var isEligibleForVote = function ( age ) {

var result = age>=18 ;

if (result) {

    console.log(`Person with given age ${age} : Eligible for Voting Rights`);
    
    
} else {

    console.log(`Person with given age ${age} : Not Eligible for Voting Rights`);
    
    
}


    
}
isEligibleForVote(18);
isEligibleForVote(20);
isEligibleForVote(17);
isEligibleForVote(40);

console.log(`=================================================================`);

var str = "JavaScript - ES6";

 var strLength = str.length;

var result = strLength> 10 ;

if (result) {

    console.log(`Given string : ${str} :>>  Contains more than 10 characters`);
    
    
} else {

    console.log(`Given String does not contain more than 10 characters`);
    
    
}
console.log(`=================================================================`);

var givenString = function (givenStr) {


    var result = givenStr.includes("Java");

    if (result) {

        console.log(`Given String "${givenStr}" starts with : Java`);
        
        
    } else {
        console.log(`Given String "${givenStr}" does not start with "Java`);
        
    }

    
}

givenString("JavaScript Language");
givenString("Programming Language");