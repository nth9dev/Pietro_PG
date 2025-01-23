const btnMobile = document.getElementById('btn-mobile')

function toogleMenu() {
    const div = document.getElementById('div');
    div.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);


