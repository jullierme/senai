angular.module('senai')
    .service('AlertService', AlertService);

AlertService.$inject = ['$growl'];

function AlertService($growl){
    this.showOk = showOk;
    this.showError = showError;
    this.showAlert = showAlert;
    this.showInfo = showInfo;

    function showOk(titulo, mensagem, tempo){
        if(!tempo)
            tempo = 3000;

        $growl.box(titulo, mensagem, {
            class: 'success',//verde
            timeout: tempo
        }).open();
    }

    function showError(titulo, mensagem, tempo){
        if(!tempo)
            tempo = 3000;

        $growl.box(titulo, mensagem, {
            class: 'danger',//vermelho
            timeout: tempo
        }).open();
    }

    function showAlert(titulo, mensagem, tempo){
        if(!tempo)
            tempo = 3000;

        $growl.box(titulo, mensagem, {
            class: 'warning',//laranja
            timeout: tempo
        }).open();
    }

    function showInfo(titulo, mensagem, tempo){
        if(!tempo)
            tempo = 3000;

        $growl.box(titulo, mensagem, {
            class: 'primary',//azul
            timeout: tempo
        }).open();
    }
}