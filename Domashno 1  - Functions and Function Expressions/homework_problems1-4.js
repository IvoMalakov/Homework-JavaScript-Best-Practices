"use strict";

//Problem 1 - Function Arguments
console.log('------------------------Problem 1-----------------------------------');

function printArgsInfo() {
    for (var arg in arguments) {
        console.log(arguments[arg] + ' (' + typeof(arguments[arg]) + ')');
    }
}

printArgsInfo(2, 3, 2.5, -110.5564, false);
printArgsInfo(null, undefined, "", 0, [], {});
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);


//Problem 2 - call() and aplly()
console.log('\n');
console.log('------------------------Problem 2-----------------------------------');
printArgsInfo.call(this);
printArgsInfo.call(this,2, 3, 2.5, -110.5564, false);

var arr = [2, 3, 2.5, -110.5564, false];
printArgsInfo.apply(this);
printArgsInfo.apply(this, arr);

//Problem 3  - Test the value of this
console.log('\n');
console.log('------------------------Problem 3-----------------------------------');

function testContext() {
    console.log(this);
}

testContext();

function testThis() {
    testContext();
}

var object = new testContext();
//console.log(object);

//In the first case (call the function from the global scope) this object is undefined because it donst exists. No reference to it.

//In the second case (call the functiuon from another function) this object is an empty object beacause it's owner is the another
//function testThis() and in JavaScript functions are also objects. Function testThis() is just call function testContext() so it is an empty object.

//In the third case (call the function as an object) this is also empty object but we can not see it on the console. If we want to see it
//we must console.log the variable object. Var object is the owner of our funcion and it is an empty object.

//Problem 4  - Adding Numbers Using Functions
console.log('\n');
console.log('------------------------Problem 4-----------------------------------');

function add (number) {
    var sum = number;

    function makeSum(anotherNumber) {
        sum += anotherNumber;
        return makeSum;
    }

    makeSum.toString = function () {
        return sum;
    };

    return makeSum;
}

console.log(add(1).toString());
console.log(add(2)(3).toString());
console.log(add(1)(1)(1)(1)(1).toString());
console.log(add(1)(0)(-1)(-1).toString());

var addTwo = add(2);
console.log(addTwo.toString());
console.log(addTwo(3).toString());
console.log(addTwo(3)(5).toString());