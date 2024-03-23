/*
Requirement:
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/


const countPos = function (arr){
   counter = 0;
    for (num of arr){
        if(num > 0) counter++
        else counter;
    
    }
    return counter
}

const countPos = (arr) => (arr.filter(num => num > 0)).length
  



console.log(countPos([-45, 0, 0, 34, 5, 67]))

/*
Requirement:
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0 
*/


const countA = function (str) {
     arr = str.split('')
     counter = 0;
     for(letter of arr){
        if (letter === 'a' || letter === 'A') counter++
        else counter;
     }
     return counter

}




const countA = function (str){
    arr = str.toLowerCase().split('')

   return  (arr.filter(letter => letter === 'a')).length
}
    
 

 

console.log(countA("TechGlobal is a QA bootcamp") )


/*
Requirement: 
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
 Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
*/


const countVowels = function (str){
    arr = str.toLowerCase()
    counter = 0;
    for ( x of arr){
        if (x === 'a'|| x === 'e' || x === 'i' || x === 'o' ) counter++
        else counter;
    }
    return counter
}
console.log(countVowels("Hello"))


const countVowels = (str) => {
    arr = str.toLowerCase().split('')
  return  (arr.filter( x => x === 'a' || x === 'e' || x === 'i' || x === 'o').length)
}
console.log(countVowels("Hello"))


/*
Requirement: 
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter. Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

const countConsonants = function (str){
    arr = str.toLowerCase()
    counter = 0;
    for (x of arr){
        if (!(x === 'a'|| x === 'e' || x === 'i' || x === 'o' ))counter++
        else counter;
        
    }
    return counter;
}

console.log(countConsonants("Hello World"))

const countConsonants = function (str){
    arr = str.toLowerCase().split('')
  return  arr.filter( x => (!(x === 'a'|| x === 'e' || x === 'i' || x === 'o' ))).length
}

console.log(countConsonants("Hello World"))


/*
Requirement:
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
 Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 countWords("1 2 3 4") 				-> 4
*/

const countWords = function (str){
   str1 =  str.trim().split('')
    wordNumber = 0;
    for(x of str1){
        if (x === ' ') wordNumber++
        else wordNumber;
    }
    return wordNumber + 1
}

console.log(countWords("Cypress is an UI automation tool. "))


const countWords = function (str){
    str1 =  str.trim().split(' ')

 return str1.length
    
 }

 console.log(countWords("Cypress is an UI automation tool. "))


 /*
 Requirement:
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
 Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/



const factorial = function (num){
    fac = 1
    for (i = 1; i <= num; i++){
        fac *= i

    }
    return fac;
}

console.log(factorial(0))

/*
Requirement: 
Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity


 Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true
*/


const isPalindrome = function (str){
    let end = str.length - 1
    for(i = 0; i < str.length; i++){
      if(str[i] === str[end]) return true
      else false
      end--
    }
    return 

    
}



const isPalindromes = function (str){
    return  str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
  }


console.log(isPalindromes("123454321"))


/*
Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
 Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ])
*/


const countMultipleWords =(arr) => {
  return  arr.reduce((count, x) =>{
        if (x.trim().includes(' ')) return count + 1
return count;
    }, 0)

   

}

console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]))

/*
Requirement: 
Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words that has 3 characters or less when invoked.

 Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0
*/


const count3OrLess = (str) => {
 arr = str.split(' ')
 return arr.filter(word => word.length >= 3).length

}

console.log(count3OrLess("My name is John Doe"))

/*
Requirement:
Write a function named as isPrime() which takes a number as an argument and returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

 Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 		-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false
*/


const isPrime = (num) => {
    
}

console.log(isPrime(7));

/*
Requirement:
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
 Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]
*/

const add = (arr1, arr2) => {
    if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    for (let i = 0; i < arr2.length; i++){
        arr1[i] += arr2[i]
    }
    return arr1
}

console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))


/*
Requirement: 
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

 Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> "" 
*/

const removeExtraSpaces = (str) => {
    return str.trim().split(' ').filter( s => s.length > 0).join(' ')


}


console.log(removeExtraSpaces("      Hello    World     "))


/*
Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
  Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0
*/

//????


/*
Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

 Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true
*/


const isEmailValid = (email) => {
    if (email.includes(' ')) return false;
    if (email.split('@').length !== 2) return false

const beginning = email.split('@')[0]
const middle = email.split('@')[1].split('.')[0]
const end = email.split('@')[1].split('.')[1]

if (beginning === undefined || middle === undefined || end === undefined)  return false
return (beginning.length >= 2 && middle.length >= 2 && end.length >= 2)



}

console.log(isEmailValid(""))
console.log(isEmailValid("johndoe@yahoo"))
console.log(isEmailValid("a@outlook.com"))
console.log(isEmailValid("johndoe@a.com"))
console.log(isEmailValid("johndoe@gmail.com"))

/*
Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

 Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true
*/

const isPasswordValid = (str) => {
    if (str.includes(' ')) return false
    if (!(str.length >= 8 && str.length <=16)) return false

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;
    let hasSpecial = false
    
   for (char of str){
    if (char >= 'A' && char <= 'Z') hasUppercase = true;
    else if (char >= 'a' && char <= 'z') hasLowercase = true;
    else if (char >= '0' && char <= '9') hasDigit = true;
    else hasSpecial = true;
   }

   return (hasUppercase && hasLowercase && hasDigit && hasSpecial)
}

console.log(isPasswordValid("Chicago123$"));