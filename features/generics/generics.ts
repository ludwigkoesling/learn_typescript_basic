class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// simple example replaces other classes
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// type inference 'arr' is type ArrayOfAnything<string>
const arr = new ArrayOfAnything(['a', 'b']);

// generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printArray<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Type inference as well but,...
printArray(['a', 'b']);

// best practice, because you get errors if you intend to print strings
printArray<string>(['a', 'b']);

// Generic Constraints

class Car {
  print(): void {
    console.log('I am a car');
  }
}
class House {
  print(): void {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
// This wouldn't be allowed anymore because numbers don't have a print method
// printHousesOrCars([1,2,3,4]);

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);
