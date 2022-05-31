interface Person {
    name: string;
    age: number;
    height: number;
    waistline?: number
}

// 类型别名 与接口的不同， 类型别名可以直接给赋以一个值
// type Person1 = string

const person = {
    name: '王五',
    age: 18,
    height: 189,
    waistline: 40
}

const screenResume = (person: Person) => {
    person.age < 24 && person.height >= 170 && console.log(person.name + '进入面试');
    person.age >= 24 || person.height < 170 && console.log(person.name + '你被淘汰');
}

const getResume = (person: Person) => {
    console.log(person.name + '年龄是' + person.age);
    console.log(person.name + '身高' + person.height);
    person.waistline && console.log(person.name + '腰围是' + person.waistline);
    
}


screenResume(person)
getResume(person)