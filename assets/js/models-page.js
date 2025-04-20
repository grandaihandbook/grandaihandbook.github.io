document.addEventListener("DOMContentLoaded", () => {
  console.log("Script initialized");

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
  const customSelects = document.querySelectorAll(".custom-select");

  const pageButtons = document.querySelectorAll(".page-button:not([title])");
  const prevButton = document.querySelector(
    '.page-button[title="Previous page"]'
  );
  const nextButton = document.querySelector('.page-button[title="Next page"]');
  const perPageSelect = document.getElementById("per-page");
  const pageInfo = document.querySelector(".page-info");

  const categorySelect = document.getElementById("category");
  const providerSelect = document.getElementById("provider");
  const releaseYearSelect = document.getElementById("release-year");
  const licenseTypeSelect = document.getElementById("license-type");

  let filteredCards = Array.from(allModelCards);

  let currentPage = loadFromLocalStorage("currentPage") || 1;
  let itemsPerPage = loadFromLocalStorage("itemsPerPage") || 5;
  if (perPageSelect) perPageSelect.value = itemsPerPage;

  let totalItems = allModelCards.length;
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  loadSavedFilters();

  updateDisplayedCards();

  const scrollBtn = document.createElement("div");
  scrollBtn.classList.add("scroll-to-top");
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollBtn);

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

        console.log("Updated hidden select value:", hiddenSelect.value);
        console.log(
          "Updated hidden select selected index:",
          hiddenSelect.selectedIndex
        );

        hiddenSelect.dispatchEvent(new Event("change", { bubbles: true }));

        select.classList.remove("open");
      });
    });
  });

  document.addEventListener("click", (e) => {
    const isCustomSelect = e.target.closest(".custom-select");

    if (!isCustomSelect) {
      customSelects.forEach((select) => {
        select.classList.remove("open");
      });
    }
  });

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

  quickFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      quickFilterButtons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      applyFilters();
    });
  });

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

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      if (searchInput.value.length > 0) {
        searchClearBtn.style.display = "flex";
      } else {
        searchClearBtn.style.display = "none";
      }
    });
  }

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

  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchClearBtn.style.display = "none";
      searchInput.focus();

      applyFilters();
    });
  }

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

  pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = parseInt(button.textContent);
      saveToLocalStorage("currentPage", currentPage);
      updatePaginationButtons();
      updateDisplayedCards();
      scrollToTop();
    });
  });

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

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function applyFilters() {
    if (modelsList) {
      modelsList.style.opacity = "0.6";
    }

    const searchTerm = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";
    const category = document.getElementById("category")
      ? document.getElementById("category").value.toLowerCase()
      : "";
    const provider = document.getElementById("provider")
      ? document.getElementById("provider").value.toLowerCase()
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
      provider,
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
      provider,
      releaseYear,
      licenseType,
      quickFilterValue,
      selectedFeatures
    );

    filteredCards = Array.from(allModelCards);
    console.log("Starting with all cards:", filteredCards.length);

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
        const features = Array.from(card.querySelectorAll(".feature-tag"))
          .map((tag) => tag.textContent.toLowerCase())
          .join(" ");

        return (
          modelName.includes(searchTerm) ||
          providerName.includes(searchTerm) ||
          description.includes(searchTerm) ||
          features.includes(searchTerm)
        );
      });
      console.log("After search filter:", filteredCards.length);
    }

    if (quickFilterValue !== "all") {
      filteredCards = filteredCards.filter((card) => {
        const badges = Array.from(card.querySelectorAll(".model-badge")).map(
          (badge) => badge.textContent.toLowerCase()
        );

        if (quickFilterValue === "computer vision") {
          return badges.some(
            (badge) =>
              badge.includes("vision") ||
              badge.includes("image") ||
              badge.includes("cv")
          );
        }

        return badges.some((badge) => badge.includes(quickFilterValue));
      });
    }

    if (category) {
      filteredCards = filteredCards.filter((card) => {
        const features = Array.from(card.querySelectorAll(".feature-tag")).map(
          (tag) => tag.textContent.toLowerCase()
        );
        const badges = Array.from(card.querySelectorAll(".model-badge")).map(
          (badge) => badge.textContent.toLowerCase()
        );

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
            badges.some((badge) => badge.includes(term))
        );
      });
    }

    if (provider) {
      console.log(`Filtering by provider: "${provider}"`);

      let matchCount = 0;

      filteredCards = filteredCards.filter((card) => {
        const providerEl = card.querySelector(".model-provider");
        const providerText = providerEl ? providerEl.textContent : "";

        const normalizedCardProvider = providerText
          .toLowerCase()
          .replace(/\s+/g, "");
        const normalizedFilterProvider = provider
          .toLowerCase()
          .replace(/\s+/g, "");

        const isMatch = normalizedCardProvider.includes(
          normalizedFilterProvider
        );

        if (isMatch) {
          matchCount++;
        }

        return isMatch;
      });

      console.log(`Found ${matchCount} matches for provider: "${provider}"`);
      console.log("After provider filter:", filteredCards.length);

      currentPage = 1;
      saveToLocalStorage("currentPage", currentPage);
    }

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

    if (licenseType) {
      filteredCards = filteredCards.filter((card) => {
        const license = card
          .querySelector(".stat-box:last-child .stat-value")
          .textContent.toLowerCase();

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

    if (selectedFeatures.length > 0) {
      filteredCards = filteredCards.filter((card) => {
        const features = Array.from(card.querySelectorAll(".feature-tag")).map(
          (tag) => tag.textContent.toLowerCase()
        );

        return selectedFeatures.some((selectedFeature) => {
          return features.some((feature) =>
            feature.includes(selectedFeature.replace("-", " "))
          );
        });
      });
    }

    allModelCards.forEach((card) => {
      card.style.display = "none";
    });

    totalItems = filteredCards.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);

    if (currentPage > totalPages) {
      currentPage = Math.max(1, totalPages);
      saveToLocalStorage("currentPage", currentPage);
    }

    updatePaginationButtons();

    updateDisplayedCards();

    setTimeout(() => {
      if (modelsList) {
        modelsList.style.opacity = "1";
      }

      if (
        searchTerm ||
        category ||
        provider ||
        releaseYear ||
        licenseType ||
        selectedFeatures.length > 0 ||
        quickFilterValue !== "all"
      ) {
        showNotification(
          `Found ${filteredCards.length} models matching your filters`
        );
      }
    }, 400);
  }

  function updateDisplayedCards() {
    allModelCards.forEach((card) => {
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

  function updatePageInfo(
    startIndex = 0,
    endIndex = itemsPerPage,
    total = filteredCards.length
  ) {
    if (pageInfo) {
      const start = Math.min(startIndex + 1, total);
      const end = Math.min(endIndex, total);
      pageInfo.textContent = `Showing ${start}-${end} of ${total} models`;
    }
  }

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

  function saveFilters(
    searchTerm,
    category,
    provider,
    releaseYear,
    licenseType,
    quickFilterValue,
    selectedFeatures
  ) {
    const filterState = {
      searchTerm,
      category,
      provider,
      releaseYear,
      licenseType,
      quickFilterValue,
      selectedFeatures,
    };

    saveToLocalStorage("filterState", filterState);
  }

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

    if (providerSelect && filterState.provider) {
      providerSelect.value = filterState.provider;
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

  console.log("Script initialization completed");
});

document.addEventListener("DOMContentLoaded", function () {
  initCustomDropdowns();
});

function initCustomDropdowns() {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((select) => {
    const trigger = select.querySelector(".custom-select__trigger");
    const options = select.querySelector(".custom-options");
    const hiddenSelect = select.querySelector(".hidden-select");

    addSearchToDropdown(select);

    trigger.addEventListener("click", () => {
      customSelects.forEach((s) => {
        if (s !== select) s.classList.remove("open");
      });

      select.classList.toggle("open");

      if (select.classList.contains("open")) {
        const searchInput = select.querySelector(".dropdown-search");
        if (searchInput) setTimeout(() => searchInput.focus(), 100);
      }
    });

    const optionElements = options.querySelectorAll(".custom-option");
    optionElements.forEach((option) => {
      option.addEventListener("click", () => {
        trigger.querySelector("span").textContent = option.textContent;

        hiddenSelect.value = option.getAttribute("data-value");

        optionElements.forEach((o) => o.classList.remove("selected"));
        option.classList.add("selected");

        const event = new Event("change", { bubbles: true });
        hiddenSelect.dispatchEvent(event);

        select.classList.remove("open");
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      customSelects.forEach((select) => select.classList.remove("open"));
    }
  });
}
