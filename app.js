(function(){
	
	angular.module("LaunchCheck",[])
	.controller("LunchCheckController", LunchCheckController);
	
	LunchCheckController.$inject=['$scope'];
	
	function LunchCheckController($scope){
		$scope.message="";
		$scope.foodItems="";
		$scope.messageClass="";
		$scope.textClass="";
		$scope.checkIfTooMuch=function(){
			//count not counting emply items.
			var foodItemCount=$scope.foodItems.split(",").filter($scope.isNotEmpty).length;
			console.log("count "+foodItemCount);
			if(foodItemCount==0){
				$scope.messageClass="red";
				$scope.textClass="border-red";
				$scope.message="Please enter data first";
			}else if(foodItemCount<=3){
				    $scope.messageClass="green";
				    $scope.textClass="";
					$scope.message="Enjoy!";
			}else{
					$scope.messageClass="red";
					$scope.textClass="border-red";
					$scope.message="Too much!";
					
			}
			
		}
		$scope.isNotEmpty=function(value){
			return (value=="") ?false:true; 
			
		}
		
		
		
	}
	
}());