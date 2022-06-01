// class Person {
//     constructor(private _age: number) { }
//     get age() {
//         return this._age - 10
//     }
//     set age(age: number) {
//         this._age = age + 3
//     }
// }

// const Li = new Person(20)
// Li.age = 35
// console.log(Li.age);

class Person {
    static sayHello() {
        return 'Hello!'
    }
}

// const person = new Person();
console.log(Person.sayHello());


