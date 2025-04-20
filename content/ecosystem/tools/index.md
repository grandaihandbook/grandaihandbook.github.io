---
layout: default
---

<!-- Added Font Awesome CDN link -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="/assets/css/ecosystem-page.css">

<div class="items-container tools-container">
  <!-- Header Section -->
  <header class="content-header">
    <h1>AI Tools Directory</h1>
    <div class="header-accent"></div>
    <p class="description">Discover and explore powerful AI tools, libraries, and utilities for developers, researchers, and enthusiasts.</p>
  </header>

  <!-- Filter Section -->
  <section class="filter-section">
    <div class="filter-header">
      <h3>Tools</h3>
      <p class="filter-subtitle">Find the perfect AI tools for your projects with our comprehensive filtering system</p>
      <div class="quick-filter-buttons">
        <button class="quick-filter-badge active">All</button>
        <button class="quick-filter-badge">NLP</button>
        <button class="quick-filter-badge">Computer Vision</button>
        <button class="quick-filter-badge">MLOps</button>
        <button class="quick-filter-badge">Data Processing</button>
      </div>
    </div>

    <div class="filter-primary">
      <div class="search-group">
        <i class="fas fa-search search-icon"></i>
        <input type="text" id="search" class="search-input" placeholder="Search tools by name, provider, or description">
        <button class="search-clear" title="Clear search"><i class="fas fa-times"></i></button>
      </div>
      <button class="advanced-filter-button" id="advanced-filter-toggle">
        <i class="fas fa-sliders-h"></i>
        <span>Advanced Filters</span>
      </button>
    </div>

    <div class="filter-advanced">
      <div class="advanced-filter-grid">
        <!-- Category Custom Dropdown -->
        <div class="filter-group">
          <label class="filter-label" for="category">Category</label>
          <div class="custom-select-wrapper">
            <div class="custom-select">
              <div class="custom-select__trigger">
                <span>All Categories</span>
                <i class="fas fa-chevron-down"></i>
              </div>
              <div class="custom-options">
                <span class="custom-option selected" data-value="">All Categories</span>
                <span class="custom-option" data-value="nlp">Natural Language Processing</span>
                <span class="custom-option" data-value="cv">Computer Vision</span>
                <span class="custom-option" data-value="mlops">MLOps</span>
                <span class="custom-option" data-value="data">Data Processing</span>
                <span class="custom-option" data-value="generative">Generative AI</span>
              </div>
              <select id="category" class="filter-select hidden-select">
                <option value="">All Categories</option>
                <option value="nlp">Natural Language Processing</option>
                <option value="cv">Computer Vision</option>
                <option value="mlops">MLOps</option>
                <option value="data">Data Processing</option>
                <option value="generative">Generative AI</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Language Custom Dropdown (Tool-specific) -->
        <div class="filter-group">
          <label class="filter-label" for="language">Language</label>
          <div class="custom-select-wrapper">
            <div class="custom-select">
              <div class="custom-select__trigger">
                <span>All Languages</span>
                <i class="fas fa-chevron-down"></i>
              </div>
              <div class="custom-options">
                <span class="custom-option selected" data-value="">All Languages</span>
                <span class="custom-option" data-value="python">Python</span>
                <span class="custom-option" data-value="javascript">JavaScript</span>
                <span class="custom-option" data-value="typescript">TypeScript</span>
                <span class="custom-option" data-value="java">Java</span>
                <span class="custom-option" data-value="cpp">C++</span>
                <span class="custom-option" data-value="rust">Rust</span>
              </div>
              <select id="language" class="filter-select hidden-select">
                <option value="">All Languages</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="rust">Rust</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Release Year and License Type Dropdowns (identical structure) -->
        <!-- ... existing code ... -->
      </div>

      <div class="feature-badges-section">
        <label class="filter-label">Popular Features</label>
        <div class="feature-badges-container">
          <label class="feature-badge-label">
            <input type="checkbox" name="features" value="cli">
            <span class="feature-badge">CLI Support</span>
          </label>
          <label class="feature-badge-label">
            <input type="checkbox" name="features" value="api">
            <span class="feature-badge">API Available</span>
          </label>
          <label class="feature-badge-label">
            <input type="checkbox" name="features" value="gpu">
            <span class="feature-badge">GPU Support</span>
          </label>
          <label class="feature-badge-label">
            <input type="checkbox" name="features" value="cross-platform">
            <span class="feature-badge">Cross Platform</span>
          </label>
          <label class="feature-badge-label">
            <input type="checkbox" name="features" value="active">
            <span class="feature-badge">Actively Maintained</span>
          </label>
        </div>
      </div>

      <div class="filter-actions">
        <button class="filter-button outline" id="reset-filters">Reset Filters</button>
        <button class="filter-button" id="apply-filters">Apply Filters</button>
      </div>
    </div>

  </section>

  <!-- Tools List -->
  <div class="items-list tools-list">
    {% for tool in site.data.tools %}
      <div class="item-card tool-card">
                <div class="item-logo-container tool-logo-container">
          <div class="tool-card-image {{ tool.providerClass }}">
            {% if tool.logo_url %}
              <img src="{{ tool.logo_url }}" alt="{{ tool.name }} logo" class="tool-logo-image" />
            {% else %}
              <div class="card-image-icon"></div>
            {% endif %}
          </div>
          <div class="item-provider tool-provider">{{ tool.provider }}</div>
        </div>
        <div class="item-content tool-content">
          <div class="item-header tool-header">
            <div class="item-title-area tool-title-area">
              <h3 class="item-name tool-name">{{ tool.name }}</h3>
              <div class="item-badges tool-badges">
                {% for badge in tool.badges %}
                  {% if badge == "Popular" %}
                    <span class="item-badge tool-badge popular">{{ badge }}</span>
                  {% elsif badge == "Open Source" %}
                    <span class="item-badge tool-badge open-source">{{ badge }}</span>
                  {% else %}
                    <span class="item-badge tool-badge ai-type">{{ badge }}</span>
                  {% endif %}
                {% endfor %}
              </div>
            </div>
            <div class="item-metadata tool-metadata">
              <div class="metadata-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Released: {{ tool.metadata.released }}</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-code"></i>
                <span>Language: <span class="language-indicator language-{{ tool.metadata.language | downcase }}"></span>{{ tool.metadata.language }}</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-code-branch"></i>
                <span>Version: {{ tool.metadata.version }}</span>
              </div>
            </div>
          </div>
          <div class="item-description tool-description">
            {{ tool.description }}
          </div>
          <div class="item-features tool-features">
            {% for feature in tool.features %}
              <span class="feature-tag">{{ feature }}</span>
            {% endfor %}
          </div>
          
          <!-- GitHub Stats Section (Tool-specific) -->
          <div class="github-stats">
            <div class="github-stat">
              <i class="fas fa-star"></i>
              <span>{{ tool.metadata.stars }}</span>
            </div>
            <div class="github-stat">
              <i class="fas fa-code-branch"></i>
              <span>{{ tool.metadata.forks }}</span>
            </div>
            <div class="github-stat">
              <i class="fas fa-history"></i>
              <span>Updated {{ tool.metadata.updated }}</span>
            </div>
          </div>
          
          <div class="item-stats tool-stats">
            <div class="stat-box">
              <div class="stat-value">{{ tool.stats.popularity }}</div>
              <div class="stat-label">Popularity</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">{{ tool.stats.activity }}</div>
              <div class="stat-label">Activity</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">{{ tool.stats.license }}</div>
              <div class="stat-label">License</div>
            </div>
          </div>
          <div class="item-actions tool-actions">
            {% if tool.repo_url %}
            <a href="{{ tool.repo_url }}" class="item-link tool-link tertiary">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            {% endif %}
            {% if tool.website_url %}
            <a href="{{ tool.website_url }}" class="item-link tool-link primary">Website</a>
            {% endif %}
            {% if tool.docs_url %}
            <a href="{{ tool.docs_url }}" class="item-link tool-link primary">Documentation</a>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>

  <!-- Pagination Controls -->
  <div class="items-controls tools-controls">
    <div class="pagination">
      <button class="page-button" title="Previous page">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="page-button active">1</button>
      <button class="page-button">2</button>
      <button class="page-button">3</button>
      <div class="page-ellipsis">...</div>
      <button class="page-button">10</button>
      <button class="page-button" title="Next page">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="per-page-controls">
      <span class="page-info">Showing 1-5 of 48 tools</span>
      <label class="per-page-label" for="per-page">Per page:</label>
      <select id="per-page" class="per-page-select">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  </div>
</div>

<script src="/assets/js/tools-page.js"></script>
