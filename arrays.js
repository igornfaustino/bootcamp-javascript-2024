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