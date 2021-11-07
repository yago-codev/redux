/*
    Immutability | Imutabilidade
*/

let a = 123;

// função NÃO pura
// irá alterar o valor da variável "a"
const incrementA = () => {
    return a++;
}

// console.log(incrementA()); // 123
// console.log(incrementA()); // 124
// console.log(incrementA()); // 125
// console.log(a); // 126

// função PURA:
// diferentemente da função anterior,
// criaremos uma função que recebe um número como parâmetro e retorna-o incrementado,
// não alterando o parâmetro recebido.
const immutableIncrement = (number) => {
    return number + 1;
}

console.log(immutableIncrement(a)); // 124
console.log(immutableIncrement(a)); // 124
console.log(immutableIncrement(a)); // 124
console.log(a); // 123