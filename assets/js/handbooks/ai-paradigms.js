// Enhanced JavaScript for Multiple AI Paradigms Sections
document.addEventListener("DOMContentLoaded", function () {
  // Find all carousel sections
  const sections = document.querySelectorAll(".ai-paradigms-section");

  sections.forEach((section) => {
    initializeSection(section);
  });

  function initializeSection(section) {
    // Core functionality for each section
    const container = section.querySelector(".paradigms-scroll-container");
    const prevButton = section.querySelector(".nav-prev");
    const nextButton = section.querySelector(".nav-next");
    const cards = section.querySelectorAll(".paradigm-card");

    if (!container || !prevButton || !nextButton || !cards.length) return;

    const cardWidth = cards[0].offsetWidth + 24; // Card width + gap

    // Initially disable prev button
    prevButton.disabled = true;
    updateButtonsState();

    // Scroll to next set of cards
    nextButton.addEventListener("click", function () {
      container.scrollBy({
        left: window.innerWidth < 768 ? cardWidth * 1 : cardWidth * 3, // Scroll 3 cards at a time (1 on mobile)
        behavior: "smooth",
      });
      setTimeout(updateButtonsState, 300); // Update after scroll animation
    });

    // Scroll to previous set of cards
    prevButton.addEventListener("click", function () {
      container.scrollBy({
        left: window.innerWidth < 768 ? -cardWidth * 1 : -cardWidth * 3, // Scroll 3 cards at a time (1 on mobile)
        behavior: "smooth",
      });
      setTimeout(updateButtonsState, 300); // Update after scroll animation
    });

    // Update navigation buttons state
    function updateButtonsState() {
      const scrollPos = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      prevButton.disabled = scrollPos <= 5; // 5px threshold for small inconsistencies
      nextButton.disabled = scrollPos >= maxScroll - 5;

      // Visual feedback for button state
      prevButton.style.opacity = prevButton.disabled ? "0.4" : "1";
      nextButton.style.opacity = nextButton.disabled ? "0.4" : "1";
    }

    // Update on scroll
    container.addEventListener("scroll", function () {
      updateButtonsState();
    });

    // Plus button functionality
    const plusButtons = section.querySelectorAll(".card-plus-button");
    plusButtons.forEach((button, index) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const cardTitle = cards[index].querySelector(".card-title").textContent;
        const cleanTitle = cardTitle
          .replace(/\([^)]*\)/g, "")
          .trim()
          .toLowerCase();
        const slug = cleanTitle.replace(/\s+/g, "-");

        // Navigate to handbook page
        window.location.href = `/content/handbooks/${slug}/`;
      });
    });

    // ===== ENHANCEMENT: CARD ENTRANCE ANIMATION =====
    // Use Intersection Observer for revealing cards when they enter viewport
    const observeCards = () => {
      const options = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // 10% of the item visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      }, options);

      cards.forEach((card) => {
        observer.observe(card);
      });
    };

    // ===== ENHANCEMENT: SEQUENTIAL LOADING =====
    // Load cards with a slight delay between each
    const sequentialLoadCards = () => {
      cards.forEach((card, index) => {
        // Add staggered delay to each card
        setTimeout(() => {
          card.style.transitionDelay = `${index * 75}ms`;
        }, 0);
      });
    };

    // Initialize all enhancements for this section
    observeCards();
    sequentialLoadCards();

    // Update button state on window resize
    window.addEventListener("resize", function () {
      updateButtonsState();
    });
  }
});
