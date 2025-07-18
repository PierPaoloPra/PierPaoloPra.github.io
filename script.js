document.addEventListener("DOMContentLoaded", function() {
    const aphorisms = [
        "When someone is wearing a mask, he is going to tell the truth (Bob Dylan)",
        "You can ignore reality, but you cannot ignore the consequences of ignoring reality (Ayn Rand)",
        "Zig when others Zag",
        "E' necessario essere superficiali, il mondo è troppo complesso per essere compreso completamente",
        "Happiness is the state in which you don't desire",
        "Enlightenment is the space between your thoughts",
        "Is happiness joy, or peace?",
        "Quando c'è un problema, puoi fare parte del problema, della soluzione o dell'arredamento"
    ];

    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const aphorismIndex = dayOfYear % aphorisms.length;
    document.getElementById("aphorism").innerText = aphorisms[aphorismIndex];

    const menuContainer = document.querySelector('.menu-container');
    const menu = document.querySelector('.menu');
    let timeoutId;

    menuContainer.addEventListener('mouseover', () => {
        clearTimeout(timeoutId);
        menu.style.display = 'block';
    });

    menuContainer.addEventListener('mouseout', () => {
        timeoutId = setTimeout(() => {
            menu.style.display = 'none';
        }, 2000);
    });
});