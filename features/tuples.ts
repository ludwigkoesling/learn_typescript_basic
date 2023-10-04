const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias used by tuple
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];

// tuples are not very usable -> we are losing the meaning of values without keys
