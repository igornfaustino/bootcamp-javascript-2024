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
    console.log("Beber cerveja");
} else {
    console.log("Beber refrigerante")
}

if (idade2 >= 18) console.log("Beber cerveja");
else console.log("Agua")

const num = 10

if (num >= 0) {
    console.log("Numero positivo")
}

const idade3 = 6

if (idade3 >= 18) {
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}

const idade4 = 75

if (idade4 <= 12) {
    console.log("Criança")
}

if (idade4 > 12 && idade4 <= 17) {
    console.log("Adolescente")
}

if (idade4 > 17 && idade4 <= 59) {
    console.log("Adulto")
}

if (idade4 >= 60) {
    console.log("Idoso")
}

// else if


const idade5 = 10

if (idade5 <= 12) {
    console.log("Criança")
} else if (idade5 <= 17) {
    console.log("Adolescente")
} else if (idade5 <= 59) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}

if (idade5 <= 12) {
    console.log("Criança")
} else {
    if (idade5 <= 17) {
        console.log("Adolescente")
    } else {
        if (idade5 <= 59) {
            console.log("Adulto")
        } else {
            console.log("Idoso")
        }
    }
}

const num1 = 15

if ((num1 >= 10 && num1 <= 20) || (num1 >= 40 && num1 <= 50)) {
    console.log(true)
} else {
    console.log(false)
}

const num2 = 998

if ((num2 % 2) === 0) {
    console.log("é par")
} else {
    console.log("é impar")
}

const nota = 2

if (nota > 7) {
    console.log("Aprovado")
} else if (nota > 4) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

const dia = 1

switch (dia) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
    case 3:
        console.log("Terça")
        break
    default:
        console.log("Sei lá")
        break
}

const mes = 90

switch (mes) {
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Maio")
        break
    case 6:
        console.log("Junho")
        break
    case 7:
        console.log("Julho")
        break
    case 8:
        console.log("Agosto")
        break
    case 9:
        console.log("Setembro")
        break
    case 10:
        console.log("Outubro")
        break
    case 11:
        console.log("Novembro")
        break
    case 12:
        console.log("Dezembro")
        break
    default:
        console.log("Sei lá")
}

const nota1 = "F"

switch (nota1) {
    case 'A':
        console.log("Excelente")
        break
    case 'B':
        console.log("Bom")
        break
    case 'C':
        console.log("Razoável")
        break
    case 'D':
        console.log("Insuficiente")
        break
    case 'F':
        console.log("Reprovado")
        break
}

if (10 > 1) {
    console.log("Caso verdade")
} else if (3 < 10) {
    console.log("Se falso")
} else {

}

const valor = 10;
const moeda = 'Libra'
let result;

switch (moeda) {
    case 'Dolar':
        result = (valor * 2)
        break
    case 'Euro':
        result = (valor * 2)
        break
    case 'Real':
        result = (valor * 1.2)
        break
    case 'Libra':
        result = (valor * 2.3)
        break
}

console.log(result)



const code = 15

switch (code) {
    case 1:
    case 2:
    case 3:
        console.log("Ligar/desligar")
        break
    case 10:
        console.log("Aumentar volume")
        break
    case 11:
        console.log("Diminuir volume")
        break
    case 20:
    case 21:
    case 22:
        console.log("Avançar canal")
        break
    case 15:
    case 30:
        console.log("Voltar canal")
        break
}