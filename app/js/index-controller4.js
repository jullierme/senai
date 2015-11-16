angular.module('senai',['ngMessages','ui.growl']);

angular.module('senai')
    .controller('IndexController', IndexController);

/*@ngInject*/
function IndexController($scope, AlertService){
    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;

    function salvar(){
        if($scope.myForm.$invalid === true){
            AlertService.showAlert('Observe', 'Verifique os campos inválidos');
            return;
        }

        $scope.listaDePessoas.push($scope.entidade);

        //$scope.dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');

        //var teste = $filter('maiusculo')('minha string');

        limpar();

        AlertService.showOk('Ok', 'Registro salvo com sucesso!');
    }

    function limpar(){
        $scope.entidade = {};
    }
}