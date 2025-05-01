// Challenge 1: Basic Function to Arrow Function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// Challenge 2: Filter Even Numbers
function filterEvens(arr) {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
}

console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Challenge 3: Square Each Number
function squareNumbers(numbers) {
  return numbers.map(function (num) {
    return num * num;
  });
}

console.log(squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]

// Challenge 4: Check If String Contains Substring
function containsSubstring(str, subStr) {
  return str.indexOf(subStr) !== -1;
}

console.log(containsSubstring("Hello, world!", "world")); // true
console.log(containsSubstring("Hello, world!", "bye")); // false

// Challenge 5: Variable Function - Multiply
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20

// Challenge 6: Map over Objects
function getUserNames(users) {
  return users.map(function (user) {
    return user.name;
  });
}

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

console.log(getUserNames(users)); // ['Alice', 'Bob', 'Charlie']

// Challenge 7: Sum Array of Numbers
function sum(arr) {
  let total = 0;
  arr.forEach(function (num) {
    total += num;
  });
  return total;
}

console.log(sum([1, 2, 3, 4])); // 10

// Challenge 8: Find the Maximum
function findMax(arr) {
  return arr.reduce(function (max, current) {
    return current > max ? current : max;
  }, -Infinity);
}

console.log(findMax([1, 5, 2, 8, 3])); // 8

// Challenge 9: Create an Object with Arrow Function
function createPerson(name, age) {
  return { name: name, age: age };
}

console.log(createPerson("Alice", 30)); // { name: 'Alice', age: 30 }

// Challenge 10: Filter Users by Age
function filterByAge(users, minAge) {
  return users.filter(function (user) {
    return user.age >= minAge;
  });
}

console.log(filterByAge(users, 30)); // [{ name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
