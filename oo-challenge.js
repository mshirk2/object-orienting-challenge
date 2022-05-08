class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep!"
    }

    toString () {
        return `The vehicle is a ${this.year} ${this.make} ${this.model}.`
    }
}

class Car extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "vRROOOM!!!"
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVehicle){
        if (newVehicle instanceof Vehicle){
            if (this.vehicles.length >= this.capacity){
                return "Sorry we're full";
            } else {
                this.vehicles.push(newVehicle);
                return "Vehicle added to garage!"
            }
        } else return "Only vehicles allowed in here!"

    }
}