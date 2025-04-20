---
layout: default
title: Home
hide_title: true
---

<section class="hero rounded-2xl">
  <!-- Decorative elements -->
  <div class="accent-circle top-right"></div>
  <div class="accent-circle bottom-left"></div>
  
  <!-- Floating geometric shapes -->
  <div class="geometric-shape triangle"></div>
  <div class="geometric-shape square"></div>
  <div class="geometric-shape circle"></div>
  
  <div class="hero-content text-center">
    <h1 class="hero-title">
      The Grand AI Handbook
    </h1>
    <p class="hero-text">Your definitive guide to artificial intelligence — From foundational concepts to cutting-edge innovations</p>
    
    <div class="hero-buttons">
      <a href="{{ '/content/handbooks/' | relative_url }}" class="button-primary">Explore Handbooks</a>
      <a href="{{ '/content/roadmaps/' | relative_url }}" class="button-secondary">View Career Paths</a>
    </div>
  </div>
</section>

<div class="container mx-auto px-4">
  <!-- FEATURES SECTION -->
  <section class="features-container mb-20">
    <div class="features-title text-center mb-12">
      <h2 class="text-3xl font-bold">The <span class="gradient-word">Ultimate</span> AI Knowledge Hub</h2>
      <p class="max-w-3xl mx-auto mt-4">A meticulously curated resource designed to illuminate the complex world of artificial intelligence through structured learning paths, expert insights, and practical applications.</p>
    </div>
    
    <!-- Forced horizontal layout with equal heights -->
    <div class="flex overflow-x-auto pb-6" style="min-width: 100%; scrollbar-width: none;">
      <!-- Feature Card 1 -->
      <div class="feature-card flex-shrink-0 flex flex-col" style="width: 24%; margin-right: 1.33%; height: 400px;">
        <div class="feature-header">
          <div class="feature-icon">
            <span role="img" aria-label="Brain" style="font-size: 24px;">🧠</span>
          </div>
          <h3>Mastering AI Fundamentals</h3>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-content flex-grow">
          <ul class="feature-list">
            <li class="feature-item">Domain-specific handbooks with progressive learning paths</li>
            <li class="feature-item">Intuitive explanations of complex algorithms</li>
            <li class="feature-item">Interactive visualizations of key concepts</li>
            <li class="feature-item">Practical implementations with annotated code samples</li>
          </ul>
        </div>
      </div>
      
      <!-- Feature Card 2 -->
      <div class="feature-card flex-shrink-0 flex flex-col" style="width: 24%; margin-right: 1.33%; height: 400px;">
        <div class="feature-header">
          <div class="feature-icon">
            <span role="img" aria-label="Microscope" style="font-size: 24px;">🔬</span>
          </div>
          <h3>Research & Innovation</h3>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-content flex-grow">
          <ul class="feature-list">
            <li class="feature-item">Expert analyses of breakthrough research papers</li>
            <li class="feature-item">Technical concepts translated into accessible insights</li>
            <li class="feature-item">Comparative evaluations of emerging techniques</li>
            <li class="feature-item">Future directions and research opportunities</li>
          </ul>
        </div>
      </div>
      
      <!-- Feature Card 3 -->
      <div class="feature-card flex-shrink-0 flex flex-col" style="width: 24%; margin-right: 1.33%; height: 400px;">
        <div class="feature-header">
          <div class="feature-icon">
            <span role="img" aria-label="Rocket" style="font-size: 24px;">🚀</span>
          </div>
          <h3>Career Development</h3>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-content flex-grow">
          <ul class="feature-list">
            <li class="feature-item">Comprehensive roadmaps for AI specializations</li>
            <li class="feature-item">Strategic skill acquisition frameworks</li>
            <li class="feature-item">Curated learning resources for each career stage</li>
            <li class="feature-item">Industry-relevant project recommendations</li>
          </ul>
        </div>
      </div>
      
      <!-- Feature Card 4 -->
      <div class="feature-card flex-shrink-0 flex flex-col" style="width: 24%; height: 400px;">
        <div class="feature-header">
          <div class="feature-icon">
            <span role="img" aria-label="Gear" style="font-size: 24px;">⚙️</span>
          </div>
          <h3>Practical Resources</h3>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-content flex-grow">
          <ul class="feature-list">
            <li class="feature-item">Advanced tutorials for all experience levels</li>
            <li class="feature-item">Critical evaluations of AI tools and frameworks</li>
            <li class="feature-item">Specialized datasets with preparation guides</li>
            <li class="feature-item">Best practices for production AI systems</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="blockquote-container">
  <blockquote class="centered">
    "Bridging the gap between theoretical concepts and practical applications in artificial intelligence."
  </blockquote>
</div>
  </section>
</div>
  
  <!-- HANDBOOKS SECTION -->
  <section class="mb-20">
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold">Featured <span class="gradient-word">Handbooks</span></h2>
  </div>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {% for handbook in site.data.navigation.handbooks limit:4 %}
      <a href="{{ handbook.url | relative_url }}" class="handbook-card">
        <!-- Optional category badge -->
        <div class="category-badge">{{ handbook.category | default: "Handbook" }}</div>
        
        <!-- Image container with floating icon on hover -->
        <div class="card-image {% if handbook.title == 'Generative AI' %}generative-ai{% elsif handbook.title == 'Foundation Models' %}foundation-models{% elsif handbook.title == 'Computer Vision' %}computer-vision{% elsif handbook.title == 'Reinforcement Learning' %}reinforcement-learning{% else %}default{% endif %}">
          
        </div>
        
        <div class="card-content">
          
          <h3 class="text-xl font-semibold mb-2">{{ handbook.title }}</h3>
          <p>
            {% case handbook.title %}
              {% when "Generative AI" %}
                Master transformer-based language and vision models, multimodal systems, and advanced optimization for next-generation AI.
              {% when "Foundation Models" %}
                Explore advanced language understanding, generation, and multimodal integration strategies.
              {% when "Computer Vision" %}
                Delve into neural architectures, object detection, segmentation, and visual reasoning systems.
              {% when "Reinforcement Learning" %}
                Understand policy optimization, multi-agent systems, and decision-making under uncertainty.
            {% endcase %}
          </p>
          
          <!-- Optional read more indicator -->
          <div class="read-more">
            Explore handbook
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
  
  <div class="text-center mt-10">
    <a href="{{ '/content/handbooks/' | relative_url }}" class="btn btn-primary">View All Handbooks</a>
  </div>
</section>
  <!-- ECOSYSTEM SECTION -->
<section class="mb-20">
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold">AI <span class="gradient-word">Ecosystem</span></h2>
  </div>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    <a href="{{ '/ecosystem/models/' | relative_url }}" class="handbook-card">
      <!-- Optional category badge -->
      <div class="category-badge">Ecosystem</div>
  <!-- Image container with floating icon on hover -->
  <div class="card-image models">
    
  </div>
  
  <div class="card-content">
    
    <h3 class="text-xl font-semibold mb-2">Models</h3>
    <p>
      Comprehensive directory of state-of-the-art AI models across domains, with performance benchmarks and implementation guides.
    </p>
    
    <!-- Optional read more indicator -->
    <div class="read-more">
      Explore models
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</a>

<a href="{{ '/ecosystem/tools/' | relative_url }}" class="handbook-card">
  <!-- Optional category badge -->
  <div class="category-badge">Ecosystem</div>
  
  <!-- Image container with floating icon on hover -->
  <div class="card-image tools">
    
  </div>
  
  <div class="card-content">
    
    <h3 class="text-xl font-semibold mb-2">Tools</h3>
    <p>
      Curated collection of essential AI software, frameworks, and development environments with practical implementation guidance.
    </p>
    
    <!-- Optional read more indicator -->
    <div class="read-more">
      Explore tools
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</a>

<a href="{{ '/ecosystem/benchmarks/' | relative_url }}" class="handbook-card">
  <!-- Optional category badge -->
  <div class="category-badge">Ecosystem</div>
  
  <!-- Image container with floating icon on hover -->
  <div class="card-image benchmarks">
    
  </div>
  
  <div class="card-content">
    
    <h3 class="text-xl font-semibold mb-2">Benchmarks</h3>
    <p>
      In-depth analysis of standardized performance metrics and evaluation frameworks for comparing AI system capabilities.
    </p>
    
    <!-- Optional read more indicator -->
    <div class="read-more">
      Explore benchmarks
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</a>

<a href="{{ '/ecosystem/competitions/' | relative_url }}" class="handbook-card">
  <!-- Optional category badge -->
  <div class="category-badge">Ecosystem</div>
  
  <!-- Image container with floating icon on hover -->
  <div class="card-image competitions">
    
  </div>
  
  <div class="card-content">
    
    <h3 class="text-xl font-semibold mb-2">Competitions</h3>
    <p>
      Guide to major AI challenges, contests, and collaborative opportunities for developing and testing cutting-edge solutions.
    </p>
    
    <!-- Optional read more indicator -->
    <div class="read-more">
      Explore competitions
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</a>
  </div>
  <div class="text-center mt-10">
    <a href="{{ '/ecosystem/' | relative_url }}" class="btn btn-primary">Explore Full Ecosystem</a>
  </div>
</section>
  <!-- ROADMAPS SECTION -->
  <section class="mb-20">
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold">AI Career <span class="gradient-word">Roadmaps</span></h2>
  </div>
  
  <div class="grid md:grid-cols-3 gap-6">
    <!-- Machine Learning Engineer Card -->
    <a href="{{ '/roadmaps/machine-learning-engineer' | relative_url }}" class="career-card">
      <!-- Roadmap badge -->
      <div class="roadmap-badge">Roadmap</div>
      
      <!-- Image container -->
      <div class="card-image ml-engineer"></div>
      
      <div class="card-content">
        <h3>Machine Learning Engineer</h3>
        <p>Strategic progression from fundamental programming skills to advanced MLOps and system deployment.</p>
        
        <div class="specialty-tags">
          <span class="specialty-tag">Deep Learning</span>
          <span class="specialty-tag">MLOps</span>
          <span class="specialty-tag">Deployment</span>
        </div>
        
        <div class="explore-link">
          View roadmap
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </a>

    <!-- Data Scientist Card -->
    <a href="{{ '/roadmaps/data-scientist' | relative_url }}" class="career-card">
      <!-- Roadmap badge -->
      <div class="roadmap-badge">Roadmap</div>

      <!-- Image container -->
      <div class="card-image data-scientist"></div>

      <div class="card-content">
        <h3>Data Scientist</h3>
        <p>Comprehensive journey from statistics and SQL to advanced machine learning and causal inference.</p>

        <div class="specialty-tags">
          <span class="specialty-tag">Statistics</span>
          <span class="specialty-tag">ML</span>
          <span class="specialty-tag">Big Data</span>
        </div>

        <div class="explore-link">
          View roadmap
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </a>

    <!-- AI Researcher Card -->
    <a href="{{ '/roadmaps/ai-researcher' | relative_url }}" class="career-card">
      <!-- Roadmap badge -->
      <div class="roadmap-badge">Roadmap</div>

      <!-- Image container -->
      <div class="card-image ai-researcher"></div>

      <div class="card-content">
        <h3>AI Researcher</h3>
        <p>Structured path from mathematical foundations to publishing novel research and architecture design.</p>

        <div class="specialty-tags">
          <span class="specialty-tag">Math</span>
          <span class="specialty-tag">Advanced ML</span>
          <span class="specialty-tag">Research</span>
        </div>

        <div class="explore-link">
          View roadmap
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </a>

  </div>
  
  <div class="text-center mt-10">
    <a href="{{ '/roadmaps/' | relative_url }}" class="btn btn-primary">Explore All Roadmaps</a>
  </div>
</section>
  
  <!-- RESEARCH SECTION -->
  <section class="mb-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">Research <span class="gradient-word">Insights</span></h2>
    </div>
    
    <div class="banner">
      <p class="text-center">Our research section features in-depth analyses of groundbreaking papers and emerging technologies that are shaping the future of artificial intelligence.</p>
    </div>
    
    <div class="text-center mt-10">
      <a href="{{ '/research/' | relative_url }}" class="btn btn-secondary">Explore Research Section</a>
    </div>
  </section>
  
  <!-- COMMUNITY SECTION -->
  <section class="mb-10">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">Join Our <span class="gradient-word">Community</span></h2>
    </div>
    
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-lg mb-6">
        The Grand AI Handbook is a collaborative endeavor dedicated to democratizing AI knowledge. We welcome contributions from researchers, practitioners, and enthusiasts who share our passion for advancing AI education.
      </p>
      
      <div class="flex flex-wrap justify-center gap-4">
        <a href="https://github.com/{{ site.github_username }}/{{ site.repository }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
        <a href="https://github.com/{{ site.github_username }}/{{ site.repository }}/blob/main/CONTRIBUTING.md" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          Contribution Guidelines
        </a>
      </div>
    </div>
  </section>
</div>
