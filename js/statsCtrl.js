app.controller('statsCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.setActive("mEstadisticas");

	// Variable donde se guarda la info del alumno seleccionado
	$scope.estadistica = {};

	$scope.errorAlConsutlar = false;
	$scope.errorEnMail = {
		exito: false,
		error: false
	};

	$scope.formData = {};

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

	$scope.$on('$routeChangeSuccess', $scope.refrescar);

	$scope.enviarMail = function () {
		$http.post($scope.urlBase + 'challenge/mail', $scope.formData)
			.success(function (data) {
				$scope.errorEnMail.mensaje = data.result;
				if (data.statusCode === "200") {
					document.getElementById("formularioMail").reset();
					$scope.errorEnMail.exito = true;
					setTimeout(function () {
						$scope.errorEnMail.exito = false;
						$scope.$apply();
					}, 3000);
				} else {
					$scope.errorEnMail.error = true;
					setTimeout(function () {
						$scope.errorEnMail.error = false;
						$scope.$apply();
					}, 10000);
				};
				console.log($scope.errorEnMail);
			});
	}

}]);