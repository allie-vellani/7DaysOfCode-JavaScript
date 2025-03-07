let listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    mercearia: [],
    legumes: [],
    verduras: []
};

let continuar = "sim";

while (continuar === "sim") {
    let acao = prompt("Você deseja adicionar ou remover um item da lista de compras? (adicionar/remover)").toLowerCase();

    if (acao === "adicionar") {
        let item = prompt("Qual item deseja adicionar à sua lista de compras?");
        let categoria = prompt("Em qual categoria esse item se encaixa? (frutas, legumes, verduras, laticinios, congelados, doces, mercearia)").toLowerCase();

        if (listaDeCompras[categoria]) {
            listaDeCompras[categoria].push(item);
            alert(`"${item}" adicionado à categoria "${categoria}".`);
        } else {
            alert("Categoria inválida. Tente novamente.");
        }

    } else if (acao === "remover") {
        let categoria = prompt("De qual categoria você deseja remover um item? (frutas, legumes, verduras, laticinios, congelados, doces, mercearia)").toLowerCase();

        if (listaDeCompras[categoria] && listaDeCompras[categoria].length > 0) {
            alert(`Itens na categoria "${categoria}": ${listaDeCompras[categoria].join(", ")}`);
            let item = prompt("Qual item deseja remover?");

            if (listaDeCompras[categoria].includes(item)) {
                let index = listaDeCompras[categoria].indexOf(item);
                listaDeCompras[categoria].splice(index, 1);
                alert(`"${item}" removido da categoria "${categoria}".`);
            } else {
                alert("Item não encontrado na lista.");
            }

        } else {
            alert("Categoria inválida ou vazia. Não é possível remover itens.");
        }

    } else {
        alert("Opção inválida. Escolha entre 'adicionar' ou 'remover'.");
    }

    continuar = prompt("Deseja continuar? (sim/não)").toLowerCase();
}

console.log("\nLista de compras atualizada:");
for (let categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
        console.log(`• ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaDeCompras[categoria].join(", ")}`);
    }
}
