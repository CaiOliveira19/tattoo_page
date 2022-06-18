const btnMenu = document.getElementById('btn_menu');

function toggleMenu(){
    const nav = document.getElementById('#Menu');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);