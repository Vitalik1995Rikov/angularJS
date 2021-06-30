let app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
    console.log('ctrl scope', $scope);
    $scope.posts = [
        {
            name: 'This is post about cats'
        },
        {
            name: 'This is post about dogs'
        }
    ];
});

app.directive('post', function(){
    return {
        scope: false,
        template: '<div ng-repeat="post in posts">{{post.name}}</div>',
        link: function (scope, element, attrs) {
            console.log('scope', scope);
        }
    }
})