let listaDeNúmerosSorteados = [];
let numeroLimite = 10;
let NumeroSecreto = GerarNumeroAleatorio();
let tentativas = 1


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.2})
}


function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

 function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == NumeroSecreto) {
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > NumeroSecreto) {
        exibirTextoNaTela('p', 'o número é menor que ' + chute);
    } else {
        exibirTextoNaTela('p', 'o número é maior que ' + chute)
    }
    tentativas++;
    limparCampo();

}

function GerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeelemntosNaLista = listaDeNúmerosSorteados.length;

    if (quantidadeDeelemntosNaLista == 3 ) {
        listaDeNúmerosSorteados = []
    }


    if (listaDeNúmerosSorteados.includes(numeroEscolhido)) {
        return GerarNumeroAleatorio();
    } else {
        listaDeNúmerosSorteados.push(numeroEscolhido)
        console.log(listaDeNúmerosSorteados)
        return numeroEscolhido;
    }
     
}

function limparCampo () {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    NumeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}