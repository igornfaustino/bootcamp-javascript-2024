const pessoa = {
    nome: "Igor",
    idade: 26,
    profissao: "Programador",
    cpf: "111.111.111-11",
    contatos: [
        {
            nome: "Fulano",
            email: "fulano@email.com",
        },
        {
            nome: "Ciclano",
            email: "ciclano@email.com"
        },
        {
            nome: "John doo",
            email: "johndoo@email.com"
        },
    ]
}

console.log(pessoa.teste)

pessoa.teste = "Ola mundo"
pessoa.nome = "Pedro"
console.log(pessoa.teste)


const pessoa2 = {
    nome: "John Doo",
    idade: 53,
    profissao: "Mecânico"
}
console.log(pessoa2.nome)
console.log(pessoa2.profissao)

pessoa2.endereco = {
    rua: "Rua X",
    cidade: "y",
    numero: 2,
    complemento: "apt z",
    bairro: "w"
}

console.log(pessoa2)

pessoa2.endereco2 = {}
pessoa2.endereco2.rua = "Av sei lá X"
pessoa2.endereco2.cidade = "Cidade Teste"
pessoa2.endereco2.numero = 42
console.log(pessoa2)

let profissao = "Mecanico"


pessoa2.profissao = "Encanador"
console.log(pessoa2)

const test = [1, 2, 3]
console.log(pessoa2["profissao"])
