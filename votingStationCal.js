const stationArray = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let selected = [];
  for (const el of stations) {
    if ((el[1] >= 20) && (el[2] === 'community centre' || el[2] === 'school')) {
      selected.push(el[0]);
    }
  }
  return selected;
}
console.log(chooseStations(stationArray));