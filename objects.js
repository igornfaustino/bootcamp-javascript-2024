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
