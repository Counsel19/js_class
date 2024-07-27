// Class Names must start with Upper Case Letters
// Class Names are singrlar
// Other Varaiable Naming connventions apply

// Instance ===> Object of the class

class Car {
  constructor(name, brand) {
    this.name = name;
    this.numberOfTires = 4;
    this.brand = brand;
    this.speed = 0;
  }

  accelerate(accelerateBy) {
    this.speed += accelerateBy;
  }
}

const toyotaCar = new Car("Toyota Corolla", 4, "Toyota");
const hundaCar = new Car("Hunda Pilot", 4, "Hunda");

console.log(toyotaCar);
toyotaCar.accelerate();
console.log(toyotaCar);
