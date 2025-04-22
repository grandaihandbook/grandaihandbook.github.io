// Main JavaScript file for The Grand AI Handbook

document.addEventListener("DOMContentLoaded", function () {
  // Initialize code highlighting if Prism.js is available
  if (typeof Prism !== "undefined") {
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
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
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
  const tocContainer = document.getElementById("table-of-contents");
  if (!tocContainer) return;

  const headings = document.querySelectorAll(
    ".markdown-content h2, .markdown-content h3"
  );
  if (headings.length < 3) {
    tocContainer.style.display = "none";
    return;
  }

  const tocList = document.createElement("ul");
  tocList.className = "toc-list";

  headings.forEach((heading, index) => {
    // Add ID to heading if it doesn't have one
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const listItem = document.createElement("li");
    listItem.className = heading.tagName === "H3" ? "ml-4" : "";

    const link = document.createElement("a");
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
  const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
  if (sidebarLinks.length === 0) return;

  // Add scroll event listener
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // Find all section elements
    const sections = document.querySelectorAll(
      "section[id], .markdown-content h2[id]"
    );

    // Find the section that's currently in view
    let currentSection = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollPosition >= sectionTop) {
        currentSection = section.id;
      }
    });

    // Update active state in sidebar
    if (currentSection) {
      sidebarLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href.includes(`#${currentSection}`)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}

/**
 * Lazy load images
 */
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img[data-src]");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.removeAttribute("data-src");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyImages.forEach((image) => {
      imageObserver.observe(image);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach((image) => {
      image.src = image.dataset.src;
      image.removeAttribute("data-src");
    });
  }
});

function toggleSection(sectionId) {
  const content = document.getElementById(sectionId + "-content");
  const chevron = document.getElementById(sectionId + "-chevron");

  if (content) {
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      if (chevron) chevron.innerHTML = "▼";
    } else {
      content.style.display = "none";
      if (chevron) chevron.innerHTML = "▶";
    }
  }

  // Prevent event bubbling
  event.stopPropagation();
}

// Initialize all sections as collapsed on page load
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section-content");
  const subsections = document.querySelectorAll(".subsection-content");

  sections.forEach((section) => {
    section.style.display = "none";
  });

  subsections.forEach((subsection) => {
    subsection.style.display = "none";
  });

  // Add click event listeners to all section headers
  const sectionHeaders = document.querySelectorAll(".section-header");
  sectionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      // Extract section ID from header ID (remove '-header' suffix)
      const headerId = this.id;
      const sectionId = headerId.replace("-header", "");
      toggleSection(sectionId);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const trailContainer = document.getElementById("mouse-trail-container");
  const hero = document.querySelector(".hero");

  // Create trail dots
  for (let i = 0; i < 15; i++) {
    const trailDot = document.createElement("div");
    trailDot.className = "mouse-trail";
    trailContainer.appendChild(trailDot);
  }

  const trails = document.querySelectorAll(".mouse-trail");
  const coords = { x: 0, y: 0 };
  const trailCoords = Array(trails.length)
    .fill()
    .map(() => ({ x: 0, y: 0 }));

  // Only track mouse within the hero section
  hero.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    // Make trail visible
    trails.forEach((trail) => {
      trail.style.opacity = "0.7";
    });
  });

  // Hide trails when mouse leaves hero section
  hero.addEventListener("mouseleave", function () {
    trails.forEach((trail) => {
      trail.style.opacity = "0";
    });
  });

  // Update trail positions
  function animateTrails() {
    let x = coords.x;
    let y = coords.y;

    trails.forEach((trail, index) => {
      // Create trailing effect by delaying each dot
      const nextIndex = (index + 1) % trails.length;
      trailCoords[index].x = index === 0 ? x : trailCoords[nextIndex].x;
      trailCoords[index].y = index === 0 ? y : trailCoords[nextIndex].y;

      // Apply position with slight delay for trailing effect
      trail.style.left = `${trailCoords[index].x}px`;
      trail.style.top = `${trailCoords[index].y}px`;

      // Different sizes for visual interest
      const size = 8 - index * 0.4;
      if (size > 0) {
        trail.style.width = `${size}px`;
        trail.style.height = `${size}px`;
      }

      // Fade opacity for trailing effect
      trail.style.opacity = Math.max(0, 0.7 - index * 0.05);
    });

    requestAnimationFrame(animateTrails);
  }

  animateTrails();

  // Parallax effect for 3D objects
  const objects3D = document.querySelectorAll(
    ".object-3d, .holographic-prism, .neon-line"
  );
  const waves = document.querySelector(".wave-path");

  hero.addEventListener("mousemove", function (e) {
    const heroRect = hero.getBoundingClientRect();
    const centerX = heroRect.width / 2;
    const centerY = heroRect.height / 2;

    // Calculate mouse position relative to center (from -1 to 1)
    const relativeX = (e.clientX - heroRect.left - centerX) / centerX;
    const relativeY = (e.clientY - heroRect.top - centerY) / centerY;

    // Apply parallax effect to 3D objects with different intensities
    objects3D.forEach((obj, index) => {
      const intensity = 5 + (index % 5); // Vary the intensity for different objects
      const shiftX = relativeX * intensity;
      const shiftY = relativeY * intensity;

      obj.style.transform = obj.style.transform.includes("rotate")
        ? `${
            obj.style.transform.split(") translate")[0]
          }) translate(${shiftX}px, ${shiftY}px)`
        : `translate(${shiftX}px, ${shiftY}px)`;
    });

    // Subtle effect on the wave pattern
    waves.style.transform = `translate(${relativeX * 10}px, ${
      relativeY * 10
    }px)`;
  });

  // Reset positions when mouse leaves
  hero.addEventListener("mouseleave", function () {
    objects3D.forEach((obj) => {
      obj.style.transform = obj.style.transform.includes("rotate")
        ? `${obj.style.transform.split(") translate")[0]})`
        : "";
    });

    waves.style.transform = "";
  });
});
