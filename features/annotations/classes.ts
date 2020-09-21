// Classes
class Vehicle {
  // Shorthand method to set class fields
  constructor(public color: string) {}

  protected drive(): void {
    console.log("chuga chuga");
  }
  public honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
vehicle.color;

class Car2 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("Vroom");
  }

  startDrivingProcess(): void {
    this.drive;
  }
}

const car2 = new Car2();
car2.drive();
car2.honk();
