let person1 = {
    name: "Charles",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
}

let person2 = {
    name: "Tom",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
}

let person3 = {
    name: "Cam",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
}

let person4 = {
    name: "Dave",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
}

let person5 = {
    name: "Joe",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greet() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
    }
}

let p1 = new Person("John", "Houston", 31);

p1.greet();

class Vehicle {
    constructor(mfg, noWheels) {
        this.mfg = mfg;
        this.noWheels = noWheels;
    }
    aboutVehicle() {
        console.log(`This is a vehicle made by ${this.mfg}; it has ${this.noWheels} wheels`);
    }
}
class Truck extends Vehicle {
    constructor(mfg, noWheels, reverseTF, noDoors, bedTF) {
        super(mfg, noWheels);
        this.reverseTF = reverseTF;
        this.noDoors = noDoors;
        this.bedTF = bedTF;
    }
    aboutVehicle() {
        console.log(`This is a truck made by ${this.mfg}; it has ${this.noWheels} wheels, ${this.reverse ? "goes in reverse" : "doesn't go in reverse"}, has ${this.noDoors} doors, and ${this.bedTF ? "has a massive bed" : "while it has got no bed, it is still a useful vehicle"}.`);
    }
}
class Sedan extends Vehicle {
    constructor(mfg, noWheels, reverseTF, noDoors, sz, mpg) {
        super(mfg, noWheels);
        this.reverseTF = reverseTF;
        this.noDoors = noDoors;
        this.sz = sz;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This is a sedan made by ${this.mfg}; it has ${this.noWheels} wheels, ${this.reverse ? "goes in reverse" : "doesn't go in reverse"}, has ${this.noDoors} doors, is a ${this.sz} sized vehicle, and gets ${this.mpg} miles to the gallon.`);
    }
}
class Motorcycle extends Vehicle {
    constructor(mfg, noWheels, handlebarsTF, noDoors) {
        super(mfg, noWheels);
        this.handlebarsTF = handlebarsTF;
        this.noDoors = noDoors;
    }
    aboutVehicle() {
        console.log(`This is a motorcycle made by ${this.mfg}; it has ${this.noWheels} wheels, ${this.handlebarsTF ? "has handlebars" : "doesn't have handlebars"}, and has ${this.noDoors} doors.`);
    }
}
let v2 = new Motorcycle("Honda", 2, true, 0);
v2.aboutVehicle();

// let v1 = new Vehicle("Toyota", 6)
// v1.aboutVehicle();
// console.log(`This is a ${v1.constructor.name}`);
