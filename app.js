angular.module('mysFabriken', ['ui.router'])

.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])

.factory('items', [function(){
  var items = {
    items: []
  };
  return items;
}])

.controller('MainCtrl', [
  '$scope',
  'items',
  function($scope, items){

    $scope.items = items.items;


    $scope.addItem = function(){
      //Validation: not empty
      if(!$scope.title || $scope.title === '') { return; }

      //Push to item array as JSON
      $scope.items.push({
        title: $scope.title,
        description: $scope.description,
        upvotes: 0});
        $scope.title = '';
        $scope.description = '';
      };

      $scope.incrementUpvotes = function(item) {
        item.upvotes += 1;
      };

    }]);
