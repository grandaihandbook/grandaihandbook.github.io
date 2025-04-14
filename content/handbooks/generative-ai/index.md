---
layout: default
title: "Generative AI Handbook"
description: "A comprehensive exploration of generative AI, from foundational concepts to cutting-edge techniques."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  <strong>Note:</strong> This handbook is regularly updated to reflect the rapid developments in generative AI. Each section builds upon previous concepts, creating a cohesive learning path from basic principles to advanced applications.
</div>

<h2 id="handbook-sections">Handbook Sections</h2>

<div class="sections-grid">
  <!-- Section I -->
  <div class="section-card">
    <h3 id="s1">
      <a href="{{ '/content/handbooks/generative-ai/section1/' | relative_url }}">Section I: Foundations of Sequential Prediction</a>
    </h3>
    <p><strong>Goal:</strong> Recap machine learning basics + survey (non-DL) methods for tasks under the umbrella of "sequential prediction".</p>
    <a href="{{ '/content/handbooks/generative-ai/section1/' | relative_url }}" class="section-link">Read section →</a>
  </div>
  
  <!-- Section II -->
  <div class="section-card">
    <h3 id="s2">
      <a href="{{ '/content/handbooks/generative-ai/section2/' | relative_url }}">Section II: Neural Sequential Prediction</a>
    </h3>
    <p><strong>Goal:</strong> Survey deep learning methods + applications to sequential and language modeling, up to basic Transformers.</p>
    <a href="{{ '/content/handbooks/generative-ai/section2/' | relative_url }}" class="section-link">Read section →</a>
  </div>
  
  <!-- Section III -->
  <div class="section-card">
    <h3 id="s3">
      <a href="{{ '/content/handbooks/generative-ai/section3/' | relative_url }}">Section III: Foundations for Modern Language Modeling</a>
    </h3>
    <p><strong>Goal:</strong> Survey central topics related to training LLMs, with an emphasis on conceptual primitives.</p>
    <a href="{{ '/content/handbooks/generative-ai/section3/' | relative_url }}" class="section-link">Read section →</a>
  </div>
  
  <!-- Section IV -->
  <div class="section-card">
    <h3 id="s4">
      <a href="{{ '/content/handbooks/generative-ai/section4/' | relative_url }}">Section IV: Finetuning Methods for LLMs</a>
    </h3>
    <p><strong>Goal:</strong> Survey techniques used for improving and "aligning" the quality of LLM outputs after pretraining.</p>
    <a href="{{ '/content/handbooks/generative-ai/section4/' | relative_url }}" class="section-link">Read section →</a>
  </div>
  
  <!-- Section V -->
  <div class="section-card">
    <h3 id="s5">
      <a href="{{ '/content/handbooks/generative-ai/section5/' | relative_url }}">Section V: LLM Evaluations and Applications</a>
    </h3>
    <p><strong>Goal:</strong> Survey how LLMs are used and evaluated in practice, beyond just "chatbots".</p>
    <a href="{{ '/content/handbooks/generative-ai/section5/' | relative_url }}" class="section-link">Read section →</a>
  </div>
  
  <!-- Section VI -->
  <div class="section-card">
    <h3 id="s6">
      <a href="{{ '/content/handbooks/generative-ai/section6/' | relative_url }}">Section VI: Performance Optimizations for Efficient Inference</a>
    </h3>
    <p><strong>Goal:</strong> Survey architecture choices and lower-level techniques for improving resource utilization (time, compute, memory).</p>
    <a href="{{ '/content/handbooks/generative-ai/section6/' | relative_url }}" class="section-link">Read section →</a>
  </div>
  
  <!-- Section VII -->
  <div class="section-card">
    <h3 id="s7">
      <a href="{{ '/content/handbooks/generative-ai/section7/' | relative_url }}">Section VII: Sub-Quadratic Context Scaling</a>
    </h3>
    <p><strong>Goal:</strong> Survey approaches for avoiding the "quadratic scaling problem" faced by self-attention in Transformers.</p>
    <a href="{{ '/content/handbooks/generative-ai/section7/' | relative_url }}" class="section-link">Read section →</a>
  </div>
  
  <!-- Section VIII -->
  <div class="section-card">
    <h3 id="s8">
      <a href="{{ '/content/handbooks/generative-ai/section8/' | relative_url }}">Section VIII: Generative Modeling Beyond Sequences</a>
    </h3>
    <p><strong>Goal:</strong> Survey topics building towards generation of non-sequential content like images, from GANs to diffusion models.</p>
    <a href="{{ '/content/handbooks/generative-ai/section8/' | relative_url }}" class="section-link">Read section →</a>
  </div>
  
  <!-- Section IX -->
  <div class="section-card">
    <h3 id="s9">
      <a href="{{ '/content/handbooks/generative-ai/section9/' | relative_url }}">Section IX: Multimodal Models</a>
    </h3>
    <p><strong>Goal:</strong> Survey how models can use multiple modalities of input and output (text, audio, images) simultaneously.</p>
    <a href="{{ '/content/handbooks/generative-ai/section9/' | relative_url }}" class="section-link">Read section →</a>
  </div>
</div>

<div class="resource-links">
  <h3>Related Handbooks</h3>
  <ul>
    <li><a href="{{ '/handbooks/nlp/' | relative_url }}">NLP Handbook</a> - Explore natural language processing techniques</li>
    <li><a href="{{ '/handbooks/deep-learning/' | relative_url }}">Deep Learning Handbook</a> - Master neural network architectures and training</li>
    <li><a href="{{ '/handbooks/foundation-models/' | relative_url }}">Foundation Models Handbook</a> - Understand large-scale pre-trained models</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Learning Path</h3>
  <ul>
    <li>Begin with the foundational concepts in statistical prediction and machine learning</li>
    <li>Progress through neural network approaches and transformer architectures</li>
    <li>Explore specialized techniques for training, finetuning, and optimizing language models</li>
    <li>Examine applications, evaluation methods, and performance optimizations</li>
    <li>Discover advanced topics like sub-quadratic scaling, diffusion models, and multimodal approaches</li>
  </ul>
</div>

<script>
  // Navigation variables - no previous for index
    window.nextSection = "/content/handbooks/generative-ai/section1/";
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
