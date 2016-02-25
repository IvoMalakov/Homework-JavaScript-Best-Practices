"use strict";

var checkbox = document.getElementById('checkbox');

checkbox.onclick = function () {
    toggleSub(this, 'div_to_show');
};

function toggleSub (box, id) {
    var element = document.getElementById(id);

    if (box.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}