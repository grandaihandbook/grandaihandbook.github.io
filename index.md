---
layout: default
title: Home
---

<div class="hero mb-12 rounded-lg">
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl md:text-6xl font-bold mb-6">The Grand AI Handbook</h1>
    <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Your ultimate AI knowledge hub – Handbooks, Research, Roadmaps, and More!</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="{{ '/handbooks/' | relative_url }}" class="btn btn-primary px-6 py-3">Browse Handbooks</a>
      <a href="{{ '/roadmaps/' | relative_url }}" class="btn btn-secondary px-6 py-3">View Roadmaps</a>
    </div>
  </div>
</div>

<div class="container mx-auto px-4">
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8 text-center">What is The Grand AI Handbook?</h2>
    <div class="max-w-4xl mx-auto">
      <p class="text-lg mb-6">
        A <strong>comprehensive AI knowledge hub</strong> covering everything you need to know about artificial intelligence, from fundamentals to cutting-edge research.
      </p>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">🧠 Learn AI Concepts</h3>
          <ul class="space-y-2">
            <li>✅ Detailed handbooks on key AI domains</li>
            <li>✅ Step-by-step explanations of complex topics</li>
            <li>✅ Illustrated examples and intuitive analogies</li>
            <li>✅ Practical implementations and code samples</li>
          </ul>
        </div>
        
        <div class="bg-purple-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">🔬 Stay Updated with Research</h3>
          <ul class="space-y-2">
            <li>✅ Weekly research paper highlights</li>
            <li>✅ Explained breakthroughs and innovations</li>
            <li>✅ Accessible summaries of technical papers</li>
            <li>✅ Trends and emerging research directions</li>
          </ul>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">🚀 Follow Career Roadmaps</h3>
          <ul class="space-y-2">
            <li>✅ Clear paths to becoming an AI professional</li>
            <li>✅ Skill progression for various AI roles</li>
            <li>✅ Recommended resources at each stage</li>
            <li>✅ Project ideas to build your portfolio</li>
          </ul>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">🛠️ Practical Resources</h3>
          <ul class="space-y-2">
            <li>✅ Hands-on projects for all skill levels</li>
            <li>✅ Curated book and course recommendations</li>
            <li>✅ Dataset collections for various tasks</li>
            <li>✅ Tools and frameworks for AI development</li>
          </ul>
        </div>
      </div>
      
      <div class="text-center mt-10">
        <blockquote class="italic text-xl text-gray-600 max-w-3xl mx-auto">
          "Making AI knowledge structured, accessible, and always up-to-date."
        </blockquote>
      </div>
    </div>
  </section>
  
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8 text-center">Explore Our Handbooks</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {% for handbook in site.data.navigation.handbooks %}
        <a href="{{ handbook.url | relative_url }}" class="card bg-white hover:no-underline">
          <div class="p-6">
            {% case handbook.title %}
              {% when "Generative AI" %}
                <div class="text-4xl mb-4">💡</div>
              {% when "NLP" %}
                <div class="text-4xl mb-4">🔤</div>
              {% when "Computer Vision" %}
                <div class="text-4xl mb-4">👁️</div>
              {% when "Reinforcement Learning" %}
                <div class="text-4xl mb-4">🎮</div>
            {% endcase %}
            <h3 class="text-xl font-semibold mb-2 text-gray-900">{{ handbook.title }}</h3>
            <p class="text-gray-600">
              {% case handbook.title %}
                {% when "Generative AI" %}
                  Learn about LLMs, diffusion models, and creative AI systems.
                {% when "NLP" %}
                  Master text processing, understanding, and generation.
                {% when "Computer Vision" %}
                  Understand how AI interprets and analyzes visual data.
                {% when "Reinforcement Learning" %}
                  Explore how AI learns through interaction and feedback.
              {% endcase %}
            </p>
          </div>
        </a>
      {% endfor %}
    </div>
    
    <div class="text-center mt-8">
      <a href="{{ '/handbooks/' | relative_url }}" class="btn btn-primary">View All Handbooks</a>
    </div>
  </section>
  
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8 text-center">Career Roadmaps</h2>
    
    <div class="grid md:grid-cols-3 gap-6">
      {% for roadmap in site.data.navigation.roadmaps %}
        <a href="{{ roadmap.url | relative_url }}" class="card bg-white hover:no-underline">
          <div class="p-6">
            {% case roadmap.title %}
              {% when "AI Engineer" %}
                <div class="text-4xl mb-4">🔧</div>
              {% when "ML Researcher" %}
                <div class="text-4xl mb-4">🔬</div>
              {% when "Data Scientist" %}
                <div class="text-4xl mb-4">📊</div>
            {% endcase %}
            <h3 class="text-xl font-semibold mb-2 text-gray-900">{{ roadmap.title }}</h3>
            <p class="text-gray-600">
              {% case roadmap.title %}
                {% when "AI Engineer" %}
                  Step-by-step guide to becoming an AI Engineer, from fundamentals to deploying production systems.
                {% when "ML Researcher" %}
                  Path to becoming an ML Researcher, advancing the state-of-the-art in machine learning.
                {% when "Data Scientist" %}
                  Journey to becoming a Data Scientist, transforming data into actionable insights.
              {% endcase %}
            </p>
          </div>
        </a>
      {% endfor %}
    </div>
    
    <div class="text-center mt-8">
      <a href="{{ '/roadmaps/' | relative_url }}" class="btn btn-primary">Explore Roadmaps</a>
    </div>
  </section>
  
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8 text-center">Latest Research Highlights</h2>
    
    <div class="banner">
      <p class="text-center">Our research section will be regularly updated with the latest AI papers and breakthroughs.</p>
    </div>
    
    <div class="text-center mt-8">
      <a href="{{ '/research/' | relative_url }}" class="btn btn-secondary">Visit Research Section</a>
    </div>
  </section>
  
  <section>
    <h2 class="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
    
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-lg mb-6">
        The Grand AI Handbook is a community-driven project. We welcome contributions from AI enthusiasts, practitioners, and researchers.
      </p>
      
      <div class="flex flex-wrap justify-center gap-4">
        <a href="https://github.com/{{ site.github_username }}/{{ site.repository }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          <svg class="inline-block h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
          </svg>
          GitHub Repository
        </a>
        <a href="https://github.com/{{ site.github_username }}/{{ site.repository }}/blob/main/CONTRIBUTING.md" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          How to Contribute
        </a>
      </div>
    </div>
  </section>
</div>
