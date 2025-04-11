/**
 * Sidebar Navigation Functionality
 */

// Track the currently active section
let currentActiveSection = null;

function toggleSection(sectionId) {
  var content = document.getElementById(sectionId + "-content");
  var chevron = document.getElementById(sectionId + "-chevron");

  if (content) {
    // Check if this is a top-level section (not a subsection)
    var isTopLevelSection = !content.closest(".subsection");

    // Only close other sections if this is a top-level section
    if (isTopLevelSection) {
      // Close all other top-level sections
      var allTopLevelSections = document.querySelectorAll(
        ".section > .section-content"
      );
      allTopLevelSections.forEach(function (section) {
        if (
          section.id !== sectionId + "-content" &&
          !section.classList.contains("permanently-expanded")
        ) {
          section.classList.remove("expanded");
          var secId = section.id.replace("-content", "");
          var chev = document.getElementById(secId + "-chevron");
          if (chev) {
            chev.textContent = "▶";
            chev.classList.remove("expanded");
          }
        }
      });
    }

    // Toggle the current section
    content.classList.toggle("expanded");

    // Update the current active section
    if (content.classList.contains("expanded")) {
      currentActiveSection = sectionId;
    } else if (currentActiveSection === sectionId) {
      currentActiveSection = null;
    }
  }

  if (chevron) {
    chevron.textContent = content.classList.contains("expanded") ? "▼" : "▶";
    chevron.classList.toggle("expanded");
  }

  // Save expanded sections state
  saveExpandedSections();
}

// Check if a section is a parent of another section
function isParentSection(potentialParentId, childId) {
  const childContent = document.getElementById(childId + "-content");
  if (!childContent) return false;

  let parent = childContent.parentElement;
  while (parent) {
    if (parent.id === potentialParentId + "-content") {
      return true;
    }
    parent = parent.parentElement;
  }
  return false;
}

function expandParentSection(link) {
  let element = link;

  // Traverse up to find all parent sections and expand them
  while (element) {
    const sectionContent = element.closest(".section-content");
    if (sectionContent) {
      sectionContent.classList.add("expanded");
      const sectionId = sectionContent.id.replace("-content", "");
      currentActiveSection = sectionId; // Update the current active section

      const chevron = document.getElementById(sectionId + "-chevron");
      if (chevron) {
        chevron.textContent = "▼";
        chevron.classList.add("expanded");
      }

      // Continue up the DOM tree to find parent sections
      element = sectionContent.parentElement;
    } else {
      break;
    }
  }
}

function setActiveLinkByURL() {
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll(".nav-link");
  var exactMatchFound = false;

  // First try to find an exact match
  navLinks.forEach(function (link) {
    var linkPath = link.getAttribute("href");

    if (linkPath === currentPath) {
      link.classList.add("active");
      exactMatchFound = true;
      expandParentSection(link);
    } else {
      link.classList.remove("active");
    }
  });

  // If no exact match, find a partial match
  if (!exactMatchFound) {
    navLinks.forEach(function (link) {
      var linkPath = link.getAttribute("href");

      if (linkPath !== "/" && currentPath.startsWith(linkPath)) {
        link.classList.add("active");
        expandParentSection(link);
      }
    });
  }

  // Save scroll position to localStorage
  localStorage.setItem(
    "sidebarScrollPosition",
    document.getElementById("sidebar").scrollTop
  );
}

// Implement sidebar persistence
function restoreSidebarState() {
  // Restore expanded sections from localStorage
  const expandedSections = JSON.parse(
    localStorage.getItem("expandedSections") || "[]"
  );
  expandedSections.forEach((sectionId) => {
    const content = document.getElementById(sectionId + "-content");
    const chevron = document.getElementById(sectionId + "-chevron");

    if (content) {
      content.classList.add("expanded");
    }

    if (chevron) {
      chevron.textContent = "▼";
      chevron.classList.add("expanded");
    }
  });

  // Restore scroll position
  const scrollPosition = localStorage.getItem("sidebarScrollPosition");
  if (scrollPosition) {
    document.getElementById("sidebar").scrollTop = parseInt(scrollPosition);
  }

  // Restore sidebar collapsed state
  const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle =
    document.getElementById("sidebar-toggle") ||
    document.getElementById("sidebarCollapse");

  if (isCollapsed && sidebar && sidebarToggle) {
    sidebar.classList.add("collapsed");
    document.body.classList.add("sidebar-collapsed");
    updateToggleIcon(sidebarToggle, true);
  }
}

// Save expanded sections to localStorage
function saveExpandedSections() {
  const expandedSections = [];
  document.querySelectorAll(".section-content.expanded").forEach((section) => {
    const sectionId = section.id.replace("-content", "");
    expandedSections.push(sectionId);
  });

  localStorage.setItem("expandedSections", JSON.stringify(expandedSections));
}

// Update toggle icon based on sidebar state
function updateToggleIcon(toggleButton, isCollapsed) {
  if (isCollapsed) {
    toggleButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `;
  } else {
    toggleButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var sidebarToggle =
    document.getElementById("sidebar-toggle") ||
    document.getElementById("sidebarCollapse");
  var mobileToggle = document.getElementById("mobile-toggle");
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("sidebar-overlay");

  // Set up click handlers for navigation links
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      // Remove active class from all links
      navLinks.forEach(function (innerLink) {
        innerLink.classList.remove("active");
      });

      // Add active class to clicked link
      this.classList.add("active");

      // Expand parent sections
      expandParentSection(this);

      // Save the state
      saveExpandedSections();
    });
  });

  // Do NOT add click event listeners here - the inline onclick handlers need to work
  // (We'll keep the original onclick="toggleSection('sectionId')" attributes in the HTML)

  // Desktop sidebar toggle
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
      document.body.classList.toggle("sidebar-collapsed");

      const isCollapsed = sidebar.classList.contains("collapsed");
      localStorage.setItem("sidebarCollapsed", isCollapsed);

      updateToggleIcon(sidebarToggle, isCollapsed);
    });
  }

  // Mobile sidebar toggle
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

  // Set active link based on URL
  setActiveLinkByURL();

  // Restore sidebar state from previous session
  restoreSidebarState();

  // Search functionality
  var searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      var searchTerm = e.target.value.toLowerCase();

      if (searchTerm.length > 1) {
        performSearch(searchTerm);
      } else {
        resetSearch();
      }
    });
  }

  // Save scroll position when user scrolls the sidebar
  if (sidebar) {
    sidebar.addEventListener("scroll", function () {
      localStorage.setItem("sidebarScrollPosition", sidebar.scrollTop);
    });
  }
});

function performSearch(searchTerm) {
  var navLinks = document.querySelectorAll(".nav-link");
  var hasResults = false;

  navLinks.forEach(function (link) {
    var linkText = link.textContent.toLowerCase();
    var sectionContent = link.closest(".section-content");

    if (linkText.includes(searchTerm)) {
      link.style.display = "block";
      link.classList.add("search-result");
      hasResults = true;

      if (sectionContent) {
        sectionContent.classList.add("expanded");

        var sectionId = sectionContent.id.replace("-content", "");
        var chevron = document.getElementById(sectionId + "-chevron");
        if (chevron) {
          chevron.textContent = "▼";
          chevron.classList.add("expanded");
        }

        // Make sure parent sections are expanded too
        expandParentSection(link);
      }
    } else {
      link.style.display = "none";
      link.classList.remove("search-result");
    }
  });

  if (!hasResults) {
    console.log("No results found for: " + searchTerm);
  }
}

function resetSearch() {
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.style.display = "block";
    link.classList.remove("search-result");
  });

  // Restore previous section state
  restoreSidebarState();
}
