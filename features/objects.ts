// annotations and deconstruction in objects

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 0,
  },
  setage(age: number): void {
    this.age = age;
  },
};

const age1 = profile.age;

// deconstruction
// would work:
// const { age } = profile;
const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
