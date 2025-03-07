const numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 3;

alert("Tente adivinhar o número secreto entre 0 e 10. Você tem 3 tentativas!");

while (tentativas > 0) {
    const palpite = parseInt(prompt("Qual é o seu palpite?"));

    if (palpite === numeroSecreto) {
        alert("Parabéns! Você acertou o número secreto.");
        break; 
    } else {
        tentativas--;
        alert(`Errou! Você ainda tem ${tentativas} tentativa(s).`);
    }

    if (tentativas === 0) {
        alert(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`);
    }
}
