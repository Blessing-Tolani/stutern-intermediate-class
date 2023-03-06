// QUESTION 1

// Mutating array methods changes the array after the method is used i.e it mutates the original array.
// Non mutating methods returns a new array with the changes needed, it doesn't change the original array.

// Mutating array methods
// array.pop();
// array.push();
// array.shift();
// array.unshift();
// array.reverse();
// array.sort();
// array.splice();

// Non mutating array methods
// array.slice();
// array.concat();
// array.map();
// array.filter();

// QUESTION 2

const languageArray = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add ‘Kotlin’ to the end of the array
languageArray.push('Kotlin');

// Add ‘Java’ after ‘Ruby’
languageArray.splice(3, 0, 'Java');

// Remove the first item in the array
languageArray.shift();

// Add ’Scala’ and ‘Swift’ to the beginning of the array
languageArray.unshift('Scala', 'Swift');

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languageArray.splice(5, 1, 'Go', 'Rust');

console.log(languageArray);

// QUESTION 3
fruit = ['apple', 'mango', 'orange'];

// QUESTION 4

function getMaxValue(arr) {
  const sortedArray = arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  });
  return sortedArray[sortedArray.length - 1];
}

console.log(getMaxValue([4, 5, 10, -2]));

// QUESTION 5

function valTimesIndex(arr) {
  return arr.map((number, index) => number * index);
}
console.log(valTimesIndex([1, 2, 3]));
console.log(valTimesIndex([5, 10, 15]));
