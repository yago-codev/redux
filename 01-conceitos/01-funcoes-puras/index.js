/*
    Pure Functions | Funções Puras:
    
    01 - Dado um conjunto de parâmetros,
    uma função pura retorna sempre a mesma coisa (mesmo resultado).

    02 - Não produz side-effects
*/

const getFive = () => 5;
console.log(getFive());

const addFive = (number) => number + 5;
console.log(addFive(20));

const returnMaxValue = (numbers) => Math.max(numbers);
console.log(returnMaxValue(20, 10, 1, 2, 4));