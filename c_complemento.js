'use strict'

let U = [1, 2, 3, 4, 7]
let A = [2, 3, 4, 6]
console.log(GetComplento(A, U));

function GetComplento(conjuntoA, conjuntoU) {
    let compl = [];
    for (let i = 0; i < conjuntoU.length; i++) {
        if (!conjuntoA.includes(conjuntoU[i]))
            compl.push(conjuntoU[i])
    }
    return compl;
}