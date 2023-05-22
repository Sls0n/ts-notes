// -- Type Inference -- //

// TypeScript has a powerful type inference system that can deduce the type of a variable based on its assigned value. In many cases, you don't need to explicitly annotate the type, as TypeScript can infer it. For example:

let greeting = "Hello, TypeScript!"; // Inferred type: string
let temperature = 25; // Inferred type: number
let isAvailable = true; // Inferred type: boolean

// In the above example, TypeScript automatically infers the appropriate types based on the assigned values even though we didn't explicitly annotate the types.

// -- Type Compatibility -- //

// TypeScript enforces type compatibility, meaning that variables should be assigned values of compatible types. For example, you cannot assign a string value to a number variable or vice versa. This helps catch type-related errors during development.

let message: string = "Hello, TypeScript!";
let count: number = 10;

message = count; // Error: Type 'number' is not assignable to type 'string' ❌
count = "25"; // Error: Type 'string' is not assignable to type 'number' ❌

// In the above example, TypeScript throws compilation errors as the types of variables are not compatible.
