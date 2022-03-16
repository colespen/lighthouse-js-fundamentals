const amounts = [61.00, 52.25, 112.99, 5.00];
/*
let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total); 
// note: , instead of + for concatenation
*/

//for...of loops are simpler
let total = 0;

for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ' + total);


