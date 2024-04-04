/*
Requirement:
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("")  -> false
hasLowerCase("JAVASCRIPT")  -> false
hasLowerCase("hello")  -> true
hasLowerCase("125$")  -> false
hasLowerCase("   a   ")  -> true
*/

const hasLowerCase = (str) => {
    if ( str.split('').filter(n => n >= 'a' && n <= 'z').length > 0) return true
    else false
 }
 
 console.log(hasLowerCase("hello"))
 
 /*
 Requirement:
 Write a function named noZero() which takes an array of numbers as argument 
 and returns the array back with all zeros removed.
 Examples:
 noZero([1])  -> [1]
 noZero( [1, 1, 10] )  -> [1, 1, 10] 
 noZero([0, 1, 10])  -> [1, 10]
 noZero([0, 0, 0])  -> []
 noZero([10, 100 0]) -> [10, 100]
 */
 
 const noZero = (arr) => {
 return arr.filter(n => !(n === 0))
 
 }
 
 console.log(noZero([10, 100, 0]))
 
 
 
 /*
 Requirement:
 Write a function named numberAndSquare() which takes an array of numbers 
 as argument and returns a multidimensional array with all numbers squared. 
 Examples:
 numberAndSquare([1, 2, 3])  -> [[1, 1], [2, 4], [3, 9]]
 numberAndSquare([0, 3, -6])  -> [[0, 0], [3, 9], [-6, 36]]
 numberAndSquare([1, 4])  -> [[1,1], [4, 16]]
 numberAndSquare([0, 0, 0])  -> [[0, 0], [0, 0], [0, 0]]
 numberAndSquare([0, 1, -10])  -> [[0, 0], [1, 1], [-10, 100]]
 */
 
 const numberAndSquare = (arr) => {
    
    return arr.map(x => [x, x])
    
 }
 
 console.log(numberAndSquare([0, 1, -10]))
 
 /*
 equirement:
 Write a function named containsValue() which takes a string array and a 
 string as arguments and returns a boolean value. Search the string variable 
 inside of the array and return true if it exists in the array. If it doesn’t exist, 
 return false.  
 NOTE: Assume that array size is at least 1. 
 NOTE: The method is case-sensitive.
 Examples:
 containsValue(["abc", "foo", "javascript"], "hello")  -> false
 containsValue(["abc", "def", "123"], "Abc")  -> false
 containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true
 */
 const containsValue = (arr, str) => {
   
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === str){
          return true;
       }
      
   }
   return false
    
 }
 
 console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"))
 
 
 
 //i have a little confuse here
 /*
 Requirement:
 Write a function named reverseSentence() which takes a string as argument 
 and returns the words in reverse order.  If there is no enough words reverse, 
 return "There is not enough words!".
 Examples:
 reverseSentence("Hello")  -> "There is not enough words!"
 reverseSentence("Javascript is fun")  -> "Fun is javascript"
 reverseSentence("This is a sentence")  -> "Sentence a is this"
 */
 
 
 const reverseSentence = (str) => {
    
    if (str.includes(' ')){
       arr = str.split(' ');
       newarr = [];
       for(let i = arr.length - 1; i >= 0; i--){
          newarr.push(arr[i])
 
       }
       return newarr.join(' ')[0].toUpperCase() + newarr.join(' ').slice(1);}
       else  
       return console.log("There is not enough words!")
    } 
  
 
 console.log(reverseSentence("Hello"))
 console.log(reverseSentence("This is a sentence"))
 console.log(reverseSentence("Javascript is fun"))
 
 
 /*
 Requirement:
 Write a function named removeStringSpecialsDigits() which takes a string 
 as argument and return a string without the special characters or digits.
 Examples:
 removeStringSpecialsDigits("123Javascript #$%is fun")  -> "Javascript is 
 fun" 
 removeStringSpecialsDigits("Cypress")  -> "Cypress"
 removeStringSpecialsDigits("Automation123#$%")  -> "Automation"
 */
 
 const removeStringSpecialsDigits = (str) => {
  
    return str.split('').filter( x => x >= "a" && x <= "z" || x >= "A" && x <= "Z" ).join('')
 }
 
 
 console.log(removeStringSpecialsDigits("Automation123#$%"))
 console.log(removeStringSpecialsDigits("123Javascript #$%is fun"))
 console.log(removeStringSpecialsDigits("Cypress"))
 
 /*
 equirement:
 Write a function named removeArraySpecialsDigits() which takes a string 
 array as argument and return back without the special characters or digits.
 Examples:
 removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> 
 ["Javascript", "is", "fun"]
 removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", 
 ""]
 removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", 
 "tool"]
 */
 
 const removeArraySpecialsDigits = (arr) => {
       str1 = arr.join(' ')
        str2 = str1.replace(/[^ \w\s]/gi, "")
         str3 = str2.replace(/[1234567890]/g, "")
         return str3.split(' ')
 
    //  str1.split('').filter(x => x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z').join("")
 }
 
 console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]))
 console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]))
 
 
 /*
 Requirement:
 Write a function named getCommons() which takes two string arrays as 
 arguments and returns all the common words.
 Examples:
 getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 
 -> []
 getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 
 -> ["Javascript"]
 getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
 */
 
 
 const getCommons = (arr1, arr2) => {
    
    for(let i = 0; i <= arr1.length - 1; i++){
       for(let y = 0; y <= arr2.length -1; y++){
          if( arr1[i] === arr2[y]) {
       j = arr1[i]
           
         } 
       
       }
    
    }
   return j.split(' ')
 }
 
 console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ))
 
 /*
 Requirement:
 Write a function named noXInVariables() which takes an array as argument 
 and return an array that all the x or X removed from the elements. 
 NOTE: If the element is existing of x or X letters only, then completely remove 
 the element.
 Examples:
 noXInVariables(["abc", 123, "#$%"])  -> ["abc", 123, "#$%"]
 noXInVariables(["xyz", 123, "#$%"])  -> ["yz", 123, "#$%"]
 noXInVariables(["x", 123, "#$%"])  -> [123, "#$%"]
 noXInVariables(["xyXyxy", "Xx", "ABC"])  -> ["yyy", "ABC"]
 */
 
 const noXInVariables = (arr) => { 
   str =  arr.join(" ")
  str2 = str.replace(/[xX]/g, "")
   arr = str2.split(" ")
 return  arr.filter(x => x.length > 0)
 
 }
 
 console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))