let app = angular.module('app', []);

app.directive('fooBar', function() {
    return {
        restrict: 'ECAM',
        link: function() {
            console.log('fooBar');
        }
    }
});