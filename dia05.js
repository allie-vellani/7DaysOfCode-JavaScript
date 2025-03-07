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
    let item = prompt("Qual item deseja adicionar a sua lista de compras?");
    let categoria = prompt("Em qual categoria esse item se encaixa? (frutas, legumes, verduras, laticinios, congelados, doces, mercearia)").toLowerCase();

    if (listaDeCompras[categoria]) {
        listaDeCompras[categoria].push(item);
    } else {
        alert("Categoria inválida. Tente novamente.");
    }

    continuar = prompt("Deseja adicionar mais algum item? (sim/não)").toLowerCase();
}

console.log("\nLista de compras:");
for (let categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
        console.log(`• ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaDeCompras[categoria].join(", ")}`);
    }
}
