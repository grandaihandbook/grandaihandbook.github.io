---
layout: default
---

<link rel="stylesheet" href="/assets/css/models-page.css">

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
            <option value="zerooneai">01 AI</option>
            <option value="adobe">Adobe</option>
            <option value="alibaba">Alibaba</option>
            <option value="allenai">Allen AI</option>
            <option value="amazon">Amazon</option>
            <option value="lighton">AnswerAI and LightOn</option>
            <option value="anthropic">Anthropic</option>
            <option value="apple">Apple</option>
            <option value="blackforest">Black Forest Labs</option>
            <option value="cohere">Cohere</option>
            <option value="deepseek">DeepSeek</option>
            <option value="deepseek">DeepSeekAI</option>
            <option value="google">Google</option>
            <option value="google">Google DeepMind</option>
            <option value="huggingface">Hugging Face</option>
            <option value="ibm">IBM</option>
            <option value="ideogram">Ideogram</option>
            <option value="kling">KLING</option>
            <option value="kyutai">Kyutai</option>
            <option value="luma">Luma</option>
            <option value="meta">Meta</option>
            <option value="metaai">Meta AI</option>
            <option value="microsoft">Microsoft</option>
            <option value="midjourney">Midjourney</option>
            <option value="mistral">Mistral AI</option>
            <option value="nous">Nous Research</option>
            <option value="nvidia">NVIDIA</option>
            <option value="openai">OpenAI</option>
            <option value="pika">Pika</option>
            <option value="recraft">Recraft</option>
            <option value="reka">Reka AI</option>
            <option value="rhymes">Rhymes AI</option>
            <option value="runway">Runway</option>
            <option value="stability">Stability AI</option>
            <option value="sunoai">Suno AI</option>
            <option value="tii">TII</option>
            <option value="udio">Udio</option>
            <option value="xai">xAI</option>
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
    {% for model in site.data.models %}
      <div class="model-card">
        <div class="model-logo-container">
          <div class="card-image {{ model.providerClass }}">
            <div class="card-image-icon"></div>
          </div>
          <div class="model-provider">{{ model.provider }}</div>
        </div>
        <div class="model-content">
          <div class="model-header">
            <div class="model-title-area">
              <h3 class="model-name">{{ model.name }}</h3>
              <div class="model-badges">
                {% for badge in model.badges %}
                  {% if badge == "Popular" %}
                    <span class="model-badge popular">{{ badge }}</span>
                  {% elsif badge == "Open Source" %}
                    <span class="model-badge open-source">{{ badge }}</span>
                  {% else %}
                    <span class="model-badge ai-type">{{ badge }}</span>
                  {% endif %}
                {% endfor %}
              </div>
            </div>
            <div class="model-metadata">
              <div class="metadata-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Released: {{ model.metadata.released }}</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-code-branch"></i>
                <span>Version: {{ model.metadata.version }}</span>
              </div>
              <div class="metadata-item">
                <i class="fas fa-layer-group"></i>
                <span>Size: {{ model.metadata.size }}</span>
              </div>
            </div>
          </div>
          <div class="model-description">
            {{ model.description }}
          </div>
          <div class="model-features">
            {% for feature in model.features %}
              <span class="feature-tag">{{ feature }}</span>
            {% endfor %}
          </div>
          <div class="model-stats">
            <div class="stat-box">
              <div class="stat-value">{{ model.stats.performance }}</div>
              <div class="stat-label">Performance</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">{{ model.stats.accuracy }}</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">{{ model.stats.license }}</div>
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
    {% endfor %}
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

<script src="/assets/js/models-page.js"></script>
