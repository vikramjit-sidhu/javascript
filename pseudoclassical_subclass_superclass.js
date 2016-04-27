/*
Pseudoclassical pattern, subclass and superclass
*/

var Car = function(loc) {
	this.loc = loc
};
Car.prototype.move = function() {
	this.loc++;
};

var Van = function(loc) {
	Car.call(this, loc);
}
Van.prototype = Object.Create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function() {
	
}

var ben = new Car();

var amy = new Van();