// Part 1
class Vehicle { 
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }
    
    toString() { 
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

// Part 2
class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

// Part 3
class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}

// Part 4
class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }

        else if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full";
        }

        else {
            this.vehicles.push(newVehicle)
            return "Vehicle added!"
        }
    }
}

const myCar = new Vehicle("Honda", "Civic", 2016);
const myFirstCar = new Car("Honda", "Civic", 1992);
const myMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);