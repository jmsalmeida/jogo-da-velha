let jogoDaVelha = document.querySelectorAll('.linha div');
let botaoLimpar = document.querySelector('button');

let jogada = 1;

function fabricarJogada() {
    if(this.innerHTML==''){
        if(jogada%2!=0){
            this.innerHTML = 'X';
        }else{
            this.innerHTML = 'O';
        }
        jogada++;
    }
}

function clicar(div) {
    div.addEventListener('click',fabricarJogada);
}

function limparTabuleiro() {
    jogoDaVelha.forEach(limparCampo);
    jogada = 1;
}

function limparCampo(div) {
    div.innerHTML='';
}

jogoDaVelha.forEach(clicar);
botaoLimpar.addEventListener('click',limparTabuleiro);
