/**
 * This is the template file for solving https://adventofcode.com/2021
 */

// Create an array of [1,2,3,4]
// const numbers = Array(4).fill().map((element, index) => index + 1);
//
// Sum of array of numbers
// numbers.reduce((a, b) => a + b, 0);
//
// Min/Max of array of numbers
// Math.min(...numbers), Math.max(...numbers)
//
// String <=> Number
// Number("1"), String(1)
//
// Find key in object
// if ("key_1" in {"key_1": 001})

const originalConsole = console;
const logger = {
  log(...message) {
    originalConsole.log(...message);
  },
};

const input = `1,2`.split(',');

const result = input.length;
logger.log('Test', [result], 'args');