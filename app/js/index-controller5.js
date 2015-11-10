angular.module('senai', [
    'ui.growl',
    'ui.grid',
    'ui.grid.resizeColumns'
]);

angular.module('senai')
    .controller('IndexController', IndexController);

function IndexController($scope, AlertService, GridColun){
    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.gridItemClick = gridItemClick;
    $scope.excluirItemGrid = excluirItemGrid;

    $scope.gridStyle = {};
    $scope.gridStyle.width = '100%';
    $scope.gridStyle.height = '200px';

    var template =
    '<div class="ui-grid-cell-contents" " ' +
    '   ng-click="grid.appScope.gridItemClick(row, col, $index)" > ' +
    '   <span ng-bind="::row.entity[col.colDef.field]"></span>' +
    '</div>';

    var templateBotao =
        '<div class="ui-grid-cell-contents"> ' +
        '   <button class="btn btn-danger btn-xs" ' +
        '       ng-click="grid.appScope.excluirItemGrid(row)">' +
        '       <i class="fa fa-trash"></i>' +
        '</button>' +
        '</div>';

    var nome = $scope.entidade.nome;
    var nome = $scope.entidade['nome'];

    $scope.gridOptions = {
        data: 'listaDePessoas',
        columnDefs: [
            { name: 'Pessoa', field:'nome', width: 150, cellTemplate: template},
            { name: 'E-mail', field:'email', minWidth: 250, cellTemplate: template},
            { name: '', field:'excluir', width: 50, cellTemplate: templateBotao}
        ],
        enableRowSelection: true,
        enableColumnMenus: false
    };

    function gridItemClick(row, col, $index){
        var teste = row;
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