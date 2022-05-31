 function getTotal(one: number, two: number) : number{
     return one + two 
 }
//  export const total = getTotal(1,2)


// 返回值是void表示返回值的类型为无，这时返回任何类型都会报错
function sayHello() :void {
    console.log('Hello World');
}
sayHello();

// never表示永远无法执行到或者执行完
function errorFunction() :never{
    throw new Error()
    console.log('Hello World');
}

function forNever() :never {
    while(true) {}
    console.log('Hello World');
    
}


function add({one, two}: {one:number,two:number}) {
    return one + two
}

export const total = add({one:1,two:2})

function getNumber({one} : {one: number}){
    return one
}

export const one = getNumber({one:1})