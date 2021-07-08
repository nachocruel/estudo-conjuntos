'user strict'

let A = [1, 2, 3]
let B = [4, 5, 6, 7]

console.log(GetCartesiano(A, B))

function GetCartesiano(A, B) {
    let cCart = [];
    for (let index = 0; index < A.length; index++) {
        for (let position = 0; position < B.length; position++) {
            cCart.push('(' + (A[index] + ',' + B[position]) + ')')
        }
    }
    return cCart;
}