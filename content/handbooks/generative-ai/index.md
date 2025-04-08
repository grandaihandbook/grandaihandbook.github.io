---
layout: default
---

<div class="container mx-auto px-4">
  <div class="max-w-4xl mx-auto mb-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-6">Generative AI Handbook</h1>
    
    <p class="text-lg mb-6">
      This handbook provides a comprehensive exploration of generative AI, covering the full spectrum from foundational concepts to cutting-edge techniques. Whether you're just starting your journey or looking to deepen your expertise, this resource offers structured knowledge and practical insights.
    </p>
    
    <div class="banner">
      <p>
        <strong>Note:</strong> This handbook is regularly updated to reflect the rapid developments in generative AI.
      </p>
    </div>
  </div>
  
  <div class="max-w-4xl mx-auto mb-16">
    <h2 class="text-2xl font-bold mb-6">Handbook Sections</h2>
    
    <div class="grid gap-6 mb-10">
      <!-- Section I -->
      <div class="card bg-white">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">
            <a href="#s1" class="hover:text-blue-600">Section I: Foundations of Sequential Prediction</a>
          </h3>
          <p class="mb-4"><strong>Goal:</strong> Recap machine learning basics + survey (non-DL) methods for tasks under the umbrella of "sequential prediction".</p>
          <a href="{{ '/content/handbooks/generative-ai/section1/' | relative_url }}" class="text-blue-600 hover:underline">Read section →</a>
        </div>
      </div>
      
      <!-- Section II -->
      <div class="card bg-white">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">
            <a href="#s2" class="hover:text-blue-600">Section II: Neural Sequential Prediction</a>
          </h3>
          <p class="mb-4"><strong>Goal:</strong> Survey deep learning methods + applications to sequential and language modeling, up to basic Transformers.</p>
          <a href="{{ '/content/handbooks/generative-ai/section2/' | relative_url }}" class="text-blue-600 hover:underline">Read section →</a>
        </div>
      </div>
      
      <!-- Section III -->
      <div class="card bg-white">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">
            <a href="#s3" class="hover:text-blue-600">Section III: Foundations for Modern Language Modeling</a>
          </h3>
          <p class="mb-4"><strong>Goal:</strong> Survey central topics related to training LLMs, with an emphasis on conceptual primitives.</p>
          <a href="{{ '/content/handbooks/generative-ai/section3/' | relative_url }}" class="text-blue-600 hover:underline">Read section →</a>
        </div>
      </div>
      
      <!-- Section IV -->
      <div class="card bg-white">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">
            <a href="#s4" class="hover:text-blue-600">Section IV: Finetuning Methods for LLMs</a>
          </h3>
          <p class="mb-4"><strong>Goal:</strong> Survey techniques used for improving and "aligning" the quality of LLM outputs after pretraining.</p>
          <a href="{{ '/content/handbooks/generative-ai/section4/' | relative_url }}" class="text-blue-600 hover:underline">Read section →</a>
        </div>
      </div>
      
      <!-- Section V -->
      <div class="card bg-white">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">
            <a href="#s5" class="hover:text-blue-600">Section V: LLM Evaluations and Applications</a>
          </h3>
          <p class="mb-4"><strong>Goal:</strong> Survey how LLMs are used and evaluated in practice, beyond just "chatbots".</p>
          <a href="{{ '/content/handbooks/generative-ai/section5/' | relative_url }}" class="text-blue-600 hover:underline">Read section →</a>
        </div>
      </div>
      
      <!-- Section VI -->
      <div class="card bg-white">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">
            <a href="#s6" class="hover:text-blue-600">Section VI: Performance Optimizations for Efficient Inference</a>
          </h3>
          <p class="mb-4"><strong>Goal:</strong> Survey architecture choices and lower-level techniques for improving resource utilization (time, compute, memory).</p>
          <a href="{{ '/content/handbooks/generative-ai/section6/' | relative_url }}" class="text-blue-600 hover:underline">Read section →</a>
        </div>
      </div>
      
      <!-- Section VII -->
      <div class="card bg-white">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">
            <a href="#s7" class="hover:text-blue-600">Section VII: Sub-Quadratic Context Scaling</a>
          </h3>
          <p class="mb-4"><strong>Goal:</strong> Survey approaches for avoiding the "quadratic scaling problem" faced by self-attention in Transformers.</p>
          <a href="{{ '/content/handbooks/generative-ai/section7/' | relative_url }}" class="text-blue-600 hover:underline">Read section →</a>
        </div>
      </div>
      
      <!-- Section VIII -->
      <div class="card bg-white">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">
            <a href="#s8" class="hover:text-blue-600">Section VIII: Generative Modeling Beyond Sequences</a>
          </h3>
          <p class="mb-4"><strong>Goal:</strong> Survey topics building towards generation of non-sequential content like images, from GANs to diffusion models.</p>
          <a href="{{ '/content/handbooks/generative-ai/section8/' | relative_url }}" class="text-blue-600 hover:underline">Read section →</a>
        </div>
      </div>
      
      <!-- Section IX -->
      <div class="card bg-white">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">
            <a href="#s9" class="hover:text-blue-600">Section IX: Multimodal Models</a>
          </h3>
          <p class="mb-4"><strong>Goal:</strong> Survey how models can use multiple modalities of input and output (text, audio, images) simultaneously.</p>
          <a href="{{ '/content/handbooks/generative-ai/section9/' | relative_url }}" class="text-blue-600 hover:underline">Read section →</a>
        </div>
      </div>
    </div>
    
    <div class="text-center mb-16">
      <h3 class="text-xl font-bold mb-4">Related Handbooks</h3>
      <div class="grid md:grid-cols-3 gap-4">
        <a href="{{ '/handbooks/nlp/' | relative_url }}" class="card bg-white p-4 hover:shadow-lg transition-shadow">
          <h4 class="font-bold">NLP Handbook</h4>
          <p class="text-sm">Explore natural language processing techniques</p>
        </a>
        <a href="{{ '/handbooks/deep-learning/' | relative_url }}" class="card bg-white p-4 hover:shadow-lg transition-shadow">
          <h4 class="font-bold">Deep Learning Handbook</h4>
          <p class="text-sm">Master neural network architectures and training</p>
        </a>
        <a href="{{ '/handbooks/foundation-models/' | relative_url }}" class="card bg-white p-4 hover:shadow-lg transition-shadow">
          <h4 class="font-bold">Foundation Models Handbook</h4>
          <p class="text-sm">Understand large-scale pre-trained models</p>
        </a>
      </div>
    </div>
  </div>
</div>
