export const count: number = 918;
const myName: string = 'liminghao'
// null, undefined, boolean, void, symbol

// 最普通的对象类型  
const human: {
    name: string,
    age: number
} = {
    name: 'Ash',
    age: 18
}

// 数组类型
const humans: string[] = ['张三','李四','王五']

// 类类型
class Person{}
const zhangsan : Person = new Person()

// 函数类型
const meet : () => string = ()=> {
    return '张三'
}

// 对象类型 数组类型 类类型 函数类型
