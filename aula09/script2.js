let valores = [8, 1, 7, 4, 2, 9]

console.log(valores[0])

/* for(let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

// jeito mais simplificado de fazer
for(let pos in valores) {  // leia-se para cada posição dentro de num
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}