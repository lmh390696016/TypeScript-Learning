class Person {
    constructor(public name: string) {
        
    }
}

class Teacher extends Person {
    constructor(public age: number) {
        super('Guo')
    }
}

const teacher = new Teacher(18)
console.log(teacher.name);
console.log(teacher.age);

