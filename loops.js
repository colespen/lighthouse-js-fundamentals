/*
for (let x = 0; x <= 10000; x++) {
  console.log(x);
}; 
*/
/*
let x = 1
while (x <= 10) {
  console.log(x + ' mississippi!');
  x++;    
//  x += 1;
};
*/
/*

// FizzBuzz for loop
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 2 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 ===0) {
    console.log('Fizz')
  } else if (i % 2 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
};
*/
/*
// 'FizzBuzz' While Loop
var x = 1;

while (x <= 100) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('JuliaJames');
    } else if (x % 3 === 0) {
        console.log('Julia');
    } else if (x % 5 === 0) {
        console.log('James');
    } else {
        console.log(x);
    }
    x++;
};
*/
/*
let num = 11;

while (num >= 0) {
  if (num > 1) {
    console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${--num} bottles of juice on the wall!`)
  } else if (num === 1) {
    console.log(`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${--num} bottles of juice on the wall!`)
  } 
  num--;
};
*/
/*
let i = 60
while (i >= 0) {
    if (i === 50) {
        console.log('Orbiter transfers from ground to internal power');
    } else if (i === 31) {
        console.log('Ground launch sequencer is go for auto sequence start');
    } else if (i === 16) {
        console.log('Activate launch pad sound suppression system');
    } else if (i === 10) {
        console.log('Activate main engine hydrogen burnoff system');
    } else if (i === 6) {
        console.log('Main engine start');
    } else if (i === 0) {
        console.log('Solid rocket booster ignition and liftoff!'); 
    } else {
        console.log('T-' + i + ' seconds')
    }
    i--;
};
*/
//Nested For Loop
/*
for (let x = 0; x < 4; x++) {
  for (let y = -1; y > -3; y--) {
    console.log(x + ' ' + y);
  }
};
*/
/*
x = 0;
// x++;
console.log(++x); //++x instead of x
*/
/*
for (x = 1; x < 11; x *= 2) {
console.log(x);
};
*/
/*
let solution = 1;
for (let x = 12; x > 0; x--) {
  solution *= x; //solution is a assigined with each new total value after incrementing multiplication 
};
console.log(solution);
*/
for (let r = 0; r < 26; r++) {
  for (let s = 0; s < 100; s++) {
    console.log(r + '-' + s);
  }
};

