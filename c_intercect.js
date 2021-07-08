'use strict'

const A = [1, 2, 3, 4]
const B = [3, 4, 5, 6, 7]
console.log(GetIntersection(A, B))

function GetIntersection(conjuntoA, conjuntoB) {
    const inter = [];
    for (let index = 0; index < conjuntoA.length; index++) {
        for (let position = 0; position < conjuntoB.length; position++) {
            if (conjuntoA[index] === conjuntoB[position]) {
                inter.push(conjuntoA[index])
            }
        }
    }
    return inter;
}