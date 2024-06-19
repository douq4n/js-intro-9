/*
Write a function named repeatingX() which takes a string argument and 
returns true if the letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
Examples:
repeatingX("xTechxGlobalx")  -> false
repeatingX("Hello Xx World")  -> true
repeatingX("x x")  -> false
repeatingX("")  -> false
repeatingX("xxxxx")  -> true
*/

function repeatingX(s) {
  // Convert the string to lowercase
  s = s.toLowerCase();
  
  // Loop through the string and check for consecutive 'x'
  for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === 'x' && s[i + 1] === 'x') {
          return true;
      }
  }
  
  return false;
}





/*
Requirement:
Write a function named isPerfectSquare() which takes a number as an 
argument and checks if it is a perfect square. It returns true if the number is a 
perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an 
integer by itself or as the second exponent of an integer. For example, 25 is a 
perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. 
However, 21 is not a perfect square number because it cannot be expressed as 
the product of two same integers.
Examples:
isPerfectSquare(25) -> true
isPerfectSquare(24) -> false
isPerfectSquare(0)  -> true
isPerfectSquare(1)  -> true
isPerfectSquare(-1)  -> false
isPerfectSquare(144)  -> true
*/


const isPerfectSquare = (num) => {
  if (num < 0) {
    return false; // Negative numbers cannot be perfect squares
}

sqrt = Math.sqrt(num);
return sqrt === Math.floor(sqrt); // Check if the square root is an integer
}

/*
Write a function named convertTemperature() which takes a number and a 
string arguments to be considered as a temperature value and a unit (either 
Celsius or Fahrenheit) as arguments and converts the temperature to the other 
unit.
NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
Examples:
convertTemperature(100, 'Celsius’)  -> 212
convertTemperature(32, 'Fahrenheit’)  -> 0
convertTemperature(0, 'Celsius’)  -> 32
convertTemperature(212, 'Fahrenheit’)  -> 100
convertTemperature(-40, 'Celsius’)  -> -40
*/

function convertTemperature(temp, unit) {
  if (unit === 'Celsius') {
      return (temp * 9 / 5) + 32;
  } else if (unit === 'Fahrenheit') {
      return (temp - 32) * 5 / 9;
  } else {
      throw new Error('Invalid unit. Please use "Celsius" or "Fahrenheit".');
  }
}

/*
Write a function named sumOfEvenNumbers() which takes an array as an 
argument and returns the sum of all the even numbers in an array.
Examples:
sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] )  -> 30
sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] )  -> 110
sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] )  -> 0
sumOfEvenNumbers( [ ] )  -> 0
sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] )  -> 6
*/

function sumOfEvenNumbers(arr) {
  // Initialize sum to 0
  let sum = 0;
  
  // Loop through the array and add even numbers to sum
  for (let num of arr) {
      if (num % 2 === 0) {
          sum += num;
      }
  }
  
  // Return the sum of even numbers
  return sum;
}



/*
Write a function named capsOdds() which takes an array argument and returns the array with 
all the odd index elements capitalized (converted to uppercase).
Examples:
capsOdds(["Hello", "World"])  -> ["Hello", "WORLD"]
capsOdds(["Jan", "Feb", "Mar", "Apr"])  -> ["Jan", "FEB", "Mar", "APR"]
capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])  -> ["Apple", "BANANA", 
"123", "456", "Peach", "KIWI"]
capsOdds([ ])  -> [ ]
capsOdds(["John !@#$%", "^&*() Doe"])  -> ["John !@#$%", "^&*() DOE"]
*/

function capsOdds(arr) {
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
      // Check if the index is odd
      if (i % 2 !== 0) {
          // Convert the element at the odd index to uppercase
          arr[i] = arr[i].toUpperCase();
      }
  }
  
  // Return the modified array
  return arr;

  
}

/*
Write a function named fibonacciSeries1() which takes a number n argument and returns the 
n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 
 
Examples: 
fibonacciSeries1(3)    -> [0, 1, 1] 
fibonacciSeries1(5)    -> [0, 1, 1, 2, 3] 
fibonacciSeries1(7)    -> [0, 1, 1, 2, 3, 5, 8] 
fibonacciSeries1(8)    -> [0, 1, 1, 2, 3, 5, 8, 13] 
fibonacciSeries1(1)    -> [0] 
fibonacciSeries1(2)    -> [0, 1] 

*/



const fibonacciSeries1 = (num) =>{
  if(num === 1)
    return [0]

arr = [0,1]
if(num > 2)
  for(let i = 2; i <= num -1; i++){

    arr.push(arr[i-1] + arr[i-2])
  }

return arr[arr.length-1]

}

console.log(fibonacciSeries1(8))

/*
Write a function named reverseNumber() which takes a number argument and returns it back 
reversed without converting it to a String. 
Note: Do not convert number to string to complete the task. 
 
Examples: 
reverseNumber(371)    -> 173 
reverseNumber(123)    -> 321 
reverseNumber(12)     -> 21 
reverseNumber(0)     -> 0 
reverseNumber(111)    -> 111
*/

const reverseNumber = (num) => {
 return  num.toString().split('').reverse().join('')
}

console.log(reverseNumber(123))

/*
Write a function named isArmstrong() which takes a number argument and returns true if 
given number is armstrong, return false otherwise. 
NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the 
power of the number of digits. In other words, an n-digit number is an Armstrong number if the 
sum of its digits, each raised to the nth power, is equal to the number itself. 
•  Let's take an example to understand it better. Consider the number 153. 
•  To determine if 153 is an armstrong number, we need to check if the sum of its 
digits, each raised to the power of the number of digits, equals the original 
number. 
•  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
•  In this case, the sum of the individual digits raised to the power of 3 (the number 
of digits in 153) is equal to the original number, which means 153 is an armstrong 
number. 
 
Examples: 
isArmstrong(153)     -> true 
isArmstrong(123)     -> false 
isArmstrong(1634)     -> true 
isArmstrong(153)     -> true 
isArmstrong(1111)     -> fals
*/


const isArmstrong = (num) => {
  array = num.toString().split('')
 nDigit = num.toString().split('').length
 result = 0
 for(let i = 0; i < nDigit; i++){
result += Math.pow(array[i], nDigit)
 }
 
 return result === num ? true : false
}
console.log(isArmstrong(1111))


/*
Write a function named isAnagram() which takes two string arguments and returns true if the 
given strings are anagram. Return false otherwise. 
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or 
phrase. In the context of strings, checking if two strings are anagrams of each other means 
verifying if they contain the same characters in the same quantities, regardless of the order of 
those characters. 
NOTE: This method is case-insensitive and ignore the white spaces. 
 
Examples: 
isAnagram("Apple", "Peach")     -> false 
isAnagram("listen", "silent")      -> true 
isAnagram("astronomer", "moon starer")  -> true 
isAnagram("CINEMA", "iceman")    -> true 
isAnagram("123", "1234")    -  > false 
*/
