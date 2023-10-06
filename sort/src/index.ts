import { GenericSorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 2, -5, 0]);

const sorter = new GenericSorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.data);
