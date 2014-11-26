angular.module('shortly.links.child', ['ui.router'])

  .controller('childController', function($scope, $stateParams, Links){

    $scope.totalVisits = 0;
    $scope.avgVisits = 0;

    Links.get().then(function(links){
      for (var i = 0; i < links.length; i++){
        $scope.totalVisits += links[i].visits;
        if (links[i].code === $stateParams.code){
          $scope.link = links[i];
        }
      }
      $scope.avgVisits = $scope.totalVisits/links.length;
      if (!$scope.link){
        $scope.error="could not find link";
      } else {
        var xLabels = [$scope.link.url, 'Average Visits', 'Total Visits'];
        var chart = c3.generate({
          bindto: '.link-details-chart',
          data: {
            columns: [
              ['visits', $scope.link.visits, $scope.avgVisits, $scope.totalVisits]
            ],
            types: {
              visits: 'bar'
            }
          },
          axis: {
            x: {
              tick: {
                format: function(d){return xLabels[d];}
              }
            }
          }
        });
      }
    });

  });
