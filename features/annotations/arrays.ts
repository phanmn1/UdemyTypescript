// Type annotation for Arrays
const carMakers: string[] = ["ford"];

const carsByMakers: string[][] = [["f150"], ["Corolla"]];

// Help with inferance with extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatable types
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexable types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("10-3-12");
importantDates.push(new Date());
importantDates.push(100);
