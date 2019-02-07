agendaNet.controller('MainController', ['$scope', 'GlobalConfig', function ($scope, GlobalConfig) {
    $scope.appName = GlobalConfig.appName;
}]);