// Script to enhance reading experience for academic content
document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on a markdown content page
  const contentBody = document.querySelector(".markdown-content");
  if (!contentBody) return;

  // Create reading progress indicator
  const progressBar = document.createElement("div");
  progressBar.classList.add("reading-progress");
  document.body.appendChild(progressBar);

  // Update reading progress as user scrolls
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

  // Add ID attributes to headings if they don't have one
  const headings = contentBody.querySelectorAll("h2, h3");
  headings.forEach((heading) => {
    if (!heading.id) {
      // Create ID from heading text
      const id = heading.textContent
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

      heading.id = id;
    }

    // Add link to headings
    const linkIcon = document.createElement("a");
    linkIcon.href = `#${heading.id}`;
    linkIcon.classList.add("heading-link");
    linkIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';
    heading.appendChild(linkIcon);
  });

  // Add target="_blank" to external links
  const externalLinks = contentBody.querySelectorAll('a[href^="http"]');
  externalLinks.forEach((link) => {
    if (!link.hasAttribute("target")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  // Add navigation between sections if possible
  if (
    typeof prevSection !== "undefined" ||
    typeof nextSection !== "undefined"
  ) {
    const navSection = document.createElement("div");
    navSection.classList.add("section-navigation");

    // Previous section link
    if (typeof prevSection !== "undefined") {
      const prevLink = document.createElement("a");
      prevLink.href = prevSection;
      prevLink.classList.add("prev-section");
      prevLink.innerHTML =
        '<span class="nav-arrow">←</span><span class="nav-text">Previous Section</span>';
      navSection.appendChild(prevLink);
    } else {
      // Empty div for spacing
      const spacer = document.createElement("div");
      navSection.appendChild(spacer);
    }

    // Next section link
    if (typeof nextSection !== "undefined") {
      const nextLink = document.createElement("a");
      nextLink.href = nextSection;
      nextLink.classList.add("next-section");
      nextLink.innerHTML =
        '<span class="nav-text">Next Section</span><span class="nav-arrow">→</span>';
      navSection.appendChild(nextLink);
    }

    contentBody.appendChild(navSection);
  }

  // Enhance lists after specific paragraphs (like key concepts)
  const paragraphs = contentBody.querySelectorAll("p");
  paragraphs.forEach((p) => {
    if (p.textContent.includes("it helps to understand:")) {
      const nextUl = p.nextElementSibling;
      if (nextUl && nextUl.tagName === "UL") {
        nextUl.classList.add("key-concepts-list");
      }
    }
  });

  // Create section wrappers for better organization
  let currentSection = null;
  Array.from(contentBody.children).forEach((element) => {
    if (element.tagName === "H2") {
      // Start a new section
      currentSection = document.createElement("div");
      currentSection.classList.add("topic-section");
      // Insert before the h2
      element.parentNode.insertBefore(currentSection, element);
      // Move h2 into the section
      currentSection.appendChild(element);
    } else if (currentSection && element.tagName !== "H2") {
      // Move this element into the current section
      currentSection.appendChild(element);
    }
  });
});
