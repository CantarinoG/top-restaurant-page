import facebook from '../imgs/facebook.svg';
import instagram from '../imgs/instagram.svg';
import whatsapp from '../imgs/whatsapp.svg';
import twitter from '../imgs/twitter.svg';

export function renderContact() {
    const content = document.querySelector('.content');
    content.innerHTML = `
    <h1>Contact Us</h1>
    <p>+999 999 999</p>
    <p>9041 Research Blvd, Austin, Texas, United States</p>
    <div class="icon-container">
        <img class='icon-img' src="${facebook}" title="Facebook Icon">
        <img class='icon-img' src="${instagram}" title="Instagram Icon">
        <img class='icon-img' src="${whatsapp}" title="Whatsapp Icon">
        <img class='icon-img' src="${twitter}" title="Twitter Icon">
    </div>
    <h1>Time</h1>
    <p>Weekdays<br>07:00am - 11:00pm</p>
    <p>Weekends<br>09:00pm - 12:00pm</p>
    `;
}