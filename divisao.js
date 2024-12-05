let calcular = document.getElementById("calcular");

calcular.addEventListener("click", function clicar(e){
    e.preventDefault(); // Previnir o envio do formulario

    // Pegar os valores dos inputs
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    // verificar se os valores são validos
    if(isNaN(numero1) || isNaN(numero2)){
        document.getElementById("resposta").innerHTML = "Você deve inserir valores numéricos";
        return;
    } else {
        let divisao = numero1 / numero2;
        document.getElementById("resposta").innerHTML = `A divisão de ${numero1} e ${numero2} é ${divisao}`;
    }

})