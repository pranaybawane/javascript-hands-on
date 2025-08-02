console.log(`======================================================================`);

var square = function (num) { 
    
    var squareResult = (num*num);

    console.log(`Square of ${num} is : ${squareResult}`);
    
}
square(5);
square(6);
square(100);
square(67);
square(89);
square(59);

console.log(`======================================================================`);

var typeOfFunction = typeof square ;
console.log(`The type of square function : ${typeOfFunction}`);

console.log(`======================================================================`);

var areaRec = function (length,width) {
    
    var areaRecResult = (length*width);

    console.log(`Area of given rectangle with length ${length} and width ${width} : ${areaRecResult}`);
    
}
areaRec(499,917);


console.log(`======================================================================`);

var swapValues = function (value1,value2) {

    console.log(`The values before swap - value 1 :  ${value1} , value 2 : ${value2}`);

    var temp = value1;

    var value1 = value2;

    var value2 = temp ;

    console.log(`The values after swap - value 1 : ${value1} , value 2 : ${value2}`);
     
}

swapValues("Mahi","Raina");

swapValues(55,77);


console.log(`======================================================================`);


var strMain = function () {
    
   var str = "JS the most popular language of internet"

   console.log(`Thw total character available in String : ${str.length}`);


   console.log(`The character at index 6 : ${str.charAt(6)}`);
   
   console.log(`The character at index 11 : ${str.charAt(11)}`);


   console.log(`The last character of string : ${str.charAt(str.length-1)}`);
   
    console.log(`The character at very first of string : ${str.charAt(0)}`);

    console.log(`The last character of string : ${str.charAt(str.length-3)}`);

    var words = str.split(" ");
     var totalWords = words.length ;

     console.log(`The total number of words in given string : ${totalWords}`);

     var wordSquare = totalWords*totalWords;

     console.log(`And its square : ${wordSquare}`);
     
     
    
}

strMain();