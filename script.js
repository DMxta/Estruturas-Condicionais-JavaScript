// if
var jogador1 = 0;
var jogador2 = 1;
var placar;

// if
if (jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!')
    placar = jogador1 > jogador2;
} 
//else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log("Jogador 2 marcou ponto!")
    placar = jogador2 > jogador1;
} 
//else
else {
    console.log('Ninguém marcou ponto.')
}

// Usando switch/case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
        case placar = jogador2 > jogador1:
            console.log('Jogador 2 ganhou!');
            break;
            default:
            console.log('Ninguém ganhou.')
}

// Laços de Repetição

// for - Funciona como repetição de instrução até que a condição seja falsa.
let array = ['array1', 'array2', 'array3', 'array4', 'array5'];
let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}

for (indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

// for/in - Funciona como uma repetição a partir de uma propriedade.
for (let i in array) {
    console.log(i);
}

// Com object
for (i in object) {
    console.log(i);
}

// for/of - Funciona como uma repetição a partir de um valor.
// Com array
for (i of array) {
    console.log(i);
}

// Com object
// Imprime cada letra em uma linha, motivo de dar para utilizar for/of com object.
for (i of object.propriedade1) {
    console.log(i);
}

// while - Executa uma instrução "enquanto" determinada consição for verdadeira, a verificação é feita antes da execução.
var a = 0;

while (a < 5) {
    a++;
    console.log(a);
}

// do/while - Executa uma instrução "até que" determinada condição seja falsa, a verificação é feita depois da execução.
var a = 0;

do {
    a++;
    console.log(a);
} while (a < 4);