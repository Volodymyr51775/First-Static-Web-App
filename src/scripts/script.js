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

