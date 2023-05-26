// -- 🔷 Interfaces -- //

// Interface is a way to define a contract or a blueprint for an object's structure. It specifies the properties and methods that an object should have.

interface User {
	name: string;
	age: number;
	sayHello(): void;
}

// Now, if we want to create an object that adheres to the Person interface, we need to make sure it has the specified properties and methods:

const user: User = {
	name: "John",
	age: 25,
	sayHello: () => console.log("Hello"),
};

const user2: User = {
	name: "Jane",
	age: 30,
	sayHello: () => console.log("Hello"),
};

// -- 🔷 Extending interfaces -- //

interface Woman extends User {
	isMan: boolean;
}

const sarah: Woman = {
	name: "Sarah",
	age: 25,
	sayHello: () => console.log("Hello"),
	isMan: false,
};

// -- 🔷 Differences Between Type Aliases and Interfaces -- //

//  Type aliases are more versatile and can represent various types, including unions, intersections, and more, while interfaces primarily focus on defining the shape of objects and enforcing contracts. Type aliases are often used to simplify type expressions, whereas interfaces are used to enforce consistency and provide type checking for objects.
