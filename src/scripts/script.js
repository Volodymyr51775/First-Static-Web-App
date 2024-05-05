window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.content, .about, .about_text, .about_photo, .about_2, .text, .image-container'); // замініть це на селектори ваших елементів
    var windowHeight = window.innerHeight;

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
            }
        }
    }

    checkPosition();
});
document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.content, .about, .about_text, .about_photo, .about_2, .text'); // замініть це на селектори ваших елементів
    var windowHeight = window.innerHeight;

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
            }
        }
    }

    checkPosition();

    window.addEventListener('scroll', checkPosition);
});



function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

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