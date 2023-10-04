interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};

// printVehicle(oldCivic);

// Refactoring interface to 'Reportable' shows resuablity of interfaces

// Reportable is a gatekeeper for the printsummary function
interface Reportable {
  summary(): string;
}

const coke = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color ${this.color}`;
  },
};

// this function can be used with any type of object that satisfies the reportable object
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(coke);
