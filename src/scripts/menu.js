export function renderMenu() {
    const content = document.querySelector('.content');
    content.innerHTML = `
    <div class="grid-container">
        <div class="grid-item">Ham and Baked Ricotta Cheesecake Platter</div>
        <div class="grid-item">Macamia Crusted Lamb with Chilli and Macadamia Sambal</div>
        <div class="grid-item">New Zucchini Slice</div>
        <div class="grid-item">Pizza Bianco with Gorgonzola and Zucchini</div>
        <div class="grid-item">Spiced Pineapple and Sake Glazed Ham</div>
        <div class="grid-item">Tiramisu French Toast</div>
        <div class="grid-item">White Chocolate and Mascarpone Cheesecake with Mulberry Compote</div>
        <div class="grid-item">White Chocolate Cream and Strawberry Mille Feuille</div>
    </div>
    `;
}