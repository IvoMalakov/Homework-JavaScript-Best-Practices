"use strict";

function createParagraph(id, text) {
    var element = document.createElement("p");
    var newText = document.createTextNode(text);
    element.appendChild(newText);
    document.getElementById(id).appendChild(element);
}

var id = 'wrapper';
var text = "Some text";

document.onload = createParagraph(id, text);