// NOTE: Lern JS

// NOTE: variables

//function test(){
//  var a = "3";
//  var b = "8";
//alert(a + b);
//}

// NOTE: <variable>.length count caracters
// var tweet = prompt("Compose your tweet: ");
// alert("You have written " + tweet.length + " charters, you have " + (140 - tweet.lengthő) + " chareters remaining.");

// var name   "Norbert";
// NOTE: count from 0
// name.slice(0,1);
//output : N

// NOTE: output Nor
//var name = "Norbert";
// name.slice(0,3);

// var tweet = prompt("Compose your tweet: ");
// alert(tweet.slice(0,140));
//
// var name =  "Norbert";
// name.toUpperCase();
// // NOTE: re assign the variable
// // NOTE: Upper Case
// name = name.toUpperCase();
// // NOTE: Lower Case
// name = name.toLowerCase();

// var name = prompt("What is your name?");
// alert("Hello" + name);

// // NOTE: Insert name, slice 1 char then make uperCase then rest of the char make lowerCase then concatenate the Name.
// var name = prompt("What is your name?");
// var firstChar = name.slice(0,1);
// var upperCaseFirstChar = firstChar.toUpperCase();
// var restOfName = name.slice(1,name.length);
// restOfName = restOfName.toLowerCase();
// var capitalisedName = upperCaseFirstChar + restOfName;
//
// alert("Hello " + capitalisedName);

// NOTE: Numbers

// // NOTE: Doga age calculator
// var dogAge = prompt("How old is your dog?");
// var humanAge = ((dogAge - 2) * 4) + 21;
// alert("Your dog " + humanAge + " years old in human years.");

// NOTE:  += -= *= /=
// icrement
// x++
// x+=2;
// x+=y;
// decrement
// x--

// NOTE: function
//
// function yourFunction(){
//   //code here
// }

// NOTE: call function
// yourFunction();

// function  getMilk(){
//   // some code
// }

// NOTE: function with input
// calculating cost or etc.
// function getMilk(bottles){
//   var cost = bottles * 1.5;
//   //Do something
// }
//
// getMilk(2);

// function getMilk(money) {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
// // NOTE: rounded down for whole
//     var numberOfBottles = Math.floor(money / 1.5);
//     console.log("buy " + numberOfBottles + "bottles of milk");
//
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }
// function lifeInWeeks(age){
//   var yearsRemaining = 90 - age;
//   var days = yearsRemaining * 365;
//   var weeks = yearsRemaining * 52;
//   var month = yearsRemaining * 12;
//
//   console.log("You have " + days + "days" + weeks + " weaks, and " + month + "months left.");
//
// }
//
// lifeInWeeks(28);

// NOTE: function: Output & Returne value

// function getMilk(money){
//
// console.log("Buy " + calcBottles(money, 2.5) + " botles of milk");
//   return money % 1.5;
//
// }
//
// function calcBottles(startingMoney, costPerBottle){
//
//   var numberOfBottles = Math.floor(startingMoney / costPerBottle);
//   return numberOfBottles;
//
// }
//
// function calcChange(startingAmounnt, costPerBottle){
//
// var change = startingAmounnt % costPerBottle;
// return change;
//
// }
//
// console.log("Hello master, here is your " + getMilk(10, 3) + " change.");

// NOTE: sest bmi calculator

//BMI = weight/(height*height)

// function bmiCalculator(weight, height){
//
// var bmi = weight / Math.pow(height, 2);
// return Math.round(bmi);
// }
//
// var bmi  = bmiCalculator(65, 1.8);

// NOTE: Love calculator
// NOTE: my xD
// var yourName = prompt("Enter Your name: ");
// var yourChosen = prompt("Enter Your chosen name: ");
// var n = Math.random();
// n = n * 100;
// n = Math.floor(n) + 1;
// alert(yourName + " <3 " + yourChosen + " " + n + "% ");

// NOTE: udemy
// prompt("What is your name?");
// prompt("What is their name?");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert("Your love love score is " + loveScore + " %");

// NOTE: If

// === is equal to
// !== is not eq
// > greater then
// < less then
// >= greater or eq
// <= less or eq
// && AND
// || OR
// ! not

// prompt("What is your name?");
// prompt("What is their name?");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
//
// if (loveScore > 100){
//
// alert("Your love love score is " + loveScore + "%" + "True love.");
//
// } else {
//
// alert("Your love love score is " + loveScore + "%");
//
// }

// prompt("How heAvy are your?");
// prompt("How tall are you?");
//
// function bmiCalculator (weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     bmi = Math.round(bmi);
//
//     if (bmi > 24,9){
//         alert("Your BMI is " + bmi + "so your overweight.");
//     }
//     if (24.9 >= bmi && bmi >= 18.5){
//         alert("Your BMI is " + bmi + "so your normal weight.");
//     }
//     else{
//
//     }
//     alert("Your BMI is " + bmi + "so your underweigh.");
//
//     return bmiCalculator();
// }

// NOTE:  leep year

// function isLeap(year){
// var year = 2000;
// if (year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       return "leap year";
//     } else {
//       return "Not leap year.";
//     }
//   } else{
//     return "Leap year.";
//     }
//     } else {
//     return "Not leap year.";
//     }
//
// }

// NOTE:  Array

// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
//
// var guestName = prompt("What is your name?");
//
// if(guestList.includes(guestName)){
//     alert("Welcome!");
// } else {
//     alert("Sorry, maybe next time.");
// }


// //FizzBuzz
// var output = [];
// var count = 1;
//
// function fizzBuzz(){
//  if(count % 3 === 0 && count % 5 === 0){
//    output.push("FizzBuzz")
//   } else if(count % 3 === 0){
//     output.push("Fizz");
//   } else if (count % 5 === 0) {
//     output.push("Buzz");
//   } else{
//     output.push(count);
//   }
// count++;
// console.log(output);
// }

// code challenge
// names["Angela", "Ben", "Jenny", "Michael", "Chloe"];
//
// function whosPaying(names){
// var numberOfPeople = names.lenght;
// var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
// var randomPerson = names[randomPersonPosition];
//
// return randomPerson + " is going to buy lunch today!";
// }

// LOOP //
//while

//FizzBuzz
// var output = [];
// var count = 1;
//
// function fizzBuzz(){
//
// while(count<=100){
//
//  if(count % 3 === 0 && count % 5 === 0){
//    output.push("FizzBuzz")
//   } else if(count % 3 === 0){
//     output.push("Fizz");
//   } else if (count % 5 === 0) {
//     output.push("Buzz");
//   } else{
//     output.push(count);
//   }
// count++;
// }
// console.log(output);
// }

//challenge
// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
//   numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }


// For loops

// for (i=0;//start i<2;//end i++ //change direction inc or dec){
//   //do something
// }
// function szamol(){
// for(i=0; i<100; i++){
//   console.log(i);
// }
// }

// Fibonacci sequence

// function fibonacciGenerator(n){
//   var output = [];
//   if (n === 1){
//     output = [0];
//   } else if (n === 2) {
//     output = [0, 1];
//   } else {
//     output = [0, 1];
//
//     for (var i = 2; i < n; i++){
//       output.push(output[output.length - 2] + output[output.length - 1]);
//     }
//   }
//         return output;
// }
//
// output = fibonacciGenerator(5);
// console.log(output)

// <<EOF>>
