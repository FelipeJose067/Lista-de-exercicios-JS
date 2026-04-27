function consultar(){
    let saldo = Number(document.getElementById("saldo").value);
    let debito = Number(document.getElementById("debito").value);
    let credito = Number(document.getElementById("credito").value);

    let saldoAtual = saldo - debito + credito;

    document.getElementById("verificar").innerText = "Seu saldo atual é de: R$ " + saldoAtual.toFixed(2);


    if (saldoAtual >= 0){
        document.getElementById("verificarsaldo").innerText = "Seu saldo é POSITIVO"
    }
    else{
        document.getElementById("verificarsaldo").innerText = "Seu saldo é NEGATIVO"
    }

}