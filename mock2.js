const getEvens = (num1, num2) => {
    max = Math.max(num1,num2)
  min = Math.min(num1,num2)
  arr = []
  
  for (let i = min; i <= max; i++){
  if(i % 2 === 0)
  arr.push(i)
  }
  return arr;
  
  }


  console.log(getEvens(2, 7))



  function arrFactorial(arr) {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    return arr.map(factorial);
}

// Test cases
console.log(arrFactorial([1, 2, 3 ,4]));   // Output: [1, 2, 6, 24]
console.log(arrFactorial([0, 5]));         // Output: [1, 120]
console.log(arrFactorial([5, 0, 6]));      // Output: [120, 1, 720]
console.log(arrFactorial([]));             // Output: []





/*
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked. 
 
Examples: 
doubleOrTripleWord("Tech")     -> "TechTechTech" 
doubleOrTripleWord("Apple")     -> "AppleApple” 
doubleOrTripleWord("")       -> "" 
doubleOrTripleWord(" ")       -> " " 
doubleOrTripleWord("1")       -> "11" 
doubleOrTripleWord("22")       -> "222222"
*/



const doubleOrTripleWord = (str) => {
  if(str.length % 2 === 0)
  return str + str + str
else 
return str + str
}


console.log(doubleOrTripleWord("tech"))



/*
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 
 
Examples: 
firstLastWord("Hello World")     -> "HelloWorld" 
firstLastWord("I like JavaScript")    -> "IJavaScript” 
firstLastWord("Hello")       -> "HelloHello" 
firstLastWord("")         -> "" 
firstLastWord("  ")       -> "" 
*/


const firstLastWord = (str) => {
  arr = str.split(' ')
 return arr[0].concat(arr[arr.length - 1])
  }
  

console.log(firstLastWord("hello"))


/*
Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases. 
 
Examples: 
hasVowel("")        -> false 
hasVowel("Javascript")     -> true 
hasVowel("Tech Global")     -> true 
hasVowel("1234")       -> false 
hasVowel("ABC")       -> true
*/



const hasVowel = (str) => {
  const str1 = str.toLowerCase();
  return str1.includes('a') || str1.includes('e') || str1.includes('i') || str1.includes('o') || str1.includes('u');
};

console.log(hasVowel("Tech Global")); // Output: true


/*
Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
 
Examples: 
startVowel("Hello")     -> false 
startVowel("Apple")    -> true 
startVowel("orange")   -> true 
startVowel("")     -> false 
startVowel("  ")     -> false 
startVowel("123")     -> false
*/


const startVowel = (str) => {
  const str1 = str.toLowerCase();
  return str1.startsWith('a') || str1.startsWith('e') || str1.startsWith('i') || str1.startsWith('o') || str1.startsWith('u');
};

console.log(startVowel("apple"));

/*
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers. 
 
Examples: 
averageOfEdges(0, 0, 0)   -> 0 
averageOfEdges(0, 0, 6)   -> 3 
averageOfEdges(-2, -2, 10)   -> 4 
averageOfEdges(-3, 15, -3)   -> 6 
averageOfEdges(10, 13, 20)   -> 15
*/



const averageOfEdges = (num1, num2, num3) => {
  max = Math.max(num1, num2, num3)
  min = Math.min(num1, num2, num3)

  return result = (max + min) / 2
  
}

console.log(averageOfEdges(10, 13, 20))



/*
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
 
Examples: 
replaceFirstLast("")         ->  "" 
replaceFirstLast("Hello")       ->  "oellH" 
replaceFirstLast("Tech Global")     -> "lech GlobaT" 
replaceFirstLast("A")       -> "" 
replaceFirstLast("    A      ")      -> ""
*/


const replaceFirstLast = (str) => {
  if(str.length < 2) return ""
  else
  return str.at(-1) + str.slice(1, str.length - 1) + str.at(0)
}

console.log(replaceFirstLast("hello"))




/*
Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters. 
 
Examples: 
swap4("abc")       -> "" 
swap4("JavaScript")      -> "riptScJava" 
swap4("TechGlobal")     -> "obalGlTech" 
swap4("")         -> "" 
swap4("  ")       -> "" 
swap4("Apple")       -> ""
*/




const swap4 = (str) => {
  if (str.length < 9) return "";
  else 
    return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);
}

console.log(swap4("TechGlobal"));



/*
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
 
Examples: 
swapFirstLastWord("Hello World")      -> "World Hello" 
swapFirstLastWord("I like JavaScript")   -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")     -> "bar bar foo foo" 
swapFirstLastWord("")         -> "" 
swapFirstLastWord("  ")         -> "" 
swapFirstLastWord("Hello")        -> "" 
swapFirstLastWord("Hello   ")       -> "" 
*/




let x = 10 
let y = 11

obj = {x : x,y: y}
console.log(x,y)

function asd(name, age){
  this.age = age
  this.name = name
}

const john = new asd ()





function swapFirstLastWord(word) {
  // Trim extra spaces and split the string into an array of words
  const words = word.trim().split(/\s+/);

  // Check if there are at least 2 words
  if (words.length < 2) {
      return "";
  }

  // Swap the first and last words
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  words[0] = lastWord;
  words[words.length - 1] = firstWord;

  // Join the array back into a string and return
  return words.join(" ");
}



const swapFirstLastWord = (str) => {
  const arr = str.split(' ')
  FirstWord = arr[arr.length - 1]
  LastWord = arr[0]
  const arrnew = [FirstWord, ...add, LastWord] 
  
  for(let i = 1; i < arr.length -1; i++){
  arrnew.push(arr[i]) }
  return arrnew
  }
  
  
  
  
  
  
  
  

// Test cases
console.log(swapFirstLastWord("Hello World")); // "World Hello"
console.log(swapFirstLastWord("I like JavaScript")); // "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar")); // "bar bar foo foo"
console.log(swapFirstLastWord("")); // ""
console.log(swapFirstLastWord("  ")); // ""
console.log(swapFirstLastWord("Hello")); // ""
console.log(swapFirstLastWord("Hello   ")); // ""



/*
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked.  
 
Examples: 
countPos([-45, 0, 0, 34, 5, 67])     -> 3 
countPos([-23, -4, 0, 2, 5, 90, 123])   -> 4 
countPos([0, -1, -2, -3])       -> 0 
*/


const countPos = (arr) => {
 return arr.filter(x => x > 0).length
}


console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))



/*
Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
 
Examples: 
getEvens(2, 7)    -> [ 2, 4, 6 ] 
getEvens(17, 5)    -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)    -> [ 4 ] 
getEvens(3, 3)    -> [ ]
*/


const getEvens = (num1, num2) => {
  max = Math.max(num1, num2)
  min = Math.min(num1, num2)
const arr = []

for (let i = min; i <= max; i++){
  if(i % 2 === 0)
  arr.push(i)
}

return arr.sort((a,b) => (a-b))
}

console.log(getEvens(17, 5))  

/*
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
Examples: 
getMultipleOf5(3, 17)    -> [ 5, 10, 15] 
getMultipleOf5(23, 5)    -> [ 20, 15, 10, 5 ] 
getMultipleOf5(5, 5)      -> [ 5 ] 
getMultipleOf5(2, 4)      -> [ ] 
 
*/

const getMultipleOf5 = (num1, num2) => {
  max = Math.max(num1, num2)
  min = Math.min(num1, num2)
  const arr = []
for ( let i = min; i <= max; i++){
  if(i % 5 === 0)
  arr.push(i)
}
if( num1 > num2)
return arr.sort((a,b) => b-a)
else
return arr.sort((a,b) => a-b)

}


console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))




/*
Write a function named countNeg() which takes an array of numbers as an argument and 
returns how many elements are negative when invoked.  
 
Examples: 
countNeg([-45, 0, 0, 34, 5, 67])     -> 1 
countNeg([-23, -4, 0, 2, 5, 90, 123])   -> 2 
countNeg([0, -1, -2, -3])       -> 3
*/


const countNeg = (arr) => {
  return arr.filter(x => x < 0).length
}

console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]))


/*
Write a function named countA() which takes a string argument and returns how many A or a 
there are in the given string when invoked. 
NOTE: Ignore case sensitivity.  
 
Examples: 
countA("TechGlobal is a QA bootcamp")       -> 4 
countA("QA stands for Quality Assurance")     -> 5 
countA("Cypress")             -> 0
*/

const countA = (str) => {
 const  str1 = str.toLowerCase()
  const arr = str1.split('')
 return arr.filter(x => x === "a").length
}

console.log(countA("QA stands for Quality Assurance"))


/*
Write a function named countWords() which takes a string argument and returns the total 
count of words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string. 
 
Examples: 
countWords("     Javascript is fun       ")         -> 3 
countWords("Cypress is an UI automation tool.    ")     -> 6  
countWords("1 2 3 4") 
*/


const countWords = (str) =>{
const str1 = str.trim()
const arr = str1.split(' ').length
return arr;

}

console.log(countWords("Cypress is an UI automation tool.    "))


/*
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 
 
Examples: 
factorial(5)     -> 120 
factorial(4)    -> 24 
factorial(0)    -> 1 
factorial(1)    -> 1
*/


const factorial = (num) => {
  fac = 1

  for(let i = 1; i <= num; i++){
    fac *= i
  }
  return fac
}
console.log(factorial(5))


/*
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked. 
 
Examples: 
count3OrLess("Hello")         -> 0 
count3OrLess("Hi John")         -> 1 
count3OrLess("JavaScript is fun")       -> 2 
count3OrLess("My name is John Doe")     -> 3 
count3OrLess("")           -> 0 
*/

const count3OrLess = (str) => {
const arr =  str.split(' ')
return arr.filter(x => x.length >= 3).length
}

console.log(count3OrLess("My name is John Doe"))


/*
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked. 
 
Examples: 
removeExtraSpaces("Hello")           -> "Hello" 
removeExtraSpaces("    Hello    World  ")       -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")    -> "JavaScript is fun” 
removeExtraSpaces("")             -> "" 
*/

const removeExtraSpaces = (str) => {
   const str1 = str.trim()
     arr = str1.split(' ')
    return  arr.filter(x => x !== "").join(' ')

}
console.log(removeExtraSpaces("   JavaScript is        fun"))


/*
Write a function named middleInt() which takes three number arguments and return the middle 
number.  
 
Examples: 
middleInt(1, 2, 2)     -> 2 
middleInt(5, 5, 8)     -> 5 
middleInt(5, 3, 5)     -> 5 
middleInt(1, 1, 1)     -> 1 
middleInt(-1, 25, 10)   -> 10 
 */

const middleInt = (num1, num2, num3) => {
  const arr = [num1, num2, num3]
  return arr.sort((a,b) => a-b)[1]

}
console.log(middleInt(-1, 25, 10))
console.log(middleInt(5, 3, 5))
 


/*
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same. 
 
Examples: 
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])      -> 3 
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])      -> 5 
firstDuplicate([ 5, '5', 3, 7, 4 ])      -> -1 
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])    -> 'abc' 
firstDuplicate([ 1, 2, 3])        -> -1 
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])     -> -1
*/


const firstDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++){
    for(let j = i+ 1; j < arr.length; j++){
      if (arr[i] === arr[j]){
        return arr[i]
      }
     
    }
      

    
  }
  return -1;
  
}
 
console.log(firstDuplicate([ 5, 7]))



-----------------------------------------------------------------------------------------

/*
Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types 
of the elements must be same. 
 
Examples: 
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])      -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])          -> [ ] 
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])    -> [ 'foo', 'a’ ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])       -> [ ]
*/


const getDuplicates = (arr) => {

  newarr = []
  for ( let i = 0; i <= arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j])
      newarr.push(arr[i])
    }
  }
  return newarr.filter(x => )
}
 
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
 

-----------------------------------------------------------------------------------------


/*
Write a function named as countVowels() which takes a string word as an argument and 
returns the count of the vowel letters when invoked. 
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i 
 
Examples: 
countVowels("Hello")       -> 2 
countVowels("JavaScript is fun")    -> 5 
countVowels("")         -> 0
*/

const countVowels = (str) => {
  const str1 = str.toLowerCase();
  const arr = str1.split('');
 return arr.filter(x => x === 'a' || x === 'e' || x === 'o' || x === 'u' || x === 'i').length

}

console.log(countVowels("JavaScript is fun"))



/*
Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked. 
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string. 
 
Examples: 
reverseStringWords("Hello World")      -> "olleH dlroW" 
reverseStringWords("I like JavaScript")     -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")       -> "olleH" 
reverseStringWords("")         -> "" 
reverseStringWords(" ")         -> "" 
*/

const reverseStringWords = (str) => {
  const arr = str.split(' ')
   return arr.map(x => x.split('').reverse().join(''))
}

console.log(reverseStringWords("I like JavaScript"))


/*
Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked. 
NOTE: A letter that is not vowel is considered as a consonant letter. 
 
Examples: 
countConsonants("Hello")         -> 3 
countConsonants("Hello World")       -> 8 
countConsonants("JavaScript is fun")     -> 12 
countConsonants("")         -> 0
*/

const countConsonants = (str) => {
  const str1 = str.toLowerCase()
  const arr = str1.split('')
  return arr.filter(x => x !== "a" && x !== "e" && x !== "i" && x !== "o" && x !== "u" ).length
}

console.log(countConsonants("JavaScript is fun"))
---------------------------------------------------------------------------------------------------------
/*
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked. 
NOTE: Be careful about the extra whitespaces before and after the array element. 
 
Examples: 
countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ])     -> 1 
countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ])     -> 0 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])     -> 4 
countMultipleWords([ ])               -> 0 
*/

function countMultipleWords(array) {
  // Filter out elements with multiple words
  const multipleWords = array.filter(element => {
      // Check if the element contains more than one word by counting spaces
      return element.trim().split(" ").length > 1;
  });
  
  // Return the count of elements with multiple words
  return multipleWords.length;
}

const countMultipleWords = (arr) => {

  const result = arr.filter(x  =>      {
       return x.trim().split(" ").length > 1
  
  
  })
  
  
  return result.length
  
  
  }

// Test cases
console.log(countMultipleWords(["foo", "", "	", "foo bar", " 	foo"])); // Output: 1
console.log(countMultipleWords(["foo", "bar", "foobar", " 	foobar   "])); // Output: 0
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "])); // Output: 4
console.log(countMultipleWords([])); // Output: 0


---------------------------------------------------------------------------------------------------------

/*
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string 
composed with below requirements when invoked. 
•  You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each 
number. 
•  You will need to convert numbers divisible by 3 to 'Fizz' 
•  You will need to convert numbers divisible by 5 to 'Buzz' 
•  You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’ 
•  The rest will stay the same. 
NOTE: Make your code dynamic that works for any numbers. 
Assume you will not be given negative numbers. 
 
Examples: 
fizzBuzz(13, 18)    -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)    -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
fizzBuzz(5, 5)    -> "Buzz" 
fizzBuzz(9, 6)    -> "Fizz | 7 | 8 | Fizz"
*/



const fizzBuzz = (num1, num2) => {
  max = Math.max(num1, num2)
  min = Math.min(num1, num2)
  arr = []
  

  for (let i = min; i <= max; i++) {
    if( i % 3 === 0 && i % 5 === 0){
      arr.push("FizzBuzz")
    }
    else if( i % 3 === 0 ){
      arr.push("Fizz")
    }
   else if( i % 5 === 0){
      arr.push("Buzz")
    }
    else 
    arr.push(i);
  }
return arr.join(" | ");
}

console.log(fizzBuzz(12, 5))


/*
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked. 
NOTE: Palindrome: It is a word that is read the same backward as forward 
Examples: kayak, civic, madam 
NOTE: your function should ignore case sensitivity 
 
Examples: 
isPalindrome("Hello")   -> false 
isPalindrome("Kayak")   -> true 
isPalindrome("civic")   -> true 
isPalindrome("abba")   -> true 
isPalindrome("ab  a")   -> false 
isPalindrome("123454321")   -> true 
isPalindrome("A")   -> true 
isPalindrome("")   -> true
*/


const isPalindrome = (str) => {
  const str1 = str.toLowerCase()
  const arr = str1.split('')
  const reverseArr = arr.reverse().join('')
  if( str1 === reverseArr)  return true
  else  
  return false

}


console.log(isPalindrome("abba"))


/*
Write a function named as isPrime() which takes a number as an argument and returns true if 
the number is prime or returns false otherwise when invoked. 
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number. 
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31... 
NOTE: The smallest prime number is 2 and there is no negative prime numbers. 
 
Examples: 
isPrime(5)   -> true 
isPrime(2)   -> true 
isPrime(29)   -> true 
isPrime(-5)  -> false 
isPrime(0)  -> false 
isPrime(1)  -> false 
*/


const isPrime = (num)  => {
  if (num === 1) return false
  if (num === 2) return true
  for (let i = 2; i < num; i++){
    if(num % i === 0) return false
    else 
    return true
  } 

   
}

console.log(isPrime(6))

-------------------------------------------------------------------------------------------------------------------
/*
Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements. 
NOTE: Be careful about the array sizes as they could be different. 
 
Examples: 
add([3, 0, 0, 7, 5, 10], [6, 3, 2])         -> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])     -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])         -> [0, 0, 0, 0]
*/


const add = (arr1, arr2) => {
  max = Math.max(arr1.length, arr2.length) // 6
  min = Math.min(arr1.length, arr2.length) // 3
  const arr = []

  for (let i = 0; i < max; i++){
    if(i >= min ) {
      if (arr1.length > arr2.length) arr.push(arr1)
      else arr.push(arr2)
    }
    else arr.push(arr1[i] + arr2[i])
  }
  return arr;
}

console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))



------------------------------------------------------------------------------------------------------------


/*

Write a function named noA() which takes an array of strings as argument and will return a 
new array with all elements starting with "A" or "a" replaced with "###". 
 
Examples: 
noA(["javascript", "hello", "123", "xyz"])     ->  ["javascript", "hello", "123", "xyz"] 
noA(["apple", "123", "ABC", "javascript"])     ->  ["###", "123", "###", "javascript"] 
noA(["apple", "abc", "ABC", "Alex", "A"])     ->  ["###", "###", "###", "###", "###"] 
 
*/


const noA = (arr) => {
  
  return arr.map(x => x.toLowerCase().startsWith('a') ? "###" : x)
}

console.log(noA(["apple", "123", "ABC", "javascript"]))


/*
Write a function named no3and5() which takes an array of integer numbers as argument and 
will return a new array with elements replaced by conditions below. 
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101 
 
Examples: 
no3and5([7, 4, 11, 23, 17])       -> [7, 4, 11, 23, 17] 
no3and5([3, 4, 5, 6])       -> [100, 4, 99, 100] 
no3and5([10, 11, 12, 13, 14, 15])     -> [99, 11, 100, 13, 14, 101
  */


  const no3and5 = (arr) => {
    return arr.map(x => {
      if(x % 3 === 0 && x % 5 === 0) return 101
      if(x % 5 === 0) return 99
      if(x % 3 === 0) return 100
      else 
      return x
    })
  }

  console.log(no3and5([10, 11, 12, 13, 14, 15]))


  /*
  Write a function named no13() which takes an array of numbers as argument and return a new 
array with all 13s replaced with 0s.  
 
Examples: 
no13([1, 2, 3 ,4])       -> [1, 2, 3 ,4]  
no13([13, 2, 3])       -> [0, 2, 3] 
no13([13, 13, 13 , 13, 13])     -> [0, 0, 0, 0, 0] 
no13([])         -> [] 
*/

const no13 =(arr) => {
 return arr.map(x => {
    if(x === 13) return 0
    else 
    return x
  })
}

console.log(no13([13, 13, 13 , 13, 13]))


/*
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced. NOTE: If the length is less than 2, return an empty string. NOTE: Ignore extra spaces before and after the string.

Examples:
replaceFirstLast("")   			    -> ""
replaceFirstLast("Hello")   		-> "oellH"
replaceFirstLast("Tech Global")   	-> "lech GlobaT"
replaceFirstLast("A")   		    -> ""
replaceFirstLast("    A      ")   	-> ""
*/

const replaceFirstLast = (str) => {

  firstLetter =str.at(-1) 
  lastLetter = str[0]
 return result = firstLetter + str.slice(1, -1) + lastLetter
}


console.log(replaceFirstLast("Tech Global"))






/*
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​

Examples:
sumOfDigits("Javascript")   		-> 0
sumOfDigits("John’s age is 29")   	-> 11
sumOfDigits("$125.0")   		    -> 8
sumOfDigits("")   			        -> 0
*/

const sumOfDigits= (str) => {
 const  arr = str.split('')
 const arr1 = arr.filter(x => x >= 0 && x <= 9 && x !== " " )
return arr1.reduce((acc, curr) => acc + Number(curr), 0)

}

console.log(sumOfDigits("John’s age is 29"))

/*
Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked. NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

Examples:
startVowel("Hello")   	-> false
startVowel("Apple")   	-> true
startVowel("orange")    -> true
startVowel("")   	    -> false
startVowel("	")   	-> false
startVowel("123")   	-> false
*/

const startVowel = (str) => {
  const str1 = str.toLowerCase()
  if (str1.startsWith('a') ||str1.startsWith('e') || str1.startsWith('i') || str1.startsWith('o') || str1.startsWith('u')  )
  return true 
else 
return false 
}

console.log(startVowel("apple"))





const swapFirstLastWord = (sentence) => {
  const words = sentence.split(' ')
  if (words.length < 2) return ""


  const temp = words[0]
  words[0] = words[words.length - 1]
  words[words.length - 1] = temp
  return words.join(' ')
 
  
  }

  console.log(swapFirstLastWord("i like javascript "))








  const noDigit = (str) => {

    const arr = str.split("")
    return  arr.filter(x => !(x >= "0" && x <= "9") ).join("")
    
    
    }


    console.log(noDigit("123Tech456Global149"))