for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// i++ -> i = i + 1 -> i += 1

let soma = 0
for (let i = 1; i <= 10; i++) {
    soma = soma + i // soma += i
}
console.log(soma)

const num = 9
for (let i = 0; i < 11; i++) {
    console.log(`${num} x ${i} = ${i * num}`)
}

for (let i = 100; i < 201; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

for (let i = 101; i < 201; i += 2) {
    console.log(i)
}

for (let i = 1; i < 501; i++) {
    if ((i % 2 !== 0) && (i % 3 === 0)) {
        console.log(i)
    }
}

for (let i = 1; i < 501; i += 2) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

for (let i = 0; i < 11; i++) { // i = i + 1
    console.log(i)
}

let x = 0;
while (x < 11) {
    console.log(x)
    x++
}

let num1 = 1
while (num1 < 1000) {
    num1 = num1 * 2 // num *= 2
    console.log(num1)
}

let num2 = 1
while (num2 < 1000) {
    num2 = num2 + num2 // num2 += num2
    console.log(num2)
}

let y = 10
do {
    console.log("entrei")
} while (y > 100)


let resultado
const valor = 4
let qtdTentativas = 0

do {
    resultado = Math.floor(Math.random() * 6) + 1
    qtdTentativas++
    console.log("Resultado:", resultado)
} while (resultado !== valor)

console.log(`Levou ${qtdTentativas} para tirar o numero ${valor}`)


qtdTentativas = 1
resultado = Math.floor(Math.random() * 6) + 1
while (resultado !== valor) {
    resultado = Math.floor(Math.random() * 6) + 1
    qtdTentativas++
    console.log("Resultado:", resultado)
}
console.log(`Levou ${qtdTentativas} para tirar o numero ${valor}`)

for (let i = 0; i < 10; i++) {
    if (i === 5) break
}

let fat = 1
for (let i = 1; i <= 5; i++) {
    fat = fat * i
}

console.log(fat)

const size = 20
for (let i = 0; i < size; i++) {
    let linha = '*'
    for (j = 0; j < i; j++) {
        linha = linha + ' *'
    }
    console.log(linha)
}

let num3 = 1
while (num3 < 10) {
    console.log(num3, "Teste")
    num3++ // num3 += 1 -> num3 = num3 + 1
}

let num4 = 2
do {
    console.log("Teste Teste")
    num4++
} while (num4 < 5)