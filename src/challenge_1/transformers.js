/**@param {number[]} values An array of numbers to be summarized.*/
const summarize = values => values.reduce((a, b) => a + b, 0)

/**
 * Runs an array of tests on a target value and returns whether every test is satisfied.
 * @param {Predicate[]} conditions An array of tests.
 * @returns {Predicate} A function that accepts a target, runs all tests against it and returns whether they passed or not.
 */
const and = conditions => target => conditions.every(c => c(target))

/**
 * Converts an array of strings to an array of integers and returns only those that satisfy the provided conditions.
 * @param {string[]} values
 * @param {Predicate[]} conditions
 * @returns {number[]}
 */
const parseNumbers = (values, conditions) =>
  values.map(val => parseInt(val, 10)).filter(and(conditions))


/**
 * @typedef Predicate
 * @type {(arg: any) => boolean}
 */

module.exports = { summarize, and, parseNumbers }
