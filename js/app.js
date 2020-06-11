var app = angular.module('challengeApp',['ngRoute', 'ui.mask', 'ngTouch', 'jcs-autoValidate']);
app.filter('mostrarBoolean', function(){
	return function(input){
		return input ? 'Si' : 'No';
	};
});

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
	$scope.urlBase = 'http://localhost:8080/';
	$scope.menuSuperior = 'parciales/menu.html';

	$scope.setActive = function(Opcion){
		$scope.mInicio     = "";
		$scope.mFormulario = "";
		$scope.mEstadisticas    = "";
		$scope.mVerDatos    = "";

		$scope[Opcion] = "active";
	}
}]);