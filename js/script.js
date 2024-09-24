// Função para calcular o IMC com validação
function calculateIMC() {
    console.log("calculateIMC foi chamado");
    
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    // Calcula o IMC apenas se as entradas forem válidas
    var imc = peso / (altura * altura);
    document.getElementById("imcResult").innerText = `Seu IMC é: ${imc.toFixed(2)}`;
}
