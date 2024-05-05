function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}

const menuBtn = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.menuTest p');
const menu = document.querySelector('.menuTest');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        menu.classList.toggle('active');
    });
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
}