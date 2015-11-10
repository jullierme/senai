angular.module('senai',[]);

angular.module('senai')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope'];

function IndexController($scope){
    $scope.nome = '';
    $scope.styleDiv = {};
    $scope.myClass = '';

    iniciar();

    function iniciar(){
        $scope.$watch('nome', escutaNome);
    }

    function escutaNome(newValue, oldValue){
        if(newValue === oldValue){
            return;
        }

        if(newValue === 'Maria'){
            $scope.styleDiv.backgroundColor = 'red';
            $scope.myClass = 'vermelho';
        }
        else if(newValue === 'Joao'){
            $scope.styleDiv.backgroundColor = 'blue';
            $scope.myClass = 'azul';
        }
        else{
            $scope.styleDiv.backgroundColor = '#FFF';
        }
    }
}