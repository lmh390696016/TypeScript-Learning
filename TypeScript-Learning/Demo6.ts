const numberArr: number[] = [1, 2, 3]

const stringArr: string[] = ['a', 'b', 'c']

const undefinedArr: undefined[] = [undefined]

const arr: (number | string)[] = [1, 'string', 2]

// type alias 类型别名
type Lady = { name: string, age: number }
class Madam {
    name: string;
    age: number;
}

const Persons: Madam[] = [
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 28
    },
    {
        name: '王五',
        age: 123
    },
]

