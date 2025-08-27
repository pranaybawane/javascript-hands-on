console.log(`-----------------------------------------------------------------------------------`);

class Vehicle  {

    companyName
    model
    vehicleType
    color
    vehicleNumber
    chassisNumber

    details(){
        console.log(`Details :  ${this.companyName} , ${this.model} , ${this.vehicleType} , ${this.color} , ${this.vehicleNumber} , ${this.chassisNumber}`);
        
    }

    constructor(companyName,model,vehicleType,color,vehicleNumber,chassisNumber) {
        this.companyName=companyName,
        this.model=model,
        this.vehicleType=vehicleType,
        this.color=color,
        this.vehicleNumber=vehicleNumber,
        this.chassisNumber=chassisNumber
    }

}

let vehicle1 = new Vehicle("Hyundai","Grandi10","Four Wheeler","Silver","MH27BN4545",7437984848484848);
vehicle1.details();
console.log(vehicle1);

let vehicle2 = new Vehicle("Honda","Civic","Four Wheeler","Pearl White","MH02BV68764",34464658765466587);
vehicle1.details();
console.log(vehicle2);

let vehicle3 = new Vehicle("Hyundai","I20","Four Wheeler","Red","MH28BD7847",7457368765895549);
vehicle1.details();
console.log(vehicle3);

let vehicle4= new Vehicle("Jeep","Compass","Four Wheeler","Olive","MH13JG8575",58795798572975795);
vehicle1.details();
console.log(vehicle4);

let vehicle5 = new Vehicle("Range Rover","Autobiography","Four Wheeler","Grey","MH30BE6745",632567325685759859);
vehicle1.details();
console.log(vehicle5);


console.log(`-----------------------------------------------------------------------------------`);



 class College{
    collegeName
    city
    course
    isAutonomous

    display(){
        console.log(`Details - College Name : ${this.collegeName} , City : ${this.city} , Course : ${this.course} , Is Autonomous : ${this.isAutonomous}`);
        
    }

    constructor(collegeName,city,course,isAutonomous){
        this.collegeName=collegeName,
        this.city=city,
        this.course=course,
        this.isAutonomous=isAutonomous

    }

}

let college1= new College("COEP", "Pune", "Mechanical Engineering","Yes");

college1.display();

let college2 = new College("VJTI","Mumbai","Civil Engineering","Yes");

college2.display();

let college3 = new College("IIT","Mumbai","BTECH","Yes");
college3.display();

let college4 = new College("SP JAIN","Mumbai"," Electrical Engineering","Yes");
college4.display();

console.log(`-----------------------------------------------------------------------------------`);

