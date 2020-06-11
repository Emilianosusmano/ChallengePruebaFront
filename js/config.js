app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/formulario',{
			templateUrl: 'parciales/formulario.html',
			controller: 'formularioCtrl'
		})
		.when('/stats',{
			templateUrl: 'parciales/stats.html',
			controller: 'statsCtrl'
		})
		.when('/verdatos',{
			templateUrl: 'parciales/verdatos.html',
			controller: 'verDatosCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});