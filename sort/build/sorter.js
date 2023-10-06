"use strict";
// Best solution using different types in for the same logic
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericSorter = void 0;
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
