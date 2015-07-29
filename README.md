angular-mousetrap-service
=========================
[![npm version](https://badge.fury.io/js/angular-mousetrap-service.svg)](http://badge.fury.io/js/angular-mousetrap-service)
[![Bower version](https://badge.fury.io/bo/angular-mousetrap-service.svg)](http://badge.fury.io/bo/angular-mousetrap-service)

[AngularJS](https://angularjs.org) Wrapper for [mousetrap.js](http://craig.is/killing/mice) whithout registering it in the global scope.


How to use
----------

1. Install angular-mousetrap-service.  
Using bower: `bower install --save angular-mousetrap-service`  
Or, using npm: `npm install --save angular-mousetrap-service`

2. Include angular-mousetrap-service into your project.
	```HTML
	<script src="angular-mousetrap-service.min.js"></script>
	```

3. Add ```angular-mousetrap``` module in the dependencies of a angular module:
	```JavaScript
	angular.module('exampleApp', ['angular-mousetrap'])
	```

4. Inject the Mousetrap service into a controller, a directive, etc:
	```JavaScript
	.controller('ExampleCtrl', ['$scope','Mousetrap', function($scope, Mousetrap){
		Mousetrap.bind('ctrl+s', function() {
			//...
		});
	}]);
	```

Obs.: See the [Demo page](http://the-darc.github.io/angular-mousetrap/) for pratical real example.

How to contribute
-----------------

I am very glad to see this project living with pull requests.

LICENSE
-------

Copyright (c) 2015 Daniel Campos

Licensed under the MIT license.
