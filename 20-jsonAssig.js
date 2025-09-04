

let user = `{

    "name" : "Aleix Melon",
    "id" : "E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married": false,
    "address":{

        "street":"32,Laham St.",
        "city": "Innsbruck",
        "country":"Austria"
    },
    "referred-by": "E0012"

}`;

let jsonToObject = JSON.parse(user);

console.log(`-----------------------------------------------------------------------`);

console.table(jsonToObject);


console.log(`-----------------------------------------------------------------------`);

let result1 = jsonToObject.role[0];

console.log(`Logging Role - "DEV"  :: ${result1}`);


console.log(`-----------------------------------------------------------------------`);


let lastName = jsonToObject.name.split(" ");

console.log(lastName);


console.log(`Logging last name :: ${lastName[lastName.length-1]}`);


console.log(`-----------------------------------------------------------------------`);

let joiningYear = jsonToObject.doj.split("-");

console.log(`Logging Joining Year of employee :: ${joiningYear[joiningYear.length-1]}`);



console.log(`-----------------------------------------------------------------------`);

