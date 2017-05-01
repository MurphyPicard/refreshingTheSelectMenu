angular
  .module("findTheBug", [])
  .controller("bugCTRL", bugCTRL);

function bugCTRL($scope){

  $scope.greetings = ["good morning", "good evening", "good night"];

}
