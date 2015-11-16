angular.module('senai',[]);

angular.module('senai')
    .controller('IndexController', IndexController);

/*@ngInject*/
function IndexController($scope){
    $scope.adicionarCarro = adicionarCarro;
    $scope.alterarNome = alterarNome;

    $scope.carros = [
        {nome:'Gol', cor:'Vermelho'},
        {nome:'Palio', cor:'Azul'}
    ];

    function adicionarCarro(){
        var obj = {};
        obj.nome = 'Carro' + $scope.carros.length;
        obj.cor = 'Cor' + $scope.carros.length;

        $scope.carros.push(obj);
    }

    function alterarNome(){
        $scope.carros[0].nome = $scope.carros[0].nome + 'AAA';
    }
}