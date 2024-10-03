const pessoas = ["Igor", "Pedro", "Carlos", "Carla", "Maria"]

console.log(pessoas)
console.log(pessoas[0]) // Igor
console.log(pessoas[1]) // Pedro
console.log(pessoas[2]) // Carlos
console.log(pessoas[3]) // Carla
console.log(pessoas[4]) // Maria
console.log(pessoas[50]) // undefine => Não existe

const test = ["Test", 10, true, "Ola", null]
console.log(test)

console.log(pessoas.length)

pessoas.push("Mario")
console.log(pessoas)

pessoas.unshift("Bowser")
console.log(pessoas)

pessoas.pop()
console.log(pessoas)

pessoas.shift()
console.log(pessoas)

const notas = [10, 5]
// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4

const calcMediaArr = (notas) => {
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i] // soma = soma + notas[i]
    }

    return soma / notas.length
}

console.log(calcMediaArr([10, 1, 2]))


const nums = [-10, 2, 100, -1, 40, -2, 0]

let qtdNumsNegativos = 0
let soma = 0
for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num < 0) {
        qtdNumsNegativos++
    } else {
        soma += num
    }
}

console.log("Soma dos numeros positivos é:", soma)
console.log("qtd dos numeros negativos é:", qtdNumsNegativos)

const nums2 = [10, 34, 78, 3, 7, 10, 2, 90, 9, 0]

const n = 9
let pos = -1
for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] === n) pos = i
}
console.log(pos)

const findIndex = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i
    }
    return -1
}




console.log(findIndex(nums2, 100))

const ehImpar = (value) => value % 2 !== 0
const pos2 = nums2.findIndex(ehImpar)
console.log(pos2)

const findIndex2 = (arr, ehOValorEsperado) => {
    for (let i = 0; i < arr.length; i++) {
        if (ehOValorEsperado(arr[i])) return i
    }
    return -1
}

console.log(findIndex2(nums2, ehImpar))
