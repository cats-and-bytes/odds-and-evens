let jogada1;
let jogada2;


let contador = 1;

function jogar(numero) {
    if (contador=== 1) {
        jogada1 = numero;
}

if (contador === 2) {
    jogada2= numero;
}

console.log(`jogador ${contador} jogou`)


    contador = contador + 1;

    return ;
}

function quemGanhou() {
    let resultado = jogada1 + jogada2;

    if (resultado % 2 === 0){

        console.log("Jogador 1 ganhou")
    } else {
        console.log("Jogador 2 ganhou")
    }
    




}
