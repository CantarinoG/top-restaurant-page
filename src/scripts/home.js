import home from '../imgs/home.jpg';

export function renderHome() {
    const content = document.querySelector('.content');
    content.innerHTML = `
    <blockquote class='quote'>“Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.”</blockquote>
    <cite class='author'>-Giada De Laurentiis</cite>
    <img class='home-img' src="${home}" title="Woman with wine">
    <p class='p1'>The best food and experience money can buy.</p>
    <p class='p2'>Order online or visit us!</p>
    `;
}