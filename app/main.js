let app = angular.module('app', ['ngMockE2E']);

app.run(function ($httpBackend) {
    let books = [
        {
            name: 'AngularJS'
        },
        {
            name: 'EmberJS'
        },
        {
            name: 'ReactJS'
        }
    ];

    $httpBackend.whenGET('http://localhost:3001/books').respond(200, books);
    $httpBackend.whenPOST('http://localhost:3001/books').respond(function (method, url, data) {
        let result = JSON.parse(data);
        books.push(result);
        return [200, result];
    });
});

app.controller('mainCtrl', function($http, $scope) {
    $http({
        method: 'GET',
        url: 'http://localhost:3001/books'
    }).then(function (result) {
        console.log('success', result);
        $scope.books = result.data;
    }, function (result) {
        console.log('error');
    });

    $scope.addBook = function(book) {
        $http({
            method: 'POST',
            url: 'http://localhost:3001/books'
        }).then(function (result) {
            console.log('Book successfully to backend', result);
            $scope.books.push(book);
            $scope.book = null;
        }, function (result) {
            console.log('Error in book post');
        });
}});