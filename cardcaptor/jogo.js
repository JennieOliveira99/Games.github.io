var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var intervalocriacard = 2000;

var niveljogo = window.location.search
niveljogo = niveljogo.replace('?','')

console.log(niveljogo)

if(niveljogo === 'normal') {
	//1500
	intervalocriacard = 1500
} else if(niveljogo === 'medio') {
	//1000
	intervalocriacard = 1000
} else if (niveljogo === 'dificil') {
	//750
	intervalocriacard = 750
}

function ajustatamanhopalcojogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura)
}

ajustatamanhopalcojogo()
var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criacard)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {
    if (document.getElementById('carta')) {
        document.getElementById('carta').remove()
        if (vidas > 3) {
            window.location.href = 'gameOver.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }
    var posicaoX = parseInt(Math.random() * largura) - 90;
    var posicaoY = parseInt(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var carta = document.createElement('img')
    carta.src = 'imagens/card.png'
    carta.className = tamanhoAleatorio() + " " + ladoAleatorio()
    carta.style.left = posicaoX + 'px'
    carta.style.top = posicaoY + 'px'
    carta.style.position = 'absolute'
    carta.id = 'carta'
    carta.onclick = function () {
        this.remove();
    }
    document.body.appendChild(carta)
}
function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3)
    switch (tamanho) {
        case 0:
            return 'card1'
            break
        case 1:
            return 'card2'
            break
        case 2:
            return 'card3'
            break
    }

}
function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)
    switch (lado) {
        case 0:
            return 'lado1'
            break
        case 1:
            return 'lado2'
            break
    }

}