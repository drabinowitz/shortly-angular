angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = Links.get;
  $scope.getLinks()
    .then(function(links){
      console.log(links);
      $scope.data.links = links;
    });
  $scope.linkTitle = 'LINKLAND';
})

.directive('shortenedLink', function(){
  return {
    restrict: 'E',
    scope: {
      link:'=link'
    },
    replace: true,
    templateUrl: 'app/links/shortened-link.html'
  };
});
