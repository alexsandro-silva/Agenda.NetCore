agendaNet.directive("modal", ['$compile', function ($compile) {
    return {
        templateUrl: "../views/modal.html",
        replace: true,
        restrict: "E",
        require: "ngModel",
        scope: {
            edit: "=",
            contato: "=",
            ngModel: "="
        },
        link: function (scope, element, attrs, ngModelController) {

            scope.salvarContato = function () {
                alert("Salvou o contato");
            };

            scope.editarContato = function () {
                alert("Editou o contato");
                console.log(ngModel);
            };

            var button = angular.element(element[0].querySelector('#btnSalvar'));

            if (!scope.edit) {
                button.attr("ng-click", "salvarContato()");
            } else {
                button.attr("ng-click", "editarContato()");
            }

            console.log(ngModelController);


            //element.attr("ng-click", "showAlert()");

            $compile(element)(scope);
        }
    };
}]);