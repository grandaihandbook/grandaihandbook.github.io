<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Models Directory</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="../../../assets/css/models-page.css">
</head>
<body>
  <div class="models-container">
    <!-- Header Section -->
    <header class="content-header">
      <h1>AI Models Directory</h1>
      <div class="header-accent"></div>
      <p class="description">Explore our curated collection of machine learning and AI models from leading research organizations and companies.</p>
    </header>

    <!-- Filter Section - Redesigned to be cleaner and more polished -->
    <section class="filter-section">
      <div class="filter-header">
        <h3>Find Models</h3>
        <div class="quick-filter-buttons">
          <button class="quick-filter-badge active">All</button>
          <button class="quick-filter-badge">LLM</button>
          <button class="quick-filter-badge">Computer Vision</button>
          <button class="quick-filter-badge">Speech</button>
          <button class="quick-filter-badge">Multimodal</button>
        </div>
      </div>

      <div class="filter-primary">
        <div class="search-group">
          <i class="fas fa-search search-icon"></i>
          <input type="text" id="search" class="search-input" placeholder="Search models by name, provider, or description">
          <button class="search-clear" title="Clear search"><i class="fas fa-times"></i></button>
        </div>
        <button class="advanced-filter-button" id="advanced-filter-toggle">
          <i class="fas fa-sliders-h"></i>
          <span>Advanced Filters</span>
        </button>
      </div>

      <div class="filter-advanced">
        <div class="advanced-filter-grid">
          <div class="filter-group">
            <label class="filter-label" for="category">Category</label>
            <select id="category" class="filter-select">
              <option value="">All Categories</option>
              <option value="nlp">Natural Language Processing</option>
              <option value="cv">Computer Vision</option>
              <option value="audio">Speech & Audio</option>
              <option value="multimodal">Multimodal</option>
              <option value="generative">Generative AI</option>
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label" for="provider">Provider</label>
            <select id="provider" class="filter-select">
              <option value="">All Providers</option>
              <option value="openai">OpenAI</option>
              <option value="google">Google</option>
              <option value="meta">Meta</option>
              <option value="anthropic">Anthropic</option>
              <option value="stability">Stability AI</option>
              <option value="cohere">Cohere</option>
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label" for="release-year">Release Year</label>
            <select id="release-year" class="filter-select">
              <option value="">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020 & Earlier</option>
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label" for="license-type">License Type</label>
            <select id="license-type" class="filter-select">
              <option value="">All Licenses</option>
              <option value="open">Open Source</option>
              <option value="commercial">Commercial</option>
              <option value="research">Research Only</option>
              <option value="apache">Apache 2.0</option>
              <option value="mit">MIT</option>
            </select>
          </div>
        </div>

        <div class="feature-badges-section">
          <label class="filter-label">Popular Features</label>
          <div class="feature-badges-container">
            <label class="feature-badge-label">
              <input type="checkbox" name="features" value="gpu-accelerated">
              <span class="feature-badge">GPU Accelerated</span>
            </label>
            <label class="feature-badge-label">
              <input type="checkbox" name="features" value="multilingual">
              <span class="feature-badge">Multilingual</span>
            </label>
            <label class="feature-badge-label">
              <input type="checkbox" name="features" value="api">
              <span class="feature-badge">API Available</span>
            </label>
            <label class="feature-badge-label">
              <input type="checkbox" name="features" value="fine-tunable">
              <span class="feature-badge">Fine-tunable</span>
            </label>
            <label class="feature-badge-label">
              <input type="checkbox" name="features" value="quantized">
              <span class="feature-badge">Quantized Version</span>
            </label>
            <label class="feature-badge-label">
              <input type="checkbox" name="features" value="tensorrt">
              <span class="feature-badge">TensorRT Support</span>
            </label>
          </div>
        </div>

        <div class="filter-actions">
          <button class="filter-button outline" id="reset-filters">Reset Filters</button>
          <button class="filter-button" id="apply-filters">Apply Filters</button>
        </div>
      </div>
    </section>

    <!-- Models List -->
    <div class="models-list">
      <!-- Model Card 1 -->
      <div class="model-card">
        <div class="model-logo-container">
            <div class="card-image openai">
              <div class="card-image-icon">
              </div>
            </div>
            <div class="model-provider">OpenAI</div>
          </div>
        <div class="model-content">
          <div class="model-header">
            <div class="model-title-area">
              <h3 class="model-name">GPT-4</h3>
              <div class="model-badges">
                <span class="model-badge ai-type">LLM</span>
                <span class="model-badge popular">Popular</span>
              </div>
            </div>
            <div class="model-metadata">
              <div class="metadata-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Released: March 2023</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-code-branch"></i>
                <span>Version: 1.0</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-layer-group"></i>
                <span>Size: 1.7T parameters</span>
              </div>
            </div>
          </div>
          <div class="model-description">
            OpenAI's most advanced system, producing safer and more useful responses. GPT-4 can solve difficult problems with greater accuracy thanks to its broader general knowledge and problem-solving abilities.
          </div>
          <div class="model-features">
            <span class="feature-tag">Advanced Reasoning</span>
            <span class="feature-tag">Multimodal</span>
            <span class="feature-tag">Low Hallucination</span>
            <span class="feature-tag">API Access</span>
          </div>
          <div class="model-stats">
            <div class="stat-box">
              <div class="stat-value">8.7/10</div>
              <div class="stat-label">Performance</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">9.2/10</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">Commercial</div>
              <div class="stat-label">License</div>
            </div>
          </div>
          <div class="model-actions">
            <a href="#" class="model-link tertiary">
              <i class="fas fa-file-alt"></i>
              <span>Read Paper</span>
            </a>
            <a href="#" class="model-link primary">View Model Page</a>
            <a href="#" class="model-link secondary">Learning Resources</a>
          </div>
        </div>
      </div>

      <!-- Model Card 2 -->
      <div class="model-card">
        <div class="model-logo-container">
          <div class="card-image google">
              <div class="card-image-icon">
              </div>
            </div>
          <div class="model-provider">Google</div>
        </div>
        <div class="model-content">
          <div class="model-header">
            <div class="model-title-area">
              <h3 class="model-name">Gemini Ultra</h3>
              <div class="model-badges">
                <span class="model-badge ai-type">LLM</span>
                <span class="model-badge popular">Popular</span>
              </div>
            </div>
            <div class="model-metadata">
              <div class="metadata-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Released: December 2023</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-code-branch"></i>
                <span>Version: 1.5</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-layer-group"></i>
                <span>Size: 1.5T parameters</span>
              </div>
            </div>
          </div>
          <div class="model-description">
            Google's largest and most capable AI model, optimized for complex tasks across text, code, images, audio and video. Built to understand and combine different types of information, Gemini Ultra excels at solving difficult problems.
          </div>
          <div class="model-features">
            <span class="feature-tag">State-of-the-art</span>
            <span class="feature-tag">Multimodal</span>
            <span class="feature-tag">Complex Reasoning</span>
            <span class="feature-tag">Code Generation</span>
          </div>
          <div class="model-stats">
            <div class="stat-box">
              <div class="stat-value">9.1/10</div>
              <div class="stat-label">Performance</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">9.3/10</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">Commercial</div>
              <div class="stat-label">License</div>
            </div>
          </div>
          <div class="model-actions">
            <a href="#" class="model-link tertiary">
              <i class="fas fa-file-alt"></i>
              <span>Read Paper</span>
            </a>
            <a href="#" class="model-link primary">View Model Page</a>
            <a href="#" class="model-link secondary">Learning Resources</a>
          </div>
        </div>
      </div>

      <!-- Model Card 3 -->
      <div class="model-card">
        <div class="model-logo-container">
          <div class="card-image meta">
              <div class="card-image-icon">
              </div>
            </div>
          <div class="model-provider">Meta</div>
        </div>
        <div class="model-content">
          <div class="model-header">
            <div class="model-title-area">
              <h3 class="model-name">Llama 3</h3>
              <div class="model-badges">
                <span class="model-badge ai-type">LLM</span>
                <span class="model-badge open-source">Open Source</span>
              </div>
            </div>
            <div class="model-metadata">
              <div class="metadata-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Released: April 2024</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-code-branch"></i>
                <span>Version: 3.0</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-layer-group"></i>
                <span>Size: 70B parameters</span>
              </div>
            </div>
          </div>
          <div class="model-description">
            Meta's open source large language model, designed for research and commercial applications with improved instruction following. Llama 3 represents a significant advancement in openly available foundation models.
          </div>
          <div class="model-features">
            <span class="feature-tag">Open-weights</span>
            <span class="feature-tag">Multiple Sizes</span>
            <span class="feature-tag">Multilingual</span>
            <span class="feature-tag">Commercial Use</span>
          </div>
          <div class="model-stats">
            <div class="stat-box">
              <div class="stat-value">8.5/10</div>
              <div class="stat-label">Performance</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">8.7/10</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">Apache 2.0</div>
              <div class="stat-label">License</div>
            </div>
          </div>
          <div class="model-actions">
            <a href="#" class="model-link tertiary">
              <i class="fas fa-file-alt"></i>
              <span>Read Paper</span>
            </a>
            <a href="#" class="model-link primary">View Model Page</a>
            <a href="#" class="model-link secondary">Learning Resources</a>
          </div>
        </div>
      </div>

      <!-- Model Card 4 -->
      <div class="model-card">
        <div class="model-logo-container">
          <div class="card-image anthropic">
              <div class="card-image-icon">
              </div>
            </div>
          <div class="model-provider">Anthropic</div>
        </div>
        <div class="model-content">
          <div class="model-header">
            <div class="model-title-area">
              <h3 class="model-name">Claude 3 Opus</h3>
              <div class="model-badges">
                <span class="model-badge ai-type">LLM</span>
                <span class="model-badge popular">Popular</span>
              </div>
            </div>
            <div class="model-metadata">
              <div class="metadata-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Released: March 2024</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-code-branch"></i>
                <span>Version: 3.0</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-layer-group"></i>
                <span>Size: ~1T parameters</span>
              </div>
            </div>
          </div>
          <div class="model-description">
            Anthropic's most powerful model, with exceptional intelligence and an industry-leading 200K token context window. Designed with a focus on thoughtful reasoning and safety, Claude 3 Opus excels at complex tasks.
          </div>
          <div class="model-features">
            <span class="feature-tag">Superior Reasoning</span>
            <span class="feature-tag">200K Context</span>
            <span class="feature-tag">Coding</span>
            <span class="feature-tag">Multimodal</span>
          </div>
          <div class="model-stats">
            <div class="stat-box">
              <div class="stat-value">9.3/10</div>
              <div class="stat-label">Performance</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">9.5/10</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">Commercial</div>
              <div class="stat-label">License</div>
            </div>
          </div>
          <div class="model-actions">
            <a href="#" class="model-link tertiary">
              <i class="fas fa-file-alt"></i>
              <span>Read Paper</span>
            </a>
            <a href="#" class="model-link primary">View Model Page</a>
            <a href="#" class="model-link secondary">Learning Resources</a>
          </div>
        </div>
      </div>

      <!-- Model Card 5 -->
      <div class="model-card">
        <div class="model-logo-container">
          <div class="card-image stability">
              <div class="card-image-icon">
              </div>
            </div>
          <div class="model-provider">Stability AI</div>
        </div>
        <div class="model-content">
          <div class="model-header">
            <div class="model-title-area">
              <h3 class="model-name">Stable Diffusion XL</h3>
              <div class="model-badges">
                <span class="model-badge ai-type">Image</span>
                <span class="model-badge open-source">Open Source</span>
              </div>
            </div>
            <div class="model-metadata">
              <div class="metadata-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Released: July 2023</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-code-branch"></i>
                <span>Version: 1.0</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-layer-group"></i>
                <span>Size: 2.6B parameters</span>
              </div>
            </div>
          </div>
          <div class="model-description">
            A state-of-the-art text-to-image model that generates high-quality images from text descriptions. SDXL produces significantly improved image quality and precision compared to previous versions.
          </div>
          <div class="model-features">
            <span class="feature-tag">High-resolution</span>
            <span class="feature-tag">Text-to-Image</span>
            <span class="feature-tag">Open-weights</span>
            <span class="feature-tag">Fine-tunable</span>
          </div>
          <div class="model-stats">
            <div class="stat-box">
              <div class="stat-value">8.9/10</div>
              <div class="stat-label">Performance</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">8.6/10</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">CreativeML</div>
              <div class="stat-label">License</div>
            </div>
          </div>
          <div class="model-actions">
            <a href="#" class="model-link tertiary">
              <i class="fas fa-file-alt"></i>
              <span>Read Paper</span>
            </a>
            <a href="#" class="model-link primary">View Model Page</a>
            <a href="#" class="model-link secondary">Learning Resources</a>
          </div>
        </div>
      </div>

    <!-- Pagination Controls -->
    <div class="models-controls">
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
        <span class="page-info">Showing 1-5 of 58 models</span>
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

  <script src="../../../assets/js/models-page.js"></script>
</body>
</html>
