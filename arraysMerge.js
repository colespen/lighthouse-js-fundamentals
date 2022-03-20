function merge (a, b) {
  let arrayC = a.concat(b);
  return arrayC.sort((a, b) => a - b); // adding functing to sort() in this case to compare numbers instead of strings 
}
console.log(merge([ 4, 5, 300 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
