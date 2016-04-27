
// carlike is the decorator function.

var carlike = function(obj, loc) {
	obj.loc = loc;
	obj.move = function() {
		this.loc++;
	};
	return obj;
};


/* The execution of this function is confusing, 'obj' does not exist when vikram calls it
Does it remember the reference to vikram and hence execute it? */
// Even though this code works too
var carlike_two = function(obj, loc) {
	obj.loc = loc;
	obj.move = function() {
		obj.loc++;
		console.log(obj);
	};
	return obj;
};


var vikram = carlike({}, 3);
console.log()