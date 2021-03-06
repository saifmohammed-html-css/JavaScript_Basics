console.log("Basics of JavaScript");

//Variables
console.log("");
console.log("<-----Variables----->")
let email = "saifmohammed888@gmail.com"
const dob = "10/08/1996";
{
    var user = "Mohammed Saif";
}
console.log(user, email, dob);

//Assignment Operator 
console.log("");
console.log("<-----Assignment Operator----->")
var salary = "40781";
console.log('salary = ' + salary);

//Arithmetic Operator
console.log("");
console.log("<-----Arithmetic Operator----->")
var num = 10;
console.log('Sum = ' + (10 + 20));
console.log('Difference = ' + (100 + 20));
console.log('Product = ' + (5 * 20));
console.log('Quotient = ' + (15 / 2));
console.log('Exponention = ' + (2 ** 3));
console.log('Modulus = ' + (10 % 3));
console.log('Increment = ' + (++num));
console.log('Decrement = ' + (--num));

//String Concatenation
console.log("");
console.log("<-----String Concatenation----->");
var firstName = 'Mohammed';
var lastName = "Saif";
console.log(firstName + " " + lastName)

//Comparison Operators
console.log("");
console.log("<-----Comparison Operators----->");
let a = 10;
let b = 25;
console.log("Comparing values of a=10 " + (a == '10'));
console.log("Comparing values of a='10' " + (a === '10'));
console.log("a is greater and b " + (a > b));
console.log("a is smaller and b " + (a < b));

//Logical Operator
console.log("");
console.log("<-----Logical Operators----->");
let userName = "saif";
let age = 25;
if (userName === "saif" && age > 23) {
    console.log("Logical Operator AND is used!");
}

if (userName == "saif" || age > 30) {
    console.log("Logical OR is used");
}

if (age > !25) {
    console.log("Logical Not is used");
}

//typeOf Operators
console.log("");
console.log("<-----typeOf Operators----->");
console.log("Type of name " + typeof (userName));

//Data type
console.log("");
console.log("<-----Primitive Data Type----->");
var company = "Lowes";
var empId = 3024576;
var engineer = true;
console.log("Company and employee id are stored in primited variables string boolean and number ", company, engineer, empId);

//Composite Data Type
console.log("");
console.log("<-----Composite Data Type----->");
var arr = [1, 2, 3, 4, 6];
var details = { name: "Mohammed Saif", age: 25 };
function sum() { return 10 + 20 };

console.log("Composite Data Type has Array, Object and Functions", arr, details, sum);

//Trivial Data type
console.log("");
console.log("<-----Trivial Data Type----->");
let role;
let deskNumber = null;
console.log("Trivial data type contains null and undefined ", role, deskNumber)

//Functions
console.log("");
console.log("<-----Functions----->");
myFunction();

function myFunction() {
    console.log("Custom user defined function");
}

//Objects
console.log("");
console.log("<-----Object----->");
var employeeObject = {
    "name": "Mohammed Saif",
    "age": 24,
    "email": "saifmohammed888@gmail.com",
    "designation": "Software Engineer",
    "jobDescription": function () {
        return "Working on building responsive web and mobile applications";
    }
}

console.log(employeeObject);

//String methods
console.log("");
console.log("<-----String Methods----->");

console.log("");
console.log("<-----String search Methods----->");
let missing = "Engineer";
let sentence = "Hi, My name is saif and i am an Engineer";

console.log("Using Search method: " + sentence.search(missing));
console.log("Using indexOf method: " + sentence.indexOf(missing));
console.log("");
console.log("<-----String slice----->");
console.log("Using slice method 32,end: " + sentence.slice(32));
console.log("Using substring method 1,32: " + sentence.slice(0, 20));

console.log("");
console.log("<-----String replace----->");
console.log("Using replace Method: " + sentence.replace(missing, "Software Engineer"));

console.log("");
console.log("<-----String Upper Case----->");
console.log("Using toUpperCase Method: " + sentence.toUpperCase());

console.log("");
console.log("<-----String Concat----->");
console.log("Using toUpperCase Method: " + sentence.toUpperCase());

console.log("");
console.log("<-----String Trim----->");
let word = "    Hello world       "
console.log("Using toUpperCase Method: " + word.trim());

console.log("");
console.log("<-----Extract characters from string----->");
console.log("Using char at: " + word.charAt(10));
console.log("Using char code at: " + word.charCodeAt(10));

console.log("")
console.log("<-----Convert String to array----->");
let userRole = "Software Engineer";
console.log("Using toString: " + userRole.toString());
let userArray = userRole.split();
console.log("Using split: " + userArray);

console.log("");
console.log("<-----Number Methods----->");
let userAge = age.toString();
console.log(`Using toString method: ${userAge} : type ${typeof (userAge)}`);
let base = 2;
console.log(`Using toExponential method: ${base} to power 8 ${base.toExponential(8)}`);
let weight = 59.837;
console.log(`Using toPrecise method: ${weight} precise to 2 decimal ${weight.toPrecision(4)}`);
console.log(`Using toFixed method: ${weight} fixing to 1 decimal ${weight.toFixed(1)}`);

console.log("");
console.log("<-----Convert String to Number----->");
let sal = parseInt(salary);
console.log(`Using Number method ${Number(salary)}`);
console.log(`Using parseInt method ${parseInt(salary)}`);
console.log(`Using parseInt method ${parseFloat(sal)} type of data ${typeof (sal)}`);

console.log("");
console.log("<-----Arrays----->");
var languages = ["Java", "JavaScript", "HTML/CSS/BootStrap"]
console.log("Skils: " + languages);
console.log("Main Skill: " + languages[0]);

console.log("");
console.log("<-----Array methods----->");
console.log("Using length method to find size: " + languages.length);
console.log("Using sort method to sort array alphabetically: " + languages.sort());

console.log("Looping through array");
for (let x of languages) {
    console.log(x);
}

//Arry Methods
// console.log("");
// console.log("Inserting array element using push " + languages.push("React"));
// console.log(languages);

// console.log("");
// console.log("Converting Array to string");
// console.log("Using toString method " + languages.toString());
// console.log("Using join method to convert to string with separator" + languages.join("*"));

// console.log("");
// console.log("removing last item using pop: " + languages.pop() + " :" + languages);

// console.log("");
// console.log("removing first item using shift: " + languages.shift() + " :" + languages);

// console.log("");
// console.log("Adding first item using unshift: " + languages.unshift("C") + " :" + languages);

// console.log("");
// console.log("deleting  first item using unshift: " + languages.unshift("C") + " :" + languages);

// console.log("");
// console.log("inserting items inbetween using splice: " + languages.splice(3, 0, "C++") + " :" + languages);


// var arr = ["react", "angular"];
// console.log("");
// console.log("Concatenate Arrays : " + languages.concat(arr));

// console.log("");
// console.log("Slicing an array " + languages.slice(0, 2));

console.log("");
console.log("<---Soring Arrays-->");
languages.sort()
console.log(languages);

//Array Iterations
console.log("");
console.log("<--Array ForEach -->");
console.log(languages.forEach((value, index, arr) => console.log(value.toUpperCase(), index, arr)));

//Array Map
console.log("");
console.log("<--Array Map -->");
var newArray = languages.map(value => "Language: " + value);
console.log("Array map to append to each element: " + newArray);

//Array Filter
console.log("");
console.log("<--Array Filter -->");
var filteredArray = languages.filter(value => { return value == "Java" });
console.log("Array to filter to filter specific elements: " + filteredArray);

//Array Reduce()
console.log("");
console.log("<!--Array Reduce-->");
var reduceArray = languages.reduce((accumulator, value, index, arr) => { return accumulator = accumulator + value });
console.log("Array to reduce the elements to single unit: " + reduceArray);

//Array every()
console.log("");
console.log("<!--Array every-->");
var everyArray = languages.every((value) => { return value.length > 1 });
console.log("Array to check if condition is passed by every element: " + everyArray);


//Array every()
console.log("");
console.log("<!--Array some-->");
var someArray = languages.some((value) => { return value.length > 4 });
console.log("Array to check if condition is passed by some element: " + someArray);

//Array find()
console.log("");
console.log("<!--Array find-->");
var findArray = languages.find((value) => { return value == "JavaScript" });
console.log("Array to find an element: " + findArray);

//Dates
console.log("");
console.log("<!--JavaScript dates-->");
var date = new Date();
console.log("Passing year parameter to Constructor: " + date);
// console.log("Getting full year using method : " + date.getFullYear());
// console.log("Getting full month using method : " + date.getMonth());
// console.log("Getting date using method : " + date.getDate());
// console.log("Getting day of week using method : " + date.getDay());
// console.log("Getting hour using method : " + date.getHours());
// console.log("Getting minutes using method : " + date.getMinutes());
// console.log("Getting minutes using method : " + Date.now());

//Math functions
console.log("");
console.log("<--Math functions-->");
console.log(Math.round(12.3343));
// console.log(Math.ceil(12.3343));
// console.log(Math.floor(12.3343));
// console.log(Math.trunc(15.3343));
// console.log(Math.pow(2, 4));
// console.log(Math.sqrt(64));
// console.log(Math.min(2, 4, 1, 3, 5, 6, 7, 8));
// console.log(Math.max(2, 4, 6, 7, 8, 9));
// console.log(Math.random(2));

//Random function
console.log("");
console.log("<--Random function-->");
console.log(Math.floor(Math.random(1) * 100));

//Conditional Statements

if (age >= 18) {
    console.log("The user is eligible to vote");
}
else {
    console.log("User to is too young to be part of voting!!");
}

//Switch
console.log("");
console.log("<--Switch-->");
let jobCode = 4;
switch (jobCode) {

    case 1:
        console.log("Software Engineer");
        break;
    case 2:
        console.log("Business Analyst");
        break;
    case 3:
        console.log("QA Tester");
        break
    default:
        console.log("Job role not found!!");
}


//Looping statements
console.log("");
console.log("<--Looping-->");

let Arr = ["Mohammed Saif", "Mohammed Salman", "Mohammed Suhaib", "Zoya Afreen", "Tabbasum"];
console.log("");
console.log("Using for loop");
for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}

//for in
console.log("")
console.log("<--for in loop-->");
var employee = [
    {
        name: "saif",
        age: 24
    },
    {
        name: "Salman",
        age: 27
    }
]

for (let key in employee) {
    console.log(key);
}

//for of loop
console.log("")
console.log("<--for of loop-->");
for (let key of employee) {
    console.log(key);
}

// While loop
console.log("")
console.log("<--while loop-->");
let x = 0;
while (x < 3) {
    console.log("While");
    x++;
}

//Do While loop
console.log("")
console.log("<--Do while loop-->");
do {
    console.log("do While");
    --x;
}
while (x == 0);


//Hoisting
console.log("")
console.log("<--Hoisting-->");
t = 15;
console.log(t);


//IIFE
console.log("");
console.log("<--IIFE-->");
(function () {
    console.log("immediately invoked function or self invoked function");
})();


//apply method


//Call method
console.log("");
console.log("<--Call method-->");
let person = {
    details: function () {
        console.log(this.name + ": " + this.age);
    }
}


let p1 = { "name": "saif", "age": 24 }
let p2 = { "name": "Salman", "age": 20 }

person.details.call(p1);

//Apply method
console.log("");
console.log("<--Apply method-->");
let person1 = {
    details: function (eng) {
        console.log(this.name + ": " + this.age + " " + eng);
    }
}

let p3 = { "name": "saif", "age": 24 }
let p4 = { "name": "Salman", "age": 20 }

person1.details.apply(p2, ["Software Engineer"]);

//Closure
console.log("");
console.log("<--Closure-->");
var sum = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();


sum();
sum();
console.log(sum());

//Callback

console.log("");
console.log("<--callback-->");

var display = (result) => {
    console.log("Using callback: " + result);
}

var calculator = (a, b, mycb) => {
    let sum = a + b;
    mycb(sum);
}

calculator(10, 15, display);

//Asynchronous 
console.log("");
console.log("<--Asynchronous-->");
setTimeout(function () { console.log("set timeout is running asynchonously") }, 2000);

//Promises
console.log("");
console.log("<--Promise-->");
let promise = new Promise((myResolve, myReject) => {

    let x = 20;
    if (x > 18) {
        myResolve("OK");
    }
    else {
        myReject("Error");
    }
});

promise
    .then((value) => console.log(value))
    .catch((value) => console.log(value));

setTimeout(() => { console.log("I love promises") }, 1000)


//Async and await
console.log("");
console.log("<--Async await-->");

async function data() {
    setTimeout(function () {
        return "Saif"
    }, 3000);
}

data()
    .then((value) => console.log(value))
