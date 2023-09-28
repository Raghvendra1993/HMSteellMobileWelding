const links = document.querySelectorAll('nav a');
const galleries = document.querySelectorAll('.gallery');

links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Hide all galleries
        galleries.forEach((gallery) => {
            gallery.classList.remove('active');
        });

        // Show the selected gallery
        galleries[index].classList.add('active');
    });
});
