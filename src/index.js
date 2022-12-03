import './imgs/bg.png';
import home from './imgs/home.jpg';

import './styles/layout.css';

import './styles/home.css';
import { renderHome } from './scripts/home.js';

const body = document.querySelector('body');

body.innerHTML = `
<header>
    <span class="logo">Gastronomy Deluxe</span>
    <nav>
        <ul class="nav">
            <li><a class="item" href="#">Home</a></li>
            <li><a class="item" href="#">Menu</a></li>
            <li><a class="item" href="#">Contact</a></li>
        </ul>
    </nav>

</header>

<main class="content"></main>

<footer>
    <a href="https://www.freepik.com/free-photo/restaurant-interior_1243339.htm#query=luxury%20restaurant&position=0&from_view=keyword">Background image by evening_tao &nbsp;</a> on Freepik
</footer>
`;

renderHome();