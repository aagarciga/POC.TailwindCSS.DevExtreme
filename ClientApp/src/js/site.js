//import './bootstrap.js';
//import 'bootstrap/dist/css/bootstrap.css';

import "../css/site.css";
import "../css/layout.css";

console.log("The 'site' bundle has been loaded");

export function dropdownHandler(element) {
    console.log(element)
    let single = element.getElementsByTagName("ul")[0];
    single.classList.toggle("hidden");
}
export function MenuHandler(el, val) {
    let MainList = el.parentElement.getElementsByTagName("ul")[0];
    let closeIcon = el.parentElement.getElementsByClassName("close-m-menu")[0];
    let showIcon = el.parentElement.getElementsByClassName("show-m-menu")[0];
    if (val) {
        MainList.classList.remove("hidden");
        el.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.classList.add("hidden");
    }
}
let sideBar = document.getElementById("mobile-nav");
let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
sideBar.style.transform = "translateX(-100%)";
export const sidebarHandler = (check) => {
    console.log('sidebar');
    if (check) {
        sideBar.style.transform = "translateX(0px)";
        menu.classList.add("hidden");
        cross.classList.remove("hidden");
    } else {
        sideBar.style.transform = "translateX(-100%)";
        menu.classList.remove("hidden");
        cross.classList.add("hidden");
    }
};
let list = document.getElementById("list");
let chevrondown = document.getElementById("chevrondown");
let chevronup = document.getElementById("chevronup");
export const listHandler = (check) => {
    if (check) {
        list.classList.remove("hidden");
        chevrondown.classList.remove("hidden");
        chevronup.classList.add("hidden");
    } else {
        list.classList.add("hidden");
        chevrondown.classList.add("hidden");
        chevronup.classList.remove("hidden");
    }
};
let list2 = document.getElementById("list2");
let chevrondown2 = document.getElementById("chevrondown2");
let chevronup2 = document.getElementById("chevronup2");
export const listHandler2 = (check) => {
    if (check) {
        list2.classList.remove("hidden");
        chevrondown2.classList.remove("hidden");
        chevronup2.classList.add("hidden");
    } else {
        list2.classList.add("hidden");
        chevrondown2.classList.add("hidden");
        chevronup2.classList.remove("hidden");
    }
};

document.getElementById('sidebarHandler').addEventListener('click', () => {
    sidebarHandler(false)
})

document.getElementById('cross').addEventListener('click', () => {
        sidebarHandler(false)
})

document.getElementById('sidebarHandler').addEventListener('click', () => {
    sidebarHandler(false)
})

document.getElementById('menu').addEventListener('click', () => {
    sidebarHandler(true)
})


document.getElementById('topmenu')
    .addEventListener('click', (event) => {

        if (event.target.closest('.dropdown')) {
            dropdownHandler.call(event.target.parentElement, event.target.parentElement, event);
        }
    });

