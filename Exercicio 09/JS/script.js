function verificar() {
    let valorHora = Number(document.getElementById("valorHora").value);
    let hora = Number(document.getElementById("hora").value);

    let salarioBruto = valorHora * hora;

    let percentualIR = 0;

    if (salarioBruto <= 900) {
        percentualIR = 0;
    }
    else if (salarioBruto <= 1500) {
        percentualIR = 5;
    } 
    else if (salarioBruto <= 2500) {
        percentualIR = 10;
    } 
    else {
        percentualIR = 20;
    }

    let ir = salarioBruto * (percentualIR / 100);
    let inss = salarioBruto * 0.10;
    let sindicato = salarioBruto * 0.03;
    let fgts = salarioBruto * 0.11; 

    let totalDescontos = ir + inss + sindicato;
    let salarioLiquido = salarioBruto - totalDescontos;

    document.getElementById("resultado").innerHTML =
        "Salário Bruto: (" + valorHora + " * " + hora + ") : R$ " + salarioBruto.toFixed(2) + "<br>" +
        "(-) IR (" + percentualIR + "%) : R$ " + ir.toFixed(2) + "<br>" +
        "(-) INSS (10%) : R$ " + inss.toFixed(2) + "<br>" +
        "(-) Sindicato (3%) : R$ " + sindicato.toFixed(2) + "<br>" +
        "FGTS (11%) : R$ " + fgts.toFixed(2) + "<br>" +
        "Total de descontos : R$ " + totalDescontos.toFixed(2) + "<br>" +
        "Salário Líquido : R$ " + salarioLiquido.toFixed(2);
}