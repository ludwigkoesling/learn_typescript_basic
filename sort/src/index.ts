import { GenericSorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
// const numbersCollection = new NumbersCollection([10, 2, -5, 0]);
// const sorter = new GenericSorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const characters = new CharactersCollection('Hello');
const sorter = new GenericSorter(characters);
sorter.sort();
console.log(characters.data);
