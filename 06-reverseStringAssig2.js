
console.log(`=========================================================`);


function reverseString(str) {

    var strN = str.replaceAll(" ","");

    var reverse = "";

    for (let index = strN.length-1 ; index >=0; index--) {

           reverse = reverse + strN.charAt(index); 
                
    }

     console.log(`Given string is : ${str}    String after reversing : ${reverse}`); 
  
}

reverseString("Hard work always pays back");
reverseString("Soon I will bw Angular IT Champ");

console.log(`=========================================================`);

function countCharA(str) {

     var count = 0;

    for (let index = 0; index<=str.length; index++) {

        var char = str.charAt(index);

       
        if (char == "a"  || char == "A") {
 
            count = count+1;
            
        }
        
        
    }
         console.log(`The total count of "A" or "a" in given string "${str}" : ${count} `);
   
}
countCharA("I AM Learning JavaScript, The Language of internet");
countCharA("My favourite movie is LAggAn");



   
   
    