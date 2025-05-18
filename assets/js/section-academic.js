// handbook-vertical-tabs-script.js
document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".vertical-tab-link");
  const contentPanels = document.querySelectorAll(".tab-content-panel");
  const templatesContainer = document.querySelector(
    ".section-content-templates"
  );

  function switchTab(targetTabId) {
    // Update active state for tab links
    tabLinks.forEach((link) => {
      if (link.getAttribute("data-tab") === targetTabId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Show/hide content panels
    contentPanels.forEach((panel) => {
      const panelId = panel.id.replace("tab-content-", "");
      if (panelId === targetTabId) {
        // If content is not already loaded (and not the overview tab)
        if (targetTabId !== "overview" && panel.innerHTML.trim() === "") {
          const template = templatesContainer.querySelector(
            `#template-${targetTabId}`
          );
          if (template) {
            panel.innerHTML = template.innerHTML; // Populate with template content
          } else {
            panel.innerHTML =
              '<div class="content-panel-header"><h2>Content Not Found</h2></div><div class="content-panel-body"><p>Content for this section is currently unavailable.</p></div>';
          }
        }
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }

  tabLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetTabId = link.getAttribute("data-tab");
      switchTab(targetTabId);
      // Update URL hash without triggering hashchange listener again if not needed
      if (window.location.hash !== `#${targetTabId}`) {
        window.location.hash = targetTabId;
      }
    });
  });

  // Function to activate tab based on URL hash
  function activateTabFromHash() {
    let targetTabId = "overview"; // Default to overview
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      // Check if a tab link exists for this hash
      const targetLink = document.querySelector(
        `.vertical-tab-link[data-tab="${hash}"]`
      );
      if (targetLink) {
        targetTabId = hash;
      }
    }
    switchTab(targetTabId);
  }

  // Activate tab on initial load
  activateTabFromHash();

  // Listen for hash changes (e.g., browser back/forward)
  window.addEventListener("hashchange", activateTabFromHash, false);
});
