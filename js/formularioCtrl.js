app.controller('formularioCtrl', ['$scope','$routeParams','$http', function($scope, $routeParams, $http){
	$scope.setActive("mFormulario");

	// Para ocultar el mensaje de actualizado correctamente
	$scope.insertado = false;

	// Flag de error en los datos
	$scope.errorAlInsertar = false;

	$scope.mensajeAgregado = '';

	// Variable donde se guarda la info del alumno seleccionado
	$scope.cadena = {};

	$scope.guardarAdn = function(){
		$http.post($scope.urlBase + 'challenge/mutant', $scope.cadena)
			.success(function(data){
				$scope.mensajeAgregado = data.result.esMutante;
				if(data.statusCode === "200" || data.statusCode === "403") {
					document.getElementById("formularioAdn").reset();
					$scope.insertado = true;
					setTimeout(function(){
						$scope.insertado = false;
						$scope.$apply();
					}, 3000);
				} else {
					$scope.errorAlInsertar = true;
					setTimeout(function(){
						$scope.errorAlInsertar = false;
						$scope.$apply();
					}, 10000);
				};
			});
		}
}]);