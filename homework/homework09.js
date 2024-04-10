/*
Requirement:
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself. 
Examples:
fizzBuzz1(0)  -> "FizzBuzz"
fizzBuzz1(1)  -> 1
fizzBuzz1(3)  -> "Fizz"
fizzBuzz1(5)  -> "Buzz"
fizzBuzz1(30)  -> "FizzBuzz"
fizzBuzz1(10)  -> "Buzz"
fizzBuzz1(15)  -> "FizzBuzz"
fizzBuzz1(-15)  -> "FizzBuzz"
*/


const fizzBuzz1 = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}

console.log(fizzBuzz1(-15))


/*
Requirement:
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3)  -> [ 1, 2, 'Fizz' ]
fizzBuzz2(5)  -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ] 
fizzBuzz2(15)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'. 
13, 14,  'FizzBuzz' ] 
fizzBuzz2(2)  -> [ 1, 2 ]
*/


const fizzBuzz2 = (number) => {
    emptyarray = [];
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) emptyarray.push("FizzBuzz")
        else if (i % 3 === 0) emptyarray.push("Buzz")
        else if (i % 5 === 0) emptyarray.push("Fizz")
        else emptyarray.push(i)



    }
    return emptyarray;
}


console.log(fizzBuzz2(15))


/*
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/

const findSumNumbers = (str) => {
    let num = "";
    return str.split('').reduce((sum, char) => {
        if (char >= "0" && char <= "9") {
            num += char;
        }
        else if (num !== "") {
            sum = parseInt(num);
            num = "";
        }
        return sum

    }, 0) + (num !== "" ? parseInt(num) : 0)

}


console.log(findSumNumbers("525"))


const findSumNumbers = (str) => {
    sum = 0
    numberStr = ""

    for (let i = 0; i < str.length; i++) {
        char = str[i];
        if (char >= "0" && char <= "9") {
            numberStr += char
        }
        else {
            if (numberStr !== "") {
                sum += parseInt(numberStr);
                numberStr = "";
            }
        }


    }
    if (numberStr !== '') {
        sum += parseInt(numberStr);
    }
    return sum
}


console.log(findSumNumbers("asdfghhgfdsdf"))



/*
Requirement:
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$")  -> 0
findBiggestNumber("a1b4c  6#")  -> 6
findBiggestNumber("ab110c045d")  -> 110
findBiggestNumber("525")  -> 525
findBiggestNumber("3 for 10 dollars")  -> 10
*/


const findBiggestNumber = (str) => {
    arr = [];
    maxstr = "";

    for (let i = 0; i < str.length; i++) {
        char = str[i]
        if (char >= "0" && char <= "9") {
            maxstr += char;
        }
        else {
            if (maxstr !== "") {
                arr.push(parseInt(maxstr))
                maxstr = "";
            }
        }
    }
    if (maxstr !== "") {

        arr.push(parseInt(maxstr))
    }
    if (arr.length === 0) return 0

    return arr.sort((a, b) => b - a)[0]
}



console.log(findBiggestNumber("345sdfbfdv67cvxvcsd11xcvc67xdgfdfg&^%$#%$"))


    /*
    Requirement:
    Write a function named countOccurrencesOfCharacters() which takes a 
    string argument and returns the count of repeated characters in the String. 
    NOTE: If given String is empty, then return empty String. 
    NOTE: It is case sensitive.
    Examples:
    countOccurrencesOfCharacters("")  -> ""
    countOccurrencesOfCharacters("abc")  -> "1a1b1c"
    countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
    countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a”
    countOccurrencesOfCharacters("www" ) -> "3w
    */

    ("aaAAa")
const countOccurrencesOfCharacters = (str) => {
    let finalStr = ""
    let sameStr = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            sameStr += str[i]
        }
        else {
            if (sameStr !== "") {
                finalStr += (sameStr.length + 1) + str[i]
                sameStr = ''
            }
            else {
                finalStr += 1 + str[i]
            }
        }


    }
    return finalStr
}

console.log(countOccurrencesOfCharacters("WWW"))

/*
Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3)  -> [0, 1, 1]
fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1)  -> [0]
fibonacciSeries1(2)  -> [0, 1
    */


   const fibonacciSeries1 = (num) => {
        if (num === 0) return [];
        if (num === 1) return [0];
        let arr = [0, 1];
        for (let i = 2; i < num; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr;
    }

console.log(fibonacciSeries1(8))


/*
Requirement:
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2)  -> 1
fibonacciSeries2(4)  -> 2
fibonacciSeries2(8)  -> 13
fibonacciSeries2(9)  -> 21
fibonacciSeries2(1)  -> 0
*/


const fibonacciSeries2 = (num) => {
    if (num === 0) return [];
    if (num === 1) return [0];
    let arr = [0, 1];
    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr.sort((a,b) => b-a)[0];
}

console.log(fibonacciSeries2(9))

/*
Requirement:
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
Examples:
findUniques([], [])  -> []
findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])  -> []
findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2]
*/

function findUniques(arr1, arr2) {
   
    const combinedArray = arr1.concat(arr2);
    
    
    const uniqueArray = [];
    

    combinedArray.forEach(item => {
       
        if (!uniqueArray.includes(item)) {
           
            uniqueArray.push(item);
        }
    });
    
    return uniqueArray;
}


console.log(findUniques([], []));             // Output: []
console.log(findUniques([], [1, 2, 3, 2]));   // Output: [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));  // Output: [1, 2, 3, 4, 5]
console.log(findUniques([8, 9], [9, 8, 9]));  // Output: [8, 9]
console.log(findUniques([-1, -2], [1, 2]));    // Output: [-1, -2, 1, 2]







/*
Requirement:
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1)  -> true
isPowerOf3(2)  -> false
isPowerOf3(3)  -> true
isPowerOf3(27)  -> true
isPowerOf3(100)  -> false
isPowerOf3(81)  -> true
isPowerOf3(9)  -> true
*/


const isPowerOf3 = (num) => {
    for(let i = 3; i < Infinity; i*=3){
        if (num === i) return true
   
    }
     return false
}

console.log(isPowerOf3(243))