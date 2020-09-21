// Interface
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
};

const drink2 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink as ${this.sugar} grams of sugar`;
  },
};

const printReport = (item: Reportable): void => {
  console.log(item.summary());
};

printReport(oldCivic);
printReport(drink2);
