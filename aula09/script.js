let num = [5, 8, 2, 9, 3]

// acrescentar um valor
// num[indice] = numero a ser adicionado
// num.push(acrescentar no final)


// saber o tamanho
// num.length
// num.sort() coloca em ordem crescente

// buscar valores dentro do array
// num.indexOf()

// a ordem dos comandos influencia no resultado
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`) 

let pos = num.indexOf(8)
if (pos == -1) {
    console.log ("O valor não foi encontrado")
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

