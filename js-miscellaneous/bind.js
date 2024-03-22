this; //{}


function getInfo (fullname, age){
    console.log(`${this.fullname} is ${this.age} years old.`);


}

const person = {
    fullname: 'dogukan',
    age: 25,
};

getInfo.call(person);