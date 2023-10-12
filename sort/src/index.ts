import { GenericSorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
// const numbersCollection = new NumbersCollection([10, 2, -5, 0]);
// const sorter = new GenericSorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const characters = new CharactersCollection('Hello');
// const sorter = new GenericSorter(characters);
// sorter.sort();
// console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(45);
linkedList.add(-43);
linkedList.sort();
linkedList.print();

// const sorter = new GenericSorter(linkedList);
// sorter.sort();
// linkedList.print();

const numbersCollection = new NumbersCollection([10, 2, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
