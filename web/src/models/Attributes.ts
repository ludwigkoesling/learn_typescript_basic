export class Attributes<T extends object> {
  constructor(private data: T) {}

  // Generic Contraints
  // <K extends keyof T> limiting the keys which get can called with
  // (key: K) key can only be a key from T (for example: T = UserProps -> id, age, name)
  // T[K] return value is of type defined in T (for example: T = UserProps -> number, number, string)
  get = <K extends keyof T>(key: K): T[K] => {
    // arrow function that bounds 'this' to attributes (attributes.data[key])
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

// const attrs = new Attributes<UserProps>({
//   id: 5,
//   age: 20,
//   name: 'test',
// });

// const name = attrs.get('name');
// const id = attrs.get('id');
// const age = attrs.get('age');
