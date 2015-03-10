var tigApp = angular.module('tigApp', ['ngRoute']).config(
    function($routeProvider){
        $routeProvider.when('/home',{
            templateUrl:'templates/views/home.html',
            controller: 'homecontroller'
        });
        $routeProvider.when('/tour',{
            templateUrl:'templates/views/tour.html',
            controller: 'tourcontroller'
        });
        $routeProvider.when('/bio',{
            templateUrl:'templates/views/bio.html',
            controller: 'biocontroller'
        });
        $routeProvider.when('/contact',{
            templateUrl:'templates/views/contact.html',
            controller: 'biocontroller'
        });
        $routeProvider.when('/mailer',{
            templateUrl:'templates/views/mailer.html',
            controller: 'biocontroller'
        });
        $routeProvider.when('/audio',{
            templateUrl:'templates/views/audio.html',
            controller: 'biocontroller'
        });
        $routeProvider.otherwise('/home');
    }
)
