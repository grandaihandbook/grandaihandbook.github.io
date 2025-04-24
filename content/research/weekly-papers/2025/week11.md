<link rel="stylesheet" href="/assets/css/research/weekly-papers.css">
<link rel="stylesheet" href="/assets/css/research/weekly-paper-detail.css">
<div class="weekly-paper-container">
  <div class="weekly-paper-header">
    <div class="weekly-paper-meta">
      <span class="weekly-paper-date">March 11-17, 2025</span>
      <div class="weekly-paper-tags">
        <span class="weekly-paper-tag">Multimodal</span>
        <span class="weekly-paper-tag">Robotics</span>
        <span class="weekly-paper-tag">Architecture</span>
        <span class="weekly-paper-tag">Safety</span>
      </div>
    </div>
    <h1 class="weekly-paper-title">Week 11: Gemma 3 and Recent Advances in AI Research</h1>
    <p class="weekly-paper-description">This collection highlights cutting-edge research in multimodal models, novel neural architectures, and embodied AI. Featured papers explore breakthroughs in lightweight open models, efficient transformer designs, agent planning, and robotic reasoning capabilities.</p>
  </div>
  <div class="weekly-paper-content">
    <section class="weekly-paper-section">
      <h2>Research Highlights</h2>
      <div class="paper-card">
        <div class="paper-card-header">
          <h3>Gemma 3: Lightweight Open Model Family</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Google</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>Gemma 3 is a lightweight open model family (1B-27B parameters) that integrates vision understanding, multilingual coverage, and extended context windows up to 128K tokens.</p>
          <ul class="paper-points">
            <li>Uses SigLIP vision encoder with Pan & Scan method for varying aspect ratios</li>
            <li>Interleaves local and global attention layers (5:1 ratio) for efficient context handling</li>
            <li>Supports 35 languages out-of-box and was pretrained for over 140 languages</li>
          </ul>
          <div class="paper-quote">
            <p>"Early results in LMSYS Chatbot Arena place Gemma-3-27B-IT among the top 10 best models, outperforming other non-thinking open models like DeepSeek-V3 and LLaMA 3 405B."</p>
          </div>
        </div>
      </div>
  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Traveling Waves for Spatial Integration</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Harvard University and Western University</span>
        <a href="#" class="paper-link">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This research proposes a wave-based recurrent neural network framework that uses traveling waves of neural activity to perform global spatial integration on visual tasks.</p>
      <ul class="paper-points">
        <li>Inspired by "Hearing the Shape of a Drum" to encode spatial information</li>
        <li>Discretizes the 2D wave equation into a convolutional recurrent model</li>
        <li>Aggregates information across entire wave evolution for better performance</li>
      </ul>
      <div class="paper-quote">
        <p>"On synthetic datasets and real-world benchmarks, the wave-based networks outperform or match global CNN/U-Net baselines with fewer parameters."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Transformers without Normalization</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Meta, NYU, MIT, and Princeton</span>
        <a href="#" class="paper-link">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>Researchers present Dynamic Tanh (DyT), a surprisingly simple method that removes normalization layers in Transformers while achieving equal or better results.</p>
      <ul class="paper-points">
        <li>Replaces normalization with per-channel tanh(αx) and learnable affine parameters</li>
        <li>Matches or exceeds normalized baselines across multiple tasks</li>
        <li>Improves efficiency and training speed for large LLaMA models</li>
      </ul>
      <div class="paper-quote">
        <p>"By analyzing trained models, they observe that LayerNorm often behaves like an S-shaped tanh function, scaling inputs while squashing extremes."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Monitoring Reasoning Models for Misbehavior</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">OpenAI</span>
        <a href="#" class="paper-link">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>OpenAI researchers examine how LLMs that use chain-of-thought (CoT) reasoning can be monitored for misaligned behaviors, including sophisticated reward hacking.</p>
      <ul class="paper-points">
        <li>CoT monitoring detects sophisticated reward hacking in coding tasks</li>
        <li>"Obfuscated reward hacking" emerges when models hide malicious intent</li>
        <li>Less capable models can effectively monitor more advanced agents</li>
      </ul>
      <div class="paper-quote">
        <p>"Applying direct optimization on CoT can break its transparency and hinder future oversight, creating a trade-off between capability and monitorability."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Plan-and-Act: Long-Horizon Task Planning</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">UC Berkeley and University of Tokyo</span>
        <a href="#" class="paper-link">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>Plan-and-Act framework separates high-level planning from low-level execution in LLM-based agents, boosting performance on challenging long-horizon tasks.</p>
      <ul class="paper-points">
        <li>Splits reasoning into Planner and Executor modules to address cognitive overload</li>
        <li>Generates high-quality plan-action pairs through reverse-engineering</li>
        <li>Implements dynamic replanning based on latest environment state</li>
      </ul>
      <div class="paper-quote">
        <p>"Evaluated on web navigation tasks, the approach achieves a 54% success rate—significantly above the previous best of ~49%."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Gemini Robotics: Embodied AI Models</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Google DeepMind</span>
        <a href="#" class="paper-link">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>Google DeepMind unveils Gemini Robotics, a family of embodied AI models designed to bring large multimodal reasoning capabilities into physical robotic systems.</p>
      <ul class="paper-points">
        <li>Vision-Language-Action architecture built on Gemini 2.0's multimodal backbone</li>
        <li>Enables scalable zero/few-shot control with fewer than 100 demonstrations</li>
        <li>Includes safety alignment layer for physical action constraints</li>
      </ul>
      <div class="paper-quote">
        <p>"By merging a powerful large multimodal model with real-time, dexterous robotic control, Gemini Robotics marks a critical milestone in building robots that can 'see, think, and act' in generalizable ways."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Search-R1: RL for Search-Augmented Reasoning</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="#" class="paper-link">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This paper tackles search-augmented reasoning by teaching LLMs to query a search engine multiple times during the reasoning process using reinforcement learning.</p>
      <ul class="paper-points">
        <li>Enables interleaved text generation with repeated search engine calls</li>
        <li>Uses fully RL-based training without needing annotated search steps</li>
        <li>Achieves up to +26% higher accuracy across seven QA benchmarks</li>
      </ul>
      <div class="paper-quote">
        <p>"By unifying stepwise reasoning with real-time retrieval, this paper highlights a novel path for LLM optimization under minimal supervision."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Auditing LLMs for Hidden Objectives</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anthropic</span>
        <a href="#" class="paper-link">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>Anthropic proposes a framework for systematically auditing LLMs to uncover hidden goals or objectives that go beyond what users and developers explicitly intend.</p>
      <ul class="paper-points">
        <li>Trains models with concealed reward-hacking objectives as a test case</li>
        <li>Tests eight auditing methods from data analysis to interpretability techniques</li>
        <li>Three of four "blue teams" successfully discovered the hidden objective</li>
      </ul>
      <div class="paper-quote">
        <p>"The methodology of alignment audits could serve as a blueprint for future AI safety evaluations before deploying advanced models."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Post Training of LLMs (PoLMs)</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="#" class="paper-link">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This survey tracks the evolution of post-trained LLMs like OpenAI-o1/o3 and DeepSeek-R1 that tackle shortcomings in reasoning, ethics, and specialized tasks.</p>
      <ul class="paper-points">
        <li>Provides taxonomy of techniques across fine-tuning, alignment, and reasoning</li>
        <li>Examines efficiency and integration approaches</li>
        <li>Guides progress toward more robust, versatile AI systems</li>
      </ul>
      <div class="paper-quote">
        <p>"The survey offers a comprehensive overview of how post-training techniques are addressing fundamental LLM limitations."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Block Diffusion: Combining AR and Diffusion</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Cornell Tech, Stanford, and Cohere</span>
        <a href="#" class="paper-link">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>Block Diffusion (BD3-LMs) is a novel framework that merges autoregressive modeling with discrete diffusion to enable parallel token sampling and flexible-length text generation.</p>
      <ul class="paper-points">
        <li>Partitions sequences into blocks with diffusion within each block</li>
        <li>Generates sequences of arbitrary length beyond training context size</li>
        <li>Achieves state-of-the-art perplexities among discrete diffusion models</li>
      </ul>
      <div class="paper-quote">
        <p>"BD3-LMs break free from fixed-size diffusion constraints, offering a balance between the parallelism of diffusion and the flexibility of autoregressive models."</p>
      </div>
    </div>
  </div>
</section>

<section class="weekly-paper-section">
  <h2>Emerging Trends</h2>
  <div class="trends-grid">
    <div class="trend-card">
      <div class="trend-icon">🤖</div>
      <h3>Embodied Intelligence</h3>
      <p>Gemini Robotics showcases how multimodal foundation models are extending beyond digital environments into physical robotics systems with transferable skills.</p>
    </div>

    <div class="trend-card">
      <div class="trend-icon">⚙️</div>
      <h3>Architectural Simplification</h3>
      <p>Dynamic Tanh and Block Diffusion demonstrate a shift toward elegant architectural modifications that maintain or improve performance while reducing complexity.</p>
    </div>

    <div class="trend-card">
      <div class="trend-icon">🔍</div>
      <h3>Proactive Safety Research</h3>
      <p>OpenAI and Anthropic's work on monitoring and auditing frameworks shows increasing investment in methods to detect and prevent alignment issues before deployment.</p>
    </div>

    <div class="trend-card">
      <div class="trend-icon">🧩</div>
      <h3>Modular Agent Design</h3>
      <p>Plan-and-Act and Search-R1 highlight the trend toward specialized components for planning, reasoning, and execution rather than monolithic agent architectures.</p>
    </div>

  </div>
</section>

<section class="weekly-paper-section">
  <h2>Industry Implications</h2>
  <p class="section-intro">This research collection offers significant implications for AI applications:</p>

  <div class="implications-list">
    <div class="implication-item">
      <h3>Accessible Multimodal Systems</h3>
      <p>Gemma 3's open-weight approach brings multimodal capabilities to smaller devices, potentially democratizing access to vision-enabled AI systems.</p>
    </div>

    <div class="implication-item">
      <h3>Physical Automation Advances</h3>
      <p>Gemini Robotics signals a shift toward more generalizable robotic systems that can learn from fewer examples and adapt across varied physical tasks.</p>
    </div>

    <div class="implication-item">
      <h3>Improved Safety Monitoring</h3>
      <p>Advances in auditing and monitoring techniques offer practical methods for organizations to verify model behavior before deployment.</p>
    </div>

    <div class="implication-item">
      <h3>Efficient Model Architectures</h3>
      <p>Innovations like Dynamic Tanh and block-based diffusion could reduce computational requirements while maintaining or improving model capabilities.</p>
    </div>

  </div>
</section>
  </div>
  <div class="weekly-paper-nav">
    <a href="next-week.html" class="weekly-paper-nav-next">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      Next Week
      
    </a>
    <a href="prev-week.html" class="weekly-paper-nav-prev">
      
      Previous Week
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </a>
  </div>
</div>
