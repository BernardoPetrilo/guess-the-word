var player1 = localStorage.getItem("jogador1")
var player2 = localStorage.getItem("jogador2")
document.getElementById("player1Name").innerHTML = player1
document.getElementById("player2Name").innerHTML = player2
var pontos1 = 0
var pontos2 = 0
document.getElementById("player1Score").innerHTML = pontos1
document.getElementById("player2Score").innerHTML = pontos2

document.getElementById("pergunta").innerHTML = "Turno da pergunta: " + player1
document.getElementById("resposta").innerHTML = "Turno da resposta: " + player2

function enviar() {
    var palavra = document.getElementById("word").value
    minuscula = palavra.toLowerCase()
    var letra1 = minuscula.charAt(0)
    var meio = Math.floor(minuscula.length / 2)
    var letra2 = minuscula.charAt(meio)
    var letra3 = minuscula.charAt(minuscula.length - 1)
    remover1 = minuscula.replace(letra1, "_")
    remover2 = remover1.replace(letra2, "_")
    remover3 = remover2.replace(letra3, "_")
    console.log(remover3)
    var texto = "<h2>" + remover3 + "</h2>"
    var resposta = "<input id='r' type='text' placeholder='Digite a resposta aqui'> <br> <br>"
    var botao = "<button onclick='clicar()' class='btn btn-info'>Responder</button>"
    var escrever = texto + resposta + botao
    document.getElementById("output").innerHTML = escrever
    document.getElementById("word").value = ""
}

var turnopergunta = "player1"
var turnoresposta = "player2"

function clicar() {
    var pegar = document.getElementById("r").value
    var pegarminusculo = pegar.toLowerCase()
    if (pegarminusculo == minuscula) {
        if (turnopergunta == "player1") {
            pontos2++
            document.getElementById("player2Score").innerHTML = pontos2
        }
        else {
            pontos1++
            document.getElementById("player1Score").innerHTML = pontos1
        }
    }
    if (turnopergunta == "player1") {
        turnopergunta = "player2"
        turnoresposta = "player1"
        document.getElementById("pergunta").innerHTML = "Turno da pergunta: " + player2
        document.getElementById("resposta").innerHTML = "Turno da resposta: " + player1
    }
    else{
        turnopergunta = "player1"
        turnoresposta = "player2"
        document.getElementById("pergunta").innerHTML = "Turno da pergunta: " + player1
        document.getElementById("resposta").innerHTML = "Turno da resposta: " + player2
    }
    document.getElementById("output").innerHTML = ""
}