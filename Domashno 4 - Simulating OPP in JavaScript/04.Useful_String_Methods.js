"use strict";

String.prototype.startsWith  = function(substring) {
    var substringLength = substring.length;

    if (substringLength > this.length) {
        return false;
    }
    var i;
    for (i = 0; i < substringLength; i += 1) {
        if (substring[i] !== this[i]) {
            return false;
        }
    }

    return true;
};

String.prototype.endsWith = function(substring) {
    var stringLength = this.length;
    var substringLength = substring.length;

    if (substringLength > stringLength) {
        return false;
    }

    var i;
    for (i = 0; i < substringLength; i += 1) {
        if (substring[substringLength - i] !== this[stringLength - i]) {
            return false;
        }
    }

    return true;
};

String.prototype.left = function(count) {
    var result = "";

    var stringLength = this.length;

    if (count > stringLength) {
        count = stringLength;
    }

    var i;
    for (i = 0; i < count; i += 1) {
        result += this[i];
    }

    return result;
};

String.prototype.right = function(count) {
    var result = "";

    var stringLength = this.length;

    if (count > stringLength) {
        count = stringLength;
    }

    var startIndex = stringLength - count;

    var i;
    for (i = startIndex; i < stringLength; i += 1) {
        result += this[i];
    }

    return result;
};

String.prototype.padLeft  = function(count, character) {
    var result = "";

    if (character === undefined) {
        character = " ";
    }

    count -= this.length;

    if (count < 0) {
        count = 0;
    }

    var i;
    for (i = 0; i < count; i += 1) {
        result += character;
    }

    result += this;

    return result;
};

String.prototype.padRight = function(count, character) {
    var result = "" + this;

    if (character === undefined) {
        character = " ";
    }

    count -= this.length;

    if (count < 0) {
        count = 0;
    }

    var i;
    for (i = 0; i < count; i += 1) {
        result += character;
    }

    return result;
};

String.prototype.repeat = function(count) {
    var result = "";

    var i;
    for (i = 0; i < count; i += 1) {
        result += this;
    }

    return result;
};

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log(example.left(9));
console.log(example.left(90));