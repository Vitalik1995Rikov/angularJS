let app = angular.module('app', []);

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







// этот вариант почему-то не работал


// let app = angular.module('app', []);

// app.controller('mainCtrl', function($http, $scope) {
//     $http.get('http://localhost:3001/books')
//         .success(function (result) {
//             console.log('success', result);
//             $scope.books = result;
//         })
//         .error(function (result) {
//             console.log('error');
//         });
// });