/*
Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}
*/

let num1 = Math.floor(Math.random() * 51 );

let num2 = num1 * 5;

console.log("The random number * 5 = " + num2);

/*
Requirement:
Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/



let num1 = Math.floor(Math.random() * 10 ) + 1;
let num2 = Math.floor(Math.random() * 10 ) + 1;


console.log(`${num1}  ${num2}`);
console.log("Min number = " + Math.min(num1, num2));
console.log("Max number = " + Math.max(num1, num2));
console.log(`Difference =  ${Math.abs(num1-num2)}`);


/*
Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}
*/



let num1 = Math.floor(Math.random() * 51) + 50;

let num2 = num1 % 10;

console.log(num1);
console.log("The random number % 10 = " + num2);


/*
Requirement:
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8

Expected result:
59
*/

let num1 = Math.floor(Math.random() * 10 ) + 1;
let num2= Math.floor(Math.random() * 10 ) + 1;
let num3 = Math.floor(Math.random() * 10 ) + 1;
let num4 = Math.floor(Math.random() * 10 ) + 1;
let num5 = Math.floor(Math.random() * 10 ) + 1;

let num11 = num1 * 5;
let num22 = num2 * 4;
let num33 = num3 * 3;
let num44 = num4 * 2;
let num55 = num5 * 1;

let result = num11 + num22 + num33 + num44 + num55;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

console.log(result);

/*
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/

let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 26;
let num3 = Math.floor(Math.random() * 25) + 51;
let num4 = Math.floor(Math.random() * 25) + 76;

let numMax = Math.max(num1, num2, num3, num4);
let numMin = Math.min(num1, num2, num3, num4);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log(`Difference of max and min = ${numMax - numMin}`);
console.log(`Difference of second and third = ${num3 - num2}`);
console.log(`Avarage of all ${(num1 + num2 + num3 + num4) / 4}`)
