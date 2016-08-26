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

const calculateAge = function(bornOn){
  let today = new Date();
  if(today.getMonth > bornOn.getMonth){
    return today.getYear() - bornOn.getYear();
  }
  else if(today.getMonth() === bornOn.getMonth() &&
          today.getDate() > bornOn.getDate){
      return today.getYear() - bornOn.getYear();
  }
  else{
    return today.getYear() - 1 - bornOn.getYear();
  }
};

const createPerson = function (givenName, surname, bornOn, height, weight, eyeColor) {
  let age = calculateAge(bornOn);
  return {
    name: `${givenName} ${surname}`,
    age: age,
    height,
    weight,
    eyeColor,
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
