//Write a function that takes an array of objects representing people, with each object containing properties such as name, age, and city. The function should return an object containing the count of people by city. For example, if the input is [{ name: "Alice", age: 30, city: "New York" }, { name: "Bob", age: 40, city: "Chicago" }, { name: "Charlie", age: 50, city: "New York" }], the output should be { "New York": 2, "Chicago": 1 }. Use the reduce() array method in your implementation.

function count(array) {
  const people = array.reduce((location, person) => {
    const city = person.city;
    if (!location[city]) {
      location[city] = 1;
    } else {
      location[city]++;
    }
    return location;
  }, {});
  return people;
}

//TEST

let groupe = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];

let test = count(groupe);
console.log(test);
