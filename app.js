angular.module('mysFabriken', [])
.controller('MainCtrl', [
  '$scope',
  function($scope){

    $scope.items = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ];

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
