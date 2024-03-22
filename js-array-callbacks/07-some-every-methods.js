const numbers = [-5, 0, 5, 10, 23, -10]

console.log(numbers.some(number => number % 5 === 0)) //checking some elements are divisible by 5
console.log(numbers.every(number => number % 5 === 0))
console.log(numbers.every(number => number > 0))
console.log(numbers.some(number => number < 0)) 