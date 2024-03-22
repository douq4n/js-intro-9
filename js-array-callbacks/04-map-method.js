const sentences = ['Good morning', 'I like array', 'It is Sunday']

// wach sentences first word ----['Good', 'I', 'It']

let newarr = [];

for(const first of sentences){
    newarr.push(first.split(' ')[0])
}
console.log(newarr);

const newar = sentences.map((sent) => sent.split(' ')[0])
 console.log(newar)


 // output last words

 const newarr1 = sentences.map((word) =>  word.slice(word.lastIndexOf(' ') + 1))
 console.log(newarr1);

 const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50]
 // create a new array that stores given salaries with 2 decimals 

 const newarr2 = salaries.map( function (salary){
     return parseFloat(salary.toFixed(2))
 })

 console.log(newarr2)