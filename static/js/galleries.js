// gallery.js

function initGallery(galleryId) {
    const galleryElement = document.getElementById(galleryId);
    if (!galleryElement) {
        console.warn(`Gallery with ID ${galleryId} not found.`);
        return null;
    }

    const images = galleryElement.querySelectorAll('.gallery-images a');
    const dotsContainer = galleryElement.querySelector('.dots-container');
    let currentIndex = 0;

    if (!images.length || !dotsContainer) return null;

    // Create dots
    dotsContainer.innerHTML = '';
    images.forEach((image, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => showImage(index, galleryId);
        dotsContainer.appendChild(dot);
    });

    showImage(currentIndex, galleryId);

    return {
        prevThumbnail() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex, galleryId);
        },
        nextThumbnail() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex, galleryId);
        }
    };
}

function showImage(index, galleryId) {
    const galleryElement = document.getElementById(galleryId);
    if (!galleryElement) return;

    const images = galleryElement.querySelectorAll('.gallery-images a');
    const dots = galleryElement.querySelectorAll('.dots-container .dot');

    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
        if (dots[i]) dots[i].classList.toggle('active', i === index);
    });
}

export function initGalleries() {
    const galleryIds = ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5'];
    const galleries = {};

    galleryIds.forEach(id => {
        const gallery = initGallery(id);
        if (gallery) galleries[id] = gallery;
    });

    // Assign navigation functions to global scope if at least one gallery exists
    if (Object.keys(galleries).length > 0) {
        window.prevThumbnail = (galleryId) => {
            galleries[galleryId]?.prevThumbnail?.();
        };
        window.nextThumbnail = (galleryId) => {
            galleries[galleryId]?.nextThumbnail?.();
        };
    }
}
