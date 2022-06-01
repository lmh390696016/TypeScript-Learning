class Person {
    content = 'Hi';
    sayHello() {
        return this.content
    }
}

class Human extends Person {
    sayHello() {
        return super.sayHello() + '.你好！'
    }

    sayLove() {
        return 'I Love You';
    }
}

const goddess = new Human()
console.log(goddess.sayHello());
console.log(goddess.sayLove());


