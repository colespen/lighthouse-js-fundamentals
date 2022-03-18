const howManyHundreds = bottNum => {
  return Math.floor((bottNum /= 100));
}
// Math.floor returns largest integer <= num
// OR use Math.trunc() to remove fractional digits (decimals)



let bottles = 3790;
const num = howManyHundreds(bottles);

console.log("Today, Canada will send " + num + " containers of maple syrup to Mars.");
