
function show() {

    console.log(`Last show timings : 11:00 pm `);
    
    
}

show();

console.log(`-------------------------------------------------------`);


function personalDetails( firstName ) {

       console.log(`First Name : ${firstName}`);
          
}

personalDetails("Pranay");

function personalDetails( lastName ) {

    console.log(`Last Name : ${lastName}`);
    
    
}
personalDetails("Bawane");

function personalDetails( collegeName) {

    console.log(`College Name : ${collegeName}`);
    
    
}
personalDetails("Govt. College of Engineering A'bad")

console.log(`-------------------------------------------------------`);

function addThreeValues(num1,num2,num3) {
    
    console.log(` Values to add : ${num1}, ${num2},${num3}`);
    
    var addition = num1+num2+num3;

    return addition;
  
}

var additionResult = addThreeValues(10.23,600,40);

console.log(`Addition of given numbers : ${additionResult}`);

console.log(`-------------------------------------------------------`);

var additionResult = addThreeValues("Hello","Good","Morning");


console.log(`Addition of given numbers : ${additionResult}`);
