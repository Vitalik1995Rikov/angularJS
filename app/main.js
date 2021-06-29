let app = angular.module('app', []);

app.controller('myBooksCtrl', function ($scope) {
    $scope.showBook = function () {
        console.log('This is some Book');
    }
});

app.controller('angularBookCtrl', function ($scope) {
    $scope.showBook = function () {
        console.log('This is AngularJS Book');
    }
});

app.controller('emberBookCtrl', function ($scope) {

});