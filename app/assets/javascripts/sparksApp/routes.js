console.log('iniciando o routes.js');

SparksApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'UsersCtrl',
                templateUrl: 'users/index.html'
            }).
            when('/users', {
                controller: 'UsersCtrl',
                templateUrl: 'users/index.html'
            })
            .when('/recados', {
                controller: 'RecadosCtrl',
                templateUrl: 'recados/recados.html'
            })
            .when('/recados/novo', {
                controller: 'RecadosCtrl',
                templateUrl: 'recados/recado_form.html'  
            })
    }
]);