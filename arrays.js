/*
const donutArray = ["sprinkles", "choco glaze","sour cream", "calssic", "sprinkles", "choco glaze", "sour cream", "calssic", "sprinkles", "choco glaze", "sour cream", "calssic", "sprinkles", "choco glaze", "sour cream", "calssic", "sprinkles", "choco glaze", "sour cream", "calssic"];

donutArray[3] = "beef";
console.log(donutArray);
*/



/*
// pushes all indices of 'know' in 'str' array to 'count' array

let str = 'You do not know what you do not know until you know.';
let substr = 'know';

let count = [];

let index = str.indexOf(substr);
while(index !== -1) {
    count.push(index);
    index = str.indexOf(substr, index + 1);
}
console.log(count);
*/  

/*
const Array = ["Jan", "Feb", "March", "April", "June"];

const iterator = Array.values();

for (let el of iterator) {
  console.log(el);
}
*/

/* 
//splice()
const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2, 2, "Yellow", "Green", "Blue", "Purple");
console.log(rainbow);
*/

/*

//        *Quidditch Cup Quiz*

let team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const hasEnoughPlayers = teamSize => {
  if (teamSize.length >= 7) {
    return true;
  } else {
    return false;
  }
}
//add new string to each element, push to new array

const editTeam = [];
/*
for (let el of team) {
  el += " sucks.";
  editTeam.push(el)
} 
*/
/*
// OR with forEach()

team.forEach((item) => {
  editTeam.push(item + " sucks.");
});

console.log(editTeam);
*/
/*
let donuts = ["jelly", "choco", "glazed"];

donuts.forEach((donut) => {
  donut += " hole";
  console.log(donut);
});
*/


//        *Another Type of Loop Quiz*
/*
let test = [
  12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.map((el, index) => {
  if (el % 3 === 0 ) {
    test[index] += 100;
  }
});
console.log(test);
*/
/*
//        *I Got Bills*

// creates new array using .map
let bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map((el) => {
  el *= 1.15;
  return Number(el.toFixed(2));
})
console.log(totals);
*/

/*
let array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];
for (let r of array) {
  for (let c of array) {
    console.log(r, c);
  }
}
*/

//        *Nested Numbers*
/*
let numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let r = 0; r < numbers.length; r++) {
  for (let c = 0; c < numbers[r].length; c++) {
    (numbers[r][c] % 2 === 0) ? numbers[r][c] = "even" : numbers[r][c] = "odd";
  }
}
console.log(numbers); 
*/
console.log(Boolean("bob" && "marley"));