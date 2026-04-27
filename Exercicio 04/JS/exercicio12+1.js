function resultado(){
    let numero = Number(document.getElementById("numero").value);
    
    if (numero % 2 === 0){
        document.getElementById("resultado").innerText = "Seu Número é PAR"
    }
    else{
        document.getElementById("resultado").innerHTML = "Seu Número é IMPAR"
    }
}