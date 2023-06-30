var tamanhoInput = document.getElementById("tamanho-input");
var gerarBtn = document.getElementById("gerar-btn");
var limparBtn = document.getElementById("limpar-btn");
var senhaGerada = document.getElementById("senha-gerada");
var copiarBtn = document.getElementById("copiar-btn");
var checkApenasNumLetra = document.getElementById("apenas-letras-numeros-checkbox");

function gerarSenhaAleatoria(){
    var tamanho = parseInt(tamanhoInput.value);
    if (!isNaN(tamanho) || tamanho <= 0){   
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var senha = '';

        if(!checkApenasNumLetra.checked){
            caracteres += '!@#$%^&*()_+';
        }

        for (var i = 0; i < tamanho; i++){
            var indice = Math.floor(Math.random() * caracteres.length);
            senha += caracteres[indice];
        }  
    }
    else{
        alert("Selecione uma quantidade de caracteres válida. A senha não foi gerada.");
        return;
    }
    senhaGerada.value = senha;
}

function limparValores(){
    tamanhoInput.value = "";
    senhaGerada.value = "";
    checkApenasNumLetra.checked = false;
}

function copiarSenha(){
    navigator.clipboard.writeText(senhaGerada.value);
}