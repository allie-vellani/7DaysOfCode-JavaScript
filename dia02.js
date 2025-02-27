let nome = prompt('Qual é o seu nome?');
let idade = prompt('Quantos anos você tem?');
let linguagem = prompt('Qual linguagem de programação você está estudando?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}. Que ótimo!`)

let valor = Number(prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`));

if (valor === 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
}else if (valor === 2) {
    alert('Que pena! Já tentou se aprofundar em outras linguagens para descobrir do que você gosta?')
} else {
    alert('Poxa, não entendi a sua resposta. Por favor, digite 1 para SIM ou 2 para NÃO.')
}
