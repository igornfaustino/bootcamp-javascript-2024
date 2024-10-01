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

const soma2 = function (a, b) {
    return a + b
}

const subtracao2 = function (a, b) {
    return a - b
}

const multiplicacao2 = function (a, b) {
    return a * b
}

const divisao2 = function (a, b) {
    return a / b
}

function teste2() {
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
    console.log("Teste")
}

teste2()


function calcMedia2(n1, n2) {
    const mediaFunc = (n1 + n2) / 2
    let x = 2
    console.log(x)
    return mediaFunc
}

const mediaFunc = calcMedia2(10, 5)
console.log(mediaFunc)

// f(x) = x + 2
// f(2) = 2 + 2 => 4
// f(8) = 8 + 2 => 10


console.log(parseInt(2.3))

const funcSemNome = function () {
    console.log("Minha função sem nome")
}

funcSemNome()

function math(a, b, op) {
    return op(a, b)
}

function add(a, b) {
    return a + b
}
console.log(math(3, 2, function (a, b) {
    console.log(a, b)
}))

const arrowFunc = () => {
    console.log("Arrow function")
}

arrowFunc()

console.log(math(3, 2, (a, b) => {
    return a + b
}))

const pow = (x) => x ** 2
/**
 * const pow = (x) => {
 *      return x ** 2
 * }
 */


console.log(pow(9))

const f = (x) => x + 2

console.log(f(8))

console.log(math(3, 2, (a, b) => a + b))


const soma3 = (a, b) => a + b
const sub3 = (a, b) => a - b
const mult3 = (a, b) => a * b
const div3 = (a, b) => a / b

console.log(soma3(10, 5))
console.log(sub3(10, 5))
console.log(mult3(10, 5))
console.log(div3(10, 5))