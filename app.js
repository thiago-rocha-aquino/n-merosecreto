alert('boas vinda ao jogo do número secreto');
// defiir o valor maximo do numerosecreto
let numeromaximo = 100;
//gera número aleatório de 1 a 100
let numerosecreto = parseInt(Math.random() * numeromaximo + 1);
let chute;
let tentativas = 1;

while (chute != numerosecreto){
    chute = prompt(`escolha um número de 1 a ${numeromaximo}`);

    if(chute == numerosecreto){
        break;
    }else{
        if (chute > numerosecreto){
            alert(`número secreto é menor que ${chute}`)
        }else{
            alert(`número secreto é maior que ${chute}`)
        }
        
    }
    tentativas++;
   }
//                                           se          senão
let palavratentativas = tentativas > 1 ? 'tetativas': 'tentativa'
alert(`você acertou o número secreto ${chute} com ${tentativas} ${palavratentativas}`)   
 
