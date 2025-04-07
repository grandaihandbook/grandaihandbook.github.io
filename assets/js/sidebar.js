// assets/js/sidebar.js

/**
 * Sidebar Navigation Functionality
 */

// Function to toggle section expansion
function toggleSection(sectionId) {
  var content = document.getElementById(sectionId + "-content");
  var chevron = document.getElementById(sectionId + "-chevron");

  if (content) {
    content.classList.toggle("expanded");
  }

  if (chevron) {
    chevron.classList.toggle("expanded");
    // Update chevron text based on expanded state
    chevron.textContent = content.classList.contains("expanded") ? "▼" : "▶";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize sidebar toggle for desktop
  var sidebarToggle = document.getElementById("sidebar-toggle");
  var sidebar = document.getElementById("sidebar");
  var toggleIcon = document.getElementById("toggle-icon");

  if (sidebarToggle && sidebar && toggleIcon) {
    sidebarToggle.addEventListener("click", function() {
      sidebar.classList.toggle("collapsed");
      toggleIcon.textContent = sidebar.classList.contains("collapsed") ? "▶" : "◀";
      
      // Save sidebar state to localStorage
      localStorage.setItem("sidebarCollapsed", sidebar.classList.contains("collapsed"));
    });
    
    // Check for saved sidebar state
    const savedSidebarState = localStorage.getItem("sidebarCollapsed");
    if (savedSidebarState === "true") {
      sidebar.classList.add("collapsed");
      toggleIcon.textContent = "▶";
    }
  }

  // Initialize mobile menu toggle
  var mobileToggle = document.getElementById("mobile-toggle");
  var overlay = document.getElementById("sidebar-overlay");

  // Toggle sidebar on mobile menu button click
  if (mobileToggle && sidebar && overlay) {
    mobileToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("visible");
    });
  }

  // Close sidebar when clicking overlay
  if (overlay && sidebar) {
    overlay.addEventListener("click", function () {
      sidebar.classList.remove("open");
      overlay.classList.remove("visible");
    });
  }

  // Initialize search functionality
  var searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      var searchTerm = e.target.value.toLowerCase();

      if (searchTerm.length > 1) {
        performSearch(searchTerm);
      } else {
        // Reset search results
        resetSearch();
      }
    });
  }
  
  // Load saved section states
  loadSectionStates();
});

// Function to perform search
function performSearch(searchTerm) {
  var navLinks = document.querySelectorAll(".nav-link");
  var hasResults = false;

  // Loop through all nav links
  navLinks.forEach(function (link) {
    var linkText = link.textContent.toLowerCase();
    var sectionContent = link.closest(".section-content");

    if (linkText.includes(searchTerm)) {
      // Show matching links
      link.style.display = "block";
      link.classList.add("search-result");
      hasResults = true;

      // Expand parent sections
      if (sectionContent) {
        sectionContent.classList.add("expanded");

        // Rotate chevron
        var sectionId = sectionContent.id.replace("-content", "");
        var chevron = document.getElementById(sectionId + "-chevron");
        if (chevron) {
          chevron.classList.add("expanded");
          chevron.textContent = "▼";
        }
      }
    } else {
      // Hide non-matching links
      link.style.display = "none";
      link.classList.remove("search-result");
    }
  });

  // Handle no results
  if (!hasResults) {
    // Optional: Show a no results message
    console.log("No results found for: " + searchTerm);
  }
}

// Function to reset search
function resetSearch() {
  var navLinks = document.querySelectorAll(".nav-link");

  // Show all links
  navLinks.forEach(function (link) {
    link.style.display = "block";
    link.classList.remove("search-result");
  });

  // Return sections to their default state
  loadSectionStates();
}

// Save section states to localStorage
function saveSectionStates() {
  const sections = document.querySelectorAll('.section-content');
  const states = {};
  
  sections.forEach(section => {
    const id = section.id.replace('-content', '');
    states[id] = section.classList.contains('expanded');
  });
  
  localStorage.setItem('sectionStates', JSON.stringify(states));
}

// Load section states from localStorage
function loadSectionStates() {
  try {
    const savedStates = JSON.parse(localStorage.getItem('sectionStates')) || {};
    
    // Apply saved states
    Object.keys(savedStates).forEach(id => {
      const content = document.getElementById(id + '-content');
      const chevron = document.getElementById(id + '-chevron');
      
      if (content) {
        if (savedStates[id]) {
          content.classList.add('expanded');
        } else {
          content.classList.remove('expanded');
        }
      }
      
      if (chevron) {
        if (savedStates[id]) {
          chevron.classList.add('expanded');
          chevron.textContent = '▼';
        } else {
          chevron.classList.remove('expanded');
          chevron.textContent = '▶';
        }
      }
    });
    
    // Always ensure the active section is expanded
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      const sectionContent = activeLink.closest('.section-content');
      if (sectionContent) {
        sectionContent.classList.add('expanded');
        
        const sectionId = sectionContent.id.replace('-content', '');
        const chevron = document.getElementById(sectionId + '-chevron');
        if (chevron) {
          chevron.classList.add('expanded');
          chevron.textContent = '▼';
        }
      }
    }
    
  } catch (error) {
    console.error('Error loading saved section states:', error);
    
    // Default: only expand the section with active link
    var sections = document.querySelectorAll('.section-content');
    sections.forEach(function (section) {
      if (section.querySelector('.nav-link.active')) {
        section.classList.add('expanded');
        
        var sectionId = section.id.replace('-content', '');
        var chevron = document.getElementById(sectionId + '-chevron');
        if (chevron) {
          chevron.classList.add('expanded');
          chevron.textContent = '▼';
        }
      } else {
        section.classList.remove('expanded');
        
        var sectionId = section.id.replace('-content', '');
        var chevron = document.getElementById(sectionId + '-chevron');
        if (chevron) {
          chevron.classList.remove('expanded');
          chevron.textContent = '▶';
        }
      }
    });
  }
}

// Update section states when toggled
const originalToggleSection = toggleSection;
toggleSection = function(sectionId) {
  originalToggleSection(sectionId);
  saveSectionStates();
};