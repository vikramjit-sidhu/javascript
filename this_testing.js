
var foo = function() {
	console.log(this, " Hola Mundo!");
};

var obj1 = {};

obj1.func = foo

obj1.func();
