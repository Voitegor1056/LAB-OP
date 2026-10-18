// Задание 4. sum — цикл do..while
const sum = (...args) => {
  let result = 0;
  let i = 0;
  if (args.length === 0) return result; // do..while выполняется хотя бы раз
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  return result;
};

console.log(sum(1, 2, 3)); // 6
console.log(sum(0)); // 0
console.log(sum()); // 0
console.log(sum(1, -1, 1)); // 1
console.log(sum(10, -1, -1, -1)); // 7
