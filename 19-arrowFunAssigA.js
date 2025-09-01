console.log(`------------------------Arrow Function with no arg and no return value-----------`);

let result1 = ()=>{
    console.log(`Hey David , Good Morning Today is Friday`);
    
}
result1();

console.log(`-----------------------------Multiplication---------------------------------------`);
let multiResult = (n1,n2,n3=1)=>{
    let result2 = n1*n2*n3;

    console.log(`Multiplication of ${n1},${n2},${n3} = ${result2}`);
    
}
multiResult(5,5,2);
multiResult(10,4);

console.log(`-------------------------------Addition------------------------------------------`);
let addition = (p1=0,p2=0,p3=0,p4=0,p5=0)=>{
    let addResult = p1+p2+p3+p4+p5;

    return addResult;
}

let result3=addition(100,100,200,349,756);
console.log(` Result of Given elements : ${result3}`);

let result4=addition(5,5,2);
console.log(` Result of Given elements : ${result4}`);

let result5 = addition(10,4);
console.log(` Result of Given elements : ${result5}`);

let result6 = addition("I am ","learning ","ES6 " ,"features " ,"in depth.");

console.log(` Result of Given elements : ${result6}`)






