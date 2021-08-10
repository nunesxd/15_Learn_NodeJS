// IIFE significa "Immediately Invoked Function Expressions", é uma função que é executada imediatamente, para isso, podemos envolver uma função em parenteses, com um parenteses no fim, indicando que a função deve ser executada:
(function () {
    var nome = 'Rafael'
    console.log(`Olá ${nome}`);
}());

// Também é possível passarmos um parametro ao IIFE:
(function (sobrenome) {
    var nome = 'Rafael'
    console.log(`Olá ${nome} ${sobrenome}`);
}('Nunes'));
