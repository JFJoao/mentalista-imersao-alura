function Chutar() {
  var numeroSecreto = parseInt(Math.random(0,10));
  var tentativas = 0
  var elementoResultado = document.getElementById("resultado")
  var chute = parseInt(document.getElementById("valor").value);
  while (tentativas < 2){
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertou miseravel.";
  } else if (chute < 0 > 10) {
    // else if (chute > 10 || chute <0)
   elementoResultado.innerHTML = "Voce deve chutar entre 0 e 10.";
  } else {
    elementoResultado.innerHTML = "Eróu."
    tentativas += 1
      if (tentativas == 2){
        elementoResultado.innerHTML = "Game Over, o numero era " + numeroSecreto
      }
    }
  }
}
