(function(){
    'use strict';

    angular
        .module('senai')
        .directive('snEnter', snEnter);

    function snEnter(KeyCode){
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, element, attrs){
            element.bind('keydown', function(event){
                var code = event.keyCode || event.which;

                if(code === KeyCode.ENTER){
                    scope.$eval(attrs.snEnter);

                    event.preventDefault();
                }
            });
        }
    }
})();