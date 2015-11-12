angular.module('senai', [
    'ui.growl',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ngMaterial',
    'ui.router',
    'oc.lazyLoad'
]).config(config);
config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider){
    var home = {
        url: '/',
        templateUrl: 'app/views/home.html'
    };
    var produto = {
        url: '/produto',
        templateUrl: 'app/views/produto/cadastro-produto.html'
    };
    var produtoPesquisa = {
        url: '/pesquisa',
        templateUrl: 'app/views/produto/pesquisa-produto.html'
    };

    var pessoa = {
        abstract: true,
        url: '/pessoa',
        template: '<ui-view/>'
    };

    var cadastroPessoa = {
        url: '/cadastro',
        templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad
                    .load('app/views/pessoa/cadastro-pessoa-controller.js');
            }
        }
    };

    var pesquisaPessoa = {
        url: '/pesquisa',
        templateUrl: 'app/views/pessoa/pesquisa-pessoa.html'
    };

    $stateProvider
        .state('home', home)
        .state('produto', produto)
        .state('produto.pesquisa', produtoPesquisa)
        .state('pessoa', pessoa)
        .state('pessoa.cadastro', cadastroPessoa)
        .state('pessoa.pesquisa', pesquisaPessoa);

    $urlRouterProvider.otherwise("/");
}

angular.module('senai')
    .controller('IndexController', IndexController);

function IndexController($scope, AlertService){
    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.gridItemClick = gridItemClick;
    $scope.excluirItemGrid = excluirItemGrid;
    $scope.getRowStyle = getRowStyle;

    $scope.gridStyle = {};
    $scope.gridStyle.width = '100%';
    $scope.gridStyle.height = '200px';

    $scope.gridOptions = {
        data: 'listaDePessoas',
        columnDefs: [
            { name: 'Pessoa', field:'nome', width: 150, cellTemplate: 'app/templates/cell-template.html'},
            { name: 'E-mail', field:'email', minWidth: 250, cellTemplate: 'app/templates/cell-template.html'},
            { name: '', field:'excluir', width: 50, cellTemplate: 'app/templates/cell-template-btn-excluir.html'}
        ],
        enableRowSelection: true,
        enableColumnMenus: false,
        rowTemplate: 'app/templates/row-template.html'
    };

    function gridItemClick(row, col, $index){
        var teste = row;
    }

    function getRowStyle(registro){
        var rowStyle = {};

        if (registro.cor)
            rowStyle.backgroundColor = registro.cor;

        return rowStyle;
    }


    function excluirItemGrid(row){
        alert(row);
    }

    function salvar(){
        $scope.listaDePessoas.push($scope.entidade);
        limpar();

        AlertService.showOk('Ok','Registro salvo com sucesso!');
    }

    function limpar(){
        $scope.entidade = {};
    }
}