// -- 🔷 Literal Types -- //

// Literal types allow you to specify the exact value a string, number, or boolean must have.

// For example, let's say we have a function that takes only 'yes' or 'no' as its argument:

function getAnswer(answer: "yes" | "no") {
	if (answer === "yes") {
		console.log("The answer is yes");
	} else {
		console.log("The answer is no");
	}
}

getAnswer("yes"); // OK
getAnswer("no"); // OK
getAnswer("maybe"); // ❌ Error: Argument of type '"maybe"' is not assignable to parameter of type '"yes" | "no"'.
