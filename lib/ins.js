'use strict';

const product = function product() {
  // multiply two numbers and return the result
  // return a * b;
  // return arguments[0] * arguments[1];
  // return arguments[0] * arguments[1] * arguments[2];
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    //result = result * args...
    result = result * arguments[i];
  }

  return result;
};

const max = function () {
  const max = function max() {
    // takes an arbitrary number of arguments (each arg
    // should be a number), finds the largest one, and
    // returns that member
    //
    // does it take negatives?
    // we need a starting point (maybe the first argument)

    let result = arguments[0][0];

    for (let i = 1; i < arguments[0].length; i++) {
      if (result < arguments[0][i]) {
        result = arguments[0][i];
      }
    }

    return result;
  };
};

// Write a function that takes an array full of integers, doubles each value, and
// returns a new array with those values.
const arrayTimes2 = function () {
  let result = [];

  for (let i = 0; i < arguments[0].length; i++) {
    result[i] = arguments[0][i] * 2;
  }

  return result;
};

// this function takes an object and adds a property
// to it

const addProperty = function addProperty(obj, prop, val) {
  // let prop = arguments[1];
  // let val = arguments[2];
  // let result = arguments[0];

  obj[prop] = val;
  return obj;
};

const transform = function (value, predicate, mutator) {
  // if the predicate is true, mutate the value, otherwise don't mutate it
  let result = [];

  for (let i = 0; i < values.length; i++) {
    let value = values[i];

    if (predicate(value)) {
      result.push(mutator(value));
    } else {
      result.push(value);
    }
  }

  return result;
};

module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
};
