let app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<h1>This is my homepage</h1> {{model.message}}',
            controller: 'homeCtrl'
        })
        .when('/posts', {
            template: '<h1>Posts for my site</h1><div ng-repeat="post in posts">{{post.name}}</div>',
            controller: 'postsCtrl'
        })
        .when('/posts/:postId', {
            template: '<h1>This is my cool post</h1>',
            controller: 'postCtrl'
        })
        .otherwise({
            template: '<h1>404 no such page<>'
        })
});

app.controller('homeCtrl', function ($scope) {
    console.log('HomeCtrl');
    $scope.model = {
        message: 'This is my beautifull homepage'
    }
});

app.controller('postCtrl', function ($scope, $routeParams) {
    console.log($routeParams);
    console.log($routeParams.postId);
});

app.controller('postsCtrl', function ($scope, postsFactory) {
    console.log('postsCtrl', postsFactory);
    $scope.posts = postsFactory;
});

app.factory('postsFactory', function () {
    return [
        {
           id: 1,
           name: 'Why AngularJS is good?' 
        },
        {
            id: 2,
            name: 'Why ReactJS is good?' 
        },
        {
            id: 3,
            name: 'Why NodeJS is good?' 
        }
    ]
});