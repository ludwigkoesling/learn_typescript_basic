"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 2, -5, 0]);
const sorter = new sorter_1.GenericSorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.data);
