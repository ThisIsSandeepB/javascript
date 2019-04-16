/* -------------------------------------------------- */
/* GRAMMER AND TYPES */
/* -------------------------------------------------- */

/* 
  Declarations
  There are three kinds of declarations in JavaScript.

  var: Declares a variable, optionally initializing it to a value.
  let: Declares a block-scoped, local variable, optionally initializing it to a value.
  const: Declares a block-scoped, read-only named constant.
*/

var greet = 'Good Morning!';
let message = 'Everyone please listen to me';
const PI = 3.14;

/*
  You can also simply assign a value to a variable For example, x = 42. This form creates an undeclared global variable. It also generates a strict JavaScript warning. Undeclared global variables can often lead to unexpected behavior. Thus, it is discouraged to use undeclared global variables.
*/

/*
  A variable declared using the var or let statement with no assigned value specified has the value of undefined.

  NOTE: The undefined value behaves as false when used in a boolean context.
  NOTE: The undefined value converts to NaN when used in numeric context.
*/
var input;

if (input) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

console.log(input + 2);

/*
  When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts.
*/
input = null;
console.log(null * 10);

if (input) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}
