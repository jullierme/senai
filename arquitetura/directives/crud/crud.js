(function () {
    'use strict';

    angular
        .module('senai')
        .directive('snCrud', snCrud);

    function snCrud(){
        var directive = {
            restrict:'E',
            transclude:true,
            templateUrl:'arquitetura/directives/crud/crud.html',
            scope:{
                titulo:'@',
                salvar:'&',
                excluir:'&',
                limpar:'&',
                exibirBotaoSalvar:'=',
                exibirBotaoExcluir:'=',
                exibirBotaoLimpar:'='
            },
            link:link
        };

        return directive;

        function link(scope, element, attrs){
            scope.onSalvar = onSalvar;
            scope.onLimpar = onLimpar;
            scope.onExcluir = onExcluir;

            iniciar();

            function iniciar(){
                if(scope.exibirBotaoSalvar === undefined) {
                    scope.exibirBotaoSalvar = true;
                }

                if(scope.exibirBotaoExcluir === undefined) {
                    scope.exibirBotaoExcluir = true;
                }

                if(scope.exibirBotaoLimpar === undefined){
                    scope.exibirBotaoLimpar = true;
                }
            }

            function onSalvar(){
                scope.salvar();
            }

            function onLimpar(){
                scope.limpar();
            }

            function onExcluir(){
                scope.excluir();
            }
        }
    }
})();