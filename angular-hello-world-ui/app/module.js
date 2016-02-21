var model = {};

angular
	.module('angularHelloWorld', [])
	.run(['$http', function ($http) {
		$http
			.get("/angular-hello-world-service/message/welcome")
			.success(function (data) {
				model.message = data.message;
			});
	}])
	.controller("HelloWorldController", [function () {
		this.data = model;
	}]);
