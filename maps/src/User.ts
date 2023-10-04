// Why capitalize file: because it exports a class file
// type definition files e.g. 'index.d.ts' needed for using JS Libraries
// type definition file is like a document
import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  // Note: we told TS location will be an object but it needs to be initialized:
  // this.location.lat = 123 would cause an error

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
