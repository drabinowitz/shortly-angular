angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $timeout, Links) {
  // Your code here
  $scope.urlPattern = Links.validUrl;
  $scope.link = {};
  $scope.addLink = function(isValid){
    if (isValid){
      $scope.link.url = $scope.linkUrl;
      $scope.linkUrl = '';
      Links.add($scope.link).then(function(results){
        showResult(results,true);
      },function(error){
        showResult(error.data.error,false);
      });
    } else {
      $scope.linkUrl = '';
      showResult('Not a Valid Url', false);
    }
  };
  var showResult = function(res,success){
    var local = 'error';

    if (success){
      local = 'results';
      res = true;
    }
    $scope[local] = res;
    $timeout(function(){
      $scope[local] = null;
    },3000);
  };
});
