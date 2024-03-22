console.log(this) //{}-------object


const person ={
    fname: 'dogukan',
    lname: 'kizildag',
    fullname: function (){
        console.log(this.fname, this.lname)
    }
}
person.fullname();



const person1 ={
    fname: 'Julia',
    lname: 'Roberts',
    
}
person.fullname.call(person1);



function sayHi(name){
    console.log('Hello', name);
}

sayHi('Hicran');

sayHi.call(person1,person1.fname) 
sayHi.apply(person, [person.fname]) // when you use apply after 'this' you should use array


function info (fullname, dateOfYear, adress){
const age = new Date().getFullYear() - dateOfYear
return `${fullname} is ${age} years old and lives at ${adress}.`
}

console.log(info('Dogukan Kizildag', 1999,'Chicago'));


