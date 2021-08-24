$(document).ready(function() {

    // jQuery methods go here...
    $("#btnCalcular").click(function() {
        // console.log("jQuery carregado !");
        calcularImc();
        // console.log("jQuery finalizado !");
    });

});

function calcularImc(imc, peso, altura) {
    //Obter o resultado
    var imc;
    var altura = $("#txtAltura").val();
    var peso = $("#txtPeso").val();

    //Equação necessária para obter o Resultado.
    //IMC = peso / (altura)²
    imc = (peso / (altura * altura))

    //Atribuir o valor da variável para o TEXTO do elemento html.
    $("#txtAreaResult").html(imc);
}