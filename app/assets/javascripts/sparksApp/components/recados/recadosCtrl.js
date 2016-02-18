SparksApp.controller('RecadosCtrl', ['$scope','$location','RecadosService',
    function($scope, $location, RecadosService) {

    $scope.init = function() {
        console.log('RecadosCtrl iniciando...');
        $scope.recados = RecadosService.getRecados();
    }


    $scope.new = function() {
    	console.log('Novo recado');
    }

    $scope.submitRecado = function(recado) {
    	console.log(recado);	
    	var date = new Date();
		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();
    	recado.created_at = day + '-' + monthIndex+1 + '-'+ year;
    	RecadosService.addRecado(recado);
    	$location.path('/recados');
    }


    $scope.series = [
    	{id:1, name: '1'},
    	{id:2, name: '2'},
    	{id:3, name: '3'},
    	{id:4, name: '4'},
    	{id:5, name: '5'},
    	{id:6, name: '6'},
    	{id:7, name: '7'},
    	{id:8, name: '8'},
    	{id:9, name: '9'},

    ];
    $scope.turmas = ['A','B','C','D'];

    $scope.init();
}]);