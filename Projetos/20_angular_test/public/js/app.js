// Inicializamos abaixo o nosso módulo Angular, o '[]' receberia as dependências necessárias ao APP.
angular.module('TestApp', []);

// Adicionamos ao módulo do Angular, o elemento de controle e executamos a função informada:
angular.module('TestApp')
    .controller('MainController', ctrlFunc);

// O this se refere ao 'vm', que informamos dentro do directive, dentro do body de nosso html.
function ctrlFunc() {
    this.message = 'Hello';
    this.people = [
        {
            name: 'Rafael'
        },
        {
            name: 'Cerejinha'
        },
        {
            name: 'Jessica'
        }
    ];
}