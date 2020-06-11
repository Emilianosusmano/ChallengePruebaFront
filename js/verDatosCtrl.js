app.controller('verDatosCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.setActive("mVerDatos");

	$scope.datos = {};

	$scope.refrescar = function () {
		$http.get($scope.urlBase + 'challenge/obtenerTodos')
			.success(function (data) {
				$scope.datos = data.result;
			})
	};

	$scope.$on('$routeChangeSuccess', $scope.refrescar);

	$scope.posicion = 10;

	$scope.anteriores = function () {
		if ($scope.posicion > 10) {
			$scope.posicion -= 10;
		}
	};

	$scope.siguientes = function () {
		if ($scope.datos.listaTodos.length > $scope.posicion) {
			$scope.posicion += 10;
		}
	};

	$scope.refrescar = function () {
		$http.get($scope.urlBase + 'challenge/stats')
			.success(function (data) {
				if (data.statusCode === "200") {
					$scope.estadistica = data.result;
					setTimeout(function () {
						$scope.insertado = false;
						$scope.$apply();
					}, 3000);
				} else {
					$scope.errorAlConsutlar = true;
					setTimeout(function () {
						$scope.errorAlInsertar = false;
						$scope.$apply();
					}, 10000);
				};
			});
	};


}]);