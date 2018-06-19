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
    if(casa1.innerHTML === casa2.innerHTML && casa2.innerHTML === casa3.innerHTML){
        alert("ACERTOU FDPT GANHOW DIZZZGRAÇA");
    }
}

function encerrarJogo(){
    if(jogoDaVelha[0].innerHTML !== "" && jogoDaVelha[1].innerHTML !== "" && jogoDaVelha[2].innerHTML !== ""){
        compararCasas(jogoDaVelha[0], jogoDaVelha[1], jogoDaVelha[2]);
    }
    
    if(jogoDaVelha[0].innerHTML !== "" && jogoDaVelha[3].innerHTML !== "" && jogoDaVelha[6].innerHTML !== ""){
        compararCasas(jogoDaVelha[0], jogoDaVelha[3], jogoDaVelha[6]);
    }

    if(jogoDaVelha[0].innerHTML !== "" && jogoDaVelha[4].innerHTML !== "" && jogoDaVelha[8].innerHTML !== ""){
        compararCasas(jogoDaVelha[0], jogoDaVelha[4], jogoDaVelha[8]);
    }

    if(jogoDaVelha[3].innerHTML !== "" && jogoDaVelha[4].innerHTML !== "" && jogoDaVelha[5].innerHTML !== ""){
        compararCasas(jogoDaVelha[3], jogoDaVelha[4], jogoDaVelha[5]);
    }

    if(jogoDaVelha[6].innerHTML !== "" && jogoDaVelha[7].innerHTML !== "" && jogoDaVelha[8].innerHTML !== ""){
        compararCasas(jogoDaVelha[6], jogoDaVelha[7], jogoDaVelha[8]);
    }

    if(jogoDaVelha[1].innerHTML !== "" && jogoDaVelha[4].innerHTML !== "" && jogoDaVelha[7].innerHTML !== ""){
        compararCasas(jogoDaVelha[1], jogoDaVelha[4], jogoDaVelha[7]);
    }

    if(jogoDaVelha[2].innerHTML !== "" && jogoDaVelha[5].innerHTML !== "" && jogoDaVelha[8].innerHTML !== ""){
        compararCasas(jogoDaVelha[2], jogoDaVelha[5], jogoDaVelha[8]);
    }

    if(jogoDaVelha[2].innerHTML !== "" && jogoDaVelha[4].innerHTML !== "" && jogoDaVelha[6].innerHTML !== ""){
        compararCasas(jogoDaVelha[2], jogoDaVelha[4], jogoDaVelha[6]);
    }   
    
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
