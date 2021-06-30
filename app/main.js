let app = angular.module('app', []);

app.run(function ($templateCache) {
    $templateCache.put('bookmarks.html', '<div ng-repeat="bookmark in bookmarks">{{bookmark.name}}</div>')
});

app.directive('fooBar', function($templateCache) {
    let bookmarks = [
        {
            id: 1,
            name: 'EmberJS'
        },
        {
            id: 2,
            name: 'AngularJS'
        },
        {
            id: 3,
            name: 'NodeJS'
        },
    ];
    return {
        restrict: 'E',
        templateUrl: 'bookmarks.html',
        link: function (scope, element, attrs) {
            console.log($templateCache.info());
            scope.bookmarks = bookmarks;
        }
    }
});