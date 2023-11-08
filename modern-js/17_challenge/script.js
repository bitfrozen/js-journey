function calculator(n1, n2, op) {
  const error = "Invalid operator";
  if (typeof n1 === "number" && typeof n2 === "number") {
    switch (op) {
      case '+':
        return n1 + n2;
      case '-':
        return n1 - n2;
      case '*':
        return n1 * n2;
      case '/':
        return n1 / n2;
      default:
        return error;
    }
  } else {
    return error;
  }
}

console.assert(calculator(5, 2, '+') === 7, "Bad result");
console.assert(calculator(5, 2, '-') === 3, "Bad result");
console.assert(calculator(5, 2, '*') === 10, "Bad result");
console.assert(calculator(5, 2, '/') === 2.5, "Bad result");
console.assert(calculator(5, 2, '&') === "Invalid operator", "Bad result");
