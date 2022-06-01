// private protected public

class Person {
    // protected
    // public name: string;
    // constructor() {
    //     this.name = ''
    // }
    public name: string;
    constructor() {
        this.name = ''
    }

    public sayHello() {
        console.log(this.name + 'say Hello');
        
    }
}

class Teacher extends Person() {
    public sayBye() {
        this.name
    }
}

const person = new Person();
person.name = 'person'
person.sayHello();
console.log(person.name); 
