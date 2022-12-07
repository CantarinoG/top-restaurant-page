import './styles/layout.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

import { renderHome } from './scripts/home.js';
import { renderMenu } from './scripts/menu.js';
import { renderContact } from './scripts/contact.js';

const body = document.querySelector('body');

body.innerHTML = `
<header>
    <span class="logo">Gastronomy Deluxe</span>
    <nav>
        <ul class="nav">
            <li class="item" id="home">Home</li>
            <li class="item" id="menu">Menu</li>
            <li class="item" id="contact">Contact</li>
        </ul>
    </nav>

</header>

<main class="content"></main>

<footer>
    <a href="https://www.freepik.com/free-photo/restaurant-interior_1243339.htm#query=luxury%20restaurant&position=0&from_view=keyword">Background image by evening_tao &nbsp;</a> on Freepik
</footer>
`;

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', () => {
    renderHome();
});
menuBtn.addEventListener('click', () => {
    renderMenu();
});
contactBtn.addEventListener('click', () => {
    renderContact();
});


renderHome();