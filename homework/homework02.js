/*
Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";
Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25
*/

let str1 = "5";
let str2 = "2";

let number1 = Number(str1);
let number2 = Number(str2);


console.log(`The sum of 5 and 2 is = ${number1 + number2}`);
console.log(`The product of 5 and 2 is = ${number1 * number2}`);
console.log(`The division of 5 and 2 is = ${number1 / number2}`);
console.log(`The substraction of 5 and 2 is = ${number1 - number2}`);
console.log(`The remainder of 5 and 2 is = ${number1 % number2}`);
console.log(`The exponentiation of 5 and 2 is = ${number1 ** number2}`);


/*
Requirement:
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.
let s1 = "200", s2 = "-50";
Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250
*/

let s1 = "200";
let s2 = "-50";

let number1 = Number(s1);
let number2 = Number(s2);

console.log(`The greatest value is = ${Math.max(number1,number2)}`);
console.log(`The smallest value is = ${Math.min(number1,number2)}`);
console.log(`The avarage value is = ${(number1+number2)/2}`);
console.log(`The absolute difference is = ${Math.abs(number2)+number1}`);


/*
Requirement:
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the absolute difference of these numbers.
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22
*/


let num1 = Math.floor(Math.random()*50)+1
let num2 = Math.floor(Math.random()*50)+1
console.log(`First number is = ${num1}`);
console.log(`Second number is = ${num2}`);

console.log(`The absolute difference betweeen numbers is = ${Math.abs(num1-num2)}`);



/*
Requirement:
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the max and min of these numbers.
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/

let num1 = Math.ceil(Math.random() * 50);
let num2 = Math.ceil(Math.random() * 50);
let num3 = Math.ceil(Math.random() * 50);
let num4 = Math.ceil(Math.random() * 50);
let num5 = Math.ceil(Math.random() * 50);

console.log((`The max value is = ${Math.max(num1, num2, num3, num4, num5)}
The min value is = ${Math.min(num1, num2, num3, num4, num5)}`));


/*
Requirement:
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/

let num1 = (Math.floor(Math.random() * 51)+50);
let num2 = (Math.floor(Math.random() * 51)+50);
let num3 = (Math.floor(Math.random() * 51)+50);

console.log(`The number 1 is = ${num1}
The number 2 is = ${num2}
The number 3 is ${num3}
The sum of numbers is = ${num1+num2+num3}`);


/*
Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25.
*/


let n1 = Math.floor(Math.random() * 100+1);
let n2 = Math.floor(Math.random() * 100+1);
let n3 = Math.floor(Math.random() * 100+1);
 
console.log(`${n1} ${n2} ${n3}`);
console.log(`${n1 > 25 && n2 > 25 && n3 > 25}`);

/*
Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = "David";

console.log(`The length of the name is = ${name.length}
The first character in the name is = ${name[0]}
The last character in the name is = ${name.at(-1)}
The first 3 characters in the name are = ${name.slice(0,3)}
The last 3 chacacters in the name is = ${name.slice(2,5)}
 `);