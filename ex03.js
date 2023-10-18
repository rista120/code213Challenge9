// Write a function that takes an array of objects representing books, with each object containing properties such as title, author, and pages. The function should return the average number of pages across all the books. Use the map() and reduce() array methods in your implementation.

function countPages(array) {
  let pNumber = array.map((i) => i["pages"]);

  const averagePages =
    pNumber.reduce((acc, curr) => acc + curr) / pNumber.length;

  return averagePages;
}

//test
let arr = [
  {
    title: "title1",
    author: "author1",
    pages: 100,
  },
  {
    title: "title2",
    author: "author2",
    pages: 300,
  },
  {
    title: "title3",
    author: "author3",
    pages: 350,
  },
];

let test = countPages(arr);
console.log(test);
