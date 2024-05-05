document.addEventListener("DOMContentLoaded", function() {
    var readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var content = this.previousElementSibling;
            content.classList.toggle('expanded');
            this.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
        });
    });
});
