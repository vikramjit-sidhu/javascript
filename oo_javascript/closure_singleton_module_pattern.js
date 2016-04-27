var Module = (function(){
    var privateProperty = 'foo';

    function privateMethod(args){
        var localStr = "Always working, in the darkness, in the shadows. Er, also: ";
		return (localStr + args);
    }

    return {
        publicProperty: 'Loud, proud and uncouth',

        publicMethod: function(args){
			return 
        },

        privilegedMethod: function(args){
            return privateMethod(args);
        }
    };
})();


console.log(Module.publicProperty);
console.log(Module.publicMethod());
console.log(Module.privilegedMethod());
