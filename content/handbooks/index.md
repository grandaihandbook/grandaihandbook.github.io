---
layout: default
title: "AI Handbooks"
description: "Browse our collection of comprehensive AI handbooks covering various domains and technologies."
---

<style>
  /* Technology badges styling */
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 15px;
    font-size: 0.75rem;
    margin-right: 5px;
    font-weight: 500;
  }
  
  .badge-blue {
    background-color: #e6f0ff;
    color: #0053cf;
  }
  
  .badge-green {
    background-color: #e6f9f1;
    color: #00805e;
  }
  
  .badge-yellow {
    background-color: #fff8e6;
    color: #a66c00;
  }
  
  .badge-red {
    background-color: #ffe6e6;
    color: #cf0000;
  }
  
  /* Reduce card size */
  .handbook-card {
    font-size: 0.85rem;
  }
  
  .card-image {
    height: 140px !important;
  }
  
  /* Reduce space between title and image */
  .card-content {
    padding-top: 0.5rem !important;
  }
  
  /* Applied styles from the CSS document */
  .content-header {
    text-align: left;
    max-width: 1000px;
    margin: 0 auto 0.5rem;
    padding: 0 2rem;
    display: block !important;
  }
  
  .content-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1e293b;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.03em;
    text-align: left;
  }
  
  .content-header .description {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 1rem;
    line-height: 1.6;
    text-align: left;
  }
  
  .header-accent {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4f46e5, #8b5cf6);
    border-radius: 2px;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    margin-left: 0;
    margin-right: auto;
  }
  
  /* Banner styling based on the CSS */
  .banner {
    /* background-color: rgba(240, 249, 255, 0.7); */
    border: 1px solid rgba(12, 74, 110, 0.1);
    border-radius: 0.75rem;
    padding: 1.25rem 1.25rem;
    margin: 2rem 0;
    position: relative;
    text-align: left;
  }
  
  .banner p {
    color: #475569;
    margin-bottom: 0;
    line-height: 1.8;
    font-size: 1.05rem;
  }
  
  .banner strong {
    /* color: #0284c7; */
    font-weight: 600;
  }
</style>

<!-- New content for top of page with updated styling -->
<div class="container mx-auto px-4">
  <div class="max-w-4xl mx-auto mb-12">
    <p class="text-lg mb-6">
      
    </p>
    
    <div class="banner">
      <p>
        <strong>Note:</strong> Our handbooks provide comprehensive, structured knowledge about various domains of artificial intelligence. Each handbook is designed to take you from the fundamentals to advanced concepts with clear explanations, examples, and practical applications.
      </p>
    </div>
  </div>

<div class="container mx-auto px-4" style="max-width: 1300px;">
  <div class="grid md:grid-cols-3 gap-3">
    <!-- Card 1: Generative AI -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image generative-ai" style="height: 160px;">
        <div class="category-badge">Generative AI</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Generative AI</h3>
        <p class="mb-2 text-sm">Systems that create text, images, music, and code through AI techniques.</p>
        <div class="mb-2">
          <span class="badge badge-blue">Transformers</span>
          <span class="badge badge-blue">Diffusion</span>
        </div>
        <a href="/content/handbooks/generative-ai/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
    
    <!-- Card 2: NLP -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image nlp" style="height: 160px;">
        <div class="category-badge">NLP</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">NLP</h3>
        <p class="mb-2 text-sm">How AI systems understand and generate human language.</p>
        <div class="mb-2">
          <span class="badge badge-green">BERT</span>
          <span class="badge badge-green">GPT</span>
        </div>
        <a href="/handbooks/nlp/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
    
    <!-- Card 3: Computer Vision -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image computer-vision" style="height: 160px;">
        <div class="category-badge">Computer Vision</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Computer Vision</h3>
        <p class="mb-2 text-sm">How AI systems process and understand visual information.</p>
        <div class="mb-2">
          <span class="badge badge-yellow">CNNs</span>
          <span class="badge badge-yellow">ViT</span>
        </div>
        <a href="/content/handbooks/computer-vision/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
    
    <!-- Card 4: Reinforcement Learning -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image reinforcement-learning" style="height: 160px;">
        <div class="category-badge">Reinforcement Learning</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Reinforcement Learning</h3>
        <p class="mb-2 text-sm">How AI agents learn through interaction with environments.</p>
        <div class="mb-2">
          <span class="badge badge-red">DQN</span>
          <span class="badge badge-red">PPO</span>
        </div>
        <a href="/handbooks/reinforcement-learning/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
    
    <!-- Card 5: Machine Learning -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image machine-learning" style="height: 160px;">
        <div class="category-badge">Core AI Fields</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Machine Learning</h3>
        <p class="mb-2 text-sm">Algorithms that enable computers to learn from data.</p>
        <div class="mb-2">
          <span class="badge badge-blue">Supervised</span>
          <span class="badge badge-blue">Unsupervised</span>
        </div>
        <a href="/handbooks/machine-learning/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
    
    <!-- Card 6: Deep Learning -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image deep-learning" style="height: 160px;">
        <div class="category-badge">Core AI Fields</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Deep Learning</h3>
        <p class="mb-2 text-sm">Neural network architectures that power modern AI systems.</p>
        <div class="mb-2">
          <span class="badge badge-blue">Neural Networks</span>
          <span class="badge badge-blue">Backprop</span>
        </div>
        <a href="/handbooks/deep-learning/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
    
    <!-- Card 7: Foundation Models -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image foundation-models" style="height: 160px;">
        <div class="category-badge">Core AI Fields</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Foundation Models</h3>
        <p class="mb-2 text-sm">Large-scale AI models trained on diverse data for many tasks.</p>
        <div class="mb-2">
          <span class="badge badge-blue">Transfer Learning</span>
          <span class="badge badge-blue">Fine-tuning</span>
        </div>
        <a href="/handbooks/foundation-models/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
    
    <!-- Card 8: Large Language Models -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image llm" style="height: 160px;">
        <div class="category-badge">Core AI Fields</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Large Language Models</h3>
        <p class="mb-2 text-sm">Neural networks trained to understand and generate language.</p>
        <div class="mb-2">
          <span class="badge badge-blue">Transformers</span>
          <span class="badge badge-blue">Attention</span>
        </div>
        <a href="/handbooks/large-language-models/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
    
    <!-- Card 9: MLOps -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image mlops" style="height: 160px;">
        <div class="category-badge">Core AI Fields</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">MLOps</h3>
        <p class="mb-2 text-sm">Deploying and managing ML models in production.</p>
        <div class="mb-2">
          <span class="badge badge-blue">Deployment</span>
          <span class="badge badge-blue">Monitoring</span>
        </div>
        <a href="/handbooks/mlops/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
    
    <!-- Card 10: Explainable AI -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image xai" style="height: 160px;">
        <div class="category-badge">AI Domains</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Explainable AI (XAI)</h3>
        <p class="mb-2 text-sm">Understanding and interpreting AI decision-making.</p>
        <div class="mb-2">
          <span class="badge badge-green">LIME</span>
          <span class="badge badge-green">SHAP</span>
        </div>
        <a href="/handbooks/explainable-ai/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>
  </div>
</div>

<!-- New content for bottom of page -->
<div class="max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-6">How to Use These Handbooks</h2>
    
    <div class="mb-8">
      <div class="grid md:grid-cols-3 gap-6 text-center">
        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="text-3xl mb-4">1️⃣</div>
          <h3 class="font-semibold mb-2">Start with Fundamentals</h3>
          <p>Begin with the introductory sections to build a solid foundation</p>
        </div>
        
        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="text-3xl mb-4">2️⃣</div>
          <h3 class="font-semibold mb-2">Explore Techniques</h3>
          <p>Dive into specific techniques and architectures that interest you</p>
        </div>
        
        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="text-3xl mb-4">3️⃣</div>
          <h3 class="font-semibold mb-2">Try Applications</h3>
          <p>Apply your knowledge to practical use cases and projects</p>
        </div>
      </div>
    </div>
    
    <div class="banner mb-8">
      <h3 class="font-semibold mb-2">Coming Soon:</h3>
      <ul class="list-disc pl-6">
        <li>Deep Learning Fundamentals Handbook</li>
        <li>MLOps Handbook</li>
        <li>AI Ethics and Responsible AI Handbook</li>
      </ul>
    </div>
    
    <div class="text-center">
      <p class="mb-6">Can't find the handbook you're looking for? Want to contribute to existing ones?</p>
      <a href="https://github.com/{{ site.github_username }}/{{ site.repository }}/issues/new?assignees=&labels=content+request&template=content_suggestion.md&title=New+Handbook+Suggestion" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
        Suggest a New Handbook
      </a>
    </div>
  </div>
