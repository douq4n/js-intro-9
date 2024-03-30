/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

const hasUpperCase = (str) =>{
    return str.split('').filter(letter => letter >= 'A' && letter <= 'Z').length > 0
    }
 
 
 console.log(hasUpperCase("John"))
 
 
 
 /*
 Requirement:
 Write a function named noDigit() which takes a string argument and returns a 
 new string with all digits removed from the original string .
 Examples:
 noDigit("")  -> ""
 noDigit("Javascript")  -> "Javascript"
 noDigit("123Hello")  -> "Hello"
 noDigit("123Hello World149")  -> "Hello World”
 noDigit("123Tech456Global149")  -> "TechGlobal"
 */
 
 
 const noDigit = (str) => {
     return str.split('').filter( char => char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z').join('')
 }
 
 console.log(noDigit("123Hello World149"))
 
 
 /*
 Requirement:
 Write a function named noVowel() which takes a string argument and returns a 
 new string with all vowels removed from the original string .
 Examples:
 noVowel("TechGlobal")  -> "TchGlbl"
 noVowel("AEOxyz")  -> "xyz"
 noVowel("Javascript")  -> "Jvscrpt"
 noVowel("")  -> ""
 noVowel("125$")  -> "125$"
 */
 
 const noVowel = (str) => {
    return  str.split('').filter(charac => !("aeiou".includes(charac.toLowerCase()))).join('')
 
 }
 
 console.log(noVowel("Javascript"))
 
 
 
 /*
 Requirement:
 Write a function named no13() which takes an array of numbers as argument 
 and return a new array with all 13s replaced with 0s.  
 Examples:
 no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
 no13([13, 2, 3])  -> [0, 2, 3]
 no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
 no13([])  -> []
 */
 
 const no13 = (numbers) =>{
   return numbers.map(number => {
     if (number === 13) return 0 
     else return number;
  })
 }
 
 console.log(no13([13, 2, 3]))
 
 
 
 /*
 Requirement:
 Write a function named middleInt() which takes three number arguments and 
 return the middle number.  
 Examples:
 middleInt(1, 2, 2)  -> 2
 middleInt(5, 5, 8)  -> 5
 middleInt(5, 3, 5)  -> 5
 middleInt(1, 1, 1)  -> 1
 middleInt(-1, 25, 10)  -> 10
 */
 
 const middleInt = (num1, num2, num3) => {
  return [num1, num2, num3].sort((a, b) => a-b)[1]
 
 
 
 
 
 }
 
 console.log(middleInt(5, 3, 5))
 
 
 /*
 Requirement:
 Write a function named sumOfDigits() which takes a string argument and 
 returns sum of all digits from the original string.  
 Examples:
 sumOfDigits("Javascript")  -> 0
 sumOfDigits("John’s age is 29")  -> 11
 sumOfDigits("$125.0")  -> 8
 sumOfDigits("")  -> 0
 */
 
 const sumOfDigits = (str) => {
  
     strarr = str.split('')
   strarr1 = strarr.filter(digit => digit >= "0" && digit <= "9")
  
    return strarr1.reduce(((sum, curr) => sum += Number(curr)), 0)
  
 
 }
 
 console.log(sumOfDigits("John’s age is 29"))
 
 
 /*
 Requirement:
 Write a function named arrFactorial() which takes an array of numbers as 
 argument and return the array with every number replaced with their factorials.
 Examples:
 arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
 arrFactorial([0, 5])  -> [1,120]
 arrFactorial([5 , 0, 6])  -> [120, 1, 720]
 arrFactorial([])  -> []
 */
 
 
 const arrFactorial = (arr) => {
  return  arr.map(number => {
    let fac = 1;
    for (let i = 2; i <= number; i++){
       fac *= i
    }
    return fac;
  })
 }
 
 
 console.log(arrFactorial([1, 2, 3 ,4]))
 
 
 /*
 Requirement:
 Write a function named categorizeCharacters() which takes a string word as 
 argument and return an array as letters at index of 0, digits at index of 1 and 
 specials at index of 2. 
 Examples:
 categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
 categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
 categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
 */
 
 
 const categorizeCharacters = (str) =>{
    emptyArr = [];
     i0 = str.split('').filter(n => n >= 'a' && n <= 'z').join('') ;
     emptyArr.push(i0);
    i1 = str.split('').filter(n => n >= '0' && n <= '9').join('') ;
    emptyArr.push(i1);
    i2 = str.split('').filter(n => !(n >= 'a' && n <= 'z' || n >= '0' && n <= '9')).join('');
    emptyArr.push(i2)
 
     return emptyArr
 
 }
 
 console.log(categorizeCharacters("12ab$%3c%"))