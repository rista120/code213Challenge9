// Write a function that takes an array of numbers and returns the average of all the even numbers. Use the filter() and reduce() array methods in your implementation.

function average(array) {
  const even = array.filter((i) => i % 2 == 0);
  const sum = even.reduce((a, c) => a + c, 0);
  return sum / even.length;
}

//TEST
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(average(arr));
