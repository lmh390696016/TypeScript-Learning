// const Static = {
//     A: 0,
//     B: 1,
//     C: 2
// }


enum Static {
    A, B, C
}

function getServe(status: any) {
    if (status === Static.A) {
        return 'A'
    } else if (status === Static.B) {
        return 'B'
    } else if (status === Static.C) {
        return 'C'
    }
}

const result = getServe(Static.B)
console.log(`结果是` + result);


