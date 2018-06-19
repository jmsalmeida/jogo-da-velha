let jogoDaVelha = document.querySelectorAll('.linha div');
let botaoLimpar = document.querySelector('button');

let jogada = 1;

function fabricarJogada() {
    if(this.innerHTML===''){
        if(jogada%2!=0){
            this.innerHTML = 'X';
        }else{
            this.innerHTML = 'O';
        }
        jogada++;
        encerrarJogo();
    }
    
}

function compararCasas(casa1, casa2, casa3){
    //Se a casa 1 for diferente de vazio as outras obrigatoriamente também serão.
    if(casa1.innerHTML !== "" && casa1.innerHTML === casa2.innerHTML && casa2.innerHTML === casa3.innerHTML){
        alert("Ganhou");
    }
}

function encerrarJogo(){
    compararCasas(jogoDaVelha[0], jogoDaVelha[1], jogoDaVelha[2]);
    compararCasas(jogoDaVelha[0], jogoDaVelha[3], jogoDaVelha[6]);
    compararCasas(jogoDaVelha[0], jogoDaVelha[4], jogoDaVelha[8]);
    compararCasas(jogoDaVelha[3], jogoDaVelha[4], jogoDaVelha[5]);
    compararCasas(jogoDaVelha[6], jogoDaVelha[7], jogoDaVelha[8]);
    compararCasas(jogoDaVelha[1], jogoDaVelha[4], jogoDaVelha[7]);
    compararCasas(jogoDaVelha[2], jogoDaVelha[5], jogoDaVelha[8]);
    compararCasas(jogoDaVelha[2], jogoDaVelha[4], jogoDaVelha[6]);
}

function clicar() {
    
    for (div of jogoDaVelha){
        div.onclick = fabricarJogada;
    }
    
}

function limparTabuleiro() {
    for (div of jogoDaVelha){
        div.innerHTML = "";
    }

    jogada = 1;
}

clicar();



botaoLimpar.onclick = limparTabuleiro;
