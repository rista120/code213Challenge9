// Write a function that takes an array of strings and returns an object containing the frequency of each string. For example, if the input is ["hello", "world", "hello"], the output should be { hello: 2, world: 1 }. Use the reduce() array method in your implementation.

function strFrequency(array) {
  const result = array.reduce((frequency, word) => {
    if (!frequency[word]) {
      frequency[word] = 1;
    } else {
      frequency[word]++;
    }
    return frequency;
  }, {});
  return result;
}

//TEST

let str = ["hello", "world", "hello", "hello"];

let test = strFrequency(str);

console.log(test);
