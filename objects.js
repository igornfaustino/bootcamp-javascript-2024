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


const helloWorld = () => {
    console.log("Hello World")
}

const teste = {
    helloWorld: () => {
        console.log("Hello World")
    },
    helloWorld2: () => {
        console.log("Hello World 2")
    },
    helloWorld3: () => {
        console.log("Hello World 3")
    }
}

teste.helloWorld()
teste.helloWorld2()
teste.helloWorld3()


const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020,
    descricao: () => {
        return `${carro.marca} ${carro.modelo}, ${carro.ano}`
    },
}

console.log(carro.descricao())

const aluno = {
    nome: "Carlos",
    idade: 12,
    notas: [8, 10, 5]
}

let soma = 0
for (let i = 0; i < aluno.notas.length; i++) {
    soma += aluno.notas[i] // soma = soma + notas[i]
}

const media = soma / aluno.notas.length

console.log(media)

// --------------------------------------

soma = 0
aluno.notas.forEach((nota) => {
    soma += nota
})
console.log(soma / aluno.notas.length)

const biblioteca = {
    livros: [{
        titulo: 'Senhor dos aneis',
        autor: 'Tolkien',
        ano: 2024
    },
    {
        titulo: 'Senhor dos aneis O retornor do rei',
        autor: 'Tolkien',
        ano: 2024
    },
    {
        titulo: 'Clube da luta',
        autor: 'Tolkien',
        ano: 2024
    },
    ]
}


const titulos = biblioteca.livros.map((livro) => {
    return livro.titulo
})
console.log(titulos)