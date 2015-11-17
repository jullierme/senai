(function () {
    'use strict';

    angular
        .module('senai')
        .directive('smCrud', smCrud);

    function smCrud(){
        var directive = {
            restrict:'E',
            transclude:true,
            templateUrl:'arquitetura/directives/crud/crud.html',
            scope:{
                titulo:'@'
            },
            link:link
        };

        return directive;

        function link(scope, element, attrs){

        }
    }
})();