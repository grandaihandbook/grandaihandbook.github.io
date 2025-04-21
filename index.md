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
    <p class="hero-text">Traverse the full spectrum of machine intelligence — from algorithmic origins to the threshold of artificial consciousness</p>
    
    <div class="hero-buttons">
      <a href="{{ '/content/handbooks/' | relative_url }}" class="button-primary">Explore Handbooks</a>
      <a href="{{ '/content/roadmaps/' | relative_url }}" class="button-secondary">View Career Paths</a>
    </div>
  </div>
</section>
<section class="timeline-section">
  <div class="timeline-container">
    <!-- Glowing effect for the timeline -->
    <div class="glow-effect"></div>
    
    <!-- Main timeline line -->
    <div class="timeline-line">
      <div class="timeline-progress"></div>
    </div>
    
    <!-- Separators -->
    <!-- <div class="timeline-separator" style="left: 30%; --separator-delay: 1.2s;"></div>
    <div class="timeline-separator era-boundary" style="left: 60%; --separator-delay: 1.6s;"></div>
    <div class="timeline-separator" style="left: 90%; --separator-delay: 2s;"></div> -->
    <!-- Era labels with hover info cards -->

    <div class="era-label" style="left: 30%;">
      Narrow Intelligence
      <div class="era-info">
        <div class="era-title">Artificial Narrow Intelligence (ANI)</div>
        <div class="era-description">Specialized AI that excels at specific tasks, like image recognition or game-playing, but lacks general reasoning. Powers early AI breakthroughs.</div>
      </div>
    </div>
    <div class="era-label" style="left: 60%;">
      General Intelligence
      <div class="era-info">
        <div class="era-title">Artificial General Intelligence (AGI)</div>
        <div class="era-description">AI with human-like reasoning, capable of learning and solving diverse problems across domains, rivaling human intelligence.</div>
      </div>
    </div>
    <div class="era-label" style="left: 90%;">
      Super Intelligence
      <div class="era-info">
        <div class="era-title">Artificial Super Intelligence (ASI)</div>
        <div class="era-description">AI surpassing human intelligence, with unparalleled problem-solving and creativity, potentially reshaping the future of humanity.</div>
      </div>
    </div>
    <!-- Milestone 1: 1950 - Turing Test (Top) -->
    <div class="milestone top" style="left: 6%;" id="milestone-1">
      <div class="milestone-dot dot-1950">
        <div class="milestone-inner">
          <span class="milestone-year">1950</span>
          <span class="milestone-icon">🧪</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-1"></div>
      <div class="milestone-info">
        <div class="milestone-title">Turing Test</div>
        <div class="milestone-description">Alan Turing proposes the "imitation game" to test if machines can mimic human intelligence, sparking AI research.</div>
      </div>
    </div>

    <!-- Milestone 2: 1956 - Dartmouth Conference (Bottom) -->
    <div class="milestone bottom" style="left: 12%;" id="milestone-2">
      <div class="milestone-dot dot-1956">
        <div class="milestone-inner">
          <span class="milestone-year">1956</span>
          <span class="milestone-icon">⚙️</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-2"></div>
      <div class="milestone-info">
        <div class="milestone-title">Dartmouth Conference</div>
        <div class="milestone-description">The term "Artificial Intelligence" is coined, launching AI as a formal field with ambitious goals.</div>
      </div>
    </div>

    <!-- Milestone 3: 1958 - Perceptron (Top) -->
    <div class="milestone top" style="left: 18%;" id="milestone-3">
      <div class="milestone-dot dot-1958">
        <div class="milestone-inner">
          <span class="milestone-year">1958</span>
          <span class="milestone-icon">🧠</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-3"></div>
      <div class="milestone-info">
        <div class="milestone-title">Perceptron</div>
        <div class="milestone-description">Frank Rosenblatt’s Perceptron introduces neural networks, laying the groundwork for modern deep learning.</div>
      </div>
    </div>

    <!-- Milestone 4: 1986 - Backpropagation (Bottom) -->
    <div class="milestone bottom" style="left: 24%;" id="milestone-4">
      <div class="milestone-dot dot-1986">
        <div class="milestone-inner">
          <span class="milestone-year">1986</span>
          <span class="milestone-icon">🔄</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-4"></div>
      <div class="milestone-info">
        <div class="milestone-title">Backpropagation</div>
        <div class="milestone-description">Rumelhart, Hinton, and Williams popularize backpropagation, enabling efficient training of neural networks.</div>
      </div>
    </div>

    <!-- Milestone 5: 2006 - Deep Learning Revolution (Top) -->
    <div class="milestone top" style="left: 30%;" id="milestone-5">
      <div class="milestone-dot dot-2006">
        <div class="milestone-inner">
          <span class="milestone-year">2006</span>
          <span class="milestone-icon">🧮</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-5"></div>
      <div class="milestone-info">
        <div class="milestone-title">Deep Learning Revolution</div>
        <div class="milestone-description">Geoffrey Hinton’s breakthroughs in deep neural networks ignite the modern deep learning era.</div>
      </div>
    </div>

    <!-- Milestone 6: 2012 - AlexNet (Bottom) -->
    <div class="milestone bottom" style="left: 36%;" id="milestone-6">
      <div class="milestone-dot dot-2012">
        <div class="milestone-inner">
          <span class="milestone-year">2012</span>
          <span class="milestone-icon">🔍</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-6"></div>
      <div class="milestone-info">
        <div class="milestone-title">AlexNet</div>
        <div class="milestone-description">AlexNet’s convolutional neural network dominates ImageNet, proving deep learning’s power for computer vision.</div>
      </div>
    </div>

    <!-- Milestone 7: 2016 - AlphaGo (Top) -->
    <div class="milestone top" style="left: 42%;" id="milestone-7">
      <div class="milestone-dot dot-2016">
        <div class="milestone-inner">
          <span class="milestone-year">2016</span>
          <span class="milestone-icon">🎮</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-7"></div>
      <div class="milestone-info">
        <div class="milestone-title">AlphaGo</div>
        <div class="milestone-description">DeepMind’s AlphaGo defeats world champion Lee Sedol at Go, showcasing AI’s ability to master complex strategy games.</div>
      </div>
    </div>

    <!-- Milestone 8: 2017 - Transformer (Bottom) -->
    <div class="milestone bottom" style="left: 48%;" id="milestone-8">
      <div class="milestone-dot dot-2017">
        <div class="milestone-inner">
          <span class="milestone-year">2017</span>
          <span class="milestone-icon">📜</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-8"></div>
      <div class="milestone-info">
        <div class="milestone-title">Transformer</div>
        <div class="milestone-description">The “Attention is All You Need” paper introduces Transformers, revolutionizing NLP and enabling models like BERT and GPT.</div>
      </div>
    </div>

    <!-- Milestone 9: 2020 - AlphaFold (Top) -->
    <div class="milestone top" style="left: 54%;" id="milestone-9">
      <div class="milestone-dot dot-2020">
        <div class="milestone-inner">
          <span class="milestone-year">2020</span>
          <span class="milestone-icon">🧬</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-9"></div>
      <div class="milestone-info">
        <div class="milestone-title">AlphaFold</div>
        <div class="milestone-description">DeepMind’s AlphaFold solves the decades-old protein folding problem, transforming biology with AI-driven predictions.</div>
      </div>
    </div>

    <!-- Milestone 10: 2021 - GPT-3 Applications (Bottom) -->
    <div class="milestone bottom" style="left: 60%;" id="milestone-10">
      <div class="milestone-dot dot-2021">
        <div class="milestone-inner">
          <span class="milestone-year">2021</span>
          <span class="milestone-icon">💬</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-10"></div>
      <div class="milestone-info">
        <div class="milestone-title">GPT-3 Applications</div>
        <div class="milestone-description">OpenAI’s GPT-3 powers tools like GitHub Copilot, revolutionizing coding and text generation with its 175B parameters.</div>
      </div>
    </div>

    <!-- Milestone 11: 2022 - ChatGPT & DALL-E 2 (Top) -->
    <div class="milestone top" style="left: 66%;" id="milestone-11">
      <div class="milestone-dot dot-2022">
        <div class="milestone-inner">
          <span class="milestone-year">2022</span>
          <span class="milestone-icon">🤖</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-11"></div>
      <div class="milestone-info">
        <div class="milestone-title">ChatGPT & DALL-E 2</div>
        <div class="milestone-description">ChatGPT captivates millions with conversational AI, while DALL-E 2 and Stable Diffusion redefine creativity with text-to-image generation.</div>
      </div>
    </div>

    <!-- Milestone 12: 2024 - Reasoning Breakthroughs (Bottom) -->
    <div class="milestone bottom" style="left: 72%;" id="milestone-12">
      <div class="milestone-dot dot-2024">
        <div class="milestone-inner">
          <span class="milestone-year">2024</span>
          <span class="milestone-icon">🧩</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-12"></div>
      <div class="milestone-info">
        <div class="milestone-title">Reasoning Breakthroughs</div>
        <div class="milestone-description">AI models achieve human-like reasoning, excelling in complex problem-solving, logic, and scientific discovery, rivaling expert performance.</div>
      </div>
    </div>

    <!-- Milestone 13: 2030 - Path to AGI (Top) -->
    <div class="milestone top" style="left: 90%;" id="milestone-13">
      <div class="milestone-dot dot-2030">
        <div class="milestone-inner">
          <span class="milestone-year">2030</span>
          <span class="milestone-icon">🚀</span>
        </div>
      </div>
      <div class="milestone-connector" id="connector-13"></div>
      <div class="milestone-info">
        <div class="milestone-title">Path to AGI</div>
        <div class="milestone-description">Early AGI systems emerge, capable of general reasoning across domains, heralding a new era of superintelligent machines.</div>
      </div>
    </div>

    <!-- Current year marker -->
    <div class="current-year-marker" id="current-year-marker">
      <div class="current-year-line"></div>
      <div class="current-year-dot"></div>
      <div class="current-year-label">YOU ARE HERE (2025)</div>
    </div>

    <!-- Floating elements container -->
    <div class="floating-elements-container" id="floating-elements"></div>

    <!-- Particles container -->
    <div class="particles-container" id="particles-container"></div>

  </div>
</section>

<div class="container mx-auto px-4">
  <!-- FEATURES SECTION -->
  <section class="features-container mb-20">
    <div class="features-title text-center mb-12">
      <h2 class="text-3xl font-bold">HUMANITY'S <span class="gradient-word">GREATEST TECHNOLOGICAL</span> LEAP</h2>
      <p class="max-w-3xl mx-auto mt-4">Where science meets philosophy. Where mathematics shapes reality. Where code becomes consciousness.</p>
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
    <a href="{{ '/content/ecosystem/models/' | relative_url }}" class="handbook-card">
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

<a href="{{ '/content/ecosystem/tools/' | relative_url }}" class="handbook-card">
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

  <!-- RESEARCH SECTION -->
  <!-- RESEARCH SECTION -->
  <section class="mb-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">Research <span class="gradient-word">Insights</span></h2>
    </div>
    
    <div class="banner mb-12">
      <p class="text-center">Our research section features in-depth analyses of groundbreaking papers and emerging technologies that are shaping the future of artificial intelligence.</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <a href="{{ '/research/weekly-papers/' | relative_url }}" class="handbook-card">
        <!-- Optional category badge -->
        <div class="category-badge">Research</div>
        
        <!-- Image container with floating icon on hover -->
        <div class="card-image weekly">
          
        </div>
        
        <div class="card-content">
          
          <h3 class="text-xl font-semibold mb-2">Weekly Papers</h3>
          <p>
            Curated selection of the most impactful AI research papers, updated every week with summaries and key insights.
          </p>
          
          <!-- Optional read more indicator -->
          <div class="read-more">
            View weekly updates
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </a>

      <a href="{{ '/research/trends/' | relative_url }}" class="handbook-card">
        <!-- Optional category badge -->
        <div class="category-badge">Research</div>

        <!-- Image container with floating icon on hover -->
        <div class="card-image trends">

        </div>

        <div class="card-content">

          <h3 class="text-xl font-semibold mb-2">Trends</h3>
          <p>
            Explore emerging patterns and directions in AI research, highlighting breakthrough techniques and methodologies.
          </p>

          <!-- Optional read more indicator -->
          <div class="read-more">
            Discover trends
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </a>

      <a href="{{ '/research/open-challenges/' | relative_url }}" class="handbook-card">
        <!-- Optional category badge -->
        <div class="category-badge">Research</div>

        <!-- Image container with floating icon on hover -->
        <div class="card-image challenges">

        </div>

        <div class="card-content">

          <h3 class="text-xl font-semibold mb-2">Open Challenges</h3>
          <p>
            Critical unsolved problems in AI research, offering opportunities for breakthrough contributions to the field.
          </p>

          <!-- Optional read more indicator -->
          <div class="read-more">
            Explore challenges
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </a>

      <a href="{{ '/research/author-spotlight/' | relative_url }}" class="handbook-card">
        <!-- Optional category badge -->
        <div class="category-badge">Research</div>

        <!-- Image container with floating icon on hover -->
        <div class="card-image spotlight">

        </div>

        <div class="card-content">

          <h3 class="text-xl font-semibold mb-2">Author Spotlight</h3>
          <p>
            In-depth profiles of leading AI researchers, their groundbreaking work, and contributions to the field.
          </p>

          <!-- Optional read more indicator -->
          <div class="read-more">
            Meet the authors
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </a>
    </div>

    <div class="text-center mt-10">
      <a href="{{ '/research/' | relative_url }}" class="btn btn-secondary">Explore Full Research Section</a>
    </div>

  </section>
  <!-- ROADMAPS SECTION -->
<!-- ROADMAPS SECTION -->
<section class="mb-20">
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold">AI Career <span class="gradient-word">Roadmaps</span></h2>
  </div>
  
  <!-- Using the same grid layout as other sections -->
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Machine Learning Engineer Card -->
    <a href="{{ '/roadmaps/machine-learning-engineer' | relative_url }}" class="handbook-card">
      <!-- Keeping the roadmap badge -->
      <div class="category-badge">Roadmap</div>
      
      <!-- Image container -->
      <div class="card-image ml-engineer"></div>
      
      <div class="card-content">
        <h3 class="text-xl font-semibold mb-2">Machine Learning Engineer</h3>
        <p>Strategic progression from fundamental programming skills to advanced MLOps and system deployment.</p>
        
        <div class="specialty-tags mt-4">
          <span class="specialty-tag">Deep Learning</span>
          <span class="specialty-tag">MLOps</span>
          <span class="specialty-tag">Deployment</span>
        </div>
        
        <!-- Using the same read-more style as other sections -->
        <div class="read-more">
          View roadmap
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </a>

    <!-- Data Scientist Card -->
    <a href="{{ '/roadmaps/data-scientist' | relative_url }}" class="handbook-card">
      <div class="category-badge">Roadmap</div>
      <div class="card-image data-scientist"></div>
      <div class="card-content">
        <h3 class="text-xl font-semibold mb-2">Data Scientist</h3>
        <p>Comprehensive journey from statistics and SQL to advanced machine learning and causal inference.</p>

        <div class="specialty-tags mt-4">
          <span class="specialty-tag">Statistics</span>
          <span class="specialty-tag">ML</span>
          <span class="specialty-tag">Big Data</span>
        </div>

        <div class="read-more">
          View roadmap
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </a>

    <!-- AI Researcher Card -->
    <a href="{{ '/roadmaps/ai-researcher' | relative_url }}" class="handbook-card">
      <div class="category-badge">Roadmap</div>
      <div class="card-image ai-researcher"></div>
      <div class="card-content">
        <h3 class="text-xl font-semibold mb-2">AI Researcher</h3>
        <p>Structured path from mathematical foundations to publishing novel research and architecture design.</p>

        <div class="specialty-tags mt-4">
          <span class="specialty-tag">Math</span>
          <span class="specialty-tag">Advanced ML</span>
          <span class="specialty-tag">Research</span>
        </div>

        <div class="read-more">
          View roadmap
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </a>

    <!-- MLOps Engineer Card -->
    <a href="{{ '/roadmaps/mlops-engineer' | relative_url }}" class="handbook-card">
      <div class="category-badge">Roadmap</div>
      <div class="card-image mlops-engineer"></div>
      <div class="card-content">
        <h3 class="text-xl font-semibold mb-2">MLOps Engineer</h3>
        <p>Specialized journey from DevOps principles to machine learning pipelines and production-ready AI systems.</p>

        <div class="specialty-tags mt-4">
          <span class="specialty-tag">DevOps</span>
          <span class="specialty-tag">Pipelines</span>
          <span class="specialty-tag">Monitoring</span>
        </div>

        <div class="read-more">
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
