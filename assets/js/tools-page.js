document.addEventListener("DOMContentLoaded", () => {
  console.log("Tools page script initialized");

  // Core DOM elements
  const toolsList = document.querySelector(".tools-list");
  const allToolCards = document.querySelectorAll(".tool-card");
  const searchInput = document.getElementById("search");
  const searchClearBtn = document.querySelector(".search-clear");
  const quickFilterButtons = document.querySelectorAll(".quick-filter-badge");
  const filterToggleBtn = document.getElementById("advanced-filter-toggle");
  const advancedFilters = document.querySelector(".filter-advanced");
  const featureBadges = document.querySelectorAll(".feature-badge-label");
  const resetFiltersBtn = document.getElementById("reset-filters");
  const applyFiltersBtn = document.getElementById("apply-filters");
  const customSelects = document.querySelectorAll(".custom-select");

  // Pagination elements
  const pageButtons = document.querySelectorAll(".page-button:not([title])");
  const prevButton = document.querySelector(
    '.page-button[title="Previous page"]'
  );
  const nextButton = document.querySelector('.page-button[title="Next page"]');
  const perPageSelect = document.getElementById("per-page");
  const pageInfo = document.querySelector(".page-info");

  // Filter selects
  const categorySelect = document.getElementById("category");
  const languageSelect = document.getElementById("language"); // Changed from providerSelect
  const releaseYearSelect = document.getElementById("release-year");
  const licenseTypeSelect = document.getElementById("license-type");

  // Initial state
  let filteredCards = Array.from(allToolCards);
  let currentPage = loadFromLocalStorage("currentPage") || 1;
  let itemsPerPage = loadFromLocalStorage("itemsPerPage") || 5;
  if (perPageSelect) perPageSelect.value = itemsPerPage;

  let totalItems = allToolCards.length;
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  // Load saved filters and update display
  loadSavedFilters();
  updateDisplayedCards();

  // Initialize scroll to top button
  const scrollBtn = document.createElement("div");
  scrollBtn.classList.add("scroll-to-top");
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollBtn);

  // Custom select dropdown initialization
  customSelects.forEach((select) => {
    const trigger = select.querySelector(".custom-select__trigger");
    const options = select.querySelectorAll(".custom-option");
    const triggerSpan = trigger.querySelector("span");
    const hiddenSelect = select.querySelector(".hidden-select");

    trigger.addEventListener("click", () => {
      customSelects.forEach((s) => {
        if (s !== select) s.classList.remove("open");
      });

      select.classList.toggle("open");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        triggerSpan.textContent = option.textContent;

        options.forEach((opt) => opt.classList.remove("selected"));
        option.classList.add("selected");

        const dataValue = option.getAttribute("data-value");
        console.log("Selected option data-value:", dataValue);

        if (!hiddenSelect) {
          console.error("Hidden select not found for", select);
          return;
        }

        for (let i = 0; i < hiddenSelect.options.length; i++) {
          if (hiddenSelect.options[i].value === dataValue) {
            hiddenSelect.selectedIndex = i;
            break;
          }
        }

        hiddenSelect.value = dataValue;
        hiddenSelect.dispatchEvent(new Event("change", { bubbles: true }));
        select.classList.remove("open");
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    const isCustomSelect = e.target.closest(".custom-select");
    if (!isCustomSelect) {
      customSelects.forEach((select) => {
        select.classList.remove("open");
      });
    }
  });

  // Scroll to top button visibility
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

  // Advanced filters toggle
  if (filterToggleBtn && advancedFilters) {
    filterToggleBtn.addEventListener("click", () => {
      advancedFilters.classList.toggle("active");

      if (advancedFilters.classList.contains("active")) {
        filterToggleBtn.innerHTML =
          '<i class="fas fa-times"></i> <span>Hide Filters</span>';
      } else {
        filterToggleBtn.innerHTML =
          '<i class="fas fa-sliders-h"></i> <span>Advanced Filters</span>';
      }
    });
  }

  // Quick filter buttons
  quickFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      quickFilterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      applyFilters();
    });
  });

  // Feature badges
  featureBadges.forEach((badge) => {
    badge.addEventListener("click", () => {
      const checkbox = badge.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        console.log("Feature selected:", badge.textContent.trim());
      } else if (checkbox) {
        console.log("Feature deselected:", badge.textContent.trim());
      }
    });
  });

  // Search input visibility
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      if (searchInput.value.length > 0) {
        searchClearBtn.style.display = "flex";
      } else {
        searchClearBtn.style.display = "none";
      }
    });
  }

  // Search input enter key
  if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault();
        if (applyFiltersBtn) {
          applyFiltersBtn.click();
        } else {
          applyFilters();
        }
        searchInput.blur();
      }
    });
  }

  // Search clear button
  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchClearBtn.style.display = "none";
      searchInput.focus();
      applyFilters();
    });
  }

  // Reset filters button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        if (searchClearBtn) searchClearBtn.style.display = "none";
      }

      document.querySelectorAll(".filter-select").forEach((select) => {
        select.selectedIndex = 0;

        const customSelectWrapper = select.closest(".custom-select");
        if (customSelectWrapper) {
          const triggerSpan = customSelectWrapper.querySelector(
            ".custom-select__trigger span"
          );
          const options =
            customSelectWrapper.querySelectorAll(".custom-option");

          options.forEach((opt) => opt.classList.remove("selected"));
          const defaultOption = options[0];
          if (defaultOption) defaultOption.classList.add("selected");

          if (triggerSpan)
            triggerSpan.textContent = defaultOption
              ? defaultOption.textContent
              : "All";
        }
      });

      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          checkbox.checked = false;
        });

      quickFilterButtons.forEach((btn, index) => {
        if (index === 0) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      currentPage = 1;
      saveToLocalStorage("currentPage", currentPage);
      updatePaginationButtons();
      applyFilters();
      showNotification("Filters have been reset");
    });
  }

  // Apply filters button
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener("click", () => {
      applyFilters();
      if (
        advancedFilters &&
        advancedFilters.classList.contains("active") &&
        filterToggleBtn
      ) {
        filterToggleBtn.click();
      }
    });
  }

  // Pagination buttons
  pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = parseInt(button.textContent);
      saveToLocalStorage("currentPage", currentPage);
      updatePaginationButtons();
      updateDisplayedCards();
      scrollToTop();
    });
  });

  // Previous page button
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        saveToLocalStorage("currentPage", currentPage);
        updatePaginationButtons();
        updateDisplayedCards();
        scrollToTop();
      }
    });
  }

  // Next page button
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        saveToLocalStorage("currentPage", currentPage);
        updatePaginationButtons();
        updateDisplayedCards();
        scrollToTop();
      }
    });
  }

  // Items per page select
  if (perPageSelect) {
    perPageSelect.addEventListener("change", () => {
      itemsPerPage = parseInt(perPageSelect.value);
      saveToLocalStorage("itemsPerPage", itemsPerPage);
      totalPages = Math.ceil(totalItems / itemsPerPage);
      currentPage = 1;
      saveToLocalStorage("currentPage", currentPage);
      updatePaginationButtons();
      updateDisplayedCards();
      updatePageInfo();
    });
  }

  // Feature tag click handler
  document.querySelectorAll(".feature-tag").forEach((tag) => {
    tag.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = tag.textContent.trim();
        if (searchClearBtn) searchClearBtn.style.display = "flex";
        applyFilters();
      }

      tag.style.backgroundColor = "rgba(79, 70, 229, 0.1)";
      tag.style.borderLeftColor = "#8b5cf6";

      setTimeout(() => {
        tag.style.backgroundColor = "";
        tag.style.borderLeftColor = "";
      }, 1500);
    });
  });

  // Utility function to scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Main filtering function
  function applyFilters() {
    if (toolsList) {
      toolsList.style.opacity = "0.6";
    }

    const searchTerm = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";
    const category = document.getElementById("category")
      ? document.getElementById("category").value.toLowerCase()
      : "";
    const language = document.getElementById("language")
      ? document.getElementById("language").value.toLowerCase()
      : "";
    const releaseYear = document.getElementById("release-year")
      ? document.getElementById("release-year").value
      : "";
    const licenseType = document.getElementById("license-type")
      ? document.getElementById("license-type").value.toLowerCase()
      : "";

    console.log("Filter values:", {
      searchTerm,
      category,
      language,
      releaseYear,
      licenseType,
    });

    const activeQuickFilter = document.querySelector(
      ".quick-filter-badge.active"
    );
    const quickFilterValue = activeQuickFilter
      ? activeQuickFilter.textContent.trim().toLowerCase()
      : "all";

    const selectedFeatures = [];
    document
      .querySelectorAll('input[name="features"]:checked')
      .forEach((checkbox) => {
        selectedFeatures.push(checkbox.value.toLowerCase());
      });

    saveFilters(
      searchTerm,
      category,
      language,
      releaseYear,
      licenseType,
      quickFilterValue,
      selectedFeatures
    );

    filteredCards = Array.from(allToolCards);
    console.log("Starting with all cards:", filteredCards.length);

    // Filter by search term
    if (searchTerm) {
      filteredCards = filteredCards.filter((card) => {
        const toolName = card
          .querySelector(".tool-name")
          .textContent.toLowerCase();
        const providerName = card
          .querySelector(".tool-provider")
          .textContent.toLowerCase();
        const description = card
          .querySelector(".tool-description")
          .textContent.toLowerCase();
        const features = Array.from(card.querySelectorAll(".feature-tag"))
          .map((tag) => tag.textContent.toLowerCase())
          .join(" ");
        const githubStats = card.querySelector(".tool-github-stats")
          ? card.querySelector(".tool-github-stats").textContent.toLowerCase()
          : "";

        return (
          toolName.includes(searchTerm) ||
          providerName.includes(searchTerm) ||
          description.includes(searchTerm) ||
          features.includes(searchTerm) ||
          githubStats.includes(searchTerm)
        );
      });
      console.log("After search filter:", filteredCards.length);
    }

    // Filter by quick filter category
    if (quickFilterValue !== "all") {
      filteredCards = filteredCards.filter((card) => {
        const badges = Array.from(card.querySelectorAll(".tool-badge")).map(
          (badge) => badge.textContent.toLowerCase()
        );
        const features = Array.from(card.querySelectorAll(".feature-tag")).map(
          (tag) => tag.textContent.toLowerCase()
        );

        if (quickFilterValue === "computer vision") {
          return (
            badges.some(
              (badge) =>
                badge.includes("vision") ||
                badge.includes("image") ||
                badge.includes("cv")
            ) ||
            features.some(
              (feature) =>
                feature.includes("vision") ||
                feature.includes("image") ||
                feature.includes("cv")
            )
          );
        }

        return (
          badges.some((badge) => badge.includes(quickFilterValue)) ||
          features.some((feature) => feature.includes(quickFilterValue))
        );
      });
    }

    // Filter by detailed category
    if (category) {
      filteredCards = filteredCards.filter((card) => {
        const features = Array.from(card.querySelectorAll(".feature-tag")).map(
          (tag) => tag.textContent.toLowerCase()
        );
        const badges = Array.from(card.querySelectorAll(".tool-badge")).map(
          (badge) => badge.textContent.toLowerCase()
        );

        const categoryMap = {
          nlp: ["language", "text", "nlp", "llm"],
          cv: ["vision", "image", "computer vision"],
          mlops: ["mlops", "pipeline", "workflow", "deployment"],
          data: ["data", "processing", "analysis", "visualization"],
          generative: ["generative", "generation", "creative"],
        };

        const relevantTerms = categoryMap[category] || [category];

        return relevantTerms.some(
          (term) =>
            features.some((feature) => feature.includes(term)) ||
            badges.some((badge) => badge.includes(term))
        );
      });
    }

    // Filter by programming language - new filter specific to tools
    if (language) {
      filteredCards = filteredCards.filter((card) => {
        const metadataItems = card.querySelectorAll(".metadata-item");
        let programmingLanguage = "";

        for (const item of metadataItems) {
          if (item.querySelector("i.fas.fa-code")) {
            programmingLanguage = item
              .querySelector("span")
              .textContent.toLowerCase();
            break;
          }
        }

        return programmingLanguage.includes(language);
      });

      currentPage = 1;
      saveToLocalStorage("currentPage", currentPage);
    }

    // Filter by release year
    if (releaseYear) {
      filteredCards = filteredCards.filter((card) => {
        const metadataItems = card.querySelectorAll(".metadata-item");
        let releaseDate = "";

        for (const item of metadataItems) {
          if (item.querySelector("i.fas.fa-calendar-alt")) {
            releaseDate = item.querySelector("span").textContent;
            break;
          }
        }

        if (!releaseDate && metadataItems.length > 0) {
          releaseDate = metadataItems[0].querySelector("span").textContent;
        }

        if (!releaseDate) return false;

        const yearMatch = releaseDate.match(/\b(20\d{2})\b/);
        const year = yearMatch ? yearMatch[1] : "";

        if (releaseYear === "2020") {
          return year && parseInt(year) <= 2020;
        }
        return year === releaseYear;
      });
    }

    // Filter by license type
    if (licenseType) {
      filteredCards = filteredCards.filter((card) => {
        const license = card
          .querySelector(".stat-box:last-child .stat-value")
          .textContent.toLowerCase();

        const licenseMap = {
          mit: ["mit"],
          apache: ["apache"],
          gpl: ["gpl"],
          bsd: ["bsd"],
          commercial: ["commercial", "proprietary"],
        };

        const relevantTerms = licenseMap[licenseType] || [licenseType];

        return relevantTerms.some((term) => license.includes(term));
      });
    }

    // Filter by selected features
    if (selectedFeatures.length > 0) {
      filteredCards = filteredCards.filter((card) => {
        const features = Array.from(card.querySelectorAll(".feature-tag")).map(
          (tag) => tag.textContent.toLowerCase()
        );

        return selectedFeatures.some((selectedFeature) => {
          const normalizedFeature = selectedFeature.replace("-", " ");
          return features.some((feature) =>
            feature.includes(normalizedFeature)
          );
        });
      });
    }

    // Hide all cards initially
    allToolCards.forEach((card) => {
      card.style.display = "none";
    });

    // Update pagination info
    totalItems = filteredCards.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);

    if (currentPage > totalPages) {
      currentPage = Math.max(1, totalPages);
      saveToLocalStorage("currentPage", currentPage);
    }

    updatePaginationButtons();
    updateDisplayedCards();

    // Show notification after filter is applied
    setTimeout(() => {
      if (toolsList) {
        toolsList.style.opacity = "1";
      }

      if (
        searchTerm ||
        category ||
        language ||
        releaseYear ||
        licenseType ||
        selectedFeatures.length > 0 ||
        quickFilterValue !== "all"
      ) {
        showNotification(
          `Found ${filteredCards.length} tools matching your filters`
        );
      }
    }, 400);
  }

  // Display the filtered and paginated cards
  function updateDisplayedCards() {
    allToolCards.forEach((card) => {
      card.style.display = "none";
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredCards.length);

    for (let i = startIndex; i < endIndex; i++) {
      if (filteredCards[i]) {
        filteredCards[i].style.display = "flex";
      }
    }

    updatePageInfo(startIndex, endIndex, filteredCards.length);
  }

  // Update the pagination info text
  function updatePageInfo(
    startIndex = 0,
    endIndex = itemsPerPage,
    total = filteredCards.length
  ) {
    if (pageInfo) {
      const start = Math.min(startIndex + 1, total);
      const end = Math.min(endIndex, total);
      pageInfo.textContent = `Showing ${start}-${end} of ${total} tools`;
    }
  }

  // Update pagination buttons based on current state
  function updatePaginationButtons() {
    console.log("Updating pagination buttons with current values:");
    console.log("Current page:", currentPage);
    console.log("Total pages:", totalPages);
    console.log("Items per page:", itemsPerPage);

    const paginationContainer = document.querySelector(".pagination");
    if (!paginationContainer) {
      console.error("Pagination container not found");
      return;
    }

    const existingButtons = paginationContainer.querySelectorAll(
      ".page-button:not([title])"
    );
    existingButtons.forEach((button) => button.remove());

    const ellipses = paginationContainer.querySelectorAll(".page-ellipsis");
    ellipses.forEach((ellipsis) => ellipsis.remove());

    if (totalPages === 0) {
      if (prevButton) prevButton.style.opacity = "0.5";
      if (nextButton) nextButton.style.opacity = "0.5";
      if (prevButton) prevButton.style.cursor = "not-allowed";
      if (nextButton) nextButton.style.cursor = "not-allowed";
      return;
    }

    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    const nextBtn = paginationContainer.querySelector(
      '.page-button[title="Next page"]'
    );
    if (!nextBtn) {
      console.error("Next button not found");
      return;
    }

    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.className = "page-button" + (i === currentPage ? " active" : "");
      pageBtn.textContent = i;

      pageBtn.addEventListener("click", () => {
        currentPage = i;
        saveToLocalStorage("currentPage", currentPage);
        updatePaginationButtons();
        updateDisplayedCards();
        scrollToTop();
      });

      paginationContainer.insertBefore(pageBtn, nextBtn);
    }

    if (endPage < totalPages) {
      const ellipsis = document.createElement("div");
      ellipsis.className = "page-ellipsis";
      ellipsis.textContent = "...";
      paginationContainer.insertBefore(ellipsis, nextBtn);

      const lastPageBtn = document.createElement("button");
      lastPageBtn.className = "page-button";
      lastPageBtn.textContent = totalPages;

      lastPageBtn.addEventListener("click", () => {
        currentPage = totalPages;
        saveToLocalStorage("currentPage", currentPage);
        updatePaginationButtons();
        updateDisplayedCards();
        scrollToTop();
      });

      paginationContainer.insertBefore(lastPageBtn, nextBtn);
    }

    if (startPage > 1) {
      const firstPageBtn = document.createElement("button");
      firstPageBtn.className = "page-button";
      firstPageBtn.textContent = "1";

      firstPageBtn.addEventListener("click", () => {
        currentPage = 1;
        saveToLocalStorage("currentPage", currentPage);
        updatePaginationButtons();
        updateDisplayedCards();
        scrollToTop();
      });

      const prevBtn = paginationContainer.querySelector(
        '.page-button[title="Previous page"]'
      );
      if (prevBtn) {
        paginationContainer.insertBefore(firstPageBtn, prevBtn.nextSibling);

        if (startPage > 2) {
          const ellipsis = document.createElement("div");
          ellipsis.className = "page-ellipsis";
          ellipsis.textContent = "...";
          paginationContainer.insertBefore(ellipsis, firstPageBtn.nextSibling);
        }
      }
    }

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

  // Show notification message
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-check-circle"></i>
      <span>${message}</span>
    </div>
  `;

    notification.style.position = "fixed";
    notification.style.bottom = "24px";
    notification.style.left = "50%";
    notification.style.right = "auto";
    notification.style.transform = "translateX(-50%) translateY(100px)";
    notification.style.background = "linear-gradient(135deg, #4f46e5, #6366f1)";
    notification.style.color = "white";
    notification.style.padding = "14px 20px";
    notification.style.borderRadius = "12px";
    notification.style.boxShadow = "0 8px 30px rgba(79, 70, 229, 0.25)";
    notification.style.zIndex = "9999";
    notification.style.display = "flex";
    notification.style.alignItems = "center";
    notification.style.gap = "12px";
    notification.style.fontWeight = "500";
    notification.style.opacity = "0";
    notification.style.transition = "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    notification.style.maxWidth = "380px";
    notification.style.backdropFilter = "blur(8px)";
    notification.style.border = "1px solid rgba(255, 255, 255, 0.1)";

    const icon = notification.querySelector("i");
    icon.style.fontSize = "20px";
    icon.style.color = "#ffffff";

    const span = notification.querySelector("span");
    span.style.fontSize = "15px";
    span.style.lineHeight = "1.4";

    notification.style.overflow = "hidden";

    const shine = document.createElement("div");
    shine.style.position = "absolute";
    shine.style.top = "0";
    shine.style.left = "0";
    shine.style.width = "100%";
    shine.style.height = "100%";
    shine.style.background =
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)";
    shine.style.transform = "translateX(-100%)";
    notification.appendChild(shine);

    setTimeout(() => {
      shine.style.transition = "transform 1.5s ease-in-out";
      shine.style.transform = "translateX(100%)";
    }, 300);

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transform = "translateX(-50%) translateY(0)";
      notification.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      notification.style.transform = "translateX(-50%) translateY(100px)";
      notification.style.opacity = "0";

      setTimeout(() => {
        document.body.removeChild(notification);
      }, 400);
    }, 3000);
  }

  // Save filter state to local storage
  function saveFilters(
    searchTerm,
    category,
    language,
    releaseYear,
    licenseType,
    quickFilterValue,
    selectedFeatures
  ) {
    const filterState = {
      searchTerm,
      category,
      language,
      releaseYear,
      licenseType,
      quickFilterValue,
      selectedFeatures,
    };

    saveToLocalStorage("filterState", filterState);
  }

  // Load filters from local storage
  function loadSavedFilters() {
    const filterState = loadFromLocalStorage("filterState");
    if (!filterState) return;

    if (searchInput && filterState.searchTerm) {
      searchInput.value = filterState.searchTerm;
      if (searchClearBtn) searchClearBtn.style.display = "flex";
    }

    if (categorySelect && filterState.category) {
      categorySelect.value = filterState.category;
    }

    if (languageSelect && filterState.language) {
      languageSelect.value = filterState.language;
    }

    if (releaseYearSelect && filterState.releaseYear) {
      releaseYearSelect.value = filterState.releaseYear;
    }

    if (licenseTypeSelect && filterState.licenseType) {
      licenseTypeSelect.value = filterState.licenseType;
    }

    if (
      filterState.quickFilterValue &&
      filterState.quickFilterValue !== "all"
    ) {
      quickFilterButtons.forEach((button) => {
        if (
          button.textContent.trim().toLowerCase() ===
          filterState.quickFilterValue
        ) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }

    if (
      filterState.selectedFeatures &&
      filterState.selectedFeatures.length > 0
    ) {
      document
        .querySelectorAll('input[name="features"]')
        .forEach((checkbox) => {
          checkbox.checked = filterState.selectedFeatures.includes(
            checkbox.value.toLowerCase()
          );
        });
    }

    applyFilters();
  }

  // Local storage utility functions
  function saveToLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }

  function loadFromLocalStorage(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      return null;
    }
  }

  // Searchable dropdown functionality
  function addSearchToDropdown(select) {
    const options = select.querySelector(".custom-options");
    if (!options) return;

    // Create search input
    const searchWrapper = document.createElement("div");
    searchWrapper.className = "dropdown-search-wrapper";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "dropdown-search";
    searchInput.placeholder = "Search...";

    searchWrapper.appendChild(searchInput);
    options.insertBefore(searchWrapper, options.firstChild);

    // Search functionality
    searchInput.addEventListener("input", function () {
      const filter = this.value.toLowerCase();
      const optionItems = options.querySelectorAll(".custom-option");

      optionItems.forEach((option) => {
        if (option.textContent.toLowerCase().includes(filter)) {
          option.style.display = "";
        } else {
          option.style.display = "none";
        }
      });
    });

    // Prevent dropdown from closing when clicking in search
    searchInput.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Initialize custom dropdown with search functionality
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".custom-select").forEach((select) => {
      addSearchToDropdown(select);
    });
  });

  console.log("Tools page script initialization completed");
});
