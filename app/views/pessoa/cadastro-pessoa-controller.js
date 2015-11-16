angular.module('senai')
    .controller('CadastroPessoaController', CadastroPessoaController);

/*@ngInject*/
function CadastroPessoaController($scope, $stateParams){
    var vm = this;
    vm.nome = 'teste oclazy';

    alert($stateParams.id);

    vm.dispararEvento = dispararEvento;

    function dispararEvento() {
        var obj = {};
        obj.nome = 'asdfsadf';

        $scope.$emit('eventoTeste', obj);
    }
}