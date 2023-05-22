// Getting Started with TypeScript

// This guide will walk you through the process of setting up your development environment for TypeScript and getting started with writing TypeScript code.

// Prerequisites

// Before you begin, make sure you have the following prerequisites installed on your machine:

// Node.js: TypeScript requires Node.js to run the TypeScript compiler (tsc) and execute JavaScript code. You can download and install Node.js from the official Node.js website (https://nodejs.org).

// Installation

// To install TypeScript, follow these steps:

// Open a command-line interface (CLI) or terminal on your machine.

// Run the following command to install TypeScript globally:

// -> npm install -g typescript

// This command installs TypeScript as a global package that can be accessed from anywhere on your system.

// Verify that TypeScript is successfully installed by running the following command:

// -> tsc --version

// This command should display the version number of TypeScript.

// Creating a TypeScript Project

// To start a new TypeScript project, follow these steps:

// Create a new directory for your project:

// -> mkdir my-typescript-project
// -> cd my-typescript-project

// Initialize a new Node.js project using npm:

// -> npm init -y

// This command initializes a new Node.js project with default settings.

// Create a new TypeScript configuration file named tsconfig.json in the root of your project directory:

// -> touch tsconfig.json

// The tsconfig.json file is used to configure the TypeScript compiler options for your project.

// Open the tsconfig.json file in a text editor and add the following minimal configuration:

// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "module": "ESNext",
//     "outDir": "dist"
//   },
//   "include": ["src/**/*"]
// }

// This configuration sets the target ECMAScript version to "ESNext," specifies the module system as "ESNext," and sets the output directory for transpiled JavaScript files to a folder named "dist." The "include" option specifies that TypeScript files under the src directory should be included for compilation.

// Create a new directory named src in your project directory to store your TypeScript source files:

// -> mkdir src

// Writing and Compiling TypeScript Code

// Now you're ready to start writing TypeScript code. Create a new TypeScript file with a .ts extension inside the src directory and write your TypeScript code in it. For example, you can create a file named index.ts:

// typescript

function greet(name: string) {
	console.log(`Hello, ${name}!`);
}

greet("TypeScript");

// To compile your TypeScript code into JavaScript, run the following command in the root of your project directory:

// The TypeScript compiler (tsc) will read the tsconfig.json file and transpile your TypeScript code into JavaScript. The generated JavaScript files will be placed in the dist directory, as specified in the outDir option of the configuration.

// Running the JavaScript Code

// Once the TypeScript code is successfully compiled into JavaScript, you can run the JavaScript code using Node.js. In the root of your project directory, run the following command:

//  -> node dist/index.js

// This will execute the generated JavaScript code, and you should see the output:

// Hello, TypeScript!
