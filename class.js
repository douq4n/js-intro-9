class Cat {
    constructor  (name, color, age){
        this.name = name;
        this.color = color;
        this.age = age;

    }

    makeSound(){
        console.log("MEOW")
    }
    eat(){
        console.log('EAT')
    }
    
    sleep(){
        console.log("Sleep")
    }
}


const cat1 = new Cat ('Simba', "Orange", 1)
const cat2 = new Cat ('Lucy', "White", 2)
const cat3 = new Cat ('Oliver', "Brown", 3)

const cats = [cat1, cat2, cat3]

for(const cat of cats){
    console.log(cat);
    cat.makeSound();
    cat.eat();
    cat.sleep();
    console.log();
}