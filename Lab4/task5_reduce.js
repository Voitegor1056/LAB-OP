// Задание 5. sum — Array.prototype.reduce()
const sum = (...args) => args.reduce((acc, value) => acc + value, 0);

console.log(sum(1, 2, 3)); // 6
console.log(sum(0)); // 0
console.log(sum()); // 0
console.log(sum(1, -1, 1)); // 1
console.log(sum(10, -1, -1, -1)); // 7
