// -- 🔷 Null & Undefined -- //

/*
undefined is a built-in JavaScript value that represents the absence of a value. It is often used to indicate that a variable has been declared but has not been assigned a value.

null is an assignment value. It can be assigned to a variable as a representation of no value. It represents the intentional absence of any object value.
*/

// -- 🔷 strictNullChecks: -- //

/*
strictNullChecks is a compiler option in TypeScript that helps enforce stricter null and undefined checks. When this option is enabled, the compiler performs additional checks to catch potential null or undefined errors at compile-time.

The default setting is strictNullChecks=false. To enable strictNullChecks, set the compilerOptions.strictNullChecks flag to true in your tsconfig.json file or on the command line.

RECOMMENDED TO USE ✔

When strictNullChecks is enabled:

    - Variables and parameters are not automatically assigned the value undefined. They must be explicitly assigned a value or have a type that allows undefined.

    - The type null is not assignable to variables by default. To assign null, the variable must have a type that includes null.

    - Optional properties (?) in interfaces and types are considered to potentially have the value undefined.
*/

// -- 🔷 Non-null assertion operator (!): -- //

// The non-null assertion operator (!) is a TypeScript syntax feature that tells the compiler that you are confident a value will not be null or undefined, overriding the strict null check.

// The non-null assertion operator is written as a postfix ! after the variable or expression that you assert to be non-null:

let name: string | null = getName(); // name can be null

let length: number = name!.length; // Using the non-null assertion operator to access length
