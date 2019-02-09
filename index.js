import { futimesSync } from "fs";

function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested div.target');
}

function deepestChild() {  
    return document.querySelector('#grand-node').querySelectorAll('div')[3]
}

function increaseRankBy(n) {
    const list = document.querySelectorAll('ul.ranked-list li')

    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = parseInt(list[i].innerHTML) + n
    }
}