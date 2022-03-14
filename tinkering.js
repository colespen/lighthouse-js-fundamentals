/* 
let rev = (w) => {
  let revw = ""
  for (let i = w.length -1; i >= 0; i--) {
    revw = revw.concat(w[i]);
  }
  return revw;
};
let wordToRev = 'Holy shit.';

revw = rev(wordToRev);

console.log(revw);
*/

/*
let myString = 'ok';

for (let i = 0; i < myString.length; i++) {
  console.log(myString.charCodeAt(i));
};
*/

/*
a = 2
b = 2

if (a >= b) {
  console.log('a is greater than or equal to b');
} else {
  console.log('a is less than b');
};
*/
/*
let number = 'ok';

if (number % 2 === 0) {
  console.log('even')
} else if (number === undefined) {
  console.log('please enter numerical value');
} else {
  console.log('odd');
};
*/
/*
var room = "ballroom";
var suspect = "Mr. Kalehoff"; 
var weapon = "";
var solved = false;

if (room === 'ballroom' && suspect === 'Mr. Kalehoff') {
    weapon = 'poison';
    solved = true;
} else if (room === 'gallery' && suspect === 'Ms. Van Cleve') {
    weapon = 'trophy';
    solved = true;
} else if (room === 'billiards room' && suspect === 'Mrs. Sparr') {
    weapon = 'pool stick';
    solved = true;
} else if (room === 'dining room' & suspect === 'Mr Parkes') {
    weapon = 'knife'
    solved = true;
} else {
    solved = false;
};

if (solved) {
	console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
};
*/
/*
let balance = 0;
let checkBalance = true;
let isActive = false;

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log(`Your balance is $${balance.toFixed(2)}.`);
  } else if (isActive && balance === 0) {
      console.log('Your account is empty.');
  } else if (isActive && balance < 0) {
      console.log(`Your balance is negative ($${balance.toFixed(2)}). Please contact the bank.`);
  } else if (isActive === false) {
      console.log('Your account is no longer active.');
  }; 
} else {
  console.log('Thank you. Have a nice day.');
};
*/
/*
let flavor = "vanilla";
let vessel = "cone";
let toppings = "peanuts";

// Add your code here
if ((flavor === 'vanilla' || flavor === 'chocolate') && (vessel === 'cone' || vessel === 'bowl') && (toppings === 'sprinkles' || toppings === 'peanuts')) {
  console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);
};
*/
/*
let eatsPlants = true;
let eatsAnimals = true;

let category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore": "undefined");
console.log(category);
*/
/*
let eatsPlants = false;
let eatsAnimals = false;

let category = () => {
     return (eatsPlants && eatsAnimals) ? "omnivore"
        : eatsAnimals ? "carnivore"
        : eatsPlants ? "herbivore"
        : "undefined"
 };

 /// var category = 
 eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined"); ///

 console.log(category());
 */

 let education = 'no high school diploma';

 let salary = 0;


switch (education) {
  case "no high school diploma":
  salary = 25636;
  break; 
  case "a high school diploma":
  salary = 35256;
  break; 
  case "an Associate's degree":
  salary = 41496;
  break; 
  case "a Bachelor's degree":
  salary = 50124;
  break; 
  case "an Masters's degree":
  salary = 69732;
  break; 
  case "a Professional degree":
  salary = 89960;
  break; 
  case "a Doctoral degree":
  salary = 84396;
  break; 
};
console.log(`In 2015, a person with ${education} earned an average of $${salary.toLocaleString("en-US")}/year.`);