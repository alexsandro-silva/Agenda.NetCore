agendaNet.component('modal', {
    templateUrl: "../views/modal.html",
    controller: function () {
        var _this = this;
        console.log(_this.contato);
    },
    bindings: {
        contato: '='
    }
});