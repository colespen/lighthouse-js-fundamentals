/*
function revString(revMe) {
  let reversed = "";
  for (let i = revMe.length -1; i >= 0; i--) {
    reversed += revMe[i];
  }
  return reversed;
}
console.log(revString("FatSlabb"));
*/

/*
function reheatPizza(numSlices) {
  // code that figures out reheat settings
}
*/

/*
function sayHi() {
  var msg = "Yo sup dingus."
  console.log(msg);
}
sayHi() //calls function, runs code
*/

/* function to find average number with open # of 
arguments */
/*

let num = 0;
let total = 0;
const avg = function() {
  for (let i of arguments) { //arguments object!!!
  total += i; 
  }
  total /= num;
  console.log(Math.round(total * 10) / 10);
}
num = 7;
avg(67, 36, 47, 67, 4, 35, 700);
*/

/* //basic declaration

function add(x,y) {
  let sum = x + y;
  return sum;
}
let sum = add(4, 20);
console.log(sum);
*/

//Laugh Quiz
/*
function laugh() {
  return "hahahahahahahahahaha!";
}
console.log(laugh());
*/

//Laugh Quiz #2
/*
let print = "" //must declare empty string
function laugh(num) {
  for (let i = 1; i < num; i++) {
    print += "ha";
  } 
  return print += "ha!"; 
  //must end w return or 'undefined'
}
console.log(laugh(53))
*/

//Prime Number Function
/*
function isPrime(integer) {
  for (let i = 2; i < integer; i++) {
    if (integer % 2 === 0) {
      console.log(integer + ' is divisble by ' + i + 'so it is not a prime number.');
      // return false;
    }
  } 
  console.log(integer + ' is only divisble by itself and 1. Therefore, it is a prime number.')
  // return true;
} 
// console.log(isPrime(11));
//console.log will print function as undefined without return statement. 
isPrime(11);
*/

/*
function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  // return "Returning: I am returning this string!"; 
  // without will return undefined by default
}
isThisWorking(3);
*/
/*
function square(x) {
  return x * x; //returns undefined in console
}

function subtractFour(x) {
  return square(x) - 4;
}
console.log(subtractFour(5)); 
//calls and prints both functions 
*/

/*
// last paramter prefixed with " ..." places all remaining parameters into array //
function hellaArgs(a, b, ...placeholder) {
  console.log(a, b, placeholder)
}
hellaArgs("arg1", "arg2", "arg3", "arg4", "arg5", "arg6", "arg7");
*/