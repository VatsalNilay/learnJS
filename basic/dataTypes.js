"use strict"; // treat all code as newer version

// alert("better luck next time") //this isn't a browser

let c = 1.23
// console.log(typeof(c))
/* 
    1. number => represents both integers and float values.
        1. Int from range -> -(2^53 -1)(Numbers.MIN_SAFE_INTEGER) to (2^53 -1)(Numbers.MAX_SAFE_INTEGER)
        2. Float -> Numbers between (2^ -1074 )(Number.MIN_VALUE) and (2^1023 × (2 - 2^ -52)) 
        (Number.MAX_VALUE) as well as negative floating-point numbers of the same magnitude 
        can be stored 
            Positive values greater than Number.MAX_VALUE are converted to +Infinity.
            Positive values smaller than Number.MIN_VALUE are converted to +0.
            Negative values smaller than -Number.MAX_VALUE are converted to -Infinity.
            Negative values greater than -Number.MIN_VALUE are converted to -0.
    
    2. null => Standalone value
    3. undefined => value not initialised
    4. symbol => unique and immutable
*/

console.log(typeof null) // object
console.log(typeof undefined) // undefined


