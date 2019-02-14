agendaNet.controller('MainController', ['$scope', 'GlobalConfig', 'AgendaApiService', function ($scope, GlobalConfig, AgendaApiService) {
    $scope.appName = GlobalConfig.appName;
    $scope.contatos = [];

    $scope.listarContatos = function () {
        AgendaApiService.listarContatos().then(function success(response) {
            $scope.contatos = response.data;
        });
    };

    (function init() {
        $scope.listarContatos();
    })();

}]);