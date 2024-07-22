/* The variable kelvin is a constant with a value of 293. */
const kelvin = prompt("Enter kelvin amount: ");
/* The variable celsius is a variable with a value of the constant variable kelvin minus 273.*/
var celsius = kelvin - 273;
/* The variable fahrenheit is a variable with the variable of celsius times (9/5) then add 32.*/
var fahrenheit = celsius * (9/5) + 32;
/* The variable fahrenheit is rounded down to the nearest integer*/
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
