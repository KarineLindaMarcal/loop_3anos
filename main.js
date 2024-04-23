
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual nome da escola?");
  
  }
  
    if (respostaTime.toLowerCase() === "emilio")
    {
      alert("Isso mesmo! Ela é a melhor de todas!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }



// Chamada da função para iniciar o processo
verificarTime();

  
