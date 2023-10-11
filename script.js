function botaozinho_resposta() {
    var respostaUsuario1 = document.querySelector('input[name="resposta"]:checked');
    var respostaUsuario2 = document.querySelector('input[name="resposta2"]:checked');
    var respostaUsuario3 = document.querySelector('input[name="resposta3"]:checked');
    var respostaUsuario4 = document.querySelector('input[name="resposta4"]:checked');


    if(respostaUsuario1 && respostaUsuario2 && respostaUsuario3 && respostaUsuario4){
        if(respostaUsuario1.value === "correto"){
            document.getElementById("resultado_1").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_1").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario2.value === "correto"){
            document.getElementById("resultado_2").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_2").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario3.value === "correto"){
            document.getElementById("resultado_3").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_3").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario4.value === "correto"){
            document.getElementById("resultado_4").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_4").innerHTML = "ERROU!!!";
        }
    }
    else{
        alert("Não deixar questões em aberto!");
    }
}