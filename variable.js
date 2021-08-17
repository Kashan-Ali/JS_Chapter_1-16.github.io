/* Exercise 1  Start*/

//  Task 1:
// comments can make code readable.


//  Task 2:
var string = "Hellow World";
var boolean = true;
var none;
var nullType = null;


//  Task 3:
var name;
var fName;
var age;
var city;


//  Task 4:
var name = "Kashan Ali";
var fName = "M.Rafique";
var age = 22;
var city = "Hyderabad";


// Task 5:
var firstName = "Kashan";
var lastName = "M.Rafique";
var maritalStatus = "Single";
var country = "Pakistan";
var age = 20;


//  Task 6:
var firstName = "Kashan", lastName = "M.Rafique", maritalStatus = "Singel", country = "Pakistan", age = 20;


//  Task 7:
var myAge = 25;
var yourAge = 30;
console.log("I am " + myAge + " years old.");
console.log("I am " + yourAge + " years old.");

/* Exercise 1  End  */



/* Exercise 2 Start*/

//Task 1
var first_Name = "Kashan", last_Name = "Abbasi", country = "Pakistan", city = "Hyderabad", age = 22, isMarried = "Single", year = "2021";
if(first_Name === last_Name === country === city === age === isMarried === year) {
    console.log("These all variables are same in data type.");
}
else {
    console.log("These all variables are not same in data type.");
}


//Task 2
var num1 = '10';
var num2 = 10;
if(num1 == num2) {
    console.log("Yes it is.");
}
else {
    console.log("No it is not.");
}


//Task 3
var num3 = '10';
var num4 = 10;
if(num3 === num4) {
    console.log("Yes it is.");
}
else {
    console.log("No it is not.");
}


//Task 4
var num5 = 5;
var boolean1;
if(num5 < num5++) {
    boolean1 = true;
}
else if(num5 > num5--) {
    boolean1 = true;
}
else if(num5 == num5) {
    boolean1 = true;
}
console.log("boolean is true: " + boolean1);

if(num5 > num5++) {
    boolean1 = false;
}
else if(num5 < num5--) {
    boolean1 = false;
}
else if(num5 == num5++) {
    boolean1 = false;
}
console.log("boolean is false: " + boolean1);


// Task 5
if (4 > 3) {
    // true
    console.log("4 > 3: is working");
}
if (4 >= 3) {
    // true
    console.log("4 >= 3: is working");
}
if (4 < 3) {
    // false
    console.log("4 < 3: is working");
}
if (4 <= 3) {
    // False
    console.log("4 <= 3: is working");
}
if (4 == 4) {
    // true
    console.log("4 == 4: is working");
}
if (4 === 4) {
    // true
    console.log("4 === 4: is working");
}
if (4 != 4) {
    // false
    console.log("4 != 4: is working");
}
if (4 !== 4) {
    // False
    console.log("4 !== 4: is working");
}
if (4 != '4') {
    // False
    console.log("4 != '4': is working");
}
if (4 == '4') {
    // true
    console.log("4 == '4' is working");
}
if (4 === '4') {
    // false
    console.log("4 === '4' is working");
}


// Task 6
var base = prompt("Enter triangle Base in number");
var heigth = prompt("Enter triangle heigth in number");
var area = 0.5 * base * heigth;
console.log("Your triangel area is: " + area);


// Task 7
var sideA = prompt("Enter triangle Side-A perimeter in number");
var sideB = prompt("Enter triangle Side-B perimeter in number");
var sideC = prompt("Enter triangle Side-C perimeter in number");
var perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log("The perimeter of the triangle is: " + perimeter);


// Task 8
var hours = prompt("Enter hours in number");
var ratePerHours = prompt("Enter rate per hour in number");
var personPay = hours * ratePerHours;
console.log("Your weekly earning is: " + personPay);

/* Exercise 2  End  */



/* Exercise 3 Start*/

// Task 1
var driveAge = 18;
var age = prompt("Enter your age in number");
if(age >= driveAge) {
    console.log("You are old enough to drive");
}
else if(age < driveAge) {
    var ageLeft = parseInt(driveAge) - parseInt(age);
    console.log("You are left with " + parseInt(ageLeft) + " years to drive");
}


// Task 2
var remainder = prompt("Enter a number");
if((remainder % 2) == 0) {
    console.log(remainder + " is an even number");
}
else {
    console.log(remainder + " is an odd number");
}


// Task 3
var myAge = 250;
var yourAge = 25;
console.log("I am " + (myAge - yourAge) + " years older than you.");

/* Exercise 2  End  */