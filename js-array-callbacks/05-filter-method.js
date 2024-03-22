const numbers  = [10, 5 ,200, 77 ,50, 65, 0]
//find all numbers more than 50 or more

const numbers1 = numbers.filter( (number) => number >= 50)

console.log(numbers1)


// create a method which takes an array argument and returns all the even numbers from the original array as a new array

const numbersEven = numbers.filter(function (number){
    return number % 2 === 0
})

console.log(numbersEven)



const fruits = ['Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi']

//find all the fruits that have apple


const containApple = fruits.filter(function (fruit){
    return fruit.toLowerCase().includes('apple')
})

console.log(containApple);


