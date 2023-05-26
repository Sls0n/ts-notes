// -- 🔷 Type aliases -- //

// In TypeScript, we often use object types (types that describe the structure of an object) and union types (types that represent values that can be of multiple types). We usually define these types directly in our code, which works fine. However, sometimes we need to reuse the same type in multiple places and refer to it using a single name, just to make our code more organized and readable.

// Instead of writing the entire object type or union type every time we need to use it, we can define a type alias with a single name that represents that type. We can then use that alias wherever we would have used the original type.

type Age = number;
type Name = string;

type Person = {
	name: string;
	age: number;
};

// Now, whenever we need to refer to an object with the properties name and age, we can simply use the Person alias:

function greet(obj: Person) {
	console.log(`Hello, ${obj.name}`);
}

// or we can use it to create a object:

const person: Person = {
	name: "John",
	age: 25,
};
