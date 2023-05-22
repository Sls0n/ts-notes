// -- Arrays in TypeScript -- //

//  In TypeScript, arrays can be declared using square brackets ([]) or the generic array type notation (Array<elementType>). Let's explore how to declare arrays in TypeScript:

// Using square brackets
let fruits: string[] = ["apple", "banana", "orange"];

// Using generic array type notation
let numbers: Array<number> = [1, 2, 3, 4, 5];

// -- Array Type Inference -- //

// TypeScript can infer the type of an array based on its assigned values. If an array is initialized with values of a specific type, TypeScript will automatically assign that type to the array. For example:

let fruits_2 = ["apple", "banana", "orange"]; // Inferred type: string[]
let numbers_2 = [1, 2, 3, 4, 5]; // Inferred type: number[]

// -- Readonly Arrays -- //

// You can create read-only arrays by using the readonly modifier. Once declared as read-only, the array cannot be modified.

let fruits_3: readonly string[] = ["apple", "banana", "orange"];
readonlyArray[0] = "grape"; // Error: Index signature in type 'readonly string[]' only permits reading ❌

// In the above example, trying to modify the elements of the readonlyArray results in a compilation error.
