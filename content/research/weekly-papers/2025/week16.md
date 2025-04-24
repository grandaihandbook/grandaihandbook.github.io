<link rel="stylesheet" href="/assets/css/research/weekly-papers.css">
<link rel="stylesheet" href="/assets/css/research/weekly-paper-detail.css">

<div class="weekly-paper-container">
  <div class="weekly-paper-header">
    <div class="weekly-paper-meta">
      <span class="weekly-paper-date">April 15-21, 2025</span>
      <div class="weekly-paper-tags">
        <span class="weekly-paper-tag">LLMs</span>
        <span class="weekly-paper-tag">Agents</span>
        <span class="weekly-paper-tag">Reasoning</span>
        <span class="weekly-paper-tag">Simulation</span>
      </div>
    </div>
    <h1 class="weekly-paper-title">Week 16: Advances in Agentic Systems and Reasoning</h1>
    <p class="weekly-paper-description">This week showcases breakthroughs in agentic systems, reinforcement learning for GUI agents, reasoning in diffusion LLMs, and large-scale social simulations. Key papers highlight efficient training, unified action spaces, and innovative frameworks for real-world applications.</p>
  </div>
  
  <div class="weekly-paper-content">
    <section class="weekly-paper-section">
      <h2>Research Highlights</h2>
      <div class="paper-card">
        <div class="paper-card-header">
          <h3>GUI-R1: Reinforcement Learning Framework for GUI Agents</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">National University of Singapore, Chinese Academy of Sciences</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>GUI-R1 introduces a reinforcement learning framework for GUI agents, leveraging unified action-space modeling to achieve superior performance with minimal data.</p>
          <ul class="paper-points">
            <li>Reinforcement Fine-Tuning (RFT) reduces training data to 3K examples vs. millions</li>
            <li>Unified action space supports Windows, Linux, MacOS, Android, and Web</li>
            <li>Outperforms OS-Atlas with 0.02% of training data across eight benchmarks</li>
          </ul>
          <div class="paper-quote">
            <p>"GUI-R1's unified action space and efficient RFT approach enable robust GUI agents that generalize across platforms with minimal training data."</p>
          </div>
        </div>
      </div>
      
      <div class="paper-card">
        <div class="paper-card-header">
          <h3>d1: Scaling Reasoning in Diffusion LLMs via RL</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Anonymous</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>d1 proposes a two-stage pipeline to enhance reasoning in masked diffusion LLMs, combining supervised fine-tuning with a novel diffu-GRPO objective.</p>
          <ul class="paper-points">
            <li>Achieves 81.1% on GSM8K and 38.6% on MATH500, surpassing baselines</li>
            <li>Outperforms DeepSeek-7B, Mistral-7B, and Llama-3-8B in reasoning tasks</li>
            <li>Random prompt masking in diffu-GRPO accelerates convergence</li>
          </ul>
          <div class="paper-quote">
            <p>"The d1 pipeline unlocks step-by-step reasoning in diffusion LLMs, demonstrating significant gains with efficient training."</p>
          </div>
        </div>
      </div>

      <div class="paper-card">
        <div class="paper-card-header">
          <h3>Enhancing Non-Reasoning Models with Reasoning Models</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Anonymous</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>This work distills reasoning-intensive outputs from advanced LLMs into smaller models, boosting performance without explicit step-by-step reasoning.</p>
          <ul class="paper-points">
            <li>Fine-tuning on final answers improves GSM8K (92.2%) and HumanEval (90.9%)</li>
            <li>Summarized reasoning traces enhance conversational tasks</li>
            <li>1.3M-instance dataset curated from open-source repositories</li>
          </ul>
          <div class="paper-quote">
            <p>"Distilling high-quality reasoning data into compact models offers a pathway to efficient, high-performing AI systems."</p>
          </div>
        </div>
      </div>

      <div class="paper-card">
        <div class="paper-card-header">
          <h3>AgentA/B: Automated A/B Testing with LLM Agents</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Anonymous</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>AgentA/B uses LLM-based agents to simulate user behavior for A/B testing, enabling faster and risk-free UX evaluations on live websites.</p>
          <ul class="paper-points">
            <li>Simulated agents show goal-directed behavior comparable to 1M real Amazon users</li>
            <li>Treatment condition agents spent more ($60.99 vs. $55.14) and purchased more</li>
            <li>Supports inclusive prototyping for hard-to-reach populations</li>
          </ul>
          <div class="paper-quote">
            <p>"AgentA/B accelerates UX iteration by simulating realistic user interactions, reducing reliance on live traffic."</p>
          </div>
        </div>
      </div>

      <div class="paper-card">
        <div class="paper-card-header">
          <h3>Reasoning Models Can Be Effective Without Thinking</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Anonymous</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>The NoThinking prompting method bypasses explicit reasoning steps, achieving high performance with lower compute budgets.</p>
          <ul class="paper-points">
            <li>Outperforms traditional reasoning on AMC23 (51.3% vs. 28.9%) with 700 tokens</li>
            <li>Parallel decoding with best-of-N selection reduces latency by up to 9×</li>
            <li>Generalizes across math, coding, and theorem proving tasks</li>
          </ul>
          <div class="paper-quote">
            <p>"NoThinking challenges the necessity of long reasoning chains, offering superior accuracy-latency tradeoffs."</p>
          </div>
        </div>
      </div>

      <div class="paper-card">
        <div class="paper-card-header">
          <h3>SocioVerse: Large-Scale Social Simulation with LLM Agents</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Fudan University, Collaborators</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>SocioVerse aligns LLM agents with real-world user behavior for scalable social simulations, tackling election forecasting, sentiment analysis, and economic surveys.</p>
          <ul class="paper-points">
            <li>Predicts 92.2% of U.S. election state outcomes accurately</li>
            <li>10M user pool from social media data enhances realism</li>
            <li>Hybrid lognormal-Pareto distributions model economic behavior</li>
          </ul>
          <div class="paper-quote">
            <p>"SocioVerse bridges AI and social science, enabling trustworthy virtual societies for policy testing."</p>
          </div>
        </div>
      </div>

      <div class="paper-card">
        <div class="paper-card-header">
          <h3>DocAgent: Dependency-Aware Codebase Documentation</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Meta AI</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>DocAgent generates well-written docstrings for complex codebases using a dependency-aware, multi-agent framework.</p>
          <ul class="paper-points">
            <li>Topological Navigator ensures context accumulation in dependency order</li>
            <li>Improves Completeness (0.934 vs. 0.815) and Truthfulness (95.7% vs. 61.1%)</li>
            <li>Five specialized agents collaborate for high-quality documentation</li>
          </ul>
          <div class="paper-quote">
            <p>"DocAgent’s dependency-aware approach transforms codebase documentation, ensuring clarity and fidelity."</p>
          </div>
        </div>
      </div>

      <div class="paper-card">
        <div class="paper-card-header">
          <h3>SWE-PolyBench: Multi-Language Coding Benchmark</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Anonymous</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>SWE-PolyBench evaluates coding agents on real-world software tasks across Java, JavaScript, TypeScript, and Python, revealing inconsistent performance.</p>
          <ul class="paper-points">
            <li>Introduces execution-based assessments and syntax tree metrics</li>
            <li>Current agents struggle with complex, multi-language tasks</li>
            <li>Highlights need for improved cross-language generalization</li>
          </ul>
          <div class="paper-quote">
            <p>"SWE-PolyBench exposes gaps in coding agents, pushing for more robust multi-language solutions."</p>
          </div>
        </div>
      </div>

      <div class="paper-card">
        <div class="paper-card-header">
          <h3>A Survey of Frontiers in LLM Reasoning</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Anonymous</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>This survey categorizes LLM reasoning methods by timing (inference vs. training) and architecture (standalone vs. agentic), covering trends like learning-to-reason.</p>
          <ul class="paper-points">
            <li>Highlights DeepSeek-R1 and OpenAI Deep Research as key examples</li>
            <li>Explores prompt engineering, output refinement, and PPO training</li>
            <li>Identifies agentic workflows as a growing trend</li>
          </ul>
          <div class="paper-quote">
            <p>"The survey maps the evolving landscape of LLM reasoning, guiding future research directions."</p>
          </div>
        </div>
      </div>

      <div class="paper-card">
        <div class="paper-card-header">
          <h3>Advances in Embodied Agents, Smart Cities, and Earth Science</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">Anonymous</span>
            <a href="#" class="paper-link">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>This paper connects spatial intelligence in LLMs to applications in embodied agents, urban planning, and earth science, offering a unifying framework.</p>
          <ul class="paper-points">
            <li>Bridges human spatial cognition with LLM spatial reasoning</li>
            <li>Highlights potential in robotics, smart cities, and global systems</li>
            <li>Emphasizes interdisciplinary research opportunities</li>
          </ul>
          <div class="paper-quote">
            <p>"Spatial intelligence in LLMs unlocks new possibilities for interdisciplinary AI applications."</p>
          </div>
        </div>
      </div>
    </section>

    <section class="weekly-paper-section">
      <h2>Emerging Trends</h2>
      <div class="trends-grid">
        <div class="trend-card">
          <div class="trend-icon">🤖</div>
          <h3>Agentic System Innovation</h3>
          <p>Frameworks like GUI-R1, AgentA/B, and SocioVerse drive scalable, platform-agnostic agents for GUI automation, UX testing, and social simulation.</p>
        </div>

        <div class="trend-card">
          <div class="trend-icon">🧠</div>
          <h3>Efficient Reasoning Techniques</h3>
          <p>Methods like NoThinking and diffu-GRPO enable high reasoning performance with reduced compute and data, as seen in d1 and distilled models.</p>
        </div>

        <div class="trend-card">
          <div class="trend-icon">🌐</div>
          <h3>Real-World Simulation</h3>
          <p>SocioVerse and AgentA/B emphasize realistic simulations, enhancing applications in social science, policy testing, and UX design.</p>
        </div>

        <div class="trend-card">
          <div class="trend-icon">📝</div>
          <h3>Automated Code Documentation</h3>
          <p>DocAgent’s dependency-aware approach signals a trend toward AI-driven tools for improving software development efficiency.</p>
        </div>
      </div>
    </section>

    <section class="weekly-paper-section">
      <h2>Industry Implications</h2>
      <p class="section-intro">This week's research offers significant implications for AI-driven applications:</p>

      <div class="implications-list">
        <div class="implication-item">
          <h3>Robust GUI Automation</h3>
          <p>GUI-R1’s unified action space enhances cross-platform automation for software testing and user interaction simulation.</p>
        </div>

        <div class="implication-item">
          <h3>Cost-Effective AI Development</h3>
          <p>Efficient training methods like RFT and diffu-GRPO lower data and compute barriers, enabling broader adoption of advanced AI.</p>
        </div>

        <div class="implication-item">
          <h3>Accelerated UX Testing</h3>
          <p>AgentA/B’s simulation-based A/B testing reduces reliance on live traffic, speeding up iteration and improving inclusivity.</p>
        </div>

        <div class="implication-item">
          <h3>Scalable Social Simulations</h3>
          <p>SocioVerse enables accurate forecasting and policy testing, offering tools for governments and organizations to model societal trends.</p>
        </div>
      </div>
    </section>

  </div>
  
  <div class="weekly-paper-nav">
  <a href="week16.html" class="weekly-paper-nav-next">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      Next Week
      
    </a>
    <a href="week14.html" class="weekly-paper-nav-prev">
      Previous Week
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </a>
    
  </div>
</div>
