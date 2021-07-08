'use strict'

let A = [0, 1, 2, 3, 4]

console.log(getPotencia(A))



function getPotencia(conjunto) {
    let pot = []
    for (let index = 0; index < conjunto.length; index++) {
        let cut = 1;
        if (index === 0)
            cut = 0;
        else
            cut = index + 1;

        for (let count = cut; count <= conjunto.length; count++)
            pot.push(conjunto.slice(index, count));
    }
    return pot;
}