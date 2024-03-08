// Strings
// const myVariable = "Mathemathics";

//The length property
// console.log(myVariable.length);

//String Methods
// console.log(myVariable.charAt(6));

// console.log(myVariable.indexOf(at));

// console.log(myVariable.lastIndexOf(at));

//slice methods
//

//includes method

//split method

//Number Methods

// const myNumber = 30;

// const myString = '42'

// const myFloat = 30.5
//A number with a decimal point is a float which refernces the 'FLoating Number '

// console.log(Number(myString));

//Math Method and Properties
// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(Math.PI));
// console.log(Math.ceil(Math.PI));
// console.log(Math.floor(Math.PI));
// console.log(Math.pow(Math.PI));
// console.log(Math.min(Math.PI));
// console.log(Math.max(Math.PI));

//from 1 to 10
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10 + 1));

// JAVASCRIPT CHALLENGE
//MAke it pick Random Letters from Your Name

// const myName = "Praise";

// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

//Conditional: If Statements
//syntax
// let customerIsBanned = true;
// let food = "Oriental Fried Noodles ";
// let reply;
// if (customerIsBanned)  {
//   reply = "You are not allowed to";
// }
// if (food) {
//   reply = `Your order of ${food} will be delivered in 5 minutes`;
// } else {
//   reply = `We are sorry the ${food} has been removed from the menu due to a temporary issue`;
// }

// console.log(reply);

//example 2
// let testScore = 10;
// let grade;

// if (testScore >= 90) {
//   grade = "A";
//   alert("You have successfully completed this course");
// } else if (testScore >= 80) {
//   grade = "B";
// } else if (testScore >= 70) {
//   grade = "C";
// } else if (testScore >= 60) {
//   grade = "D";
// } else if (testScore >= 50) {
//   grade = "E";
// } else if (testScore <= 40) {
//   grade = "F";
//   if (testScore <= 50) {
//     alert(
//       "You have failed to score the minimum score required so you need to retake this test again"
//     );
//   }
// }

// console.log(grade);

//Decision Tree
// if (playerOne === computer) {
//     //tie game !
// } else if (playerOne === "rock") {
//     if (computer === "paper") {
//         //Computer Wins
//     } else {
//         //player one wins
//     }
// }
//incomplete

// Conditionals : Switch Statements
//syntax

// Conditionals : Ternary Operator
//syntax

// condition ? ifTrue : ifFalse

// let soup = "Oriental Fried Rice ";
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned
//   ? "sorry No food For the wicked here "
//   : soup
//   ? `Yes we have suoup for you today`
//   : "Sorry we do not have soup on the menu today ";

// console.log(soupAccess);
// let response = soup ? "Yes We have soup ... " : "No We do not have soup ... ";

// console.log(response);

// let testScore = 0;
// let myGrade =
//   testScore > 89
//     ? "A"
//     : testScore > 79
//     ? "B"
//     : testScore > 69
//     ? "C"
//     : testScore > 59
//     ? "D"
//     : testScore > 49
//     ? "E"
//     : "F";

// console.log(`My test grade ia a ${myGrade}`);

// let playerOne = "rock";
// let computer = "scissors";
// let result =
//   playerOne === computer
//     ? "Tie Game !!!"
//     : playerOne === "rock" && computer === "paper"
//     ? "Computer Wins !!"
//     : playerOne === "paper" && computer === "scissors"
//     ? "Computer Wins !!"
//     : playerOne === "scissors" && computer === "rock"
//     ? "Computer Wins !!"
//     : "playerOne Wins !!!";
// console.log(result);

//User Input

// let myBoolean = confirm("Ok === True\nCancel === False" );

// console.log (myBoolean);

// let name = prompt("Please Enter your name");
// if (name) {
//   console.log(name.length);
//   console.log(name.trim().length);
//   console.log(name.trim());
// } else {
//   console.log("You didnt enter a name");
// }

// //Loops
//While Loop
// let myNumber = 0;
// while (myNumber < 50) {
//   myNumber += 2;
//   console.log(myNumber);
// }

// dont create an endless loop

// DO WHILE LOOP
// do {
//   console.log(myNumber);
// } while (myNumber < 50);

//FOR LOOP
// let name = "Temiloluwa"
// for (let i = 0; i <= name.length; i++) {
//   console.log(name.charAt(i));
// }

//FUNCTIONS
//Methods are built in functions
//FUnction Declaration Syntax

// function sum (num1, num2){
//   return num1 + num2;
// }

// console.log (sum(2,6))

// const getUserNameFromEmail= (email) => {
//   return email.slice(0, email.indexOf("@"));
// }

// console.log (getUserNameFromEmail("temibillions@gmail.com"));

// function getUserNameFromEmail (email)  {
//   return email.slice(0, email.indexOf("@"));
// }

// console.log (getUserNameFromEmail("JohnDoe@gmail.com"));

// const toProperCase = (nme) => {
//   return nme.charAt(0).toUpperCase() + nme.slice(1).toLowerCase();
// };

// console.log (toProperCase("joHndoe@gmail.com"));

//Scope

//Global scope
var x = 1;
let y = 2;
const z = 3;

//Local Scope
// {
//   let y= 4 ;
// }

// function myFunc(){
//   const z = 5 ;
//   console.log (z);
// }

// myFunc();

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunc() {
//   {
//     var x = 11; //function scoped
//     const z = 6; //block scoped
//     console.log(`block : ${x}`);
//     console.log(`block: ${y}`);
//     console.log(`block: ${z}`);
//   }
//   console.log(`function: ${x}`);
//   console.log(`function: ${y}`);
//   console.log(`function: ${z}`);
// }

// myFunc();

//Arrays
// const myArray = [];

//add elements to an array
// myArray[0] = "Temi";
// myArray[1] = 1001;
// myArray[2] = false;

// //refer to an array
// console.log(myArray);

// //length property
// console.log(myArray.length);

// //last element in an array
// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);

// addd new element to an array
// myArray.push("School");

// console.log(myArray);

//remove element from array
// myArray.pop();

// console.log (myArray);

// remove an element from the front of the array
// myArray.shift();

// console.log (myArray);

//separate the last element of an array
// const lastItem = myArray.pop();
// console.log (lastItem);

//put an element in the front of an array
// myArray.unshift("School");

// console.log(myArray);

// remove and replace any element from the array
// myArray.splice(1 ,1);

const myArrayA = ["A", "B", "C", "D", "E", "F"];
// const newArray = myArray.slice(2,5);

// myArray.reverse();

const newString = myArray.join();

const newArray = newString.split(",");

console.log(newString);
