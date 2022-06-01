// class Person {
//     public readonly _name: string
//     constructor(name: string) {
//         this._name = name;
//     }
// }

// const person = new Person('LiMinghao')
// // person._name = 'Guoyushu'
// console.log(person._name);

abstract class Girl {
    abstract skill(): any;
}

class Waiter extends Girl{
    skill() {
        console.log('11');
        
    }
}

class BaseTeacher extends Girl{
    skill() {
        console.log('22');
        
    }
}

class seniorTeacher extends Girl {
    skill() {
        console.log('33');
        
    }
}

