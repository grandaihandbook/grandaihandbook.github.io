document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const featuredContent = document.getElementById("featuredContent");
  const sliderContainer = document.getElementById("newsSlider");
  const dotsContainer = document.getElementById("sliderDots");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");
  const progressBar = document.getElementById("progressBar");

  // Variables for progress and auto-rotation
  let currentIndex = 0;
  let progressInterval;
  const transitionTime = 5000; // 5 seconds
  const updateInterval = 50; // Update progress every 50ms for smooth animation
  let progress = 0;

  // Variable to store trend data
  let trendsData = null;

  /**
   * Load the data from the JSON file
   */
  async function loadData() {
    try {
      // Fetch the JSON data
      const response = await fetch("ai-trends.json");

      if (!response.ok) {
        console.error("Failed to load data.json");
        return;
      }

      // Parse the JSON data
      trendsData = await response.json();

      // Initialize the page with the loaded data
      initializePage();
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  /**
   * Initialize the page components
   */
  function initializePage() {
    if (
      !trendsData ||
      !trendsData.newsItems ||
      trendsData.newsItems.length === 0
    ) {
      console.error("No valid data available");
      return;
    }

    // Initialize the featured content with the first news item's featured content
    featuredContent.innerHTML = generateFeaturedTrendHTML(
      trendsData.newsItems[0].featuredContent
    );

    // Initialize the news slider with all news items
    sliderContainer.innerHTML = trendsData.newsItems
      .map((newsItem, index) => generateNewsItemHTML(newsItem, index))
      .join("");

    // Initialize the slider dots
    dotsContainer.innerHTML = generateSliderDotsHTML(
      trendsData.newsItems.length
    );

    // Add event listeners to news items and dots
    setupEventListeners();

    // Start the progress bar for auto-rotation
    resetProgress();
  }

  /**
   * Generate HTML for a featured trend
   */
  function generateFeaturedTrendHTML(featuredItem) {
    return `
      <div class="featured-trend-info">
        <div class="trend-meta">
          <span class="trend-date">${featuredItem.date}</span>
          <div class="trend-tags">
            ${featuredItem.tags
              .map((tag) => `<span class="trend-tag">${tag}</span>`)
              .join("")}
          </div>
        </div>
        <h3 class="trend-title">${featuredItem.title}</h3>
        <p class="trend-description">${featuredItem.description}</p>
        <a href="${featuredItem.link}" class="trend-read-more">
          Read Full Analysis
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
      <div class="featured-trend-image">
        <img src="${featuredItem.image}" alt="${featuredItem.title}">
      </div>
    `;
  }

  /**
   * Generate HTML for a news item
   */
  function generateNewsItemHTML(newsItem, index) {
    return `
      <div class="news-item ${
        index === 0 ? "active" : ""
      }" data-index="${index}">
        <h4 class="news-item-title">${newsItem.title}</h4>
        <span class="news-item-category">${newsItem.category}</span>
      </div>
    `;
  }

  /**
   * Generate HTML for slider dots
   */
  function generateSliderDotsHTML(count) {
    let dotsHTML = "";
    for (let i = 0; i < count; i++) {
      dotsHTML += `<span class="slider-dot ${
        i === 0 ? "active" : ""
      }" data-index="${i}"></span>`;
    }
    return dotsHTML;
  }

  /**
   * Set up all event listeners
   */
  function setupEventListeners() {
    // News items click event
    document.querySelectorAll(".news-item").forEach((item) => {
      item.addEventListener("click", function () {
        const index = parseInt(this.dataset.index);
        setActiveItem(index);
      });
    });

    // Dots click event
    document.querySelectorAll(".slider-dot").forEach((dot) => {
      dot.addEventListener("click", function () {
        const index = parseInt(this.dataset.index);
        setActiveItem(index);
      });
    });

    // Previous arrow click
    prevArrow.addEventListener("click", () => {
      const newIndex =
        currentIndex === 0 ? trendsData.newsItems.length - 1 : currentIndex - 1;
      setActiveItem(newIndex);
    });

    // Next arrow click
    nextArrow.addEventListener("click", () => {
      const newIndex =
        currentIndex === trendsData.newsItems.length - 1 ? 0 : currentIndex + 1;
      setActiveItem(newIndex);
    });

    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      // Pause autoplay on touch
      clearInterval(progressInterval);
    });

    sliderContainer.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      // Resume autoplay after touch
      resetProgress();
    });

    // Pause progress on hover
    sliderContainer.addEventListener("mouseenter", () => {
      clearInterval(progressInterval);
    });

    sliderContainer.addEventListener("mouseleave", () => {
      resetProgress();
    });
  }

  /**
   * Handle swipe gestures
   */
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left - show next
      const newIndex =
        currentIndex === trendsData.newsItems.length - 1 ? 0 : currentIndex + 1;
      setActiveItem(newIndex);
    } else if (touchEndX > touchStartX + 50) {
      // Swipe right - show previous
      const newIndex =
        currentIndex === 0 ? trendsData.newsItems.length - 1 : currentIndex - 1;
      setActiveItem(newIndex);
    }
  }

  /**
   * Set the active news item and update the featured trend accordingly
   */
  function setActiveItem(index) {
    // Remove active class from all items and dots
    document.querySelectorAll(".news-item").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelectorAll(".slider-dot").forEach((dot) => {
      dot.classList.remove("active");
    });

    // Add active class to current item and dot
    const activeItem = document.querySelector(
      `.news-item[data-index="${index}"]`
    );
    activeItem.classList.add("active");
    document
      .querySelector(`.slider-dot[data-index="${index}"]`)
      .classList.add("active");

    // Scroll to active item
    sliderContainer.scrollLeft =
      activeItem.offsetLeft -
      sliderContainer.offsetWidth / 2 +
      activeItem.offsetWidth / 2;

    // Update current index
    currentIndex = index;

    // Update the featured content with the selected news item's featured content
    featuredContent.innerHTML = generateFeaturedTrendHTML(
      trendsData.newsItems[index].featuredContent
    );

    // Reset progress bar
    resetProgress();
  }

  /**
   * Progress bar functionality - update the progress for auto-rotation
   */
  function updateProgress() {
    progress += (updateInterval / transitionTime) * 100;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      // Move to next slide
      const newIndex =
        currentIndex === trendsData.newsItems.length - 1 ? 0 : currentIndex + 1;
      setActiveItem(newIndex);
    }
  }

  /**
   * Reset and restart the progress bar
   */
  function resetProgress() {
    clearInterval(progressInterval);
    progress = 0;
    progressBar.style.width = "0%";

    // Start new progress
    progressInterval = setInterval(updateProgress, updateInterval);
  }

  // Load the data to initialize the page
  loadData();
});
