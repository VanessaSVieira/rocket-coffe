const btnMenu = document.getElementById('btn-menu');

function toggleMenu() {
    const nav = document.getElementById('navigation');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);