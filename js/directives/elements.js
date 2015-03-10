'use strict'

tigApp.
    directive('navbar', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/elements/navBar.html'
        }
    });

tigApp.
    directive('footer', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/elements/footer.html'
        }
});
