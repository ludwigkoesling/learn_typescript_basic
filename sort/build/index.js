"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 2, -5, 0]);
// const sorter = new GenericSorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const characters = new CharactersCollection('Hello');
// const sorter = new GenericSorter(characters);
// sorter.sort();
// console.log(characters.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(45);
linkedList.add(-43);
linkedList.sort();
linkedList.print();
// const sorter = new GenericSorter(linkedList);
// sorter.sort();
// linkedList.print();
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 2, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
