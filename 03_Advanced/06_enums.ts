// -- 🔹 Enums  --

// In TypeScript, an enum (short for "enumeration") is a way to define a set of named values. It allows you to create a custom data type with a restricted set of possible values..

// To define an enum, you use the enum keyword followed by the name of the enum and a list of possible values:

enum Color {
	Red, // is assigned 0
	Green, // is assigned 1
	Blue, // is assigned 2
}

// In this example, we define an enum called Color with three possible values: Red, Green, and Blue. Each of these values is automatically assigned a numeric value starting from 0 (Red is 0, Green is 1, Blue is 2).

let myColor: Color = Color.Green;

// Enums can be useful in scenarios where you have a fixed set of options and want to ensure that only those specific values are used. They provide a way to make your code more readable, self-documenting, and less error-prone.

// You can also assign explicit numeric values or even string values to enum members:

enum Direction {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

// Enums can be used in switch statements, comparisons, function parameters, and more, just like any other data type.
