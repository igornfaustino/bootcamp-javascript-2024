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