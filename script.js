function resposta_questionario() {

    var resposta1 = document.querySelector('input[name="resposta1"]:checked');
    var resposta2 = document.querySelector('input[name="resposta2"]:checked');
    var resposta3 = document.querySelector('input[name="resposta3"]:checked');
    var resposta4 = document.querySelector('input[name="resposta4"]:checked');

    if(resposta1 && resposta2 && resposta3 && resposta4){
        if(resposta1.value === "correta"){
            document.getElementById("correta1").innerHTML = "questão correta";
        }
        else{
            document.getElementById("errada1").innerHTML = "Resposta errada, pois a soma dos quadrados dos catetos é igual ao quadrado da hiponeunsa";
        }
        if(resposta2.value === "correta"){
            document.getElementById("correta2").innerHTML = "questão correta";
        }
        else{
            document.getElementById("errada2").innerHTML = "Resposta errada, pois a soma dos quadrados dos catetos é igual ao quadrado da hiponeunsa";
        }
        if(resposta3.value === "correta"){
            document.getElementById("correta3").innerHTML = "questão correta";
        }
        else{
            document.getElementById("errada3").innerHTML = "Resposta errada, pois a soma dos quadrados dos catetos é igual ao quadrado da hiponeunsa";
        }
        if(resposta4.value === "correta"){
            document.getElementById("correta4").innerHTML = "questão correta";
        }
        else{
            document.getElementById("errada4").innerHTML = "Resposta errada, pois a soma dos quadrados dos catetos é igual ao quadrado da hiponeunsa";
        }
    }
    else{
        alert("não deixe questões em branco!");
    }

}

function ola_usuario(){
    var nome_usu = prompt("Escreva seu nome:");
    if(nome_usu){
        document.getElementById("nome_usuario").innerHTML = nome_usu;
    }
    else{
        alert("escreva seu nome");
        ola_usuario();
    }
}