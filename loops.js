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