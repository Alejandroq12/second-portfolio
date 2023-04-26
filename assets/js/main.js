(function () {
    let navbar = document.querySelector('#navbar');
    let hamburguer = document.querySelector('#hamburguer');
    hamburguer.addEventListener('click', () => {
        navbar.classList.toggle('open');
    })
})()