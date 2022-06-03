const btnMenu = document.getElementById('btn-menu');
const closeMenu = document.getElementById('btn-close');

function toggleMenu() {
    const nav = document.getElementById('navigation');
    nav.classList.toggle('active');
}

function close() {
    const nav = document.getElementById('navigation');
    nav.classList.close('remove');
}

btnMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', close);