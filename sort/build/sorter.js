"use strict";
// Best solution using different types in for the same logic
// Interface vs Abstract Class / Inheritance
// - Both setting up a contract between different classes
// - Interfaces promote loose couple between (very) different objects
// - Abtract classes strongly couples classes together ("close related classes" kind of a downside)
//  - build up a definition of an object
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericSorter = exports.Sorter = void 0;
// Using the abstract class sorter as parent class for the collections
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
// Note: Bubble Sort is used here and its not the best solution for sorting
class GenericSorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.GenericSorter = GenericSorter;
// first approach
class ArraySorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}
// For multiple types (bad solution)
// using a Type Guard
class BadSorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // TS understands that inside the if statement the type of collection is an array
                if (this.collection instanceof Array) {
                    // This is not useable for strings
                    // Its bad because you have to add code for every type
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // type guard for primitives
                if (typeof this.collection === 'string') {
                    // fill with logic swapping the chars
                }
            }
        }
    }
}
