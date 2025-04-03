/**
 * Enhanced Table of Contents Script
 * Automatically generates a table of contents based on headings in the content
 */
document.addEventListener('DOMContentLoaded', function() {
  // Get the table of contents container
  const tocContainer = document.getElementById('table-of-contents');
  if (!tocContainer) return;
  
  // Find content area and headings
  const contentArea = document.querySelector('.markdown-content');
  if (!contentArea) return;
  
  const headings = contentArea.querySelectorAll('h2, h3, h4');
  
  // If there are not enough headings, hide the TOC
  if (headings.length < 2) {
    tocContainer.style.display = 'none';
    return;
  }
  
  // Create TOC list
  const tocList = document.createElement('ul');
  tocList.className = 'toc-list space-y-1';
  
  let currentLevel2Item = null;
  let currentLevel3List = null;
  let level4List = null;
  
  // Process each heading
  headings.forEach((heading, index) => {
    // Add ID to heading if it doesn't have one
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }
    
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.className = 'hover:text-blue-600 transition-colors duration-200';
    
    if (heading.tagName === 'H2') {
      // Level 2 heading
      const listItem = document.createElement('li');
      listItem.className = 'font-medium py-1';
      listItem.appendChild(link);
      tocList.appendChild(listItem);
      
      // Reset current level 2 item and level 3 list
      currentLevel2Item = listItem;
      currentLevel3List = null;
      level4List = null;
      
    } else if (heading.tagName === 'H3') {
      // Level 3 heading
      if (!currentLevel3List) {
        currentLevel3List = document.createElement('ul');
        currentLevel3List.className = 'pl-4 mt-1 space-y-1 text-sm';
        if (currentLevel2Item) {
          currentLevel2Item.appendChild(currentLevel3List);
        } else {
          tocList.appendChild(currentLevel3List);
        }
      }
      
      const listItem = document.createElement('li');
      listItem.className = 'py-1';
      listItem.appendChild(link);
      currentLevel3List.appendChild(listItem);
      
      // Reset level 4 list
      level4List = null;
      
    } else if (heading.tagName === 'H4') {
      // Level 4 heading
      if (!currentLevel3List) {
        // If there's no parent H3, create a placeholder list
        currentLevel3List = document.createElement('ul');
        currentLevel3List.className = 'pl-4 mt-1 space-y-1 text-sm';
        if (currentLevel2Item) {
          currentLevel2Item.appendChild(currentLevel3List);
        } else {
          tocList.appendChild(currentLevel3List);
        }
      }
      
      if (!level4List) {
        level4List = document.createElement('ul');
        level4List.className = 'pl-4 mt-1 space-y-1 text-xs';
        currentLevel3List.appendChild(level4List);
      }
      
      const listItem = document.createElement('li');
      listItem.className = 'py-1 text-gray-600';
      listItem.appendChild(link);
      level4List.appendChild(listItem);
    }
  });
  
  // Add the TOC list to the container
  tocContainer.appendChild(tocList);
  
  // Add active state highlighting
  const tocLinks = tocList.querySelectorAll('a');
  
  // Highlight the current section on scroll
  const highlightCurrentSection = () => {
    let currentSectionId = null;
    
    // Find the current section based on scroll position
    // Add a small offset to ensure the heading is visible
    const scrollPosition = window.scrollY + 100;
    
    // Check all headings in reverse (to find the last one above our scroll position)
    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      if (heading.offsetTop <= scrollPosition) {
        currentSectionId = heading.id;
        break;
      }
    }
    
    // Update active state
    tocLinks.forEach(link => {
      link.classList.remove('text-blue-600', 'font-medium');
      
      if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('text-blue-600', 'font-medium');
      }
    });
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', highlightCurrentSection);
  
  // Initial highlight
  highlightCurrentSection();
  
  // Smooth scrolling for TOC links
  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Scroll to the element with a small offset for better visibility
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update URL hash without jumping
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
  
  // Add "Back to top" link
  const backToTopContainer = document.createElement('div');
  backToTopContainer.className = 'mt-4 pt-2 border-t border-gray-200 text-center';
  
  const backToTopLink = document.createElement('a');
  backToTopLink.href = '#';
  backToTopLink.className = 'inline-flex items-center text-sm text-gray-500 hover:text-blue-600';
  backToTopLink.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
    Back to top
  `;
  
  backToTopLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  backToTopContainer.appendChild(backToTopLink);
  tocContainer.appendChild(backToTopContainer);
});