
function foo(){
    var localVariable = 'private variable';
    return function bar(){
        return localVariable;
    }
}

var getLocalVariable = foo();
getLocalVariable()