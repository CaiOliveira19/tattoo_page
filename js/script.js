const btnMenu = document.getElementById('btn_menu');

function toggleMenu(){
    const nav = document.getElementById('Menu');
    const navs = document.getElementById('btn_menu');
    nav.classList.toggle('active');
    navs.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);