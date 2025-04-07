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
    <h1>
      <span>The</span> <span>Grand</span> <span>AI</span> <span>Handbook</span>
    </h1>
    <p>Your definitive guide to artificial intelligence — From foundational concepts to cutting-edge innovations</p>
    
    <div class="hero-buttons">
      <a href="{{ '/handbooks/' | relative_url }}" class="button-primary">Explore Handbooks</a>
      <a href="{{ '/roadmaps/' | relative_url }}" class="button-secondary">View Career Paths</a>
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
    
    <div class="features-grid">
      <!-- Feature Card 1 -->
      <div class="feature-card">
        <div class="feature-header">
          <div class="feature-icon">
            <span role="img" aria-label="Brain" style="font-size: 24px;">🧠</span>
          </div>
          <h3>Mastering AI Fundamentals</h3>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-content">
          <ul class="feature-list">
            <li class="feature-item">Domain-specific handbooks with progressive learning paths</li>
            <li class="feature-item">Intuitive explanations of complex algorithms</li>
            <li class="feature-item">Interactive visualizations of key concepts</li>
            <li class="feature-item">Practical implementations with annotated code samples</li>
          </ul>
        </div>
      </div>
      
      <!-- Feature Card 2 -->
      <div class="feature-card">
        <div class="feature-header">
          <div class="feature-icon">
            <span role="img" aria-label="Microscope" style="font-size: 24px;">🔬</span>
          </div>
          <h3>Research & Innovation</h3>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-content">
          <ul class="feature-list">
            <li class="feature-item">Expert analyses of breakthrough research papers</li>
            <li class="feature-item">Technical concepts translated into accessible insights</li>
            <li class="feature-item">Comparative evaluations of emerging techniques</li>
            <li class="feature-item">Future directions and research opportunities</li>
          </ul>
        </div>
      </div>
      
      <!-- Feature Card 3 -->
      <div class="feature-card">
        <div class="feature-header">
          <div class="feature-icon">
            <span role="img" aria-label="Rocket" style="font-size: 24px;">🚀</span>
          </div>
          <h3>Career Development</h3>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-content">
          <ul class="feature-list">
            <li class="feature-item">Comprehensive roadmaps for AI specializations</li>
            <li class="feature-item">Strategic skill acquisition frameworks</li>
            <li class="feature-item">Curated learning resources for each career stage</li>
            <li class="feature-item">Industry-relevant project recommendations</li>
          </ul>
        </div>
      </div>
      
      <!-- Feature Card 4 -->
      <div class="feature-card">
        <div class="feature-header">
          <div class="feature-icon">
            <span role="img" aria-label="Gear" style="font-size: 24px;">⚙️</span>
          </div>
          <h3>Practical Resources</h3>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-content">
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
  
  <!-- HANDBOOKS SECTION -->
  <section class="mb-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">Featured <span class="gradient-word">Handbooks</span></h2>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {% for handbook in site.data.navigation.handbooks limit:4 %}
        <a href="{{ handbook.url | relative_url }}" class="handbook-card">
          <div class="card-content">
            <div class="card-icon">
              {% case handbook.title %}
                {% when "Generative AI" %}
                  <span class="card-emoji">🤖</span>
                {% when "NLP" %}
                  <span class="card-emoji">📝</span>
                {% when "Computer Vision" %}
                  <span class="card-emoji">👁️</span>
                {% when "Reinforcement Learning" %}
                  <span class="card-emoji">🎮</span>
                {% else %}
                  <span class="card-emoji">📚</span>
              {% endcase %}
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900">{{ handbook.title }}</h3>
            <p class="text-gray-600">
              {% case handbook.title %}
                {% when "Generative AI" %}
                  Master transformer architectures, diffusion models, and optimization techniques for creative AI systems.
                {% when "NLP" %}
                  Explore advanced language understanding, generation, and multimodal integration strategies.
                {% when "Computer Vision" %}
                  Delve into neural architectures, object detection, segmentation, and visual reasoning systems.
                {% when "Reinforcement Learning" %}
                  Understand policy optimization, multi-agent systems, and decision-making under uncertainty.
              {% endcase %}
            </p>
          </div>
        </a>
      {% endfor %}
    </div>
    
    <div class="text-center mt-10">
      <a href="{{ '/handbooks/' | relative_url }}" class="btn btn-primary">View All Handbooks</a>
    </div>
  </section>
  
  <!-- ROADMAPS SECTION -->
  <section class="mb-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">AI Career <span class="gradient-word">Roadmaps</span></h2>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6">
      {% for roadmap in site.data.navigation.roadmaps %}
        <a href="{{ roadmap.url | relative_url }}" class="roadmap-card">
          <div class="card-content">
            <div class="card-icon">
              {% case roadmap.title %}
                {% when "AI Engineer" %}
                  <span class="card-emoji">⚙️</span>
                {% when "ML Researcher" %}
                  <span class="card-emoji">🔬</span>
                {% when "Data Scientist" %}
                  <span class="card-emoji">📊</span>
                {% else %}
                  <span class="card-emoji">🗺️</span>
              {% endcase %}
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900">{{ roadmap.title }}</h3>
            <p class="text-gray-600">
              {% case roadmap.title %}
                {% when "AI Engineer" %}
                  Strategic progression from fundamentals to building and deploying robust AI systems at scale.
                {% when "ML Researcher" %}
                  Structured path to mastering theoretical foundations and contributing novel advancements to the field.
                {% when "Data Scientist" %}
                  Comprehensive journey from data analysis to developing sophisticated AI-driven business solutions.
              {% endcase %}
            </p>
          </div>
        </a>
      {% endfor %}
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
