/*
function calculateRectangleArea(length, width) {
  const rectArea = length * width;
  if (rectArea > 0) {
    return rectArea.toFixed(2);
  } else {
    return undefined;
  }
}

function calculateTriangleArea(base, height) {
  const triArea = (base * height) / 2;
  if (triArea > 0) {
    return triArea.toFixed(2);
  } else {
    return undefined;
  }
}

function calculateCircleArea(radius) {
  let circleArea = Math.PI * Math.pow(radius, 2);
  if (radius > 0 && circleArea > 0) {
    return circleArea.toFixed(2);
  } else {
    return undefined;
  }
}
*/

// OR with Ternary Operator:

function calcRecArea(length, width) {
  return (length * width > 0 ? (length * width).toFixed(2) : undefined);
}

function calcTriArea(base, height) {
  return (base * height / 2 > 0 ? (base * height /2).toFixed(2) : undefined)
}

function calCircArea(radius) {
  return (radius > 0 ? (Math.PI * Math.pow(radius, 2)).toFixed(2) : undefined);
}

console.log(calcRecArea(16.78, 5));
console.log(calcRecArea(1.5, 2.5));
console.log(calcRecArea(10, -5)); 

console.log(calcTriArea(10, 5));
console.log(calcTriArea(3, 2.5));
console.log(calcTriArea(10, -5));

console.log(calCircArea(10));
console.log(calCircArea(3.5)); 
console.log(calCircArea(-1));