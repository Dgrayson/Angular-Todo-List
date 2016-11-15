var todoList = angular.module('todoList', []);

todoList.controller('TodoCtrl', function TodoCtrl($scope){
	$scope.todo = [
		{
			entry: "Hello World",
		}
	]; 

	$scope.addEntry = function(){
		$scope.todo.push({entry: $scope.entryText});
		$scope.entryText = ''; 
	}

	$scope.deleteEntry = function(index){
		$scope.todo.splice(index, 1);
	}
})