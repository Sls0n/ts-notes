// -- noImplicitAny -- //

// When we don't specify a type, TypeScript will infer it for us. But what if TypeScript can't infer it? In that case, TypeScript will assign the type 'any' to the variable.

// TypeScript provides the noImplicitAny compiler option to enforce explicit type annotations and avoid the use of the 'any' type. When 'noImplicitAny' is enabled, TypeScript raises an error when a variable or function parameter has an implicitly inferred type of any. This option helps promote better type safety and eliminates the use of the less-specific any type. Here's how you can use noImplicitAny:

// To enable noImplicitAny, you can add it to the TypeScript configuration file (tsconfig.json) or pass it as a command-line argument when invoking the TypeScript compiler (tsc). Here's an example configuration in tsconfig.json:

/* --> 📁 tsconfig.json 
  {
  "compilerOptions": {
    "noImplicitAny": true
  }
}
*/

// ⚠ To satisfy the noImplicitAny requirement, you need to explicitly annotate the types of variables and function parameters. This provides better clarity and ensures type safety. For example:
