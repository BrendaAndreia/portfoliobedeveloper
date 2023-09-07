
// ---------- CARROSSEL ---------- //
const carousels = document.querySelectorAll('.image-carousel');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');

function showImage(carousel, index) {
    const images = carousel.querySelectorAll('.carousel-img');

    images.forEach(image => {
        image.style.display = 'none';
    });
    images[index].style.display = 'block';
}
function nextImage(carousel) {
    let currentIndex = carousel.getAttribute('data-current-index') || 0;
    currentIndex = parseInt(currentIndex);

    currentIndex++;
    if (currentIndex >= carousel.querySelectorAll('.carousel-img').length) {
        currentIndex = 0; 
    }

    carousel.setAttribute('data-current-index', currentIndex);
    showImage(carousel, currentIndex);
}
function prevImage(carousel) {
    let currentIndex = carousel.getAttribute('data-current-index') || 0;
    currentIndex = parseInt(currentIndex);

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carousel.querySelectorAll('.carousel-img').length - 1; 
    }

    carousel.setAttribute('data-current-index', currentIndex);
    showImage(carousel, currentIndex);
}
for (let i = 0; i < carousels.length; i++) {
    const carousel = carousels[i];
    const prevButton = prevButtons[i];
    const nextButton = nextButtons[i];

    showImage(carousel, 0);

    prevButton.addEventListener('click', () => prevImage(carousel));
    nextButton.addEventListener('click', () => nextImage(carousel));

    setInterval(() => nextImage(carousel), 3000);
}


// --------- FILTROS TAGS ---------- //
const tagFilters = document.querySelectorAll('.tag-filter');

const cards = document.querySelectorAll('.card');

tagFilters.forEach(tagFilter => {
    tagFilter.addEventListener('click', (e) => {
        e.preventDefault();

        const tag = tagFilter.getAttribute('data-tag');

        cards.forEach(card => {
            card.style.display = 'none';
        });

        cards.forEach(card => {
            const tags = card.getAttribute('data-tags').split(' ');
            if (tags.includes(tag)) {
                card.style.display = 'flex';
            }
        });
    });
});
