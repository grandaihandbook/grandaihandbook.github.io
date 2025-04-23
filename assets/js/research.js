const CONTENT_TYPES = {
  "weekly-papers": {
    path: "/content/research/weekly-papers/",
    icon: "📄",
    showDate: true,
    showAuthors: true,
    showTags: true,
    showAuthorImage: false,
  },
  "landmark-papers": {
    path: "/content/landmark-papers/",
    icon: "🏆",
    showDate: true,
    showAuthors: true,
    showTags: true,
    showAuthorImage: false,
  },
  surveys: {
    path: "/content/surveys/",
    icon: "📚",
    showDate: true,
    showAuthors: true,
    showTags: true,
    showAuthorImage: false,
  },
  trends: {
    path: "/content/trends/",
    icon: "📈",
    showDate: true,
    showAuthors: false,
    showTags: true,
    showAuthorImage: false,
  },
  challenges: {
    path: "/content/challenges/",
    icon: "🧩",
    showDate: true,
    showAuthors: false,
    showTags: true,
    showAuthorImage: false,
  },
  "author-spotlights": {
    path: "/content/author-spotlights/",
    icon: "👤",
    showDate: false,
    showAuthors: false,
    showTags: true,
    showAuthorImage: true,
  },
  "curated-guides": {
    path: "/content/curated-guides/",
    icon: "📋",
    showDate: true,
    showAuthors: true,
    showTags: true,
    showAuthorImage: false,
  },
};

// =========================================================================
// 2. DOM ELEMENTS
// =========================================================================
const researchContainers = document.querySelectorAll("[data-content-type]");

// =========================================================================
// 3. MARKDOWN FETCHING & PARSING
// =========================================================================
/**
 * Fetches a markdown file and returns the parsed content
 * @param {string} path - Path to markdown file
 * @returns {Object} - Parsed markdown with frontmatter and content
 */
async function fetchMarkdown(path) {
  console.log(`Attempting to fetch: ${path}`);
  try {
    const response = await fetch(path);
    if (!response.ok) {
      console.error(
        `Failed to load ${path}: ${response.status} ${response.statusText}`
      );
      return null;
    }
    const text = await response.text();
    console.log(`Successfully loaded ${path}, content length: ${text.length}`);
    return parseMarkdown(text);
  } catch (error) {
    console.error("Error fetching markdown:", error, "Path:", path);
    return null;
  }
}

/**
 * Parses markdown text with frontmatter
 * @param {string} markdown - Raw markdown text
 * @returns {Object} - Object with frontmatter and content separated
 */
function parseMarkdown(markdown) {
  // Check if the file is empty or null
  if (!markdown || markdown.trim() === "") {
    console.error("Empty markdown file");
    return {
      frontmatter: { title: "Empty File" },
      shortDescription: "This file appears to be empty.",
      fullContent: "",
    };
  }

  // Look for frontmatter between --- markers
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    console.warn("No frontmatter found in markdown file");
    // Return default values for files without frontmatter
    return {
      frontmatter: { title: "Missing Frontmatter" },
      shortDescription: markdown.substring(0, 200) + "...",
      fullContent: markdown,
    };
  }

  // Parse frontmatter
  const frontmatterLines = match[1].split("\n");
  const frontmatter = {};

  frontmatterLines.forEach((line) => {
    if (!line.trim()) return; // Skip empty lines

    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Handle arrays in frontmatter (e.g., tags: ["tag1", "tag2"])
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          // Fall back to simpler parsing
          value = value
            .slice(1, -1)
            .split(",")
            .map((item) => item.trim());
        }
      }

      // Remove quotes if present
      if (
        typeof value === "string" &&
        ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'")))
      ) {
        value = value.slice(1, -1);
      }

      frontmatter[key] = value;
    }
  });

  // Make sure there's a title
  if (!frontmatter.title) {
    frontmatter.title = "Untitled Document";
  }

  // Get content after frontmatter
  const content = match[2].trim();

  // Check if content has sections with # headers
  if (content.includes("# ")) {
    const sections = content.split(/(?=# )/g);
    // Get the initial text before any headers as the short description
    const shortDescription =
      sections[0].trim() || sections[1]?.substr(0, 150) + "...";
    return { frontmatter, shortDescription, fullContent: content };
  } else {
    // If no headers, use the first paragraph as short description
    const paragraphs = content.split("\n\n");
    const shortDescription = paragraphs[0] || "No preview available";
    return { frontmatter, shortDescription, fullContent: content };
  }
}

// =========================================================================
// 4. CARD RENDERING
// =========================================================================
/**
 * Creates HTML for a research card
 * @param {Object} data - Parsed markdown data
 * @param {string} type - Content type (weekly-paper, etc.)
 * @returns {string} - HTML string for the card
 */
function createCardHTML(data, type) {
  if (!data) {
    return `
      <article class="research-card research-card-error">
        <div class="research-card-header">
          <div class="research-card-icon">⚠️</div>
          <h3 class="research-card-title">Error Loading Content</h3>
        </div>
        <div class="research-card-content">
          <p>There was a problem loading this content. Please try again later.</p>
        </div>
      </article>
    `;
  }
  const { frontmatter, shortDescription, fullContent } = data;
  const config = CONTENT_TYPES[type];

  // Convert markdown to HTML (simple version - expand as needed)
  function markdownToHTML(markdown) {
    if (!markdown) return "";
    return markdown
      .replace(/# (.*)/g, "<h3>$1</h3>")
      .replace(/## (.*)/g, "<h4>$1</h4>")
      .replace(/\*\*(.*)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*)\*/g, "<em>$1</em>")
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" class="research-card-link">$1</a>'
      )
      .replace(/\n\n/g, "<br><br>");
  }

  // Generate tags HTML if available
  const tagsHTML =
    frontmatter.tags && config.showTags
      ? `
    <div class="research-card-tags">
      ${
        Array.isArray(frontmatter.tags)
          ? frontmatter.tags
              .map((tag) => `<span class="research-card-tag">${tag}</span>`)
              .join("")
          : ""
      }
    </div>
  `
      : "";

  // Generate author image if applicable
  const authorImageHTML =
    config.showAuthorImage && frontmatter.authorImage
      ? `
    <img src="${frontmatter.authorImage}" alt="${
          frontmatter.authorName || "Author"
        }" class="research-card-author-image">
  `
      : "";

  return `
    <article class="research-card" data-type="${type}" data-id="${
    frontmatter.id || ""
  }">
      <div class="research-card-header">
        <div class="research-card-icon">
          <span>${config.icon}</span>
        </div>
        <h3 class="research-card-title">${frontmatter.title || "Untitled"}</h3>
        ${authorImageHTML}
      </div>
      
      <div class="research-card-meta">
        ${
          config.showDate && frontmatter.date
            ? `
          <span class="research-card-date">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            ${frontmatter.date}
          </span>
        `
            : ""
        }
        
        ${
          config.showAuthors && frontmatter.authors
            ? `
          <span class="research-card-authors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            ${
              Array.isArray(frontmatter.authors)
                ? frontmatter.authors.join(", ")
                : frontmatter.authors
            }
          </span>
        `
            : ""
        }
        
        ${tagsHTML}
      </div>
      
      <div class="research-card-divider"></div>
      
      <div class="research-card-content">
        <div class="research-card-preview">
          ${markdownToHTML(shortDescription)}
        </div>
        <div class="research-card-full-content">
          ${markdownToHTML(fullContent)}
          
          ${
            frontmatter.link
              ? `
            <div class="research-card-ext-link">
              <a href="${frontmatter.link}" class="research-card-link" target="_blank" rel="noopener">
                View Original Source
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          `
              : ""
          }
        </div>
      </div>
      
      <div class="research-card-footer">
        <button class="research-card-toggle">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </article>
  `;
}

// =========================================================================
// 5. CONTENT LOADING
// =========================================================================
/**
 * Loads content for a specific container
 * @param {HTMLElement} container - Container element
 */
async function loadContentForContainer(container) {
  const contentType = container.getAttribute("data-content-type");
  const year = container.getAttribute("data-year"); // Get year attribute if present

  if (!CONTENT_TYPES[contentType]) return;

  // Create a grid to hold the cards
  const grid = document.createElement("div");
  grid.className = "research-grid";
  container.appendChild(grid);

  // For weekly papers with year structure
  if (contentType === "weekly-papers" && year) {
    // Get potential file names
    const potentialFiles = await getContentFiles(contentType, year);
    let consecutiveMissingFiles = 0;
    const MAX_CONSECUTIVE_MISSING = 4; // Stop after 4 consecutive missing files

    // Try loading each file
    for (let i = 0; i < potentialFiles.length; i++) {
      const fileName = potentialFiles[i];
      const filePath = `${CONTENT_TYPES[contentType].path}${year}/${fileName}`;

      try {
        const data = await fetchMarkdown(filePath);
        if (data) {
          // Reset the counter if we find a file
          consecutiveMissingFiles = 0;

          // Create and append the card
          const cardHTML = createCardHTML(data, contentType);
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = cardHTML;
          grid.appendChild(tempDiv.firstElementChild);
        } else {
          consecutiveMissingFiles++;
        }
      } catch (error) {
        // File doesn't exist
        consecutiveMissingFiles++;
        console.log(`File not found: ${fileName}, skipping`);
      }

      // Stop checking if we've missed several files in a row
      // This optimizes loading by not checking all 52 weeks if many are missing
      if (consecutiveMissingFiles >= MAX_CONSECUTIVE_MISSING) {
        console.log("Several consecutive files missing, stopping search");
        break;
      }
    }
  } else {
    // For other content types, load files normally
    const files = await getContentFiles(contentType);
    const contentFiles = files.map(
      (file) => `${CONTENT_TYPES[contentType].path}${file}`
    );

    // Load each content file
    for (const filePath of contentFiles) {
      try {
        const data = await fetchMarkdown(filePath);
        if (data) {
          const cardHTML = createCardHTML(data, contentType);
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = cardHTML;
          grid.appendChild(tempDiv.firstElementChild);
        }
      } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
      }
    }
  }

  // If no cards were added, show a message
  if (grid.children.length === 0) {
    const noContentEl = document.createElement("div");
    noContentEl.className = "research-no-content";
    noContentEl.innerHTML = `
      <p>No content available yet for ${contentType.replace("-", " ")}.
      Check back soon for updates!</p>
    `;
    container.appendChild(noContentEl);
  }

  // Add event listeners for the newly created cards
  setupCardInteractivity(container);
}

/**
/**
 * Gets list of content files for a content type
 * Handles weekly papers with year-based structure
 * @param {string} contentType - Type of content
 * @param {string} year - Year for weekly papers (optional)
 * @returns {Array} - List of file names
 */
async function getContentFiles(contentType, year) {
  // For weekly papers with year structure
  if (contentType === "weekly-papers" && year) {
    // Generate filenames for up to 52 weeks
    const potentialFiles = Array.from(
      { length: 52 },
      (_, i) => `week${i + 1}.md`
    );

    // In a real-world implementation, you might want to:
    // 1. Check which files actually exist on the server
    // 2. Use a manifest.json file that lists available files
    // 3. Make an API call to get the list of files

    return potentialFiles;
  }

  // For other content types - using placeholders
  const placeholders = {
    "landmark-papers": ["foundation-models.md", "large language models.md"],
    surveys: ["survey.md"],
    trends: ["trend.md"],
    challenges: ["challenge.md"],
    "author-spotlights": ["author.md"],
    "curated-guides": ["guide.md"],
  };

  return placeholders[contentType] || [];
}

// =========================================================================
// 6. INTERACTIVITY
// =========================================================================
/**
 * Sets up click handlers for expand/collapse
 * @param {HTMLElement} container - Container with cards
 */
function setupCardInteractivity(container) {
  const toggleButtons = container.querySelectorAll(".research-card-toggle");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".research-card");
      card.classList.toggle("expanded");

      // Update button text
      if (card.classList.contains("expanded")) {
        button.innerHTML = `
          Show Less
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        `;
      } else {
        button.innerHTML = `
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        `;
      }
    });
  });
}

// =========================================================================
// 7. INITIALIZATION
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Load content for each container
  researchContainers.forEach(loadContentForContainer);
});
