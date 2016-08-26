'use strict';

const createArray = function() {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    result[i] = arguments[i];
  }

  return result;
};

const arrayTransform = function (array, predicate, mutator) {
  // if the predicate is true, mutate the value, otherwise don't mutate it
  let result = [];

  for (let i = 0; i < values.length; i++) {
    let value = values[i];

    if (predicate(value)) {
      result.push(mutator(value));
    }
    else {
      result.push(value);
    }
  }

  return result;
};

const createPerson = function (givenName, surname, bornOn, height, weight, eyeColor) {
  return {
    name: `${givenName} ${surname}`,
    age: null /* Date.now - bornOn or some shit */,
    height,
    weight,
    eyColor,
  };
};

const memoFactory = function (rememberMe) {
  let memo = rememberMe;

  return function () {
    return memo;
  };
};

const counterFactory = function () {
  let count = 0;

  return function counter () {
    return count += 1;
  };
};

module.exports = {
  createArray,
  arrayTransform,
  createPerson,
  memoFactory,
  counterFactory,
};
