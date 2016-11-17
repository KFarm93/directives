var app = angular.module('myApp', ['ui.router']);

app.directive('hello', function() {
  return {
    scope: {
      'subject': '@'
    },
    controller: function($scope) {
      if (!$scope.subject) {
        $scope.subject = "world";
      }
    },
    template: '<h1>Hello, {{subject}}!</h1>'
  };
});
app.directive('btButton', function() {
  return {
    scope: {
      'type': '@'
    },
    controller: function($scope) {
      if(!$scope.type) {
        $scope.type = "default";
      }
    },
    template: '<button class="btn btn-{{type}}">Click me</button>'
  };
});
