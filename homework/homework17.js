/*
Write a function named findMedian() which takes two arrays of numbers as 
its arguments and return the median of the two sorted arrays. 
NOTE: The median is the middle number of a sorted array. So the median of 
[1,3], [2] would be 2. If the array has an even length, you are to find the average 
of the 2 middle numbers
findMedian([1, 3], [2])  -> 2
findMedian([1, 2], [3, 4])  -> 2.5
findMedian([4], [3])  -> 3.5
findMedian([4], [])   -> 4
findMedian([0], [0,1])    -> 0
*/

const findMedian = (arr1,arr2) => {

 arr3=[...arr1,...arr2].sort((a,b) => a-b)
 if(arr3.length % 2 === 0)
  return( arr3[(arr3.length)/2] +  arr3[((arr3.length)/2) + 1]) / 2
else 
return arr3[Math.floor((arr3.length)/2)]

}



console.log(findMedian([1, 2], [3,4]))



/*
Write a function named calculateFactorial() which takes a number as an 
argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a 
given positive integer and denoted by that integer and an exclamation point. 
Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial 
zero is defined as equal to 1.
calculateFactorial(0)  -> 1
calculateFactorial(1)  -> 1
calculateFactorial(5)  -> 120
calculateFactorial(6)  -> 720
calculateFactorial(10)  -> 3628800
calculateFactorial(4)  -> 24
*/


const calculateFactorial = (num) => {
  result = 1

  for(let i =1; i <= num; i++){
    result *= i
  }
  return result
}

console.log(calculateFactorial(4))


/*
Write a function named calculateGCD() which takes two numbers as 
arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
Examples:
calculateGCD(8, 12)  -> 4
calculateGCD(17, 5)  -> 1
calculateGCD(48, 18)  -> 6
calculateGCD(0, 5)  -> 5
calculateGCD(21, 14)  -> 7
calculateGCD(60, 48)  -> 12
*/


const calculateGCD =(num1,num2) => {
max = Math.max(num1,num2)
arr=[]
for(let i = 1; i <= max; i++){
if(num1%i === 0 && num2%i === 0)
  arr.push(i)
}

return arr.sort((a,b) => b-a)[0]

}

console.log(calculateGCD(18, 48))


/*
Write a function named calculateLCM() which takes two numbers as 
arguments and returns the least common multiple of the two numbers.
NOTE: LCM is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
Examples:
calculateLCM(8, 12)  -> 24
calculateLCM(17, 5)  -> 85
calculateLCM(48, 18)  -> 144
calculateLCM(0, 5)  -> 0
calculateLCM(21, 14)  -> 42
calculateLCM(60, 48)  -> 240
*/

const calculateLCM = (num1,num2) => {
let i = 0;
  for(;;){
i++
if(i % num1  === 0 && i % num2 === 0 ){
  break
}
  }
  return i
}

console.log(calculateLCM(48, 18))