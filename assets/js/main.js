// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize reveal animations
  initRevealAnimations();
  
  // Add active class to current navigation item
  highlightCurrentNavItem();
  
  // Initialize mobile menu toggle
  initMobileMenu();
});

/**
 * Adds animation to elements as they scroll into view
 */
function initRevealAnimations() {
  // Get all elements with the 'reveal' class
  const revealElements = document.querySelectorAll('.reveal');
  
  // Check if we should animate elements on load
  revealElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    }
  });
  
  // Add scroll event listener
  window.addEventListener('scroll', function() {
    revealElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('active');
      }
    });
  });
}

/**
 * Checks if an element is visible in the viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if element is in viewport
 */
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
}

/**
 * Highlights the current page in the navigation menu
 */
function highlightCurrentNavItem() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    // Get the href attribute and extract the path
    const href = link.getAttribute('href');
    const hrefPath = href.split('/').filter(Boolean).pop();
    const currentPathSegment = currentPath.split('/').filter(Boolean).pop();
    
    // If we're on the homepage
    if (currentPath === '/' || currentPath === '') {
      if (href === '/' || href.endsWith('/') && href.split('/').filter(Boolean).length === 0) {
        link.classList.add('active');
      }
    } 
    // For other pages
    else if (hrefPath === currentPathSegment) {
      link.classList.add('active');
    }
  });
}

/**
 * Initializes mobile navigation menu toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('mobile-active');
      menuToggle.classList.toggle('active');
    });
  }
}

/**
 * Progressively enhances the page with interactive features
 * only if JavaScript is enabled
 */
function enhanceInteractivity() {
  // Add 'js-enabled' class to body for CSS targeting
  document.body.classList.add('js-enabled');
  
  // Make project cards clickable
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const link = card.querySelector('.project-link');
    if (link) {
      card.addEventListener('click', function(e) {
        if (!e.target.closest('a')) {
          link.click();
        }
      });
      card.style.cursor = 'pointer';
    }
  });
  
  // Add tracking for external link clicks (for analytics)
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function(e) {
      // Could add analytics tracking code here
      // Example: gtag('event', 'click', { 'event_category': 'external_link', 'event_label': this.href });
    });
  });
}

// Call the enhance function after a slight delay to ensure page is rendered
setTimeout(enhanceInteractivity, 100); 