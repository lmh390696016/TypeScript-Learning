// type annotation 类型注解

let count : number;
count = 123;

// type inference 类型推断
let countInference = 123

// const one = 1;
// const two = 2;
// const three = one + two

function getTotal(one: number, two: number) {
    return one + two
}
const total = getTotal(1,2)

const Person = {
    name: '张三',
    age: 18
}

// 总结：如果TS能够自动分析变量类型，就不需要添加注解，反之则需要使用类型注解