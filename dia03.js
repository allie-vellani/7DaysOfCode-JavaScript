alert('Oi! Hoje quero conhecer um pouco mais sobre os seus interesses em programação. Vamos lá?');

let area = prompt('Você pretende seguir para a área de Back-End ou de Front-End?').toLowerCase();
let tecnologiaEscolhida;

if (area === "front-end") {
    tecnologiaEscolhida = prompt('Legal! Você escolheu Front-End. Você quer aprender React ou Vue?').toLowerCase();
} else if (area === "back-end") {
    tecnologiaEscolhida = prompt('Ótimo! Você escolheu Back-End. Você quer focar em C# ou Java?').toLowerCase();
} else {
    alert('Opção inválida! Por favor, reinicie o programa e escolha Front-End ou Back-End.');
}

if (tecnologiaEscolhida) {
    let caminho = prompt(`Muito bom! Você quer continuar se especializando em ${tecnologiaEscolhida} ou pretende se tornar Fullstack?`).toLowerCase();
    
    if (caminho === "fullstack") {
        alert(`Que legal! Expandir para Fullstack vai te dar um ótimo domínio no desenvolvimento.`);
    } else {
        alert(`Excelente! Se especializar em ${tecnologiaEscolhida} pode abrir muitas oportunidades.`);
    }
}

let tecnologias = [];
let continuar = true;

while (continuar) {
    let novaTecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (Digite o nome ou "não" para sair)').toLowerCase();

    if (novaTecnologia === "não") {
        continuar = false;
    } else {
        tecnologias.push(novaTecnologia);
        alert(`Que legal! ${novaTecnologia} é uma ótima tecnologia para aprender.`);
    }
}

if (tecnologias.length > 0) {
    alert(`Então, você quer aprender as seguintes tecnologias: ${tecnologias.join(', ')}. Parabéns! Você terá muito sucesso na área.`);
} else {
    alert('Tudo bem! Continue focado no seu aprendizado e boa sorte!');
}
