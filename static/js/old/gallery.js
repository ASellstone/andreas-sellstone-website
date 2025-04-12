export default function initGallery() {
  function initGalleryInstance(galleryId) {
    const galleryElement = document.getElementById(galleryId);
    if (!galleryElement) return null;

    const images = galleryElement.querySelectorAll('.gallery-images a');
    const dotsContainer = galleryElement.querySelector('.dots-container');

    let currentIndex = 0;

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
      prevThumbnail: () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex, galleryId);
      },
      nextThumbnail: () => {
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
      dots[i].classList.toggle('active', i === index);
    });
  }

  const galleries = {};
  for (let i = 1; i <= 5; i++) {
    galleries[`gallery-${i}`] = initGalleryInstance(`gallery-${i}`);
  }

  window.prevThumbnail = (galleryId) => galleries[galleryId]?.prevThumbnail?.();
  window.nextThumbnail = (galleryId) => galleries[galleryId]?.nextThumbnail?.();
}
