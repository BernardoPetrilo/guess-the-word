function confirmar(){
   var player1 = document.getElementById("player1nome").value
   var player2 = document.getElementById("player2nome").value
   localStorage.setItem("jogador1", player1)
   localStorage.setItem("jogador2", player2)
   window.location = "game_page.html"
}
