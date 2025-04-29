<link rel="stylesheet" href="/assets/css/research/ai-trends.css">

<!-- Featured AI Trends Section -->
<div class="ai-trends-container">
  <div class="ai-trends-header">
    <h1>AI News</h1>
    <p>Stay informed with our analysis of emerging patterns, breakthrough technologies, and transformative applications in artificial intelligence. Our page offers insight into what's shaping the future of AI.</p>
  </div>
  
  <div class="attribution-notice">
    <div class="attribution-content">
      <p>Our AI News section delivers in depth coverage and thoughtful analysis of the latest advancements in artificial intelligence. Curated to highlight emerging technologies, key research breakthroughs, industry trends, and real-world applications, each article provides valuable insights into how AI is shaping the future across domains. Stay informed with the evolving landscape of AI innovation and discovery.</p>
    </div>
  </div>
  
  <div class="featured-trend-card">
    <div class="featured-trend-title-container">
      <h2 class="featured-trend-title-primary">Featured AI Trend</h2>
    </div>
    <div class="featured-trend-content" id="featuredContent">
      <!-- First trend is pre-rendered -->
      {% assign firstTrend = site.data.ai_trends.newsItems[0].featuredContent %}
      <div class="featured-trend-info">
        <div class="trend-meta">
          <span class="trend-date">{{ firstTrend.date }}</span>
          <div class="trend-tags">
            {% for tag in firstTrend.tags %}
              <span class="trend-tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
        <h3 class="trend-title">{{ firstTrend.title }}</h3>
        <p class="trend-description">{{ firstTrend.description }}</p>
        <a href="{{ firstTrend.link }}" class="trend-read-more">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
      <div class="featured-trend-image">
        <img src="{{ firstTrend.image }}" alt="{{ firstTrend.title }}">
      </div>
    </div>
    
    <div class="news-slider-container">
      <h3 class="news-slider-title">Latest AI Developments</h3>
      <div class="news-slider" id="newsSlider">
        {% for news in site.data.ai_trends.newsItems %}
          <div class="news-item {% if forloop.first %}active{% endif %}" data-index="{{ forloop.index0 }}">
            <h4 class="news-item-title">{{ news.title }}</h4>
            <span class="news-item-category">{{ news.category }}</span>
          </div>
        {% endfor %}
      </div>
      <div class="progress-container">
        <div class="progress-bar" id="progressBar"></div>
      </div>
      <div class="slider-navigation">
        <div class="slider-dots" id="sliderDots">
          {% for news in site.data.ai_trends.newsItems %}
            <span class="slider-dot {% if forloop.first %}active{% endif %}" data-index="{{ forloop.index0 }}"></span>
          {% endfor %}
        </div>
        <div class="slider-arrows">
          <button class="slider-arrow prev" id="prevArrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button class="slider-arrow next" id="nextArrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- All News Section -->
<section class="all-news-section">
  <div class="all-news-header">
    <h2 class="all-news-title">All News</h2>
  </div>
  
  <div class="news-grid" id="newsGrid">
    {% assign all_news = site.data.all_news.articles %}
    {% assign total_pages = all_news.size | divided_by: 12 | ceil %}
    {% assign current_page = 1 %}
    {% assign start_index = 0 %}
    {% assign end_index = 11 %}
    
    {% for article in all_news limit:12 offset:start_index %}
      <article class="news-card" data-tags="{{ article.tags | join: ',' | downcase }}">
        <div class="news-card-image">
          <img src="{{ article.image }}" alt="{{ article.title }}" loading="lazy">
        </div>
        <div class="news-card-content">
          <div class="news-card-meta">
            <span class="news-card-date">{{ article.date }}</span>
            <div class="news-card-tags">
              {% for tag in article.tags limit:2 %}
                <span class="news-card-tag">{{ tag }}</span>
              {% endfor %}
            </div>
          </div>
          <h3 class="news-card-title">{{ article.title }}</h3>
          <p class="news-card-excerpt">{{ article.excerpt }}</p>
          <a href="{{ article.link }}" class="news-card-read-more">
            Read Article
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </article>
    {% endfor %}
  </div>
  
    <div class="pagination-container">
      <nav class="pagination" aria-label="News pagination">
        <button class="pagination-arrow prev" id="prevPage" aria-label="Previous page" {% if current_page == 1 %}disabled{% endif %}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div class="pagination-numbers" id="paginationNumbers">
          {% for i in (1..total_pages) %}
            <button class="pagination-number {% if i == 1 %}active{% endif %}" data-page="{{ i }}">{{ i }}</button>
          {% endfor %}
        </div>
        
        <button class="pagination-arrow next" id="nextPage" aria-label="Next page" {% if current_page == total_pages %}disabled{% endif %}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </nav>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // ===== FEATURED TRENDS SECTION =====
  
  // Get DOM elements for featured section
  const featuredContent = document.getElementById('featuredContent');
  const sliderContainer = document.getElementById('newsSlider');
  const dotsContainer = document.getElementById('sliderDots');
  const prevArrow = document.getElementById('prevArrow');
  const nextArrow = document.getElementById('nextArrow');
  const progressBar = document.getElementById('progressBar');
  
  // Variables for progress and auto-rotation
  let currentIndex = 0;
  let progressInterval;
  const transitionTime = 5000; // 5 seconds
  const updateInterval = 50; // Update progress every 50ms for smooth animation
  let progress = 0;
  
  // Load data from Jekyll
  const trendsData = {
    newsItems: [
      {% for news in site.data.ai_trends.newsItems %}
        {
          id: "{{ news.id }}",
          title: "{{ news.title }}",
          category: "{{ news.category }}",
          featuredContent: {
            title: "{{ news.featuredContent.title }}",
            date: "{{ news.featuredContent.date }}",
            description: "{{ news.featuredContent.description | escape }}",
            tags: [{% for tag in news.featuredContent.tags %}"{{ tag }}"{% unless forloop.last %},{% endunless %}{% endfor %}],
            image: "{{ news.featuredContent.image }}",
            link: "{{ news.featuredContent.link }}"
          }
        }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  };
  
  // Function to generate featured trend HTML
  function generateFeaturedTrendHTML(featuredItem) {
    return `
      <div class="featured-trend-info">
        <div class="trend-meta">
          <span class="trend-date">${featuredItem.date}</span>
          <div class="trend-tags">
            ${featuredItem.tags.map(tag => `<span class="trend-tag">${tag}</span>`).join('')}
          </div>
        </div>
        <h3 class="trend-title">${featuredItem.title}</h3>
        <p class="trend-description">${featuredItem.description}</p>
        <a href="${featuredItem.link}" class="trend-read-more">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
      <div class="featured-trend-image">
        <img src="${featuredItem.image}" alt="${featuredItem.title}">
      </div>
    `;
  }

  // Set up event listeners for featured section
  function setupFeaturedEventListeners() {
    // News items click event
    document.querySelectorAll('.news-item').forEach(item => {
      item.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        setActiveItem(index);
      });
    });

    // Dots click event
    document.querySelectorAll('.slider-dot').forEach(dot => {
      dot.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        setActiveItem(index);
      });
    });

    // Previous arrow click
    prevArrow.addEventListener('click', () => {
      const newIndex = currentIndex === 0 ? trendsData.newsItems.length - 1 : currentIndex - 1;
      setActiveItem(newIndex);
    });

    // Next arrow click
    nextArrow.addEventListener('click', () => {
      const newIndex = currentIndex === trendsData.newsItems.length - 1 ? 0 : currentIndex + 1;
      setActiveItem(newIndex);
    });

    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    sliderContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }

  // Set active item for featured section
  function setActiveItem(index) {
    // Skip if already on this item
    if (currentIndex === index) {
      return;
    }

    // Remove active class from all items and dots
    document.querySelectorAll('.news-item').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelectorAll('.slider-dot').forEach(dot => {
      dot.classList.remove('active');
    });

    // Add active class to current item and dot
    document.querySelector(`.news-item[data-index="${index}"]`).classList.add('active');
    document.querySelector(`.slider-dot[data-index="${index}"]`).classList.add('active');

    // Scroll to active item
    const activeItem = document.querySelector(`.news-item[data-index="${index}"]`);
    sliderContainer.scrollLeft = activeItem.offsetLeft - sliderContainer.offsetWidth / 2 + activeItem.offsetWidth / 2;

    // Update current index
    currentIndex = index;

    // Update featured trend content
    featuredContent.innerHTML = generateFeaturedTrendHTML(trendsData.newsItems[index].featuredContent);

    // Reset progress when changing items
    resetProgress();
  }

  // Handle swipe gestures for featured section
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left - show next
      const newIndex = currentIndex === trendsData.newsItems.length - 1 ? 0 : currentIndex + 1;
      setActiveItem(newIndex);
    } else if (touchEndX > touchStartX + 50) {
      // Swipe right - show previous
      const newIndex = currentIndex === 0 ? trendsData.newsItems.length - 1 : currentIndex - 1;
      setActiveItem(newIndex);
    }
  }

  // Progress bar functionality
  function updateProgress() {
    progress += (updateInterval / transitionTime) * 100;
    progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      // Move to next slide
      const newIndex = currentIndex === trendsData.newsItems.length - 1 ? 0 : currentIndex + 1;
      setActiveItem(newIndex);
    }
  }

  // Reset and restart the progress bar
  function resetProgress() {
    // Clear existing interval
    clearInterval(progressInterval);
    
    // Reset progress to 0
    progress = 0;
    progressBar.style.width = '0%';
    
    // Start the interval (always running, no pause on hover)
    progressInterval = setInterval(updateProgress, updateInterval);
  }

  // Initialize featured section
  setupFeaturedEventListeners();
  resetProgress();
  
  // ===== NEWS GRID SECTION =====

  // Elements for news grid
  const newsGrid = document.getElementById('newsGrid');
  const paginationNumbers = document.getElementById('paginationNumbers');
  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');

  // Variables for news grid
  let currentPage = 1;
  const itemsPerPage = 12;
  // Load ALL news data directly from Jekyll into this JS variable
  let allNewsData = [
    {% for article in site.data.all_news.articles %}
      {
        title: "{{ article.title | escape }}",
        date: "{{ article.date }}",
        tags: [{% for tag in article.tags %}"{{ tag | escape }}"{% unless forloop.last %},{% endunless %}{% endfor %}],
        image: "{{ article.image }}",
        excerpt: "{{ article.excerpt | escape }}",
        link: "{{ article.link }}"
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  // Create an observer for lazy loading images
  const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Check if data-src exists before setting src
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, { rootMargin: "200px" });

  // Function to generate HTML for a single news card
  function generateNewsCardHTML(article) {
    const tagsHTML = article.tags.map(tag => `<span class="news-card-tag">${tag}</span>`).slice(0, 2).join(''); // Limit to 2 tags
    return `
      <article class="news-card" data-tags="${article.tags.join(',').toLowerCase()}">
        <div class="news-card-image">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
               data-src="${article.image}" alt="${article.title}" loading="lazy">
        </div>
        <div class="news-card-content">
          <div class="news-card-meta">
            <span class="news-card-date">${article.date}</span>
            <div class="news-card-tags">
              ${tagsHTML}
            </div>
          </div>
          <h3 class="news-card-title">${article.title}</h3>
          <p class="news-card-excerpt">${article.excerpt}</p>
          <a href="${article.link}" class="news-card-read-more">
            Read Article
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </article>
    `;
  }


  // Function to render news grid for a specific page
  function renderNewsGrid(page) {
    // Clear current grid
    newsGrid.innerHTML = '';

    // Calculate indexes
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, allNewsData.length);

    // Add news items for current page
    for (let i = startIndex; i < endIndex; i++) {
      const article = allNewsData[i];
      const articleHTML = generateNewsCardHTML(article);
      const tempDiv = document.createElement('div'); // Use a temp div to create DOM element
      tempDiv.innerHTML = articleHTML.trim();
      const articleElement = tempDiv.firstChild; // Get the article element

      newsGrid.appendChild(articleElement);

      // Apply lazy loading to images
      const img = articleElement.querySelector('img');
      if (img && img.dataset.src) {
        lazyLoadObserver.observe(img);
      }
    }

    // Update current page
    currentPage = page;

    // Update pagination buttons state
    updatePaginationButtons();
  }

  // Function to update pagination (page numbers)
  function updatePagination() {
    const totalPages = Math.ceil(allNewsData.length / itemsPerPage);

    // Clear pagination numbers
    paginationNumbers.innerHTML = '';

    // Add page numbers
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.className = `pagination-number ${i === currentPage ? 'active' : ''}`;
      pageButton.textContent = i;
      pageButton.dataset.page = i;
      pageButton.addEventListener('click', () => {
        if (i !== currentPage) {
          renderNewsGrid(i);
          // Scroll to the news grid section when changing page
          window.scrollTo({
            top: document.querySelector('.all-news-section').offsetTop - 100, // Adjust offset as needed
            behavior: 'smooth'
          });
        }
      });
      paginationNumbers.appendChild(pageButton);
    }
  }

  // Function to update pagination buttons (prev/next) state
  function updatePaginationButtons() {
    const totalPages = Math.ceil(allNewsData.length / itemsPerPage);

    // Update active state of page numbers
    document.querySelectorAll('.pagination-number').forEach(button => {
      button.classList.toggle('active', parseInt(button.dataset.page) === currentPage);
    });

    // Update prev/next buttons
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages || allNewsData.length === 0; // Also disable if no data
  }

  // Event listeners for pagination
  if (prevPageButton) {
    prevPageButton.addEventListener('click', () => {
      if (currentPage > 1) {
        renderNewsGrid(currentPage - 1);
        window.scrollTo({
          top: document.querySelector('.all-news-section').offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  }

  if (nextPageButton) {
    nextPageButton.addEventListener('click', () => {
      const totalPages = Math.ceil(allNewsData.length / itemsPerPage);
      if (currentPage < totalPages) {
        renderNewsGrid(currentPage + 1);
        window.scrollTo({
          top: document.querySelector('.all-news-section').offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  }

  // Initialize news grid if elements exist and data is loaded
  if (newsGrid && paginationNumbers && allNewsData.length > 0) {
     // Initial rendering and pagination setup
    renderNewsGrid(1); // Render the first page
    updatePagination(); // Create pagination numbers
    updatePaginationButtons(); // Set initial button states
  } else if (newsGrid) {
      // Handle case where no news data is available
      newsGrid.innerHTML = '<p>No news articles found.</p>';
       if (paginationNumbers) paginationNumbers.innerHTML = '';
       if (prevPageButton) prevPageButton.disabled = true;
       if (nextPageButton) nextPageButton.disabled = true;
  }

});
</script>
