console.log(`----------------------------------------------------------------------------`);

function factorialWordsCount(str) {

    if (str != null && str!=undefined && str!=NaN && str!="") {

        let words = str.split(" ") ;

        let totalWords = words.length ;

        console.log(`Total numbers of words available in given string (${str}) is : ${totalWords} `);

        let factorial = 1;

        for (let index = totalWords ; index >= 1 ; index--) {

            factorial=factorial*index;
            
        }

        console.log(`Factorial of Total Word Count is : ${factorial}`);

        console.log(`----------------------------------------------------------------------------`);

        
        

    
        
    } else {
        console.log(`Invalid value or String  passed (${str}) =  *Unhappy Scenario*`);

        console.log(`----------------------------------------------------------------------------`);

        
    }


    
}
factorialWordsCount("Revision is the mother of Success");
factorialWordsCount("We never fail, we always learn, Mind it");
factorialWordsCount(null);
factorialWordsCount("");
factorialWordsCount("Pranay Vinayakrao Bawane");
