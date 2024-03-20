/* Write a function named as firstLast() which takes a string word as an argument and returns the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.*/


function firstLast(str){
    return str.at(0) + str.at(-1)


}

console.log(firstLast("Techglobsl"))