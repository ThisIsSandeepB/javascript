/* -------------------------------------------------- */
/* VARIABLES */
/* -------------------------------------------------- */

var firstName = 'Micheal';
var lastName = 'Barak';
var age = 42;

/* 
  Above we have declare 3 variables firstName, lastName and age. two of them are String type and one is Number type let's see what kind of data we can store inside variables:

  PRIMITIVE DATA TYPES (VALUE TYPE):
  1. Number
  2. String
  3. Boolean
  4. undefined (By default the type of variable is undefined)
  5. null
  6. Symbol

  REFERENCE DATA TYPES (OBJECT TYPE):

  NOTE: JavaScript has dynamic typing: data types are automatically assigned to variables.
*/

var fullAge = true;
var job;
console.log(fullAge);
console.log(job);

/* 
  There are some rules regarding naming convention of variables and it is recommended to use camelCase for variable name.
  1. cannot start with symbol and number except (_ and $)
  2. cannot have symbol in the middle
  3. we cannot use javascript reserved keyword as variable name (like: for, if, while etc).
*/

/* -------------------------------------------------- */
/* VARIABLES MUTATION AND TYPE COERCION */
/* -------------------------------------------------- */

var personName = 'John';
var personAge = 28;
var personJob = 'Scientist';
var isMarried = false;
var personHobbies;
var personSkills = null;

// This is type coercion (javascript convert number, boolean, undefined and null to a string)
console.log(personName + ' ' + personAge);
console.log(
  personName +
    ' is a ' +
    personAge +
    ' years old ' +
    personJob +
    '. Is he married? ' +
    isMarried +
    ' he likes ' +
    personHobbies +
    ' he has skills ' +
    personSkills
);

// Variable mutation (This is variable mutation in javascript we can change variable value on the fly)
personAge = 'Twenty eight';

// Prompt to take input from users.
// var personLastName = prompt('What is your last name');
// alert(personLastName);
