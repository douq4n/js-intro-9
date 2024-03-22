const numbers = [0, 10, -4, 5, 2, -3];

// find first positive

console.log(numbers.find(number => number > 0))
console.log(numbers.find(function (number){
    return number > 0
}))

console.log(numbers.find( number => number > 50));

//find()
//findImdex()
//findLast()
//findLastIndex()


const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA']

// FIND THE FIRST ELEEMNT THAT HAS 4 LETTERS


console.log(cities.find(city => city.length === 4)) //rome
console.log(cities.findLast(city => city.length === 6)) //brugge
console.log(cities.findIndex(city => city.includes('LA'))) // 4 
console.log(cities.find(city => city.toLowerCase().includes('i'))) // kyiv