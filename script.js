//altera o estilo

function inverter(){
    let estiloAtual = document.getElementsByTagName("link")[2];
    console.log(estiloAtual);
    if(estiloAtual.getAttribute("href") == "style/light.css"){
        estiloAtual.setAttribute("href","style/dark.css");
    }else if(estiloAtual.getAttribute("href") == "style/dark.css"){
        estiloAtual.setAttribute("href","style/light.css");
    }
}

//calcular e mostrar valor

const real = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL",
})

function calcular() {
    let valorT = document.getElementById("valorT").value,
    quantidade = document.getElementById("quantidade").value,
    descontoT = document.getElementById("descontoT").value,
    resultado = document.getElementsByClassName("resultado");

    let valorU = valorT / quantidade;
    let descontoU = descontoT / quantidade;
    let valorC = valorU + descontoU;
    let valorTC = valorC * quantidade;

    if ((valorTC - descontoT) - valorT != 0) {
        valorC += (valorT - valorTC) / quantidade;
        valorTC = valorC * quantidade;
    }

    resultado[0].innerHTML = real.format(valorC);
    resultado[1].innerHTML = real.format(valorTC);
    resultado[2].innerHTML = real.format(valorTC - descontoT);
}
