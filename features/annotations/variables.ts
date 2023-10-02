// Type annotations: Code we add to tell Typescript what type of value a variable will refer to
// Type inferences: Typescript will guess what type of value a variable will refer to
// Initialize and declare on the same line => typescript will figure it out!

// Type annotation
let apple: number = 5;
apple = 10;
let speed: string = 'fast';
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, false];

// Class
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// type annotation of the variable not the function itself
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Best practises:
// - Use Type inferences always!
// - Use Type annotations if:
//  - initialization and declaration is not on the same line
//  - when we want a variable to have a type we can't inferred
//  - when a functions returns 'any' type and we need to clarify the value

// When to use annotations
// 1) Functions returns 'any' type
// TS can't predict what the output of JSON.parse() is, it depends on the input
// Avoid type 'any' at all costs => no error checking possible

// no error checking
const json = '{"x": 10, "y": 20}';
const coordinates1 = JSON.parse(json);
coordinates1.asdsdasd;

// with error checking
const coordinates2: { x: number; y: number } = JSON.parse(json);
coordinates2.x;
coordinates2.y;

// 2) When we declare a variable on one line and init it later
// BETTER: init foundWord before using!
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable which type cannot be inferred correctly
// asign false if its not above zero, asign the number if its above zero
// bad code!
// real world scenario: userFavoriteMedia:any => blogpost, movie, music (all different type)
let numbers2 = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 0) {
    numberAboveZero = numbers2[i];
  }
}
