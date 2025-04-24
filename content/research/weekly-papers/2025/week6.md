<link rel="stylesheet" href="/assets/css/research/weekly-papers.css"> <link rel="stylesheet" href="/assets/css/research/weekly-paper-detail.css"> <div class="weekly-paper-container"> <div class="weekly-paper-header"> <div class="weekly-paper-meta"> <span class="weekly-paper-date">February 4-10, 2025</span> <div class="weekly-paper-tags"> <span class="weekly-paper-tag">Reasoning</span> <span class="weekly-paper-tag">Efficiency</span> <span class="weekly-paper-tag">Animation</span> <span class="weekly-paper-tag">Agents</span> </div> </div> <h1 class="weekly-paper-title">Week 6: Test-Time Scaling, Human Animation, and Advanced Reasoning</h1> <p class="weekly-paper-description">This week features innovations in LLM reasoning efficiency, realistic human animation from single images, and novel frameworks for agent collaboration. Key papers highlight data-efficient fine-tuning, associative thought chains, and architecture search for multi-agent systems.</p> </div> <div class="weekly-paper-content"> <section class="weekly-paper-section"> <h2>Research Highlights</h2> <div class="paper-card"> <div class="paper-card-header"> <h3>s1: Simple Test-Time Scaling</h3> <div class="paper-card-meta"> <span class="paper-authors">Stanford, UW, and Collaborators</span> <a href="http://arxiv.org/abs/2501.19393" class="paper-link" target="_blank" rel="noopener">Paper Link</a> </div> </div> <div class="paper-card-content"> <p>Researchers introduce s1, a method to boost LLM performance by using extra compute at inference time, achieving impressive results with a small but high-quality dataset and novel decoding techniques.</p> <ul class="paper-points"> <li>Curated s1K, only 1,000 challenging questions with detailed reasoning traces</li> <li>Implements "budget forcing" with a "Wait" token to make models think longer</li> <li>The resulting s1-32B outperforms OpenAI's o1-preview by up to +27% on competition-level math</li> </ul> <div class="paper-quote"> <p>"With test-time scaling, s1-32B boosts accuracy on AIME24 from 50% to 57%, demonstrating how additional inference time computation can push models beyond their normal limits."</p> </div> </div> </div>
  <div class="paper-card">
    <div class="paper-card-header">
      <h3>OmniHuman-1: One-Stage Human Animation</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">ByteDance AI Lab</span>
        <a href="http://arxiv.org/abs/2502.01061" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>ByteDance unveils OmniHuman-1, a diffusion-transformer model that generates highly realistic human videos from just a single image plus motion input, with remarkable flexibility across various inputs.</p>
      <ul class="paper-points">
        <li>Takes one image of any aspect ratio and audio/video motion to produce lifelike videos</li>
        <li>Uses Omni-Conditions Training to mix various motion modalities during training</li>
        <li>Supports any portrait content and multiple driving signals simultaneously</li>
      </ul>
      <div class="paper-quote">
        <p>"OmniHuman can handle diverse inputs including speech, song, instruments, and challenging poses, even transferring motion naturally to cartoons or animal figures."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>LIMO: Less Is More for Reasoning</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="http://arxiv.org/abs/2502.03387" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>LIMO challenges the notion that huge fine-tuning datasets are needed for complex reasoning, achieving impressive results on mathematical reasoning with a fraction of the data typically used.</p>
      <ul class="paper-points">
        <li>Uses only 817 carefully curated training samples to achieve 57.1% on AIME and 94.8% on MATH</li>
        <li>Shows +40.5% improvement across 10 diverse benchmarks compared to prior approaches</li>
        <li>Proposes that LLMs primarily need "cognitive templates" to unlock existing knowledge</li>
      </ul>
      <div class="paper-quote">
        <p>"LIMO demonstrates that small, high-quality datasets can yield state-of-the-art reasoning, challenging the assumption that more data is always required for complex skills."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>CoAT: Chain-of-Associated-Thoughts</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="http://arxiv.org/abs/2502.02390" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>CoAT introduces a "slow thinking" inference framework that enables LLMs to reason more like humans by exploring multiple branches and updating thoughts through an associative memory mechanism.</p>
      <ul class="paper-points">
        <li>Combines Monte Carlo Tree Search with an associative memory mechanism</li>
        <li>Enables iterative, self-improving reasoning with the ability to revisit earlier conclusions</li>
        <li>Outperforms conventional single-pass inference on accuracy, coherence, and solution diversity</li>
      </ul>
      <div class="paper-quote">
        <p>"CoAT is inspired by how humans solve problems: iteratively considering alternatives, recalling facts, and refining our thinking, pointing toward LLM agents that can use search algorithms and memory for more reliable reasoning."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Syntriever: Training Retrievers with LLM-Generated Data</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="http://arxiv.org/abs/2502.03824" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>Syntriever presents a two-stage framework to distill knowledge from a black-box LLM into a retrieval model using synthetic data, without requiring large labeled datasets or access to an LLM's internals.</p>
      <ul class="paper-points">
        <li>Generates synthetic Q&A with positive and negative passages verified by the LLM</li>
        <li>Aligns the retriever with LLM preferences using Plackett-Luce ranking</li>
        <li>Achieves state-of-the-art results on several retrieval benchmarks without real training queries</li>
      </ul>
      <div class="paper-quote">
        <p>"Syntriever gets around the need for model logits or probabilities by using only generated text and LLM scoring, making it applicable even to closed models available only through APIs."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Demystifying Long Chain-of-Thought Reasoning</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="https://arxiv.org/abs/2502.03373" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This work investigates how LLMs develop extended Chain-of-Thought reasoning, focusing on the roles of supervised fine-tuning, reinforcement learning, and compute scaling.</p>
      <ul class="paper-points">
        <li>Finds that supervised fine-tuning simplifies training and increases efficiency</li>
        <li>Introduces cosine length-scaling reward with repetition penalties for stable RL</li>
        <li>Demonstrates that error correction and backtracking abilities exist in base models but require proper incentives</li>
      </ul>
      <div class="paper-quote">
        <p>"The study provides a structured roadmap for researchers looking to refine CoT training strategies, highlighting how RL and reward tuning impact reasoning depth in complex tasks."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Self-MoA: Rethinking Mixture-of-Agents</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="http://arxiv.org/abs/2502.00674" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This paper challenges the common practice of mixing different LLMs (Mixture-of-Agents), showing that ensembling multiple outputs from a single strong model often outperforms multi-model ensembles.</p>
      <ul class="paper-points">
        <li>Proposes Self-MoA: generating multiple outputs from one model and aggregating them</li>
        <li>Achieves +6.6% higher score than mixed-model MoA on AlpacaEval 2.0 and +3.8% across diverse tasks</li>
        <li>Introduces sequential Self-MoA that can efficiently combine many outputs over multiple rounds</li>
      </ul>
      <div class="paper-quote">
        <p>"Mixing models can hurt because the overall quality is limited by the weaker members—unless all models are very strong and complementary, you're better off with one model's outputs."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>MaAS: Multi-agent Architecture Search</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="http://arxiv.org/abs/2502.04180" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>MaAS learns a universal "agentic supernet" that can spawn an optimal team of agents on the fly for each query, automating the design of multi-agent workflows for specific tasks.</p>
      <ul class="paper-points">
        <li>Defines a continuous space of possible agent architectures instead of static pipelines</li>
        <li>Dynamically allocates resources based on query complexity</li>
        <li>Uses only 6–45% of inference cost while outperforming existing systems by ~0.5–11.8%</li>
      </ul>
      <div class="paper-quote">
        <p>"The agentic supernet approach showed strong generalization, with effective architectures transferring well to new domains and different LLM backbones, suggesting it learns general principles of optimal agent orchestration."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Advancing Reasoning in LLMs: A Survey</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="http://arxiv.org/abs/2502.03671" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This comprehensive survey organizes the literature on enhancing reasoning capabilities in LLMs into key categories and identifies emerging challenges and opportunities.</p>
      <ul class="paper-points">
        <li>Covers prompting strategies like Chain-of-Thought, Self-Consistency, and Tree-of-Thought</li>
        <li>Reviews architectural innovations including retrieval-augmented models and modular reasoning networks</li>
        <li>Examines learning paradigms from fine-tuning to reinforcement learning approaches</li>
      </ul>
      <div class="paper-quote">
        <p>"The survey identifies key challenges including hallucinations, brittleness to small changes, and cross-domain generalization that will be crucial to address in the next generation of reasoning-augmented LLMs."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Text Data Augmentation for LLMs: A Survey</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="http://arxiv.org/abs/2501.18845" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This survey covers techniques for augmenting training data for LLMs through synthetic or transformed text, addressing the massive data demands of modern language models.</p>
      <ul class="paper-points">
        <li>Classifies methods into simple, prompt-based, retrieval-based, and hybrid augmentation</li>
        <li>Discusses using LLMs themselves as data generators through careful prompting</li>
        <li>Covers post-processing techniques to refine and filter generated data</li>
      </ul>
      <div class="paper-quote">
        <p>"The survey addresses challenges like ensuring augmentation doesn't distort data distribution or reinforce model biases, while highlighting opportunities for more efficient training through synthetic data generation."</p>
      </div>
    </div>
  </div>
</section>

<section class="weekly-paper-section">
  <h2>Emerging Trends</h2>
  <div class="trends-grid">
    <div class="trend-card">
      <div class="trend-icon">📊</div>
      <h3>Data Efficiency</h3>
      <p>LIMO and s1 demonstrate that carefully curated small datasets can be surprisingly effective for teaching complex reasoning, challenging the "more data is better" paradigm.</p>
    </div>

    <div class="trend-card">
      <div class="trend-icon">🧠</div>
      <h3>Human-Inspired Reasoning</h3>
      <p>CoAT and related approaches increasingly draw inspiration from human cognitive processes, incorporating memory, exploration, and self-correction mechanisms.</p>
    </div>

    <div class="trend-card">
      <div class="trend-icon">⚡</div>
      <h3>Compute Optimization</h3>
      <p>Self-MoA and MaAS highlight growing focus on resource efficiency, with dynamic allocation and better use of existing models rather than simply scaling up.</p>
    </div>

    <div class="trend-card">
      <div class="trend-icon">🔄</div>
      <h3>Synthetic Knowledge Transfer</h3>
      <p>Syntriever and text augmentation techniques show the increasing use of LLMs to generate their own training data, creating a virtuous cycle of knowledge distillation.</p>
    </div>

  </div>
</section>

<section class="weekly-paper-section">
  <h2>Industry Implications</h2>
  <p class="section-intro">This week's research offers significant implications for AI applications:</p>

  <div class="implications-list">
    <div class="implication-item">
      <h3>Affordable Model Training</h3>
      <p>Techniques like LIMO significantly reduce the data requirements for specialized model training, making high-quality fine-tuning more accessible to smaller organizations.</p>
    </div>

    <div class="implication-item">
      <h3>Advanced Content Creation</h3>
      <p>OmniHuman-1 demonstrates major advances in video synthesis from single images, with applications in entertainment, education, and personalized content.</p>
    </div>

    <div class="implication-item">
      <h3>Efficient Enterprise AI</h3>
      <p>Self-MoA and MaAS approaches could significantly reduce computational costs for deployed AI systems while maintaining or improving performance.</p>
    </div>

    <div class="implication-item">
      <h3>Better Reasoning Capabilities</h3>
      <p>Advances in test-time scaling and associative thinking frameworks enable more reliable problem-solving in complex domains like mathematics, coding, and planning.</p>
    </div>

  </div>
</section>
</div> <div class="weekly-paper-nav"> <a href="/content/research/weekly-papers/2025/week7/" class="weekly-paper-nav-next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>  Next Week </a> <a href="/content/research/weekly-papers/2025/week5/" class="weekly-paper-nav-prev"> Previous Week <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </a> </div> </div>
