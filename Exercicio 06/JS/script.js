function verificar(){
    let letra = document.getElementById("letra").value.toUpperCase();

    if (letra === "F"){
        document.getElementById("resultado").innerText = "F - Feminino";
    }
    else if (letra === "M"){
        document.getElementById("resultado").innerText = "M - Masculino";       
    }
    else{
        document.getElementById("resultado").innerText = "Sexo Invalido"
    }
}