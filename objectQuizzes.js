//        Objects - Trash to Treasure
/*
const smartGarbage = function (trash, bins) {
  bins[trash]++;
  return bins;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
*/

//        Objects - Driving Mayor Daisy
/*
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

const carPassing = function (cars, speed) {
  cars.push({ time: Date.now(), speed })
  return cars;
}
console.log(carPassing(cars, speed))
*/

/*
const newArray = [
  { colour: "orange", length: 25 },
  { cut: true, size: Math.pow(369, 3) + '" cubed' },
  { hair: false }
]
console.log(newArray);
// modify array
const strands = 110;
newArray[1].size = Math.pow(20, 3) + '" cubed';
newArray.push({ time: Date.now(), strands });
console.log(newArray);
*/
//        Objects - We're Rooting For You!

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'Dunk Punk',
    redness: 2,
    plumpness: 9
  }
];

const judgeVegetable = (vegArr, metric) => {
  //use map() to get array of vals & pass to max() using spread operator (...)
  const getMax = Math.max(...vegetables.map(veg => veg[metric]));
  for (let i = 0; i < vegetables.length; i++) {
    if (vegArr[i][metric] === getMax) {
      return vegArr[i].submitter;
    } 
  }
}
const metric = 'redness';
console.log(judgeVegetable(vegetables, metric));

//reduced if, else...if statments to a single for loop with nested if statement. 