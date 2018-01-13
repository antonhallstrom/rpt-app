/**
 * @fileOverview Compose
 * Composes functions from right to left, it fully variadic.
 * @param {function} arity - n+1
 */
// eslint-disable-next-line
export const compose = (...fns) =>
  fns.reverse().reduce((prevFn, nextFn) =>
    value => nextFn(prevFn(value)),
    value => value
);
/**
 * Basic compose, functions passed are applied right to left.
 * Meaning that the result of the right function is passed on to the function left of it.
 * @param {function} f - any function
 * @param {function} g - any function
 */
export const basic = (f, g) => (x) => f(g(x))

