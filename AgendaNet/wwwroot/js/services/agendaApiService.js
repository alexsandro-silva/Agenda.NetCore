agendaNet.factory('AgendaApiService', ['$http', 'GlobalConfig', function ($http, GlobalConfig) {

    return AgendaApiService = {

        listarContatos: function () {
            return $http.get(GlobalConfig.apiBaseUrl);
        },

        getContatoPorId: function (id) {
            return $http.get(GlobalConfig.apiBaseUrl + '/' + id);
        },

        salvarContato: function (contato) {
            return $http.post(GlobalConfig.apiBaseUrl, contato);
        },

        alterarContato: function (contato) {
            return $http.put(GlobalConfig.apiBaseUrl, contato);
        },

        excluirContato: function (id) {
            return $http.delete(GlobalConfig.apiBaseUrl + '/' + id);
        }
    };
}]);