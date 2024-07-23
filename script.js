// Add scroll event listener to change header style on scroll
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
