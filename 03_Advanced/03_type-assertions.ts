// -- 🔷 Type Assertions -- //

// Type assertions in TypeScript are a way to tell the compiler about the type of a value when the compiler is unable to infer it automatically. It's like a hint or an assertion to the compiler that you know better about the type of a particular value than it does.

// Type assertions are useful when you're working with values that may have a more specific type than the one the compiler infers. By using type assertions, you can explicitly specify the desired type for that value, allowing you to access properties or call methods that are specific to that type.

// For example, let's say we have a variable that has the type any. This means that the compiler doesn't know anything about the type of that variable, so we can't access any properties or call any methods on it:

let value: any = "Hello World";

// value.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'any'.

// In this case, we can use a type assertion to tell the compiler that the value variable is actually a string:

let value2: any = "Hello World";

let upperCaseValue = (value2 as string).toUpperCase(); // OK
