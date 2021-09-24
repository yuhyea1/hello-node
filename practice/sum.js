console.log("hello world!");

function sum(param) {
  let total = 0;
  for (let i = 1; i <= param; i++) {
    total = total + i;
  }
  return total;
}

console.log(sum(33)); // 6
console.log(sum(6)); // 21
console.log(sum(10)); // 55
