function verificar() {
    let salario = Number(document.getElementById("salario").value);

    let percentual = 0;
    let aumento = 0;
    let novoSalario = 0;


    if(salario <= 280){
        percentual = 20;
    }
    else if (salario <= 700){
        percentual = 15;
    }
    else if (salario <= 1500){
        percentual = 10;
    }
    else{
        percentual = 5;
    }

    aumento = salario * (percentual / 100);
    novoSalario = salario + aumento;

    document.getElementById("resultado").innerText = "Salário antes: R$ " + salario.toFixed(2) + " Percentual Aplicado: " + percentual + "%" + " Valor do Aumento: R$ " + aumento.toFixed(2) + " Novo salario: R$ " + novoSalario.toFixed(2);
}