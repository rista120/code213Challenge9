// Write a function that takes an array of words and returns the longest word. Use the reduce() array method in your implementation.

function longest(array) {
  let long = array.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      return curr;
    } else {
      return acc;
    }
  });
  return long;
}

//test
const lorem = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
];
console.log(longest(lorem));
