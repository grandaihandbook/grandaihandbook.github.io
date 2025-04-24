<link rel="stylesheet" href="/assets/css/research/weekly-papers.css">
<link rel="stylesheet" href="/assets/css/research/weekly-paper-detail.css">

  <div class="weekly-paper-container">
    <div class="weekly-paper-header">
      <div class="weekly-paper-meta">
        <span class="weekly-paper-date">April 8-14, 2025</span>
        <div class="weekly-paper-tags">
          <span class="weekly-paper-tag">LLMs</span>
          <span class="weekly-paper-tag">Agents</span>
          <span class="weekly-paper-tag">Reasoning</span>
          <span class="weekly-paper-tag">Autonomous Systems</span>
        </div>
      </div>
      <h1 class="weekly-paper-title">Week 15: Autonomous AI Systems and Reasoning Advances</h1>
      <p class="weekly-paper-description">This week's papers highlight breakthroughs in autonomous AI systems, advanced reasoning techniques, and efficient frameworks for knowledge graph reasoning, video generation, and more. Key advancements include AI-driven scientific discovery, robust web-browsing benchmarks, and lightweight reasoning pipelines.</p>
    </div>

    <div class="weekly-paper-content">
      <section class="weekly-paper-section">
        <h2>Research Highlights</h2>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>The AI Scientist V2</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">Anonymous</span>
              <a href="https://pub.sakana.ai/ai-scientist-v2/paper/paper.pdf" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>The AI Scientist-v2 autonomously generates workshop-accepted research manuscripts, removing human-authored code dependencies and integrating agentic tree-search and vision-language models.</p>
            <ul class="paper-points">
              <li>Eliminates reliance on human-crafted code templates for out-of-the-box deployment</li>
              <li>Agentic tree search refines hypotheses via branching exploration</li>
              <li>One manuscript accepted at an ICLR workshop, showcasing end-to-end AI-driven discovery</li>
            </ul>
            <div class="paper-quote">
              <p>"The AI Scientist-v2 marks a leap in autonomous scientific discovery, producing peer-reviewed research with minimal human intervention."</p>
            </div>
          </div>
        </div>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>Benchmarking Browsing Agents</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">OpenAI</span>
              <a href="https://cdn.openai.com/pdf/5e10f4ab-d6f7-442e-9508-59515c65e35d/browsecomp.pdf" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>BrowseComp introduces a challenging benchmark with 1,266 questions requiring persistent web searches, testing AI agents' ability to locate entangled information.</p>
            <ul class="paper-points">
              <li>Only 29.2% of tasks solved by humans; Deep Research achieves 51.5% accuracy</li>
              <li>Reasoning outperforms browsing; OpenAI o1 beats GPT-4.5 with browsing</li>
              <li>Test-time scaling with 64 parallel samples boosts performance by 15–25%</li>
            </ul>
            <div class="paper-quote">
              <p>"BrowseComp reveals the gap between reasoning and tool use, pushing for smarter web-browsing agents."</p>
            </div>
          </div>
        </div>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>OLMOTrace</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">Allen Institute for AI, University of Washington</span>
              <a href="https://arxiv.org/abs/2504.07096" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>OLMOTrace traces LLM-generated text to its verbatim sources in multi-trillion-token corpora, enabling fact-checking and creativity audits with sub-5-second latency.</p>
            <ul class="paper-points">
              <li>Uses infini-gram with suffix arrays for efficient text search</li>
              <li>Supports OLMo models with 4.6T-token datasets</li>
              <li>Average relevance score of 1.82/3 for top retrieved documents</li>
            </ul>
            <div class="paper-quote">
              <p>"OLMOTrace empowers transparency in LLM outputs, bridging generated text to its training data origins."</p>
            </div>
          </div>
        </div>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>Concise Reasoning via RL</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">Anonymous</span>
              <a href="https://arxiv.org/abs/2504.05185" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>This work uses a two-phase RL strategy to promote concise and accurate reasoning in LLMs, reducing token usage by over 50% without accuracy loss.</p>
            <ul class="paper-points">
              <li>Improves MMLU-STEM accuracy by 12.5% while halving response length</li>
              <li>Effective with just 4–8 training examples</li>
              <li>Robust at low sampling temperatures, outperforming baselines by 10–30%</li>
            </ul>
            <div class="paper-quote">
              <p>"Concise reasoning via RL challenges verbose outputs, offering efficient and accurate LLM performance."</p>
            </div>
          </div>
        </div>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>Rethinking Reflection in Pre-Training</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">Anonymous</span>
              <a href="https://arxiv.org/abs/2504.04022" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>This paper shows reflection emerges during pre-training, with adversarial datasets revealing self-correction capabilities as compute scales.</p>
            <ul class="paper-points">
              <li>Reflection rates on GSM8K-Platinum grow from 10% to over 60%</li>
              <li>Simple triggers like “Wait” induce reflection</li>
              <li>More pre-training compute reduces need for test-time reasoning</li>
            </ul>
            <div class="paper-quote">
              <p>"Reflection in pre-training unlocks reasoning potential, reducing reliance on post-training techniques."</p>
            </div>
          </div>
        </div>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>Efficient KG Reasoning for Small LLMs</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">Anonymous</span>
              <a href="https://arxiv.org/abs/2504.03137" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>LightPROF enables small LLMs to reason over knowledge graphs with a retrieve-embed-reason pipeline, outperforming larger models like ChatGPT.</p>
            <ul class="paper-points">
              <li>Achieves 83.8% on WebQSP and 59.3% on CWQ</li>
              <li>Reduces token input by 98% and runtime by 30%</li>
              <li>Plug-and-play with no LLM fine-tuning</li>
            </ul>
            <div class="paper-quote">
              <p>"LightPROF brings complex KG reasoning to small LLMs, offering efficiency and performance."</p>
            </div>
          </div>
        </div>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>Compute Agent Arena</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">Anonymous</span>
              <a href="https://arena.xlang.ai/blog/computer-agent-arena" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>Compute Agent Arena benchmarks LLM and VLM agents on real-world computer tasks like coding and web navigation in a virtual desktop environment.</p>
            <ul class="paper-points">
              <li>OpenAI and Anthropic lead with modest success rates</li>
              <li>Platform supports crowdsourced tasks and open-source infrastructure</li>
              <li>Focuses on practical, real-world agent performance</li>
            </ul>
            <div class="paper-quote">
              <p>"Compute Agent Arena sets a new standard for evaluating practical AI agent capabilities."</p>
            </div>
          </div>
        </div>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>Agentic Knowledgeable Self-awareness</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">Anonymous</span>
              <a href="https://arxiv.org/abs/2504.03553v1" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>KnowSelf enables LLM agents to dynamically reflect or seek knowledge using special tokens, achieving SOTA performance on ALFWorld and WebShop.</p>
            <ul class="paper-points">
              <li>Mimics human cognition with fast, slow, and knowledgeable thinking</li>
              <li>Reduces inference costs with minimal external knowledge</li>
              <li>Outperforms baselines in task-oriented environments</li>
            </ul>
            <div class="paper-quote">
              <p>"KnowSelf brings human-like self-awareness to LLM agents, enhancing adaptability and efficiency."</p>
            </div>
          </div>
        </div>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>One-Minute Video Generation with Test-Time Training</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">Anonymous</span>
              <a href="https://test-time-training.github.io/video-dit/assets/ttt_cvpr_2025.pdf" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>This work introduces TTT layers for single-shot one-minute video generation from storyboards, achieving 34 Elo points over baselines.</p>
            <ul class="paper-points">
              <li>Integrates TTT layers into pre-trained diffusion models</li>
              <li>Enables multi-scene video generation with self-supervised test-time updates</li>
              <li>Outperforms Mamba 2 and DeltaNet in human evaluations</li>
            </ul>
            <div class="paper-quote">
              <p>"TTT layers revolutionize long-form video generation with efficient test-time training."</p>
            </div>
          </div>
        </div>

        <div class="paper-card">
          <div class="paper-card-header">
            <h3>NoProp</h3>
            <div class="paper-card-meta">
              <span class="paper-authors">Anonymous</span>
              <a href="https://arxiv.org/abs/2503.24322" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
            </div>
          </div>
          <div class="paper-card-content">
            <p>NoProp introduces gradient-free learning where layers denoise targets independently, achieving competitive performance on MNIST and CIFAR.</p>
            <ul class="paper-points">
              <li>Avoids hierarchical representation learning</li>
              <li>Inspired by diffusion and flow matching</li>
              <li>Matches backpropagation efficiency on image classification</li>
            </ul>
            <div class="paper-quote">
              <p>"NoProp redefines neural network training with a gradient-free, efficient approach."</p>
            </div>
          </div>
        </div>
      </section>

      <section class="weekly-paper-section">
        <h2>Emerging Trends</h2>
        <div class="trends-grid">
          <div class="trend-card">
            <div class="trend-icon">🤖</div>
            <h3>Autonomous AI Systems</h3>
            <p>The AI Scientist-v2 and Compute Agent Arena push for fully autonomous systems in scientific discovery and real-world task execution.</p>
          </div>

          <div class="trend-card">
            <div class="trend-icon">🧠</div>
            <h3>Reasoning Efficiency</h3>
            <p>Concise RL strategies and pre-training reflection reduce compute and data needs for advanced reasoning, as seen in LightPROF and KnowSelf.</p>
          </div>

          <div class="trend-card">
            <div class="trend-icon">🌐</div>
            <h3>Web and Knowledge Integration</h3>
            <p>BrowseComp and OLMOTrace highlight the importance of robust web browsing and training data transparency for practical AI applications.</p>
          </div>

          <div class="trend-card">
            <div class="trend-icon">🎥</div>
            <h3>Generative Media Advances</h3>
            <p>One-minute video generation with TTT layers signals a shift toward efficient, long-form generative models for creative applications.</p>
          </div>
        </div>
      </section>

      <section class="weekly-paper-section">
        <h2>Industry Implications</h2>
        <p class="section-intro">This week's research offers transformative potential for AI applications:</p>

        <div class="implications-list">
          <div class="implication-item">
            <h3>Automated Scientific Discovery</h3>
            <p>The AI Scientist-v2 enables AI-driven research, accelerating innovation in academia and industry.</p>
          </div>

          <div class="implication-item">
            <h3>Robust Web Agents</h3>
            <p>BrowseComp’s benchmark drives development of smarter web-browsing agents for automation and information retrieval.</p>
          </div>

          <div class="implication-item">
            <h3>Efficient AI Deployment</h3>
            <p>LightPROF and concise RL lower barriers to deploying advanced reasoning in resource-constrained environments.</p>
          </div>

          <div class="implication-item">
            <h3>Enhanced Media Generation</h3>
            <p>One-minute video generation opens new possibilities for scalable, high-quality content creation in entertainment and marketing.</p>
          </div>
        </div>
      </section>
    </div>

    <div class="weekly-paper-nav">
      <a href="/content/research/weekly-papers/2025/week16/" class="weekly-paper-nav-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Next Week
      </a>
      <a href="/content/research/weekly-papers/2025/week14/" class="weekly-paper-nav-prev">
        Previous Week
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>

  </div>
