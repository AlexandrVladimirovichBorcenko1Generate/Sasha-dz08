class Vehicle {
    constructor(make, model, year) {
      for (let info of [make, model]) {
        if (typeof info !== 'string')
          throw new Error(`(${info} needs to be a string value)`);
      }
      if (Number.isNaN(year) || year <= 0)
        throw new Error('You must write a positive year value.');
  
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return 'Beep';
    }
  
    toString() {
      return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
  }
  
  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(vehicle) {
      if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
  
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
  
      this.vehicles.push(vehicle);
      return "Vehicle Added!";
    }
  }
  
  const car1 = new Vehicle('Ford', 'Truck', 1999);
  const car2 = new Vehicle('Toyota', 'Sedan', 2022);
  const garage = new Garage(2);
  
  const addVehicleBtn = document.getElementById('addVehicleBtn');
  const garageStatus = document.getElementById('garageStatus');
  
  addVehicleBtn.addEventListener('click', () => {
    const newVehicle = new Vehicle('Nissan', 'SUV', 2010);
    const message = garage.add(newVehicle);
    garageStatus.textContent = message;
  });
  