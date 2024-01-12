const sum = function (a, b) {
  return a + b;
}

const subtract = function (c, d) {
  return c - d;
}

const multiply = function (e, f) {
  return e * f;
}

const divide = function (g, h) {
  return g / h;
}

const log = function (value) {
  console.log(value);
}

let arrowfunction = () => {
  return (divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5));
}

// console.log(sum(2, 4))
// console.log(sum(5, 2))
// console.log(multiply(sum(2, 4), sum(5, 2)))
// console.log(subtract(multiply(sum(2, 4), sum(5, 2)), 2))
// console.log(divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2),5))

console.log(arrowfunction())