// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // === MOBILE MENU TOGGLE FUNCTIONALITY ===
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const topNavMain = document.getElementById("top-nav-main");

  function checkMenuState() {
    const menu = document.getElementById("menu-dropdown");
    if (!menu) return;

    console.log("Menu element:", menu);
    console.log("Menu display style:", window.getComputedStyle(menu).display);
    console.log("Menu has active class:", menu.classList.contains("active"));
    console.log("Menu visibility:", window.getComputedStyle(menu).visibility);
    console.log("Menu z-index:", window.getComputedStyle(menu).zIndex);
    console.log("Menu position:", window.getComputedStyle(menu).position);
  }

  checkMenuState();

  if (mobileMenuToggle && topNavMain) {
    mobileMenuToggle.addEventListener("click", function () {
      // Toggle the 'open' class on the main navigation menu
      topNavMain.classList.toggle("open");
      // Check if the menu is now open
      const isExpanded = topNavMain.classList.contains("open");
      // Update the aria-expanded attribute for accessibility
      mobileMenuToggle.setAttribute(
        "aria-expanded",
        isExpanded ? "true" : "false"
      );
    });
  }

  // === SEARCH FUNCTIONALITY ===
  const searchContainer = document.getElementById("search-container");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const searchOverlay = document.getElementById("search-overlay");
  const searchOverlayInput = document.getElementById("search-overlay-input");
  const searchOverlayClose = document.getElementById("search-overlay-close");

  if (
    searchContainer &&
    searchInput &&
    searchButton &&
    searchOverlay &&
    searchOverlayInput &&
    searchOverlayClose
  ) {
    // --- Top Nav Search Bar ---

    // Expand inline search bar on click (if not already expanded)
    searchContainer.addEventListener("click", function (e) {
      if (!searchContainer.classList.contains("expanded")) {
        searchContainer.classList.add("expanded");
        searchInput.focus(); // Focus the input field
        e.stopPropagation(); // Prevent the document click listener from closing it immediately
      }
    });

    // Keep expanded state when input is focused
    searchInput.addEventListener("focus", function () {
      if (!searchContainer.classList.contains("expanded")) {
        searchContainer.classList.add("expanded");
      }
    });

    // Close inline search bar when clicking outside
    document.addEventListener("click", function (e) {
      // Check if the click target is outside the search container
      if (!searchContainer.contains(e.target)) {
        searchContainer.classList.remove("expanded");
      }
    });

    // Prevent closing when clicking inside the search input itself
    searchInput.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    // --- Search Overlay ---

    // Open overlay search when the search button is clicked *while* the inline bar is expanded
    // Or on mobile where the button is always visible for search
    searchButton.addEventListener("click", function (e) {
      // Check screen width or if the inline container is meant to expand (desktop behavior)
      if (
        window.innerWidth <= 1024 ||
        searchContainer.classList.contains("expanded")
      ) {
        // On smaller screens OR if the inline search is expanded, clicking the button opens the overlay
        e.preventDefault(); // Prevent default button action (like form submission if it were type="submit")
        searchOverlay.classList.add("open");
        searchOverlayInput.value = searchInput.value; // Copy value from inline input
        searchOverlayInput.focus(); // Focus the overlay input
        searchButton.setAttribute("aria-expanded", "true"); // Indicate overlay is open
        searchContainer.classList.remove("expanded"); // Close inline search if open
      }
      // On larger screens, if the inline search isn't expanded yet, the first click on the container handles expansion.
      // If it *is* expanded, this listener will open the overlay as per the condition above.
    });

    // Close overlay search using the close button
    searchOverlayClose.addEventListener("click", function () {
      searchOverlay.classList.remove("open");
      searchButton.setAttribute("aria-expanded", "false");
    });

    // Close overlay search with the ESC key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && searchOverlay.classList.contains("open")) {
        searchOverlay.classList.remove("open");
        searchButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  // === MEGA DROPDOWN FUNCTIONALITY ===
  const dropdownItems = document.querySelectorAll(".has-dropdown");
  let activeDropdown = null; // Track the currently open dropdown
  let closeTimer = null; // Timer for delayed closing on mouseleave

  // Function to open a specific dropdown menu
  function openDropdown(item) {
    // Close any other currently open dropdown first
    if (activeDropdown && activeDropdown !== item) {
      closeDropdown(activeDropdown);
    }

    // Open the target dropdown
    item.classList.add("active");
    const navLink = item.querySelector(".nav-link");
    if (navLink) {
      navLink.setAttribute("aria-expanded", "true"); // Set accessibility attribute
    }
    activeDropdown = item; // Set this as the currently active dropdown
  }

  // Function to close a specific dropdown menu
  function closeDropdown(item) {
    item.classList.remove("active");
    const navLink = item.querySelector(".nav-link");
    if (navLink) {
      navLink.setAttribute("aria-expanded", "false"); // Reset accessibility attribute
    }
    if (activeDropdown === item) {
      activeDropdown = null; // Clear the active dropdown tracker
    }
  }

  // Add event listeners to each dropdown item
  dropdownItems.forEach((item) => {
    const navLink = item.querySelector(".nav-link");
    const megaDropdown = item.querySelector(".mega-dropdown"); // Could be .dropdown-menu too, but mega handles both

    if (!navLink || !megaDropdown) return; // Skip if essential elements are missing

    let isOverNavItem = false;
    let isOverDropdown = false;

    // Function to check if mouse is over nav item or dropdown, and close if not
    function checkAndCloseDropdown() {
      // Only close if the mouse is neither over the nav item nor its dropdown
      if (!isOverNavItem && !isOverDropdown) {
        closeDropdown(item);
      }
    }

    // --- Mouse Hover Logic (Desktop) ---
    item.addEventListener("mouseenter", function () {
      if (window.innerWidth > 1024) {
        // Only apply hover logic on larger screens
        isOverNavItem = true;
        if (closeTimer) clearTimeout(closeTimer); // Cancel any pending close operation
        openDropdown(item); // Open this dropdown
      }
    });

    item.addEventListener("mouseleave", function () {
      if (window.innerWidth > 1024) {
        isOverNavItem = false;
        // Set a short delay before checking if we should close
        // This allows moving the mouse from the nav item to the dropdown without it closing
        closeTimer = setTimeout(checkAndCloseDropdown, 150);
      }
    });

    megaDropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 1024) {
        isOverDropdown = true;
        if (closeTimer) clearTimeout(closeTimer); // Cancel close timer if mouse enters dropdown
      }
    });

    megaDropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 1024) {
        isOverDropdown = false;
        // Set delay before checking again
        closeTimer = setTimeout(checkAndCloseDropdown, 150);
      }
    });

    // --- Click Logic (Primarily for Mobile/Tablet, but adapted for Desktop) ---
    navLink.addEventListener("click", function (e) {
      // Check if it's a touch device or small screen where click is primary interaction
      if (window.innerWidth <= 1024) {
        e.preventDefault(); // Prevent navigation on mobile toggle
        if (item.classList.contains("active")) {
          closeDropdown(item);
        } else {
          openDropdown(item);
        }
      } else {
        // On desktop, allow normal navigation *unless* the dropdown isn't open yet.
        // If it's not open, prevent default and open it. If already open, allow link to navigate.
        // This handles cases where user clicks quickly instead of hovering.
        if (!item.classList.contains("active")) {
          e.preventDefault();
          openDropdown(item);
        }
        // If item *is* active (already open from hover or previous click), let the default link navigation proceed.
      }
    });
  });

  // Close dropdown when clicking outside of any dropdown item/menu
  document.addEventListener("click", function (e) {
    if (activeDropdown && !e.target.closest(".has-dropdown")) {
      // Check if click is outside the active dropdown item/content
      closeDropdown(activeDropdown);
    }
  });

  // Close dropdown with the Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && activeDropdown) {
      const linkToFocus = activeDropdown.querySelector(".nav-link");
      closeDropdown(activeDropdown);
      if (linkToFocus) linkToFocus.focus(); // Return focus to the trigger link
    }
  });

  // Close any open dropdown on window resize if screen becomes small
  window.addEventListener("resize", function () {
    if (activeDropdown && window.innerWidth <= 1024) {
      closeDropdown(activeDropdown);
    }
  });

  // === DOTS MENU DROPDOWN CODE (REVISED & FIXED) ===
  const menuToggle = document.getElementById("menu-dropdown-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      // Check state after a slight delay to account for CSS transitions
      setTimeout(checkMenuState, 100);
    });
  }
  const menuContent = document.getElementById("menu-dropdown");

  // --- DEBUG: Check if elements are selected ---
  console.log("Dots Menu Toggle Button:", menuToggle);
  console.log("Dots Menu Content Div:", menuContent);
  // --- END DEBUG ---

  if (menuToggle && menuContent) {
    // Create a variable to track menu state
    let isMenuOpen = false;

    // Direct style manipulation (bypassing class toggling)
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;

      // Explicitly set style properties
      if (isMenuOpen) {
        menuContent.style.display = "block";
        menuToggle.setAttribute("aria-expanded", "true");
      } else {
        menuContent.style.display = "none";
        menuToggle.setAttribute("aria-expanded", "false");
      }

      console.log("Menu toggled - Now open:", isMenuOpen);
    }

    // Toggle menu on button click
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        isMenuOpen &&
        !menuToggle.contains(e.target) &&
        !menuContent.contains(e.target)
      ) {
        toggleMenu();
      }
    });

    // Close menu with Escape key
    document.addEventListener("keydown", function (e) {
      if (isMenuOpen && e.key === "Escape") {
        toggleMenu();
        menuToggle.focus();
      }
    });

    // Prevent clicks inside menu from closing it
    menuContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
  if (menuToggle && menuContent) {
    // Create a variable to track menu state
    let isMenuOpen = false;

    // Direct style manipulation (bypassing class toggling)
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;

      // Explicitly set style properties
      if (isMenuOpen) {
        menuContent.style.display = "block";
        menuToggle.setAttribute("aria-expanded", "true");
      } else {
        menuContent.style.display = "none";
        menuToggle.setAttribute("aria-expanded", "false");
      }

      console.log("Menu toggled - Now open:", isMenuOpen);
    }

    // Toggle menu on button click
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        isMenuOpen &&
        !menuToggle.contains(e.target) &&
        !menuContent.contains(e.target)
      ) {
        toggleMenu();
      }
    });

    // Close menu with Escape key
    document.addEventListener("keydown", function (e) {
      if (isMenuOpen && e.key === "Escape") {
        toggleMenu();
        menuToggle.focus();
      }
    });

    // Prevent clicks inside menu from closing it
    menuContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
  // === END DOTS MENU DROPDOWN CODE ===
}); // End of DOMContentLoaded
