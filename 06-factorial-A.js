
console.log(`===========================================================================`);


function factorialOfNum(num) {


    if ( num >=0 && num != null) {

            let factorial = 1;

for (let index = num ; index >= 1 ; index--) {


    
       factorial=factorial*index;

    
}
  console.log(`Factorial of given value (${num}) is : ${factorial}`);

  console.log(`----------------------------------------------------------------------------`);


        
    } else {

        console.log(`Given value ( ${num}) : Is not a number === * Unhappy Scenario *  `);

        console.log(`----------------------------------------------------------------------------`);

        
        
    }


  
    
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9); 
factorialOfNum(0);