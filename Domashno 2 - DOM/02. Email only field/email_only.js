"use strict";

var button = document.getElementById('my_button');

button.onclick = function validateInput() {
    var inputElement = document.getElementById('input').value;
    trimString(inputElement);

    var divElementForValidate = document.getElementById('my_div').innerHTML;
    divElementForValidate = inputElement;
    document.getElementById('my_div').innerHTML = divElementForValidate;

    var isValidEmail = validateEmail(inputElement);
    console.log(isValidEmail);

    if (isValidEmail) {
        changeBackground('#90EE90');
    }
    else {
        changeBackground('red');
    }
};

function validateEmail(email) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(email);
}

function changeBackground(color) {
    var element = document.getElementById('my_div');
    element.style.background = color;
}

function trimString(string) {
    return string.trim();
}