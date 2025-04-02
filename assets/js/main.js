// Main JavaScript file for The Grand AI Handbook

document.addEventListener('DOMContentLoaded', function() {
  // Initialize code highlighting if Prism.js is available
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
  
  // Set up search functionality
  setupSearch();
  
  // Initialize table of contents if applicable
  initializeTableOfContents();
  
  // Track active section in sidebar
  trackActiveSidebarLinks();
});

/**
 * Set up simple search functionality
 */
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `/search/?q=${encodeURIComponent(query)}`;
      }
    }
  });
}

/**
 * Initialize table of contents for long-form content
 */
function initializeTableOfContents() {
  const tocContainer = document.getElementById('table-of-contents');
  if (!tocContainer) return;
  
  const headings = document.querySelectorAll('.markdown-content h2, .markdown-content h3');
  if (headings.length < 3) {
    tocContainer.style.display = 'none';
    return;
  }
  
  const tocList = document.createElement('ul');
  tocList.className = 'toc-list';
  
  headings.forEach((heading, index) => {
    // Add ID to heading if it doesn't have one
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }
    
    const listItem = document.createElement('li');
    listItem.className = heading.tagName === 'H3' ? 'ml-4' : '';
    
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    
    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });
  
  tocContainer.appendChild(tocList);
}

/**
 * Track and highlight active links in the sidebar based on scroll position
 */
function trackActiveSidebarLinks() {
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  if (sidebarLinks.length === 0) return;
  
  // Add scroll event listener
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Find all section elements
    const sections = document.querySelectorAll('section[id], .markdown-content h2[id]');
    
    // Find the section that's currently in view
    let currentSection = null;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollPosition >= sectionTop) {
        currentSection = section.id;
      }
    });
    
    // Update active state in sidebar
    if (currentSection) {
      sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(`#${currentSection}`)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}

/**
 * Lazy load images
 */
document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
          imageObserver.unobserve(image);
        }
      });
    });
    
    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(image => {
      image.src = image.dataset.src;
      image.removeAttribute('data-src');
    });
  }
});