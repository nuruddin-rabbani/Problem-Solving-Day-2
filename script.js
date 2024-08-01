// 1. ES6 Destructuring
// Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

const person = {
    name: "Rabbani",
    age: 24,
};

const { name, age } = person;

console.log(name); //Rabbani
console.log(age); // 24

// 2. ES6 Module
// Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.

// app.js

const calculateArea = require("./module.js");

const radius = 5;
const area = calculateArea(radius);
console.log(`The area of a circle with radius ${radius} is ${area}`);

// Problem 3:Create a class Rectangle with properties width and height and a method to calculate the area.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Example usage:
const rect = new Rectangle(5, 10);
console.log(`The area of the rectangle is: ${rect.area()}`); // Output: The area of the rectangle is: 50

// Problem 4: Create a class Person with a getter and setter for the fullName property.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Example usage:
const person1 = new Person("John", "Doe");
console.log(person1.fullName); // Output: John Doe

person.fullName = "Jane Smith";
console.log(person1.firstName); // Output: Jane
console.log(person1.lastName); // Output: Smith
console.log(person1.fullName); // Output: Jane Smith

// Problem 5: Create a class expression for a Circle with a method to calculate the circumference.

const Circle = class {
    constructor(radius) {
        this.radius = radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
};

// Example usage:
const circle = new Circle(5);
console.log(`The circumference of the circle is: ${circle.circumference()}`); // Output: The circumference of the circle is: 31.41592653589793

// Problem 6: Create an object with computed property names based on variables.

const propName1 = "name";
const propName2 = "age";
const propName3 = "occupation";

const person2 = {
    [propName1]: "John Doe",
    [propName2]: 30,
    [propName3]: "Software Developer",
};

console.log(person2);
// Output: { name: 'John Doe', age: 30, occupation: 'Software Developer' }

// Problem 8: Use new.target to create an abstract class Shape that cannot be instantiated directly.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the constructor of the parent class (Animal)
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Example usage:
const animal = new Animal("Generic Animal");
animal.speak(); // Output: Generic Animal makes a sound.

const dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Output: Rex barks.
console.log(dog.name); // Output: Rex
console.log(dog.breed); // Output: German Shepherd

// Problem: Create a class MathUtil with a static method square to calculate the square of a number.

class MathUtil {
    static square(number) {
        return number * number;
    }
}

// Example usage:
console.log(MathUtil.square(5)); // Output: 25
console.log(MathUtil.square(9)); // Output: 81

// Problem 10: Create an object with a symbol as a property key and demonstrate accessing it.

const mySymbol = Symbol("uniqueIdentifier");

const myObject = {
    [mySymbol]: "This is a value associated with a symbol key",
};

console.log(myObject[mySymbol]); // Output: This is a value associated with a symbol key

console.log(myObject["uniqueIdentifier"]); // Output: undefined
