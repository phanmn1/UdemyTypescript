// Type annotations for Tuples
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

// Type annotation will turn arry into a tuple
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 60];

// Why we don't use tuples
const carSpecs: [number, number] = [400, 3350]; // hard do figure out what these datas represent at a glance

const carStats = {
  horsepower: 400,
  weight: 3350,
};
