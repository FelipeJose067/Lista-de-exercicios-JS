function mostrar(){
    let exercicio1 = Number(document.getElementById("exercicio1").value);
        if(exercicio1 >= 10){
            document.getElementById("RespostaNumero").innerText = "O Número digitado é MAIOR que 10"
        }
        else{
            document.getElementById("RespostaNumero").innerText = "O Número digitado é MENOR que 10"
        }

}