/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 			-> "APPLE"
"JavaScript is not a scripting programming language"  	-> "JavaScript”
"I don't like books" 				-> "I like books"
*/

let str = "I like apples and oranges";

let str1 = str.slice(7,13).toUpperCase();

console.log(str1);




let str = "JavaScript is not a scripting programming language";

console.log(str.slice(0, 10));


let str = "I don't like books"

console.log(str.replace(" don't ", " "))




/*
Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
	-if it has any vowel, then print true
	-Else, print false
	Vowels = a, e, i, u, o, A, E, I, U, O

    Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

*/


let str1 = "TechGlobal";
let str2 = str1.toLowerCase();

console.log(`The length is = ${str1.length}`);
console.log(`The first char is = ${str1.at(0)}`);
console.log(`The last char is = ${str1.at(-1)}`);
console.log(str2.includes('a') || str2.includes('e') || str2.includes('i') || str2.includes('o') || str2.includes('u'));

/*
Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 
*/

let str = "Honda";

let midChar = (str.length - 1) / 2;

console.log(str.at(midChar));
console.log(str[midChar])

/*
Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String
*/

let str = "TechGlobal"
let midChar1 = (str.length / 2) - 1;
let midChar2 = (str.length / 2) + 1;
console.log(str.slice(midChar1, midChar2));

/*
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters
*/



let str = "Dogukan";
let first2 = str.slice(0,2);
let last2 = str.slice(-2);
let rest = str.slice(2, -2);



console.log("The first 2 characters are = " + first2);
console.log("The last 2 characters are = " + last2);
console.log("The other characters are = " + rest);



/*
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print false.
*/

let str = "34Istanbul34";
let first2 = str.slice(0, 2);
let last2 = str.slice(-2);


console.log(first2 == last2);

/*
Write a program that gets rid of first and last characters of given two String values.
Then, add these two String values to each other and print the result
*/

let str1 = "Istanbul";
let str2 = "Sancaktepe";

let newStr1 = str1.slice(1, -1);
let newStr2 = str2.slice(1, -1);

console.log(newStr1 + newStr2);

/*
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false
*/

let str = "xbluex";

console.log(str.startsWith("xx") && str.endsWith("xx"));

/*
Write a program that swaps the first and last word of a given sentence as a String.
*/

let str = "I like pineapple";
let firststr = str.slice(0, str.indexOf(" "));
let laststr = str.slice(str.lastIndexOf(" ") + 1);
let rest = str.slice(str.indexOf(" "), str.lastIndexOf(" ") + 1,)

console.log(firststr);
console.log(laststr);
console.log(rest);

console.log(laststr + rest + firststr);

/*
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word
*/

let str = "JavaScript is nice to learn";
console.log(str.split(' ').length);


