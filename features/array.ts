const carMakers = ['Toyota', 'VW', 'BMW'];
const dates = [new Date(), new Date()];
const carByMake = [['corolla'], ['passat'], ['3er']];

// TS helps with inference when extracting values
const toyota = carMakers[0];
const mycar = carMakers.pop();

// Prevent incomatible values
// carMakers.push(100); <- error!

// Help with 'map' -> autocomplete on variable being past in this function 'car'
carMakers.map((car: string): string => {
  return car;
});

// Felxible types in arrays
const importantDates = [new Date(), '2030-10-10', 1];
importantDates.push(1);
