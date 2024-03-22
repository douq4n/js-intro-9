const names = ['John', 'Jane', 'Max', 'April'];

//1st way

const printName  = function (x){
    console.log(x)
}

names.forEach(printName)


//2nd way

names.forEach(function (x){
    console.log(x);
});

//3rd way

names.forEach(name => console.log(name))

//Output first letter of each name

for(const name of names){
    console.log(name[0]);
}

names.forEach(name => console.log(name[0]))

// Print each name uppercase

names.forEach( name => console.log(name.toUpperCase()))

names.forEach( name =>  console.log(name.toUpperCase()))
   

    
// Output each name starts with 'j'

names.forEach((name) =>{
    if(name.toLowerCase().startsWith('j')) console.log(name)
        
})

// Count how many names have 4 letters

let counter = 0;

names.forEach((name) => {
    if(name.length === 4) counter++
})

console.log(counter);

const numbers = [5, 10, 3, 0, -2];

//Print each number

//1st way

for (const number of numbers){
    console.log(number)
}

//2nd way

numbers.forEach( number => {
    console.log(number)
})

// Print true for Even numbers and false for Odd numbers---> false,true,false,true,true


numbers.forEach( number =>  console.log(number % 2 === 0))

//Create a new array that multiplies each of numbers element by 3

let multiplied3 = [];

numbers.forEach( number => multiplied3.push(number * 3));
    
console.log(multiplied3);

for(const number of numbers){
    multiplied3.push(number * 3)
}
console.log(multiplied3);

//Create a new array that stores even numbers

let evenNumbers = [];

numbers.forEach( number => {
    if (number % 2 === 0 ) evenNumbers.push(number)
})

console.log(evenNumbers);


   





