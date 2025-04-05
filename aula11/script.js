// pra declarar objeto se usa {} dividada em partes, com identificador(atributo) literal na frente. Taambém pode colocar uma function dentro desse objeto.

let amigo = {nome:"José", 
sexo:"M", 
peso:85.4, 
engordar(p=0){
    console.log("Engordou")
    this.peso += p

}
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)

