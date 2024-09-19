function helloWorld() {
    console.log("Ola mundo")
}

helloWorld()
helloWorld()

console.log("teste".toUpperCase())
console.log(parseInt(3.5))

function digaOiPara(nome) {
    console.log(`Ola ${nome}`)
}

let teste
console.log(teste)

digaOiPara("Igor")
digaOiPara()

function calcularArea(x, y) {
    console.log(x * y)
}

function areaRetangulo(x, y) {
    if (x && y) {
        calcularArea(x, y)
    }
}

areaRetangulo(2, 3)


function numeroParOuImpar(num) {
    if (num % 2 === 0) {
        console.log(num, "é par")
    } else {
        console.log(num, "é impar")
    }
}

numeroParOuImpar(10)
numeroParOuImpar(9)

function soma(a, b) {
    const result = a + b
    console.log("dentro da função:", result)
    return result
}

const resultado = soma(2, 3)
console.log("fora da função:", resultado)

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    return a / b
}

console.log(subtracao(5, 3))
console.log(multiplicacao(5, 3))
console.log(divisao(9, 3))

function maiorNumero(a, b) {
    if (a > b) return a
    else return b
}

function maiorNumero2(a, b) {
    if (a > b) return a
    return b
}

function maiorNumero3(a, b) {
    return (a > b) ? a : b
}

console.log(maiorNumero(100, 50))
console.log(maiorNumero2(100, 50))
console.log(maiorNumero3(100, 50))

function media(n1, n2, n3, tipo) {
    if (tipo === 'A') {
        return (n1 + n2 + n3) / 3
    } else if (tipo === 'P') {
        return (n1 * 5 + n2 * 3 + n3 * 2) / 10
    }
}

console.log(media(8, 10, 6, 'A'))
console.log(media(8, 10, 6, 'P'))
console.log(media(8, 10, 6, 'X'))
console.log(maiorNumero(media(6, 8, 10, 'A'), media(6, 8, 10, 'P')))

const mediaAritimetica = media(8, 10, 6, 'A')
const mediaPonderada = media(8, 10, 6, 'P')
const mediaFinal = maiorNumero(mediaAritimetica, mediaPonderada)
console.log(mediaFinal)


const calcMediaAritimetica = function (n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}
const calcMediaPonderada = function (n1, n2, n3) {
    return (n1 * 5 + n2 * 3 + n3 * 2) / 10
}

const calcMediaIgor = function (n1, n2, n3) {
    return 10
}

const calcMedia = function (n1, n2, n3, funcaoMedia) {
    return funcaoMedia(n1, n2, n3)
}

console.log(calcMedia(8, 10, 6, calcMediaAritimetica))
console.log(calcMedia(8, 10, 6, calcMediaPonderada))
console.log(calcMedia(0, 0, 0, calcMediaIgor))