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

  <!-- Google Research Models -->
  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">BERT</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
            <span class="model-badge popular">Popular</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: October 2018</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 340M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Bidirectional Encoder Representations from Transformers, a foundational model for NLP, excelling in tasks like question answering and text classification by understanding context in both directions.
      </div>
      <div class="model-features">
        <span class="feature-tag">Bidirectional</span>
        <span class="feature-tag">Contextual Understanding</span>
        <span class="feature-tag">Pre-training</span>
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
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">ALBERT</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: September 2019</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 12M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A Lite BERT, designed for efficiency with reduced parameters while maintaining performance, ideal for resource-constrained environments.
      </div>
      <div class="model-features">
        <span class="feature-tag">Lightweight</span>
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Contextual Understanding</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">MobileBERT</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: April 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 25M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A compact BERT variant optimized for mobile devices, balancing performance and low computational requirements.
      </div>
      <div class="model-features">
        <span class="feature-tag">Mobile</span>
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Contextual Understanding</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">7.8/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">7.9/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">MuRIL</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: January 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 340M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Multilingual Representations for Indian Languages, a BERT-based model fine-tuned for 17 Indian languages, enhancing NLP for regional applications.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multilingual</span>
        <span class="feature-tag">Indian Languages</span>
        <span class="feature-tag">Contextual Understanding</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">ELECTRA</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: March 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 335M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A model using a generator-discriminator framework for efficient pre-training, outperforming BERT with fewer resources.
      </div>
      <div class="model-features">
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Pre-training</span>
        <span class="feature-tag">Contextual Understanding</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.4/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.6/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">T5</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
            <span class="model-badge popular">Popular</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: October 2019</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 11B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Text-to-Text Transfer Transformer, a unified framework for NLP tasks like translation, summarization, and question answering.
      </div>
      <div class="model-features">
        <span class="feature-tag">Text-to-Text</span>
        <span class="feature-tag">Versatile</span>
        <span class="feature-tag">Pre-training</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.7/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.9/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">mT5</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: October 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 13B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Multilingual T5, extended to support 101 languages, enabling robust NLP for diverse linguistic tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multilingual</span>
        <span class="feature-tag">Text-to-Text</span>
        <span class="feature-tag">Pre-training</span>
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
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">ByT5</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: June 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 13B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A byte-level T5 model, robust to noisy text and suitable for character-based processing across languages.
      </div>
      <div class="model-features">
        <span class="feature-tag">Byte-level</span>
        <span class="feature-tag">Multilingual</span>
        <span class="feature-tag">Text-to-Text</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.5/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Flan-T5</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
            <span class="model-badge popular">Popular</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: October 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 11B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Instruction-tuned T5 for improved zero-shot performance across a wide range of NLP tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Instruction-tuned</span>
        <span class="feature-tag">Zero-shot</span>
        <span class="feature-tag">Text-to-Text</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.9/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">9.0/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">PaLM</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
            <span class="model-badge popular">Popular</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: April 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 540B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Pathways Language Model, a large-scale model excelling in reasoning, multilingual tasks, and code generation.
      </div>
      <div class="model-features">
        <span class="feature-tag">Large-scale</span>
        <span class="feature-tag">Reasoning</span>
        <span class="feature-tag">Multilingual</span>
        <span class="feature-tag">Code Generation</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">9.0/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">PaLM 2</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
            <span class="model-badge popular">Popular</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: May 2023</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 2.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 340B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        An enhanced version of PaLM with improved efficiency, reasoning, and multilingual capabilities, powering Google’s AI services.
      </div>
      <div class="model-features">
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Reasoning</span>
        <span class="feature-tag">Multilingual</span>
        <span class="feature-tag">Code Generation</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">9.2/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">9.4/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">PaLM-E</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
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
            <span>Size: 562B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        An embodied PaLM variant for robotics and multimodal tasks, integrating vision and language for real-world interactions.
      </div>
      <div class="model-features">
        <span class="feature-tag">Embodied</span>
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Robotics</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.8/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">9.0/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">U-PaLM</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: June 2023</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 540B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Continually trained PaLM with UL2 objectives, improving efficiency and performance for diverse NLP tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Reasoning</span>
        <span class="feature-tag">Multilingual</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.9/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">9.1/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Flan-PaLM</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: August 2023</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 540B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Instruction-tuned PaLM for enhanced zero-shot task generalization, excelling in reasoning and multilingual applications.
      </div>
      <div class="model-features">
        <span class="feature-tag">Instruction-tuned</span>
        <span class="feature-tag">Zero-shot</span>
        <span class="feature-tag">Reasoning</span>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">LaMDA</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
            <span class="model-badge popular">Popular</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: January 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 137B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Language Model for Dialogue Applications, optimized for natural and safe conversational interactions.
      </div>
      <div class="model-features">
        <span class="feature-tag">Conversational</span>
        <span class="feature-tag">Dialogue</span>
        <span class="feature-tag">Safety</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.8/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">9.0/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">MUM</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: May 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Multitask Unified Model, a multimodal system for search, integrating text, images, and other data for enhanced query understanding.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Search</span>
        <span class="feature-tag">Multitask</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.7/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.9/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">XLNet</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: June 2019</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 340M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A generalized autoregressive model developed with CMU, outperforming BERT in tasks requiring permutation-based pre-training.
      </div>
      <div class="model-features">
        <span class="feature-tag">Autoregressive</span>
        <span class="feature-tag">Pre-training</span>
        <span class="feature-tag">Contextual Understanding</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.5/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">CANINE</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: May 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Character-based model for multilingual text processing, eliminating the need for explicit tokenization.
      </div>
      <div class="model-features">
        <span class="feature-tag">Character-based</span>
        <span class="feature-tag">Multilingual</span>
        <span class="feature-tag">Token-free</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Switch Transformer</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: January 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 1.6T parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A mixture-of-experts model designed for efficient scaling, activating only a subset of parameters per task.
      </div>
      <div class="model-features">
        <span class="feature-tag">Mixture-of-Experts</span>
        <span class="feature-tag">Scalable</span>
        <span class="feature-tag">Efficient</span>
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
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">GShard</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: June 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 600B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A sharding-based mixture-of-experts model for large-scale translation and multilingual tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Mixture-of-Experts</span>
        <span class="feature-tag">Multilingual</span>
        <span class="feature-tag">Translation</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.4/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">GLaM</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: December 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 1.2T parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Generalist Language Model, a mixture-of-experts model activating ~97B parameters per token for efficient NLP tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Mixture-of-Experts</span>
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Generalist</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.6/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.8/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">ETC</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: September 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Extended Transformer Construction, a model with hierarchical attention for processing long-context sequences.
      </div>
      <div class="model-features">
        <span class="feature-tag">Long-context</span>
        <span class="feature-tag">Hierarchical Attention</span>
        <span class="feature-tag">Efficient</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Flan</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: October 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Fine-tuned Language Net, a family of instruction-tuned models for improved zero-shot performance across tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Instruction-tuned</span>
        <span class="feature-tag">Zero-shot</span>
        <span class="feature-tag">Generalist</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.4/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.6/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Minerva</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: June 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 540B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A PaLM-based model fine-tuned on technical content for advanced quantitative reasoning and STEM tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Quantitative Reasoning</span>
        <span class="feature-tag">STEM</span>
        <span class="feature-tag">Fine-tuned</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.8/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">9.0/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">PEGASUS</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: February 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 570M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A model optimized for text summarization using gap-sentence generation, excelling in abstractive summarization tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Summarization</span>
        <span class="feature-tag">Abstractive</span>
        <span class="feature-tag">Pre-training</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.5/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">BigBird</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: July 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 340M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A sparse attention model designed for long-sequence processing, suitable for tasks like document understanding.
      </div>
      <div class="model-features">
        <span class="feature-tag">Long-sequence</span>
        <span class="feature-tag">Sparse Attention</span>
        <span class="feature-tag">Efficient</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.4/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">UniT</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: April 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Unified Transformer, a multimodal model for joint vision and language tasks, such as image captioning and visual QA.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Vision-Language</span>
        <span class="feature-tag">Unified</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.1/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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
  <div class="model-cards-container">

  <!-- Continuation of Google Research Models -->
  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">DocT5query</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: August 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 11B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A T5-based model for document ranking and query generation, enhancing search and information retrieval tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Document Ranking</span>
        <span class="feature-tag">Query Generation</span>
        <span class="feature-tag">Search</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">UL2</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: May 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 20B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Unified Language Learner, a model with a mixture-of-denoisers objective for versatile and efficient NLP performance.
      </div>
      <div class="model-features">
        <span class="feature-tag">Unified</span>
        <span class="feature-tag">Denoisers</span>
        <span class="feature-tag">Efficient</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.6/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.8/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">MedPaLM</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
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
            <span>Size: 540B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A medical-domain PaLM variant fine-tuned for clinical tasks, such as medical question answering and diagnostics.
      </div>
      <div class="model-features">
        <span class="feature-tag">Medical</span>
        <span class="feature-tag">Fine-tuned</span>
        <span class="feature-tag">Question Answering</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.9/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">9.1/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Meena</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: January 2020</span>
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
        An early conversational model, a precursor to LaMDA, designed for natural and engaging dialogue.
      </div>
      <div class="model-features">
        <span class="feature-tag">Conversational</span>
        <span class="feature-tag">Dialogue</span>
        <span class="feature-tag">Engaging</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Longformer</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: April 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 340M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A model with efficient attention mechanisms for processing long documents, complementary to BigBird.
      </div>
      <div class="model-features">
        <span class="feature-tag">Long-sequence</span>
        <span class="feature-tag">Efficient Attention</span>
        <span class="feature-tag">Document Processing</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.1/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Reformer</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: January 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 340M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A memory-efficient Transformer using locality-sensitive hashing for large-scale NLP tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Memory-efficient</span>
        <span class="feature-tag">Scalable</span>
        <span class="feature-tag">Transformer</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">T0</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: October 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 11B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A T5-based model fine-tuned for zero-shot task generalization, excelling in unseen NLP tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Zero-shot</span>
        <span class="feature-tag">Fine-tuned</span>
        <span class="feature-tag">Text-to-Text</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.4/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.6/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Luminous</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: July 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A less-publicized model focused on multilingual text generation, designed for diverse linguistic applications.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multilingual</span>
        <span class="feature-tag">Text Generation</span>
        <span class="feature-tag">Versatile</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
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

  <!-- Google DeepMind Models -->
  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
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
        Google's largest and most capable AI model, optimized for complex tasks across text, code, images, audio, and video, excelling in multimodal reasoning.
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Gemini Pro</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
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
            <span>Size: 500B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A mid-tier Gemini model optimized for a balance of performance and efficiency in multimodal tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Reasoning</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.8/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">9.0/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Gemini Nano</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
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
            <span>Size: 1B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A lightweight Gemini model designed for on-device tasks, prioritizing efficiency and low latency.
      </div>
      <div class="model-features">
        <span class="feature-tag">On-device</span>
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Multimodal</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">7.8/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Gemini Flash</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: May 2024</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.5</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 50B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A fast and efficient Gemini variant optimized for low-latency multimodal tasks and real-time applications.
      </div>
      <div class="model-features">
        <span class="feature-tag">Low-latency</span>
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Efficient</span>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Gemini 1.5 Pro</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
            <span class="model-badge popular">Popular</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: February 2024</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.5</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 1T parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        An enhanced Gemini model with improved multimodal capabilities and reasoning for professional applications.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Reasoning</span>
        <span class="feature-tag">Professional</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">9.0/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Gemini 1.5 Flash</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: February 2024</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.5</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 100B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A lightweight version of Gemini 1.5, optimized for speed and efficiency in multimodal tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Low-latency</span>
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Efficient</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.6/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.8/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Gopher</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: December 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 280B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A large-scale model excelling in reasoning and language tasks, designed for high performance across benchmarks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Large-scale</span>
        <span class="feature-tag">Reasoning</span>
        <span class="feature-tag">Generalist</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.7/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.9/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Chinchilla</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
            <span class="model-badge popular">Popular</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: March 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 70B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A compute-optimal model outperforming larger models like Gopher with fewer parameters, trained on 1.4T tokens.
      </div>
      <div class="model-features">
        <span class="feature-tag">Compute-optimal</span>
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Reasoning</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.9/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">9.1/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">RETRO</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: January 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 7B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Retrieval-Enhanced Transformer, leveraging external data retrieval for efficient training and improved performance.
      </div>
      <div class="model-features">
        <span class="feature-tag">Retrieval-augmented</span>
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Generalist</span>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Flamingo</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: April 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 80B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A multimodal model for vision-language tasks, excelling in image captioning and visual question answering.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Vision-Language</span>
        <span class="feature-tag">Versatile</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.6/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.8/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Gato</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: May 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 1.2B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A generalist agent capable of handling text, vision, and robotics tasks, demonstrating versatility across domains.
      </div>
      <div class="model-features">
        <span class="feature-tag">Generalist</span>
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Robotics</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.4/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.6/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">AlphaCode</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: February 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 41B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A model specialized in competitive programming, generating high-quality code for complex algorithmic challenges.
      </div>
      <div class="model-features">
        <span class="feature-tag">Code Generation</span>
        <span class="feature-tag">Competitive Programming</span>
        <span class="feature-tag">Specialized</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.7/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.9/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">SayCan</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: May 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A language-guided model for robotic control, enabling robots to follow natural language instructions for tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Robotics</span>
        <span class="feature-tag">Language-guided</span>
        <span class="feature-tag">Task Execution</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.5/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Ithaca</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: March 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A model for historical text restoration, specializing in reconstructing ancient Greek texts and dating inscriptions.
      </div>
      <div class="model-features">
        <span class="feature-tag">Historical Text</span>
        <span class="feature-tag">Restoration</span>
        <span class="feature-tag">Specialized</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.4/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Dramatron</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: December 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A model for scriptwriting and creative writing, generating coherent narratives and dialogue for storytelling.
      </div>
      <div class="model-features">
        <span class="feature-tag">Creative Writing</span>
        <span class="feature-tag">Scriptwriting</span>
        <span class="feature-tag">Narrative</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.1/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Sparrow</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: September 2022</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A dialogue model with a focus on safety and alignment, designed for ethical and helpful conversational interactions.
      </div>
      <div class="model-features">
        <span class="feature-tag">Dialogue</span>
        <span class="feature-tag">Safety</span>
        <span class="feature-tag">Alignment</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.4/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.6/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Med-PaLM 2</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: April 2023</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 2.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 540B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        An advanced medical-domain model, improving on MedPaLM for clinical tasks like diagnostics and medical QA.
      </div>
      <div class="model-features">
        <span class="feature-tag">Medical</span>
        <span class="feature-tag">Diagnostics</span>
        <span class="feature-tag">Question Answering</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">9.0/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Gemma</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
            <span class="model-badge popular">Popular</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: February 2024</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 7B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        Open-weight models (2B, 7B) based on Gemini technology, designed for research and efficient NLP tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Open-weight</span>
        <span class="feature-tag">Research</span>
        <span class="feature-tag">Efficient</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.7/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.9/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Tram</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
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
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A lesser-known model for structured data processing, designed for tasks involving tabular and relational data.
      </div>
      <div class="model-features">
        <span class="feature-tag">Structured Data</span>
        <span class="feature-tag">Tabular</span>
        <span class="feature-tag">Processing</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.0/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Flamingo-C</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: August 2023</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 20B parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A compact version of Flamingo, optimized for efficient multimodal vision-language tasks.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Efficient</span>
        <span class="feature-tag">Vision-Language</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.5/10</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google DeepMind</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">Perceiver</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: July 2021</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: Unknown</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A general-purpose architecture for text, images, and multimodal tasks, using cross-attention for scalability.
      </div>
      <div class="model-features">
        <span class="feature-tag">Multimodal</span>
        <span class="feature-tag">Scalable</span>
        <span class="feature-tag">Cross-attention</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.2/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.4/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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

  <div class="model-card">
  <div class="model-logo-container">
    <div class="card-image google">
      <div class="card-image-icon"></div>
    </div>
    <div class="model-provider">Google</div>
  </div>
  <div class="model-content">
    <div class="model-header">
      <div class="model-title-area">
        <h3 class="model-name">ViT-BERT</h3>
        <div class="model-badges">
          <span class="model-badge ai-type">LLM</span>
        </div>
      </div>
      <div class="model-metadata">
        <div class="metadata-item">
          <i class="fas fa-calendar-alt"></i>
          <span>Released: March 2021</span>
        </div>
        <div class="metadata-item">
          <i class="fas fa-code-branch"></i>
          <span>Version: 1.0</span>
        </div>
        <div class="metadata-item">
          <i class="fas fa-layer-group"></i>
          <span>Size: Unknown</span>
        </div>
      </div>
    </div>
    <div class="model-description">
      A hybrid model combining Vision Transformer and BERT for advanced vision-language tasks like image-text alignment.
    </div>
    <div class="model-features">
      <span class="feature-tag">Vision-Language</span>
      <span class="feature-tag">Hybrid</span>
      <span class="feature-tag">Multimodal</span>
    </div>
    <div class="model-stats">
      <div class="stat-box">
        <div class="stat-value">8.0/10</div>
        <div class="stat-label">Performance</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">8.2/10</div>
        <div class="stat-label">Accuracy</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">Open Source</div>
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

  <div class="model-card">
    <div class="model-logo-container">
      <div class="card-image google">
        <div class="card-image-icon"></div>
      </div>
      <div class="model-provider">Google</div>
    </div>
    <div class="model-content">
      <div class="model-header">
        <div class="model-title-area">
          <h3 class="model-name">TAPAS</h3>
          <div class="model-badges">
            <span class="model-badge ai-type">LLM</span>
          </div>
        </div>
        <div class="model-metadata">
          <div class="metadata-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Released: May 2020</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-code-branch"></i>
            <span>Version: 1.0</span>
          </div>
          <div class="metadata-item">
            <i class="fas fa-layer-group"></i>
            <span>Size: 340M parameters</span>
          </div>
        </div>
      </div>
      <div class="model-description">
        A model for table-based question answering and parsing, enabling natural language queries over structured data.
      </div>
      <div class="model-features">
        <span class="feature-tag">Table Parsing</span>
        <span class="feature-tag">Question Answering</span>
        <span class="feature-tag">Structured Data</span>
      </div>
      <div class="model-stats">
        <div class="stat-box">
          <div class="stat-value">8.1/10</div>
          <div class="stat-label">Performance</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">8.3/10</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">Open Source</div>
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
