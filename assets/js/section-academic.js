// Script to enhance academic content reading experience
document.addEventListener("DOMContentLoaded", function () {
  // Add academic-content class to the content
  const contentBody = document.querySelector(".content-body");
  if (contentBody) {
    contentBody.classList.add("academic-content");
  }

  // Create reading progress indicator
  const progressBar = document.createElement("div");
  progressBar.classList.add("reading-progress");
  document.body.appendChild(progressBar);

  // Update reading progress
  function updateReadingProgress() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.style.width = scrolled + "%";
  }

  // Add scroll event listener
  window.addEventListener("scroll", updateReadingProgress);

  // Initialize progress bar
  updateReadingProgress();

  // External links open in new tab
  const externalLinks = document.querySelectorAll(
    '.academic-content a[href^="http"]'
  );
  externalLinks.forEach((link) => {
    if (!link.hasAttribute("target")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  // Add section navigation if needed
  if (!document.querySelector(".section-navigation")) {
    const sectionNav = document.createElement("div");
    sectionNav.classList.add("section-navigation");

    // Check if previous/next section variables exist
    if (typeof window.prevSection !== "undefined") {
      const prevLink = document.createElement("a");
      prevLink.href = window.prevSection;
      prevLink.classList.add("prev-section");
      prevLink.innerHTML =
        '<span class="nav-arrow">←</span><span class="nav-text">Previous Section</span>';
      sectionNav.appendChild(prevLink);
    } else {
      sectionNav.appendChild(document.createElement("div"));
    }

    if (typeof window.nextSection !== "undefined") {
      const nextLink = document.createElement("a");
      nextLink.href = window.nextSection;
      nextLink.classList.add("next-section");
      nextLink.innerHTML =
        '<span class="nav-text">Next Section</span><span class="nav-arrow">→</span>';
      sectionNav.appendChild(nextLink);
    }

    // Add navigation to the end of content
    if (
      contentBody &&
      (typeof prevSection !== "undefined" || typeof nextSection !== "undefined")
    ) {
      contentBody.appendChild(sectionNav);
    }
  }
});
