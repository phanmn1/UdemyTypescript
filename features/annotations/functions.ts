// Type annoation for basic functions
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // Return value void can return undefined or null
  return null;
  return undefined;
};

//Never type tells that the function will never reach an end
//It will throw and error and swap
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwNewError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

// Destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
