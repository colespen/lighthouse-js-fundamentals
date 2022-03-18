const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = (moveArr) => {
  let grid = [0, 0];
  for (const pos of moveArr) {
    if (pos === 'north') {
      grid[1] += 1;  
    } else if (pos === 'south') {
      grid[1] += -1;
    } else if (pos === 'east') {
      grid[0] += 1;
    } else if (pos === 'west') {
      grid[0] += -1;
    }
  }
  return grid;
}

console.log(finalPosition(moves));


