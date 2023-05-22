// -- 🔷 Union Types -- //

// Union types ( | ) allow you to specify that a value can have more than one possible type.

let age: number | string;

age = 25; // Valid assignment
age = "thirty"; // Valid assignment

// It can hold either a value of type number or a value of type string. You can assign a value of either type to the age variable.

// -- 🔷 Type Guards and Type Checking -- //

// When working with union types, you often need to perform operations or access properties that are specific to each individual type within the union. TypeScript provides type guards to narrow down the type within a union and perform type-specific operations safely. Here are a few common type guards:

// -- 🔷 typeof type guards -- //

function printLength(value: number | string) {
	if (typeof value === "number") {
		console.log(`number`);
	} else if (typeof value === "string") {
		console.log(`string`);
	}
}
