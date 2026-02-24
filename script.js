let valorT = document.getElementById("valorT"),
quantidade = document.getElementById("quantidade"),
descontoT = document.getElementById("descontoT"),
resultado = document.getElementsByClassName("resultado");
function calcular() {
    let valorU = Number(valorT.value) / Number(quantidade.value);
    let descontoU = Number(descontoT.value) / Number(quantidade.value);
    let valorC = valorU + descontoU;

    if ((valorC * quantidade) - valorT != 0) {
        valorC += ((valorC * quantidade) - valorT) / quantidade
    }

    resultado[0].innerHTML = "falta";
    resultado[1].innerHTML = "falta";
    resultado[2].innerHTML = "falta";
}
