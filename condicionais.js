const verdadeiro = true
const falso = false

console.log(verdadeiro)
console.log(falso, "\n")

const idade = 65
console.log(idade == 64) // true
console.log(idade == '65') // true
console.log(idade === '65') // false
console.log(idade === 65) // true

console.log(idade != 23) // true
console.log(idade != 65) // false
console.log(idade != '65') // false
console.log(idade !== 65) // false
console.log(idade !== '65') // true

console.log(idade < 10) // false
console.log(idade < 100) // true
console.log(idade > 100) // false
console.log(idade > 0) // true

console.log(idade <= 65) // true
console.log(idade <= 66) // true
console.log(idade <= 63) // false

console.log("idade >= 65:", idade >= 65) // true
console.log("idade >= 66:", idade >= 66) // false
console.log("idade >= 63:", idade >= 63) // true

console.log('15 > 10:', 15 > 10)
console.log('2 !== 20:', 2 !== 20)
console.log('1 >= 1:', 1 >= 1)

console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

const n1 = 1
console.log(n1 < 100 && n1 > 10)

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

const n2 = 10
console.log(n2 === 100 || n2 === 10)

console.log(!true) // false
console.log(!false) // true

const n3 = 51
console.log(!(n3 > 50)) // false
console.log(!(n3 === 51)) // false

let A = true
let B = false

console.log(A && B)
console.log(A || B)
console.log(!A)

const x = 10

console.log(x > 0 && x < 7)

const idade2 = 17

if (idade2 >= 18) {
    console.log("Beber cerveja")
} else {
    console.log("Beber refrigerante")
}