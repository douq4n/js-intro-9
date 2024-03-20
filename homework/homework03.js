/*
Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.
Test data 1:
20, 70, 25
Expected Output 1: 
false
Test data 2:
65, 80, 90
Expected Output 2: 
true
*/

let num1 = Math.floor(Math.random() * 100) + 1
let num2 = Math.floor(Math.random() * 100) + 1
let num3 = Math.floor(Math.random() * 100) + 1

console.log("Your first number is = " + num1)
console.log("Your second number is = " + num2)
console.log("Your third number is = " + num3)

if ((num1 + num2 + num3) / 3 >= 50) {
    console.log(true)
}

else {
    console.log(false)
}




/*
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH
Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH
Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH
Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH
*/

let num1 = Math.floor(Math.random() * 3) + 1
let num2 = Math.floor(Math.random() * 3) + 1
let num3 = Math.floor(Math.random() * 3) + 1

console.log("Your first number is = " + num1)
console.log("Your second number is = " + num2)
console.log("Your third number is = " + num3)


if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("DOUBLE MATCH")
}
else if (num1 === num2 === num3) {
    console.log("TRIPLE MATCH")
}
else {
    console.log("NO MATCH")
}


/*
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/

function hasA(characters) {

    return (characters.includes('a') || characters.includes('A'))
}

console.log(hasA("Tech"))
console.log(hasA("Global"))




/*
Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"
*/




function doubleOrTripleWord(str) {
    if ( str.length % 2 === 0)
    return str + str + str
else 
return str + str
}
     




console.log(doubleOrTripleWord("Tech"))




/*
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""
*/

function firstWord(str){
    if (str.includes(" "))
    return str.slice(0, str.indexOf(" "))

    else 
    return str

}

console.log(firstWord("Hello Moto"))
console.log(firstWord("     "))



/*
Requirement:
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""
*/

function lastWord(str){
    if (str.includes(" "))
    return str.slice(str.lastIndexOf(' ')+1)
else 
return str
}


console.log(lastWord("Hello World"))



/*
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""
*/

function firstlastWord(str){
    if (str.includes(' '))
   return str.slice(0, str.includes(' ')) + str.slice(str.lastIndexOf(' ')+1)
else 
return str

}


console.log(firstlastWord("I love JavaScript"))





/*
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/

function startVowel(str){
   
return "aeiouAEIOU".includes(str[0])
}

console.log(startVowel("Apple"));


/*
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.
Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/


/*
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.
Examples:
swapFirstLastWord("Hello World")  -> "World 
Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like 
I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo 
foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""

*/ 


 const swapFirstLastWord(str){
if (str.includes(' '))
let firstName = str.slice(0, str.indexOf(' '))


}

// why there was a syntax error when i put function instead of const and what is the difference between them 