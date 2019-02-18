agendaNet.controller('MainController', ['$scope', 'GlobalConfig', 'AgendaApiService', function ($scope, GlobalConfig, AgendaApiService) {
    $scope.appName = GlobalConfig.appName;
    $scope.formEditMode = false;
    $scope.contato = {};
    $scope.contatos = [];

    $scope.listarContatos = function () {
        AgendaApiService.listarContatos().then(function success(response) {
            $scope.contatos = response.data;
        });
    };

    $scope.salvarContato = function () {
        if ($scope.formEditMode) {
            alert("contato " + $scope.contato.nome + " salvo!");
            $('#contatoModal').modal('hide');
        }
    }

    // funções do modal
    $scope.openEditFormModal = function (contato) {
        $scope.formEditMode = true;
        $scope.contato = contato;
        $('#contatoModal').modal('show');
    };

    $scope.closeModal = function () {
        $('#contatoModal').modal('hide');
    }

    var clearInputs = function () {
        $scope.contato = {};
    };

    $(document).on('hidden.bs.modal', '#contatoModal', function (e) {
        console.log('evento' + e);
        $scope.formEditMode = false;
        clearInputs();

    });

    (function init() {
        $scope.listarContatos();
    })();



}]);