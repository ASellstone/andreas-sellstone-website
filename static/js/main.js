import initTyping from './typing.js';
import { initChevronRotation } from './chevronRotation.js';
import { hasContentWrapper } from './hasContentWrapper.js';
import { initGalleries } from './galleries.js';
import initReturnToTop from './returnToTop.js';

document.addEventListener('DOMContentLoaded', () => {
  hasContentWrapper()
  initTyping(); // Initialize typing animation logic
  initChevronRotation('toc-body', 'toc-arrow'); // Initialize chevron animation logic
  initGalleries(); // Initialize gallery logic
  initReturnToTop(); // Initialize return to top logic
});
