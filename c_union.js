'use strict'

let A = [1, 2, 3]
let B = [1, 2, 4, 5]
console.log(GetUnion(A, B))

function GetUnion(conjuntoA, conjuntoB) {
    let cUnion = conjuntoA;
    for (let index = 0; index < conjuntoB.length; index++) {
        if (!cUnion.includes(conjuntoB[index]))
            cUnion.push(conjuntoB[index])
    }
    return cUnion;
}