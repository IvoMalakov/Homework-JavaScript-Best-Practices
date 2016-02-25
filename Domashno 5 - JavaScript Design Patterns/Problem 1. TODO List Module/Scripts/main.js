"use strict";

var toDoList = toDoList || {},
    list = toDoList._createToDoList('Sunday TODO List'),
    body = document.body;

list.addToDOM();