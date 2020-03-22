// Nav toggle function
document.getElementById('nav__toggle').addEventListener('click', _ => {
    document.getElementById('nav-menu').classList.toggle('nav-menu--active');
    document.getElementById('nav__toggle').classList.toggle('fa-bars');
    document.getElementById('nav__toggle').classList.toggle('fa-times');
});