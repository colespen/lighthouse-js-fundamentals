/*
let one = 1;
console.log(one);

function diffOne() {
  let one = 2;
  console.log(one);
}

diffOne();
console.log(one);
*/

/* //Function Expression
let catSays = max => {
  let catMsg = "";
  for (let i = 0; i <= max; i++) {
    catMsg += "meoq \n";
  }
  return catMsg;
}
console.log(catSays(10)); 
*/

// function expression catSays
/*
let catSays = function(max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
*/
/*
// function declaration helloCat returning a callback
function helloCat() {
  return "Hello " + catSays(3);
}

// call and print helloCat func
console.log(helloCat());
*/
/*
// *** OR ***
// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
*/

/*
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");
*/

//Bypass first assignment of func by passing in func to movies() func inline
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(x => {
  console.log("My favorite movie is " + x);
}, "Finding Nemo.");
