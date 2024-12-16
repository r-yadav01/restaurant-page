import "./cssreset.css";
import "./styles.css";
import homepage from "./homePage.js";
import menupage from "./menu.js";

document.addEventListener('DOMContentLoaded', homepage());

const menu = document.querySelector('#menuBtn');
menu.addEventListener('click', menupage);

const home = document.querySelector('#homeBtn');
home.addEventListener('click', homepage);
