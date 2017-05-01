angular
  .module("findTheBug", [])
  .controller("bugCTRL", bugCTRL);

function bugCTRL($scope){

  $scope.greetings = ["hi", "hello", "you are soooo good looking"];

}
