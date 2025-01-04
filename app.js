alert('boas vinda ao jogo do número secreto');
let numerosecreto = 5;
let chute;
let tentativas = 1;

while (chute != numerosecreto){
    chute = prompt('escolha um número de 1 a 10');

    if(chute == numerosecreto){
        alert(`você acertou o número secreto ${chute} com ${tentativas} tentativas`)
    }else{
        if (chute > numerosecreto){
            alert(`número secreto é menor que ${chute}`)
        }else{
            alert(`número secreto é maior que ${chute}`)
        }
        
    }
    tentativas++;
   }
