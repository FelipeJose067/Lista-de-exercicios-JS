function verificar() {
    let numero = Number(document.getElementById("numero").value);
    let resultado = "";

    if ((numero % 4 === 0 && numero % 100 !== 0) || (numero % 400 === 0)) {
        resultado = "Seu ano é Bissexto";
    } else {
        resultado = "Ano não é Bissexto";
    }

    document.getElementById("resultado").innerText = resultado;
}