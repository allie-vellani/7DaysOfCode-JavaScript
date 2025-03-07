// Função de soma
function somar(a, b) {
    return a + b;
}

// Função de subtração
function subtrair(a, b) {
    return a - b;
}

// Função de multiplicação
function multiplicar(a, b) {
    return a * b;
}

// Função de divisão
function dividir(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    return a / b;
}

// Função principal da calculadora
function calculadora() {
    let continuar = true;

    while (continuar) {
        // Exibe o menu de operações
        const operacao = prompt(
            "Escolha uma operação:\n" +
            "1. Soma (+)\n" +
            "2. Subtração (-)\n" +
            "3. Multiplicação (*)\n" +
            "4. Divisão (/)\n" +
            "5. Sair"
        );

        // Se o usuário escolher sair, encerra o programa
        if (operacao === "5") {
            alert("Até a próxima!");
            continuar = false;
            break;
        }

        // Solicita os números apenas se a operação for válida
        const num1 = parseFloat(prompt("Digite o primeiro número:"));
        const num2 = parseFloat(prompt("Digite o segundo número:"));

        // Validação de entrada numérica
        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, insira números válidos.");
            continue;
        }

        // Variável para armazenar o resultado
        let resultado;

        // Utiliza switch para escolher a operação
        switch (operacao) {
            case "1":
                resultado = somar(num1, num2);
                alert(`Resultado da soma: ${resultado}`);
                break;
            case "2":
                resultado = subtrair(num1, num2);
                alert(`Resultado da subtração: ${resultado}`);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                alert(`Resultado da multiplicação: ${resultado}`);
                break;
            case "4":
                resultado = dividir(num1, num2);
                alert(`Resultado da divisão: ${resultado}`);
                break;
            default:
                alert("Opção inválida! Selecione uma operação de 1 a 5.");
        }
    }
}

// Executa a calculadora
calculadora();
