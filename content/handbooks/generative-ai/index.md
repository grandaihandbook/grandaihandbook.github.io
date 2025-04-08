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
    
    <div class="mb-16">
      <h2 class="text-2xl font-bold mb-6">Full Handbook Content</h2>
      
      <div class="banner mb-6">
        <p>
          <strong>Tip:</strong> For the best reading experience, we recommend exploring each section individually using the links above. The complete handbook content below is provided for convenience and searching.
        </p>
      </div>
      
      <!-- Section I Content -->
      <div class="section" id="section1">
        <div class="section-header no-numbering" id="section1-header">
          <div class="section-header-container">
            <div class="section-header-content">
              <h1 id="s1">Section I: Foundations of Sequential Prediction</h1>
              <div class="section-summary"><b>Goal:</b> Recap machine learning basics + survey (non-DL) methods for tasks under the umbrella of "sequential prediction".</div>
            </div>
          </div>
        </div>
        <div class="section-content" markdown="1">
          {% capture section1_content %}{% include_relative section1.md %}{% endcapture %}
          {{ section1_content | markdownify }}
        </div>
      </div>
      
      <!-- Section II Content -->
      <div class="section" id="section2">
        <div class="section-header no-numbering" id="section2-header">
          <div class="section-header-container">
            <div class="section-header-content">
              <h1 id="s2">Section II: Neural Sequential Prediction</h1>
              <div class="section-summary"><b>Goal:</b> Survey deep learning methods + applications to sequential and language modeling, up to basic Transformers.</div>
            </div>
          </div>
        </div>
        <div class="section-content" markdown="1">
          {% capture section2_content %}{% include_relative section2.md %}{% endcapture %}
          {{ section2_content | markdownify }}
        </div>
      </div>
      
      <!-- Section III Content -->
      <div class="section" id="section3">
        <div class="section-header no-numbering" id="section3-header">
          <div class="section-header-container">
            <div class="section-header-content">
              <h1 id="s3">Section III: Foundations for Modern Language Modeling</h1>
              <div class="section-summary"><b>Goal:</b> Survey central topics related to training LLMs, with an emphasis on conceptual primitives.</div>
            </div>
          </div>
        </div>
        <div class="section-content" markdown="1">
          {% capture section3_content %}{% include_relative section3.md %}{% endcapture %}
          {{ section3_content | markdownify }}
        </div>
      </div>
      
      <!-- Section IV Content -->
      <div class="section" id="section4">
        <div class="section-header no-numbering" id="section4-header">
          <div class="section-header-container">
            <div class="section-header-content">
              <h1 id="s4">Section IV: Finetuning Methods for LLMs</h1>
              <div class="section-summary"><b>Goal:</b> Survey techniques used for improving and "aligning" the quality of LLM outputs after pretraining.</div>
            </div>
          </div>
        </div>
        <div class="section-content" markdown="1">
          {% capture section4_content %}{% include_relative section4.md %}{% endcapture %}
          {{ section4_content | markdownify }}
        </div>
      </div>
      
      <!-- Section V Content -->
      <div class="section" id="section5">
        <div class="section-header no-numbering" id="section5-header">
          <div class="section-header-container">
            <div class="section-header-content">
              <h1 id="s5">Section V: LLM Evaluations and Applications</h1>
              <div class="section-summary"><b>Goal:</b> Survey how LLMs are used and evaluated in practice, beyond just "chatbots".</div>
            </div>
          </div>
        </div>
        <div class="section-content" markdown="1">
          {% capture section5_content %}{% include_relative section5.md %}{% endcapture %}
          {{ section5_content | markdownify }}
        </div>
      </div>
      
      <!-- Section VI Content -->
      <div class="section" id="section6">
        <div class="section-header no-numbering" id="section6-header">
          <div class="section-header-container">
            <div class="section-header-content">
              <h1 id="s6">Section VI: Performance Optimizations for Efficient Inference</h1>
              <div class="section-summary"><b>Goal:</b> Survey architecture choices and lower-level techniques for improving resource utilization (time, compute, memory).</div>
            </div>
          </div>
        </div>
        <div class="section-content" markdown="1">
          {% capture section6_content %}{% include_relative section6.md %}{% endcapture %}
          {{ section6_content | markdownify }}
        </div>
      </div>
      
      <!-- Section VII Content -->
      <div class="section" id="section7">
        <div class="section-header no-numbering" id="section7-header">
          <div class="section-header-container">
            <div class="section-header-content">
              <h1 id="s7">Section VII: Sub-Quadratic Context Scaling</h1>
              <div class="section-summary"><b>Goal:</b> Survey approaches for avoiding the "quadratic scaling problem" faced by self-attention in Transformers.</div>
            </div>
          </div>
        </div>
        <div class="section-content" markdown="1">
          {% capture section7_content %}{% include_relative section7.md %}{% endcapture %}
          {{ section7_content | markdownify }}
        </div>
      </div>
      
      <!-- Section VIII Content -->
      <div class="section" id="section8">
        <div class="section-header no-numbering" id="section8-header">
          <div class="section-header-container">
            <div class="section-header-content">
              <h1 id="s8">Section VIII: Generative Modeling Beyond Sequences</h1>
              <div class="section-summary"><b>Goal:</b> Survey topics building towards generation of non-sequential content like images, from GANs to diffusion models.</div>
            </div>
          </div>
        </div>
        <div class="section-content" markdown="1">
          {% capture section8_content %}{% include_relative section8.md %}{% endcapture %}
          {{ section8_content | markdownify }}
        </div>
      </div>
      
      <!-- Section IX Content -->
      <div class="section" id="section9">
        <div class="section-header no-numbering" id="section9-header">
          <div class="section-header-container">
            <div class="section-header-content">
              <h1 id="s9">Section IX: Multimodal Models</h1>
              <div class="section-summary"><b>Goal:</b> Survey how models can use multiple modalities of input and output (text, audio, images) simultaneously.</div>
            </div>
          </div>
        </div>
        <div class="section-content" markdown="1">
          {% capture section9_content %}{% include_relative section9.md %}{% endcapture %}
          {{ section9_content | markdownify }}
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
