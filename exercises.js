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
app.directive('formGroup', function() {
  return {
    scope: {
      'difference': '@',
    },
    template: '<form><div class="form-group"><label>{{difference}}</label><input type="text" class="form-control" placeholder={{difference}}></div></form>'
  };
});
app.directive('submitButton', function() {
  return {
  template: '<button type="submit" class="btn btn-default">Submit</button>'  
  };
});
