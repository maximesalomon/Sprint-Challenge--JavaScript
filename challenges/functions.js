// ==== Callbacks ====  

console.log("Callbacks Challenges 👇")

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(a, b, cb) {
  console.log(cb(a, b));
};

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y) {
  return x + y;
};

function multiply(x, y) {
  return x * y;
};

function greeting(x, y) {
  return 'Hello ' + x + ' ' + y + ', nice to meet you!'
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */

consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ====

console.log("Closures Challenges 👇")

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

// Closures are basically a function inside an other function.
// The "inner function" has access to the variable declared in the outer function.
// Here `nestedfunction()` is the inner function and `myFunction()` is the outer function.
// Because the `internal` variable is declared in the `myFunction().`, the `nestedfunction()` has access to it.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();