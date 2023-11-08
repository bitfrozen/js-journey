const getCelsius = t => ((t - 32) * (5 / 9)).toFixed(1);
console.log(`The temperature is ${getCelsius(96)} \xB0C`);

const minMax = (n) => ({
  min: Math.min(...n),
  max: Math.max(...n),
})
console.log(minMax([1, 2, 3, 4]));

((l, w) => {
  console.log(`The area of a rectangle with a length of ${l} and a width of ${w} is ${(l*w).toFixed(2)}`);
})(10, 20);