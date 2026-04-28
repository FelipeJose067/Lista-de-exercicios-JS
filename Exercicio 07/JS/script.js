function verificar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);

    if (numero1 > numero2 && numero1 > numero3) {
        document.getElementById("resultado").innerText = "Seus números são :"+ numero1 + ", " + numero2 + ", " + numero3 + "o maior é: " +numero1;
    }
    else if (numero2 > numero1 && numero2 > numero3) {
        document.getElementById("resultado").innerText = "Seus números são :"+ numero1 + ", " + numero2 + ", " + numero3 + "o maior é: " +numero2;
    }
    else if (numero3 > numero1 && numero3 > numero2) {
        document.getElementById("resultado").innerText = "Seus números são: "+ numero1 + ", " + numero2 + ", " + numero3 + "o maior é: " +numero3;
    }
    else {
        document.getElementById("resultado").innerText = "Seus números são iguais"
    }
}