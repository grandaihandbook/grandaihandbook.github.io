document.addEventListener("DOMContentLoaded", () => {
  console.log("Script initialized");

  // Get references to all important DOM elements
  const modelsList = document.querySelector(".models-list");
  const allModelCards = document.querySelectorAll(".model-card");
  const searchInput = document.getElementById("search");
  const searchClearBtn = document.querySelector(".search-clear");
  const quickFilterButtons = document.querySelectorAll(".quick-filter-badge");
  const filterToggleBtn = document.getElementById("advanced-filter-toggle");
  const advancedFilters = document.querySelector(".filter-advanced");
  const featureBadges = document.querySelectorAll(".feature-badge-label");
  const resetFiltersBtn = document.getElementById("reset-filters");
  const applyFiltersBtn = document.getElementById("apply-filters");

  // Pagination elements
  const pageButtons = document.querySelectorAll(".page-button:not([title])");
  const prevButton = document.querySelector(
    '.page-button[title="Previous page"]'
  );
  const nextButton = document.querySelector('.page-button[title="Next page"]');
  const perPageSelect = document.getElementById("per-page");
  const pageInfo = document.querySelector(".page-info");

  // Form elements
  const categorySelect = document.getElementById("category");
  const providerSelect = document.getElementById("provider");
  const releaseYearSelect = document.getElementById("release-year");
  const licenseTypeSelect = document.getElementById("license-type");

  // INITIAL SETUP - Set up pagination
  let currentPage = 1;
  let itemsPerPage = parseInt(perPageSelect.value) || 5;
  let totalItems = allModelCards.length;
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  // Initially hide all cards except the first page
  updateDisplayedCards();

  // Add scroll to top button
  const scrollBtn = document.createElement("div");
  scrollBtn.classList.add("scroll-to-top");
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollBtn);

  // EVENT LISTENERS

  // Scroll to top button
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  scrollBtn.addEventListener("click", function () {
    scrollToTop();
  });

  // Toggle advanced filters
  if (filterToggleBtn && advancedFilters) {
    filterToggleBtn.addEventListener("click", () => {
      advancedFilters.classList.toggle("active");

      // Update button text based on state
      if (advancedFilters.classList.contains("active")) {
        filterToggleBtn.innerHTML =
          '<i class="fas fa-times"></i> <span>Hide Filters</span>';
      } else {
        filterToggleBtn.innerHTML =
          '<i class="fas fa-sliders-h"></i> <span>Advanced Filters</span>';
      }
    });
  }

  // Quick filter buttons functionality
  quickFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      quickFilterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Apply filtering based on the clicked button
      applyFilters();
    });
  });

  // Feature badge selection
  featureBadges.forEach((badge) => {
    badge.addEventListener("click", () => {
      // The checkbox inside will toggle automatically
      const checkbox = badge.querySelector('input[type="checkbox"]');

      // Log selected features for demo
      if (checkbox && checkbox.checked) {
        console.log("Feature selected:", badge.textContent.trim());
      } else if (checkbox) {
        console.log("Feature deselected:", badge.textContent.trim());
      }
    });
  });

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      if (searchInput.value.length > 0) {
        searchClearBtn.style.display = "flex";
      } else {
        searchClearBtn.style.display = "none";
      }
    });
  }

  // Search clear functionality
  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchClearBtn.style.display = "none";
      searchInput.focus();

      // Re-apply filters when search is cleared
      applyFilters();
    });
  }

  // Reset filters functionality
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      // Clear search input
      if (searchInput) {
        searchInput.value = "";
        if (searchClearBtn) searchClearBtn.style.display = "none";
      }

      // Reset dropdowns
      document.querySelectorAll(".filter-select").forEach((select) => {
        select.selectedIndex = 0;
      });

      // Uncheck all checkboxes
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          checkbox.checked = false;
        });

      // Reset quick filter buttons
      quickFilterButtons.forEach((btn, index) => {
        if (index === 0) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      // Reset to page 1
      currentPage = 1;
      updatePaginationButtons();

      // Apply the reset filters
      applyFilters();

      // Show reset confirmation
      showNotification("Filters have been reset");
    });
  }

  // Apply filters functionality
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener("click", () => {
      applyFilters();

      // Close advanced filters
      if (
        advancedFilters &&
        advancedFilters.classList.contains("active") &&
        filterToggleBtn
      ) {
        filterToggleBtn.click();
      }
    });
  }

  // Pagination button functionality
  pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = parseInt(button.textContent);
      updatePaginationButtons();
      updateDisplayedCards();
      scrollToTop();
    });
  });

  // Previous/Next page buttons
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updatePaginationButtons();
        updateDisplayedCards();
        scrollToTop();
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePaginationButtons();
        updateDisplayedCards();
        scrollToTop();
      }
    });
  }

  // Items per page selector
  if (perPageSelect) {
    perPageSelect.addEventListener("change", () => {
      itemsPerPage = parseInt(perPageSelect.value);
      totalPages = Math.ceil(totalItems / itemsPerPage);
      currentPage = 1; // Reset to first page when changing items per page

      updatePaginationButtons();
      updateDisplayedCards();
      updatePageInfo();
    });
  }

  // Feature tag interactions
  document.querySelectorAll(".feature-tag").forEach((tag) => {
    tag.addEventListener("click", () => {
      // Fill the search with the feature for demo purposes
      if (searchInput) {
        searchInput.value = tag.textContent.trim();
        if (searchClearBtn) searchClearBtn.style.display = "flex";

        // Apply filters with the new search
        applyFilters();
      }

      // Highlight the feature
      tag.style.backgroundColor = "rgba(79, 70, 229, 0.1)";
      tag.style.borderLeftColor = "#8b5cf6";

      setTimeout(() => {
        tag.style.backgroundColor = "";
        tag.style.borderLeftColor = "";
      }, 1500);
    });
  });

  // HELPER FUNCTIONS

  // Scroll to top function
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Function to apply all filters
  function applyFilters() {
    // Add a loading state
    if (modelsList) {
      modelsList.style.opacity = "0.6";
    }

    // Collect filter values
    const searchTerm = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";
    const category = categorySelect ? categorySelect.value.toLowerCase() : "";
    const provider = providerSelect ? providerSelect.value.toLowerCase() : "";
    const releaseYear = releaseYearSelect ? releaseYearSelect.value : "";
    const licenseType = licenseTypeSelect
      ? licenseTypeSelect.value.toLowerCase()
      : "";

    // Get active quick filter
    const activeQuickFilter = document.querySelector(
      ".quick-filter-badge.active"
    );
    const quickFilterValue = activeQuickFilter
      ? activeQuickFilter.textContent.trim().toLowerCase()
      : "all";

    // Get selected features
    const selectedFeatures = [];
    document
      .querySelectorAll('input[name="features"]:checked')
      .forEach((checkbox) => {
        selectedFeatures.push(checkbox.value.toLowerCase());
      });

    // Filter the model cards
    let filteredCards = Array.from(allModelCards);

    // Apply search filter
    if (searchTerm) {
      filteredCards = filteredCards.filter((card) => {
        const modelName = card
          .querySelector(".model-name")
          .textContent.toLowerCase();
        const providerName = card
          .querySelector(".model-provider")
          .textContent.toLowerCase();
        const description = card
          .querySelector(".model-description")
          .textContent.toLowerCase();

        return (
          modelName.includes(searchTerm) ||
          providerName.includes(searchTerm) ||
          description.includes(searchTerm)
        );
      });
    }

    // Apply quick filter
    if (quickFilterValue !== "all") {
      filteredCards = filteredCards.filter((card) => {
        const aiType = card
          .querySelector(".model-badge.ai-type")
          .textContent.toLowerCase();
        // Handle special case for "Computer Vision" and other multi-word categories
        if (quickFilterValue === "computer vision") {
          return aiType.includes("vision") || aiType.includes("image");
        }
        return aiType.includes(quickFilterValue);
      });
    }

    // Apply category filter
    if (category) {
      filteredCards = filteredCards.filter((card) => {
        const features = Array.from(card.querySelectorAll(".feature-tag")).map(
          (tag) => tag.textContent.toLowerCase()
        );
        const aiType = card
          .querySelector(".model-badge.ai-type")
          .textContent.toLowerCase();

        // Map category values to what might appear in features or AI type
        const categoryMap = {
          nlp: ["language", "text", "nlp", "llm"],
          cv: ["vision", "image", "computer vision"],
          audio: ["speech", "audio", "voice"],
          multimodal: ["multimodal", "vision-language", "multi-modal"],
          generative: ["generative", "generation", "creative"],
        };

        const relevantTerms = categoryMap[category] || [category];

        return relevantTerms.some(
          (term) =>
            features.some((feature) => feature.includes(term)) ||
            aiType.includes(term)
        );
      });
    }

    // Apply provider filter
    if (provider) {
      filteredCards = filteredCards.filter((card) => {
        const providerName = card
          .querySelector(".model-provider")
          .textContent.toLowerCase();
        return providerName.includes(provider);
      });
    }

    // Apply release year filter
    if (releaseYear) {
      filteredCards = filteredCards.filter((card) => {
        const releaseDate = card.querySelector(
          ".metadata-item:first-child span"
        ).textContent;
        // Extract the year from "Released: March 2023"
        const year = releaseDate.split(" ").pop();

        if (releaseYear === "2020") {
          // Special case for "2020 & Earlier"
          return parseInt(year) <= 2020;
        }
        return year === releaseYear;
      });
    }

    // Apply license type filter
    if (licenseType) {
      filteredCards = filteredCards.filter((card) => {
        const license = card
          .querySelector(".stat-box:last-child .stat-value")
          .textContent.toLowerCase();

        // Map license values to what might appear in the stat box
        const licenseMap = {
          open: ["open source", "apache", "mit"],
          commercial: ["commercial"],
          research: ["research only"],
          apache: ["apache"],
          mit: ["mit"],
        };

        const relevantTerms = licenseMap[licenseType] || [licenseType];

        return relevantTerms.some((term) => license.includes(term));
      });
    }

    // Apply feature filters
    if (selectedFeatures.length > 0) {
      filteredCards = filteredCards.filter((card) => {
        const features = Array.from(card.querySelectorAll(".feature-tag")).map(
          (tag) => tag.textContent.toLowerCase()
        );

        // Card passes if it has ANY of the selected features
        return selectedFeatures.some((selectedFeature) => {
          return features.some((feature) =>
            feature.includes(selectedFeature.replace("-", " "))
          );
        });
      });
    }

    // Hide all cards initially
    allModelCards.forEach((card) => {
      card.style.display = "none";
    });

    // Update total items and pages
    totalItems = filteredCards.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);

    // Reset to page 1 if current page is now out of bounds
    if (currentPage > totalPages) {
      currentPage = Math.max(1, totalPages);
    }

    // Update pagination
    updatePaginationButtons();

    // Show the filtered cards for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredCards.length);

    for (let i = startIndex; i < endIndex; i++) {
      if (filteredCards[i]) {
        filteredCards[i].style.display = "flex";
      }
    }

    // Update page info
    updatePageInfo(startIndex, endIndex, totalItems);

    // Remove loading state after a short delay
    setTimeout(() => {
      if (modelsList) {
        modelsList.style.opacity = "1";
      }

      // Show notification for applied filters
      if (
        searchTerm ||
        category ||
        provider ||
        releaseYear ||
        licenseType ||
        selectedFeatures.length > 0 ||
        quickFilterValue !== "all"
      ) {
        showNotification("Filters applied successfully!");
      }
    }, 400);
  }

  // Update displayed cards based on pagination
  function updateDisplayedCards() {
    // Hide all cards initially
    allModelCards.forEach((card) => {
      card.style.display = "none";
    });

    // Get filtered cards
    let filteredCards = Array.from(allModelCards);

    // Show cards for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredCards.length);

    for (let i = startIndex; i < endIndex; i++) {
      if (filteredCards[i]) {
        filteredCards[i].style.display = "flex";
      }
    }

    // Update page info
    updatePageInfo(startIndex, endIndex, filteredCards.length);
  }

  // Update page info text
  function updatePageInfo(
    startIndex = 0,
    endIndex = itemsPerPage,
    total = allModelCards.length
  ) {
    if (pageInfo) {
      const start = Math.min(startIndex + 1, total);
      const end = Math.min(endIndex, total);
      pageInfo.textContent = `Showing ${start}-${end} of ${total} models`;
    }
  }

  // Update pagination buttons
  function updatePaginationButtons() {
    // Get the parent container
    const paginationContainer = document.querySelector(".pagination");

    // Remove all existing number buttons
    const existingButtons = paginationContainer.querySelectorAll(
      ".page-button:not([title])"
    );
    existingButtons.forEach((button) => button.remove());

    // Remove ellipsis
    const ellipsis = paginationContainer.querySelector(".page-ellipsis");
    if (ellipsis) ellipsis.remove();

    // Create new page buttons based on total pages
    // We'll show max 5 page numbers
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    // Adjust startPage if endPage is at max
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    // Reference to insert before (the next button)
    const nextBtn = paginationContainer.querySelector(
      '.page-button[title="Next page"]'
    );

    // Add page buttons
    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.className = "page-button" + (i === currentPage ? " active" : "");
      pageBtn.textContent = i;

      // Add event listener
      pageBtn.addEventListener("click", () => {
        currentPage = i;
        updatePaginationButtons();
        updateDisplayedCards();
        scrollToTop();
      });

      // Insert before the next button
      paginationContainer.insertBefore(pageBtn, nextBtn);
    }

    // Add ellipsis if needed
    if (endPage < totalPages) {
      const ellipsis = document.createElement("div");
      ellipsis.className = "page-ellipsis";
      ellipsis.textContent = "...";
      paginationContainer.insertBefore(ellipsis, nextBtn);

      // Add last page button
      const lastPageBtn = document.createElement("button");
      lastPageBtn.className = "page-button";
      lastPageBtn.textContent = totalPages;

      lastPageBtn.addEventListener("click", () => {
        currentPage = totalPages;
        updatePaginationButtons();
        updateDisplayedCards();
        scrollToTop();
      });

      paginationContainer.insertBefore(lastPageBtn, nextBtn);
    }

    // Disable/enable prev/next buttons
    if (prevButton) {
      prevButton.style.opacity = currentPage === 1 ? "0.5" : "1";
      prevButton.style.cursor = currentPage === 1 ? "not-allowed" : "pointer";
    }

    if (nextButton) {
      nextButton.style.opacity =
        currentPage === totalPages || totalPages === 0 ? "0.5" : "1";
      nextButton.style.cursor =
        currentPage === totalPages || totalPages === 0
          ? "not-allowed"
          : "pointer";
    }
  }

  // Show notification
  function showNotification(message) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
      </div>
    `;

    // Add styles
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.backgroundColor = "#4ade80";
    notification.style.color = "white";
    notification.style.padding = "12px 16px";
    notification.style.borderRadius = "8px";
    notification.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    notification.style.zIndex = "1000";
    notification.style.display = "flex";
    notification.style.alignItems = "center";
    notification.style.gap = "8px";
    notification.style.fontWeight = "500";
    notification.style.transform = "translateY(100px)";
    notification.style.opacity = "0";
    notification.style.transition = "all 0.3s ease";

    // Add to body
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
      notification.style.transform = "translateY(0)";
      notification.style.opacity = "1";
    }, 10);

    // Remove after delay
    setTimeout(() => {
      notification.style.transform = "translateY(100px)";
      notification.style.opacity = "0";

      // Remove from DOM after animation completes
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Initialize everything
  updatePageInfo();
  updatePaginationButtons();
  updateDisplayedCards();

  console.log("Script initialization completed");
});
