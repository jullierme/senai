(function(){
    'use strict';

    angular.module('senai')
        .controller('CadastroPessoaController', CadastroPessoaController);

    /*@ngInject*/
    function CadastroPessoaController(AlertService){
        var vm = this;
        vm.entidade = {};
        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.excluir = excluir;

        function salvar(){
            AlertService.showOk('Registro salvo com sucesso!');
        }

        function limpar(){
            vm.entidade = {};
        }

        function excluir(){
            AlertService.showOk('Registro excluido com sucesso!');
        }
    }
})();