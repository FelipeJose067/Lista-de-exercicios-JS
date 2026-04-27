function verificar(){
    let  numero = Number(document.getElementById("numero").value);

    if (numero > 0){
        document.getElementById("resultado").innerText = "Seu numero é POSITIVO"
    }
    else if (numero < 0){
        document.getElementById("resultado").innerText = "Seu numero é NEGATIVO"
    }
    else{
        document.getElementById("resultado").innerText = "Seu numero é ZERO"
    }

}