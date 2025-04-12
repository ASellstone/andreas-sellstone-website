export default function initReturnToTop() {
  const backToTopButton = document.getElementById('return-to-top');
  let lastScrollTop = window.scrollY;
  let hideTimeout;
  
  window.addEventListener('scroll', function () {
    const currentScrollTop = window.scrollY;
  
    if (currentScrollTop < lastScrollTop) {
      // Scrolling up
      backToTopButton.classList.add('show');
  
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        backToTopButton.classList.remove('show');
      }, 1000);
    }
  
    lastScrollTop = currentScrollTop;
  });
  
  backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
