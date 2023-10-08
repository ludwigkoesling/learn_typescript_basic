"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 2, -5, 0]);
// const sorter = new GenericSorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
const characters = new CharactersCollection_1.CharactersCollection('Hello');
const sorter = new sorter_1.GenericSorter(characters);
sorter.sort();
console.log(characters.data);
