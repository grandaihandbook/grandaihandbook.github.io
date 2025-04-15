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

  .badge-purple {
    background-color: #ffe6e6;
    color: #7E3FF2;
  }

  .badge-orange {
    background-color: #ffe6e6;
    color: #FF7A00;
  }

  .badge-magenta {
    background-color: #ffe6e6;
    color: #FF00FF
  }
  
  /* Reduce card size */
  .handbook-card {
    font-size: 0.85rem;
  }
  
  .card-image {
    height: 140px !important;
  }
  
  /* Full-width header styling */
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

/* Add the purple accent line under the title */
.header-accent {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4f46e5, #8b5cf6);
  border-radius: 2px;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}

/* Make sure we only show one title */
.content-header:first-of-type {
  display: block;
}

.content-header:not(:first-of-type) {
  display: none;
}

/* Position the title correctly */
.content-header {
  text-align: left;
    max-width: 1300px;
    margin: 0 auto 0.5rem;
    padding: 0 2rem;
    display: block !important;
    column-count: 1 !important;
    column-gap: 0 !important;
    float: none !important;
}
  /* Banner styling - full width */
  .banner {
    background-color: rgba(79, 70, 229, 0.04);
    border: 1px solid rgba(79, 70, 229, 0.15);
    border-radius: 0.75rem;
    padding: 1.5rem 2rem;
    margin: 0.5rem 0 2.5rem 0;
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
    font-weight: 600;
  }
  
  /* Container styling to ensure full width */
  .container.full-width {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  
  .inner-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .mb-2 {
    margin-bottom: 1rem;
  }
</style>

<!-- Full-width content header -->
<div class="container full-width">

  <!-- Full-width banner -->
  <div class="inner-container">
    <div class="banner">
      <p>
        <strong>Note:</strong> Our handbooks provide comprehensive, structured knowledge about various domains of artificial intelligence. Each handbook is designed to take you from the fundamentals to advanced concepts with clear explanations, examples, and practical applications.
      </p>
    </div>
  </div>
</div>

<div class="container mx-auto px-4" style="max-width: 1300px;">
  <div class="grid md:grid-cols-3 gap-3">
    <!-- Card 1: Generative AI -->
    <!-- <div class="handbook-container"> -->
    <!-- Already existing cards -->
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
          <span class="badge badge-blue">GANs</span>
        </div>
        <a href="/content/handbooks/generative-ai/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 2: Foundation Models -->
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
          <span class="badge badge-blue">Scaling Laws</span>
        </div>
        <a href="/content/handbooks/foundation-models/" class="btn btn-primary text-left">Explore Handbook</a>
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
          <span class="badge badge-yellow">YOLO</span>
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
          <span class="badge badge-red">SAC</span>
        </div>
        <a href="/content/handbooks/reinforcement-learning/" class="btn btn-primary text-left">Explore Handbook</a>
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
          <span class="badge badge-blue">Semi-supervised</span>
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
          <span class="badge badge-blue">Activation Functions</span>
        </div>
        <a href="/handbooks/deep-learning/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 7: NLP -->
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
          <span class="badge badge-green">T5</span>
        </div>
        <a href="/content/handbooks/nlp/" class="btn btn-primary text-left">Explore Handbook</a>
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
          <span class="badge badge-blue">RLHF</span>
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
          <span class="badge badge-blue">Versioning</span>
        </div>
        <a href="/handbooks/mlops/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 10: Explainable AI -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image explainable-ai" style="height: 160px;">
        <div class="category-badge">AI Domains</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Explainable AI (XAI)</h3>
        <p class="mb-2 text-sm">Understanding and interpreting AI decision-making.</p>
        <div class="mb-2">
          <span class="badge badge-green">LIME</span>
          <span class="badge badge-green">SHAP</span>
          <span class="badge badge-green">Feature Importance</span>
        </div>
        <a href="/content/handbooks/explainable-ai/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- New cards - AI Domains Section -->

    <!-- Card 11: Federated Learning -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image federated-learning" style="height: 160px;">
        <div class="category-badge">AI Domains</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Federated Learning</h3>
        <p class="mb-2 text-sm">Training models across decentralized devices while preserving privacy.</p>
        <div class="mb-2">
          <span class="badge badge-green">Privacy</span>
          <span class="badge badge-green">Distributed</span>
          <span class="badge badge-green">Encryption</span>
        </div>
        <a href="/handbooks/federated-learning/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 12: Multimodal AI -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image multimodal-ai" style="height: 160px;">
        <div class="category-badge">AI Domains</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Multimodal AI</h3>
        <p class="mb-2 text-sm">Systems that process and connect multiple types of data inputs.</p>
        <div class="mb-2">
          <span class="badge badge-green">Vision-Language</span>
          <span class="badge badge-green">CLIP</span>
          <span class="badge badge-green">Multimodal Fusion</span>
        </div>
        <a href="/handbooks/multimodal-ai/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 13: Recommender Systems -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image recommender-systems" style="height: 160px;">
        <div class="category-badge">AI Domains</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Recommender Systems</h3>
        <p class="mb-2 text-sm">AI systems that suggest relevant items to users.</p>
        <div class="mb-2">
          <span class="badge badge-green">Collaborative Filtering</span>
          <span class="badge badge-green">Content-Based</span>
          <span class="badge badge-green">Matrix Factorization</span>
        </div>
        <a href="/handbooks/recommender-systems/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 14: Robotics & AI -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image robotics-ai" style="height: 160px;">
        <div class="category-badge">AI Domains</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Robotics & AI</h3>
        <p class="mb-2 text-sm">How AI systems power and control physical robots.</p>
        <div class="mb-2">
          <span class="badge badge-green">Control</span>
          <span class="badge badge-green">Perception</span>
          <span class="badge badge-green">Manipulation</span>
        </div>
        <a href="/handbooks/robotics-ai/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 15: Self-Driving Cars -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image self-driving-cars" style="height: 160px;">
        <div class="category-badge">AI Domains</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Self-Driving Cars</h3>
        <p class="mb-2 text-sm">AI technologies enabling autonomous vehicle navigation.</p>
        <div class="mb-2">
          <span class="badge badge-green">Computer Vision</span>
          <span class="badge badge-green">Decision Making</span>
          <span class="badge badge-green">Path Planning</span>
        </div>
        <a href="/handbooks/self-driving-cars/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 16: Audio AI -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image audio-ai" style="height: 160px;">
        <div class="category-badge">AI Domains</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Audio AI</h3>
        <p class="mb-2 text-sm">AI systems for speech recognition, audio generation and processing.</p>
        <div class="mb-2">
          <span class="badge badge-green">Speech Recognition</span>
          <span class="badge badge-green">Audio Synthesis</span>
          <span class="badge badge-green">Acoustic Models</span>
        </div>
        <a href="/handbooks/audio-ai/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Specialized AI Techniques Section -->

    <!-- Card 17: Bayesian Machine Learning -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image bayesian-ml" style="height: 160px;">
        <div class="category-badge">Specialized AI Techniques</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Bayesian Machine Learning</h3>
        <p class="mb-2 text-sm">Probabilistic approaches to ML using Bayesian inference.</p>
        <div class="mb-2">
          <span class="badge badge-purple">Probability</span>
          <span class="badge badge-purple">Uncertainty</span>
          <span class="badge badge-purple">MCMC</span>
        </div>
        <a href="/handbooks/bayesian-ml/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 18: Efficient AI & Optimization -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image efficient-ai" style="height: 160px;">
        <div class="category-badge">Specialized AI Techniques</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Efficient AI & Optimization</h3>
        <p class="mb-2 text-sm">Techniques to make AI systems faster and more resource-efficient.</p>
        <div class="mb-2">
          <span class="badge badge-purple">Quantization</span>
          <span class="badge badge-purple">Pruning</span>
          <span class="badge badge-purple">Knowledge Distillation</span>
        </div>
        <a href="/handbooks/efficient-ai/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 19: Graph Neural Networks -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image graph-neural-networks" style="height: 160px;">
        <div class="category-badge">Specialized AI Techniques</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Graph Neural Networks</h3>
        <p class="mb-2 text-sm">Neural networks designed to work with graph-structured data.</p>
        <div class="mb-2">
          <span class="badge badge-purple">GCN</span>
          <span class="badge badge-purple">Graph Embeddings</span>
          <span class="badge badge-purple">Message Passing</span>
        </div>
        <a href="/handbooks/graph-neural-networks/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 20: Representation Learning -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image representation-learning" style="height: 160px;">
        <div class="category-badge">Specialized AI Techniques</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Representation Learning</h3>
        <p class="mb-2 text-sm">Methods for learning useful data representations without supervision.</p>
        <div class="mb-2">
          <span class="badge badge-purple">Embeddings</span>
          <span class="badge badge-purple">Feature Learning</span>
          <span class="badge badge-purple">Latent Space</span>
        </div>
        <a href="/handbooks/representation-learning/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 21: Self-Supervised Learning -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image self-supervised-learning" style="height: 160px;">
        <div class="category-badge">Specialized AI Techniques</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Self-Supervised Learning</h3>
        <p class="mb-2 text-sm">Learning from unlabeled data using automatically generated supervision.</p>
        <div class="mb-2">
          <span class="badge badge-purple">Contrastive Learning</span>
          <span class="badge badge-purple">Masking</span>
          <span class="badge badge-purple">SimCLR</span>
        </div>
        <a href="/handbooks/self-supervised-learning/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 22: Time Series Forecasting -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image time-series" style="height: 160px;">
        <div class="category-badge">Specialized AI Techniques</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Time Series Forecasting</h3>
        <p class="mb-2 text-sm">AI methods for predicting future values based on past observations.</p>
        <div class="mb-2">
          <span class="badge badge-purple">ARIMA</span>
          <span class="badge badge-purple">Prophet</span>
          <span class="badge badge-purple">LSTM</span>
        </div>
        <a href="/handbooks/time-series/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Applied AI & Ethics Section -->

    <!-- Card 23: AI Ethics & Fairness -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image ai-ethics" style="height: 160px;">
        <div class="category-badge">Applied AI & Ethics</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">AI Ethics & Fairness</h3>
        <p class="mb-2 text-sm">Ensuring AI systems are fair, accountable, and transparent.</p>
        <div class="mb-2">
          <span class="badge badge-orange">Bias</span>
          <span class="badge badge-orange">Governance</span>
          <span class="badge badge-orange">Transparency</span>
        </div>
        <a href="/handbooks/ai-ethics/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 24: AI for Art & Aesthetics -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image ai-art" style="height: 160px;">
        <div class="category-badge">Applied AI & Ethics</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">AI for Art & Aesthetics</h3>
        <p class="mb-2 text-sm">How AI systems create and evaluate visual art and design.</p>
        <div class="mb-2">
          <span class="badge badge-orange">Creativity</span>
          <span class="badge badge-orange">Style Transfer</span>
          <span class="badge badge-orange">Stable Diffusion</span>
        </div>
        <a href="/handbooks/ai-art/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 25: AI for Edge & IoT -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image edge-ai" style="height: 160px;">
        <div class="category-badge">Applied AI & Ethics</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">AI for Edge & IoT</h3>
        <p class="mb-2 text-sm">Deploying AI on resource-constrained devices and IoT networks.</p>
        <div class="mb-2">
          <span class="badge badge-orange">TinyML</span>
          <span class="badge badge-orange">Embedded</span>
          <span class="badge badge-orange">Energy Efficiency</span>
        </div>
        <a href="/handbooks/edge-ai/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 26: AI in Finance -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image ai-finance" style="height: 160px;">
        <div class="category-badge">Applied AI & Ethics</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">AI in Finance</h3>
        <p class="mb-2 text-sm">Applications of AI in financial markets and institutions.</p>
        <div class="mb-2">
          <span class="badge badge-orange">Trading</span>
          <span class="badge badge-orange">Risk</span>
          <span class="badge badge-orange">Fraud Detection</span>
        </div>
        <a href="/handbooks/ai-finance/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card 27: AI in Healthcare -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image ai-healthcare" style="height: 160px;">
        <div class="category-badge">Applied AI & Ethics</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">AI in Healthcare</h3>
        <p class="mb-2 text-sm">How AI is transforming medical diagnosis, treatment, and research.</p>
        <div class="mb-2">
          <span class="badge badge-orange">Medical Imaging</span>
          <span class="badge badge-orange">Diagnostics</span>
          <span class="badge badge-orange">Genomics</span>
        </div>
        <a href="/handbooks/ai-healthcare/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card: AI Agents -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image ai-agents" style="height: 160px;">
        <div class="category-badge">Uncategorized</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">AI Agents</h3>
        <p class="mb-2 text-sm">Exploring autonomous AI systems that can perceive, decide, and act independently.</p>
        <div class="mb-2">
          <span class="badge badge-magenta">Reinforcement Learning</span>
          <span class="badge badge-magenta">Multi-agent Systems</span>
          <span class="badge badge-magenta">Robotics</span>
        </div>
        <a href="/handbooks/ai-agents/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card: Prompt Engineering -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image prompt-engineering" style="height: 160px;">
        <div class="category-badge">Uncategorized</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Prompt Engineering</h3>
        <p class="mb-2 text-sm">Mastering the art and science of crafting effective prompts for language models.</p>
        <div class="mb-2">
          <span class="badge badge-magenta">Chain-of-Thought</span>
          <span class="badge badge-magenta">ReAct</span>
          <span class="badge badge-magenta">LLM Judge</span>
        </div>
        <a href="/handbooks/prompt-engineering/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

    <!-- Card: Quantum ML -->
    <div class="handbook-card shadow rounded overflow-hidden" style="font-size: 0.9rem;">
      <div class="card-image quantum-ml" style="height: 160px;">
        <div class="category-badge">Uncategorized</div>
      </div>
      <div class="card-content p-3 pt-2">
        <h3 class="text-lg font-semibold mb-1">Quantum ML</h3>
        <p class="mb-2 text-sm">The intersection of quantum computing and machine learning algorithms.</p>
        <div class="mb-2">
          <span class="badge badge-magenta">Quantum Circuits</span>
          <span class="badge badge-magenta">Hybrid Algorithms</span>
          <span class="badge badge-magenta">Quantum Advantage</span>
        </div>
        <a href="/handbooks/quantum-ml/" class="btn btn-primary text-left">Explore Handbook</a>
      </div>
    </div>

  </div>

<div class="container max-w-full mx-auto py-12" style="max-width: 1300px;">
  <h2 class="features-title mb-8">How to Use These Handbooks</h2>
  
  <div class="md:grid-cols-3 grid mb-8">
    <div class="feature-card">
      <div class="feature-header">
        <div class="feature-icon">1️⃣</div>
        <h3>Start with Fundamentals</h3>
      </div>
      <div class="feature-divider"></div>
      <div class="feature-content">
        <p>Begin with the introductory sections to build a solid foundation.</p>
      </div>
    </div>
    
    <div class="feature-card">
      <div class="feature-header">
        <div class="feature-icon">2️⃣</div>
        <h3>Explore Techniques</h3>
      </div>
      <div class="feature-divider"></div>
      <div class="feature-content">
        <p>Dive into specific techniques and architectures that interest you.</p>
      </div>
    </div>
    
    <div class="feature-card">
      <div class="feature-header">
        <div class="feature-icon">3️⃣</div>
        <h3>Try Applications</h3>
      </div>
      <div class="feature-divider"></div>
      <div class="feature-content">
        <p>Apply your knowledge to practical use cases and projects.</p>
      </div>
    </div>
  </div>
  
  <div class="handbook-card mb-8">
    <div class="card-content">
      <h3>Coming Soon:</h3>
      <ul class="feature-list">
        <li class="feature-item"><strong>AI Agents Handbook</strong> - Building autonomous systems for complex tasks</li>
        <li class="feature-item"><strong>Prompt Engineering Handbook</strong> - Master the art of effective AI communication</li>
        <li class="feature-item"><strong>Quantum ML Handbook</strong> - Exploring computational advantages of quantum systems</li>
      </ul>
    </div>
  </div>
  
  <div class="text-center">
    <p class="mb-6">Can't find the handbook you're looking for? Want to contribute to existing ones?</p>
    <a href="https://github.com/{{ site.github_username }}/{{ site.repository }}/issues/new?assignees=&labels=content+request&template=content_suggestion.md&title=New+Handbook+Suggestion" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
      Suggest a New Handbook
    </a>
  </div>
</div>
