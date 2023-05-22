// -- 🔷 Functions -- //

// In TypeScript, you can define functions with explicit parameter and return types, leverage arrow functions, and handle optional and default parameters. Let's explore the various aspects of working with functions in TypeScript:

// -- Parameter Type Annotations -- //
function greet(name: string) {
	console.log("Hello, " + name.toUpperCase() + "!!");
}

greet("✔ TypeScript");
greet(42); // 🚨 Argument of type '42' is not assignable to parameter of type 'string'.

// -- 🔷 Return Type Annotations -- //
function getNumber(): number {
	return 26;
}
// Usually, TypeScript can infer the return type of a function based on its return statements. However, you can also explicitly specify the return type using a type annotation.

// -- 🔷 Arrow Function -- //
let multiply = (a: number, b: number): number => a * b;

// -- 🔷 Optional Parameters & Default parameters -- //
function greet_2(name: string = "default", age?: number): void {}

// -- 🔷 Object Types -- //
function printNums(num: { x: number; y: number }) {
	console.log(`x: ${num.x}, y: ${num.y}`);
}
