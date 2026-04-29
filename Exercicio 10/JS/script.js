function verificar() {
    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);

    let resultado = "";

    
    if (lado1 + lado2 > lado3 &&
        lado1 + lado3 > lado2 &&
        lado2 + lado3 > lado1) {

        
        if (lado1 === lado2 && lado2 === lado3) {
            resultado = "Triângulo Equilátero";
        } 
        else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            resultado = "Triângulo Isósceles";
        } 
        else {
            resultado = "Triângulo Escaleno";
        }

    } else {
        resultado = "Não forma um triângulo";
    }

    document.getElementById("resultado").innerText = "O seu triangulo é: " + resultado;
}