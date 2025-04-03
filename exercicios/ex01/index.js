function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src= "imagens/manha.png"
        document.body.style.background ="rgba(250, 249, 176, 0.53"
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = "imagens/tarde.png"
        document.body.style.background = "rgba(248, 161, 61, 0.5"
    } else {
        // boa noite
        img.src = "imagens/noite.png"
        document.body.style.background = "rgba(142, 162, 248, 0.58"
    }

}
