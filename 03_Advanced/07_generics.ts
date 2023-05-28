// -- 🔷 Generics -- //

// Generics in TypeScript allow us to create reusable components that can work with different types. They introduce type parameters, which act as placeholders for specific types that will be determined at the time of usage.

// -- 🔹 Generic Functions -- //

// A generic function is a function that can accept arguments and return values of any specified type. We define the type parameter within angle brackets (<T>) and use it as the type for function arguments and return values.

function identity<T>(arg: T): T {
	return arg;
}

let result = identity<string>("Hello, TypeScript!");
console.log(result); // Output: Hello, TypeScript!

// -- 🔹 Generic Type Parameters: -- //

// We can use multiple type parameters in a generic function or class. This allows us to specify multiple types or establish relationships between multiple types.

function pair<T, U>(first: T, second: U): [T, U] {
	return [first, second];
}

let tuple = pair<string, number>("TypeScript", 3);
console.log(tuple); // Output: ["TypeScript", 3]

// -- 🔹 Generic Classes: -- //

// Similar to generic functions, we can also create generic classes. The type parameter is specified when creating an instance of the class, and it can be used within the class to define the types of properties, methods, and constructor parameters.

class Box<T> {
	private content: T;

	constructor(value: T) {
		this.content = value;
	}

	getValue(): T {
		return this.content;
	}
}

let box = new Box<number>(42);
console.log(box.getValue()); // Output: 42
