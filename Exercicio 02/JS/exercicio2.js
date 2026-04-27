function verificar(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let tipo = "";

    if (idade <= 2) {
        tipo = "Bebê";
    }
    else if (idade <= 12){
        tipo = "Criança";
    }
    else if (idade <=21){
        tipo = "Jovem" ;
    }
    else if (idade <=64){
        tipo = "Adulto";
    }
    else if (idade <= 100){
        tipo = "Idoso";
    }
    else {
        tipo = "Muito Velinho";
    }
    
    document.getElementById("resultado").innerText = nome + " Você tem " + idade + " Anos e pela tabela você é considerado um " + tipo;

}