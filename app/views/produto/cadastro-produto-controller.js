(function(){
    'use strict';

    angular.module('senai')
        .controller('CadastroProdutoController', CadastroProdutoController);

    /*@ngInject*/
    function CadastroProdutoController(AlertService){
        var vm = this;
        vm.entidade = {};
        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.excluir = excluir;
        vm.enter = enter;

        function salvar(){
            AlertService.showOk('Produto salvo com sucesso!');
        }

        function limpar(){
            vm.entidade = {};
        }

        function excluir(){
            AlertService.showOk('Produto excluido com sucesso!');
        }

        function enter(){
            AlertService.showAlert('ENTER CLICADO');
        }
    }
})();