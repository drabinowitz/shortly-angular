angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = Links.get;
  $scope.getLinks()
    .then(function(links){
      $scope.data.links = links;
    });
});
