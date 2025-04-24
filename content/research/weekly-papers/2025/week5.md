<link rel="stylesheet" href="/assets/css/research/weekly-papers.css">
<link rel="stylesheet" href="/assets/css/research/weekly-paper-detail.css">
<div class="weekly-paper-container">
  <div class="weekly-paper-header">
    <div class="weekly-paper-meta">
      <span class="weekly-paper-date">January 28-February 3, 2025</span>
      <div class="weekly-paper-tags">
        <span class="weekly-paper-tag">Models</span>
        <span class="weekly-paper-tag">Long-Context</span>
        <span class="weekly-paper-tag">Multimodal</span>
        <span class="weekly-paper-tag">Optimization</span>
      </div>
    </div>
    <h1 class="weekly-paper-title">Week 5: o3-mini, Million-Token Context, and Multimodal Advances</h1>
    <p class="weekly-paper-description">This week features the release of OpenAI's o3-mini, Qwen's million-token context models, and innovations in multimodal understanding and generation. Key papers highlight diverse preference optimization, document parsing, and significant advancements in model compression and RAG systems.</p>
  </div>
  <div class="weekly-paper-content">
    <section class="weekly-paper-section">
      <h2>Research Highlights</h2>
      <div class="paper-card">
        <div class="paper-card-header">
          <h3>o3-mini: Cost-Efficient Reasoning Model</h3>
          <div class="paper-card-meta">
            <span class="paper-authors">OpenAI</span>
            <a href="https://cdn.openai.com/o3-mini-system-card.pdf" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
          </div>
        </div>
        <div class="paper-card-content">
          <p>OpenAI launches o3-mini, their newest cost-efficient reasoning model, available in ChatGPT and via API, excelling in STEM-related tasks while maintaining low cost and reduced latency.</p>
          <ul class="paper-points">
            <li>Introduces function calling, Structured Outputs, and developer messages</li>
            <li>Features different reasoning effort levels (low, medium, and high)</li>
            <li>Delivers responses 24% faster than o1-mini with improved performance</li>
          </ul>
          <div class="paper-quote">
            <p>"o3-mini achieves notable results in competition math, PhD-level science questions, and software engineering tasks, making it production-ready from launch."</p>
          </div>
        </div>
      </div>
  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Qwen2.5-1M: Million-Token Context Models</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Qwen</span>
        <a href="https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen2.5-1M/Qwen2_5_1M_Technical_Report.pdf" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>Qwen releases two open-source LLMs that can handle context lengths of up to 1 million tokens, using progressive training and length extrapolation techniques.</p>
      <ul class="paper-points">
        <li>Starts with 4K tokens and gradually increases to 256K before extrapolating to 1M</li>
        <li>Includes inference framework based on vLLM that processes long inputs 3-7x faster</li>
        <li>14B model outperforms GPT-4o-mini on long-context while maintaining short-text performance</li>
      </ul>
      <div class="paper-quote">
        <p>"The models show strong performance across multiple long-context datasets while using sparse attention methods to significantly improve processing efficiency."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Janus-Pro: Enhanced Multimodal Understanding and Generation</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="https://github.com/deepseek-ai/Janus/blob/main/janus_pro_tech_report.pdf" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>Janus-Pro enhances the previous Janus model with optimized training strategies, expanded data, and scaling to larger model sizes for better multimodal capabilities.</p>
      <ul class="paper-points">
        <li>Incorporates 90 million new samples for understanding and 72 million synthetic aesthetic samples</li>
        <li>Scores 79.2 on MMBench for understanding and 80% accuracy on GenEval for generation</li>
        <li>Scales up to 7B parameters with improved stability and quality for short prompts</li>
      </ul>
      <div class="paper-quote">
        <p>"Janus-Pro achieves significant improvements in both multimodal understanding and text-to-image generation, though the current 384x384 resolution remains a limitation for certain tasks."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>On the Underthinking of o1-like LLMs</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="https://arxiv.org/abs/2501.18585" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This work examines "thinking" patterns in o1-like LLMs, identifying a phenomenon called "underthinking" that complements previous research on overthinking issues.</p>
      <ul class="paper-points">
        <li>Identifies that models frequently switch between different reasoning thoughts</li>
        <li>Shows they fail to sufficiently explore promising paths to reach correct solutions</li>
        <li>Presents analysis of reasoning patterns and potential mitigations</li>
      </ul>
      <div class="paper-quote">
        <p>"The research reveals that while recent focus has been on preventing overthinking, underthinking represents another significant challenge in reasoning model development."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Diverse Preference Optimization (DivPO)</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="https://arxiv.org/abs/2501.18101" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>DivPO is a novel training method addressing the lack of diversity in language model outputs while maintaining response quality, countering the output homogenization caused by standard RLHF.</p>
      <ul class="paper-points">
        <li>Selects the most diverse response above a quality threshold versus least diverse below threshold</li>
        <li>Measures diversity using model probability, word frequency, or LLM-based judging</li>
        <li>Achieves up to 45.6% more diverse outputs in structured tasks and 81% in story diversity</li>
      </ul>
      <div class="paper-quote">
        <p>"DivPO modifies how training pairs are selected during preference optimization to prevent the probability distribution sharpening that typically causes similar outputs, particularly important for creative tasks."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Usage Recommendation for DeepSeek-R1</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">DeepSeek</span>
        <a href="https://arxiv.org/abs/2501.17030" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This work provides a comprehensive set of recommendations for effectively prompting the DeepSeek-R1 model for optimal performance.</p>
      <ul class="paper-points">
        <li>Advocates for clear, structured prompts with explicit instructions</li>
        <li>Recommends zero-shot over few-shot prompting</li>
        <li>Suggests specifying desired output formats and explicit language preferences</li>
      </ul>
      <div class="paper-quote">
        <p>"The paper offers detailed guidelines on prompt engineering, output formatting, and language specifications, along with recommendations for different model variants and fine-tuning considerations."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Docling: Unified Document Parsing</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="https://arxiv.org/abs/2501.17887" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>Docling is an open-source toolkit that can parse several types of popular document formats into a unified, richly structured representation.</p>
      <ul class="paper-points">
        <li>Supports multiple document formats for consistent processing</li>
        <li>Creates structured representations preserving document semantics</li>
        <li>Provides an open-source implementation for broader document analysis</li>
      </ul>
      <div class="paper-quote">
        <p>"Docling offers a standardized approach to document parsing, enabling more effective information extraction and processing across varied document types."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>Improving RAG through Multi-Agent RL</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="https://arxiv.org/abs/2501.15228" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>This work treats Retrieval-Augmented Generation as a multi-agent cooperative task, using reinforcement learning to jointly optimize query rewriting, document selection, and answer generation.</p>
      <ul class="paper-points">
        <li>Applies Multi-Agent Proximal Policy Optimization (MAPPO) with shared reward</li>
        <li>Shows strong generalization capabilities in out-of-domain scenarios</li>
        <li>Maintains effectiveness across different RAG system configurations</li>
      </ul>
      <div class="paper-quote">
        <p>"By modeling RAG components as RL agents working together, the framework significantly improves answer generation quality on benchmarks while demonstrating robust performance in various contexts."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>TensorLLM: Efficient Attention Compression</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Anonymous</span>
        <a href="https://arxiv.org/abs/2501.15674" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>TensorLLM proposes a framework that performs Multi-Head Attention compression through multi-head tensorisation and Tucker decomposition, achieving remarkable efficiency gains.</p>
      <ul class="paper-points">
        <li>Compresses MHA weights by up to ~250x</li>
        <li>Requires no additional data, training, or fine-tuning</li>
        <li>Maintains model performance despite significant parameter reduction</li>
      </ul>
      <div class="paper-quote">
        <p>"TensorLLM demonstrates how tensor decomposition techniques can dramatically reduce model size without sacrificing capabilities, offering potential for more efficient deployments."</p>
      </div>
    </div>
  </div>

  <div class="paper-card">
    <div class="paper-card-header">
      <h3>TokenVerse: Multi-Concept Personalization</h3>
      <div class="paper-card-meta">
        <span class="paper-authors">Google DeepMind and Collaborators</span>
        <a href="https://arxiv.org/abs/2501.12224" class="paper-link" target="_blank" rel="noopener">Paper Link</a>
      </div>
    </div>
    <div class="paper-card-content">
      <p>TokenVerse enables multi-concept personalization by leveraging pre-trained text-to-image diffusion models to disentangle and extract complex visual concepts from multiple images.</p>
      <ul class="paper-points">
        <li>Operates in the modulation space of DiTs, learning personalized vectors for text tokens</li>
        <li>Provides flexible and localized control over objects, materials, lighting, and poses</li>
        <li>Combines learned token modulations to integrate multiple personalized concepts</li>
      </ul>
      <div class="paper-quote">
        <p>"TokenVerse allows generating new images that combine multiple learned concepts in desired configurations without requiring additional segmentation masks or complex training."</p>
      </div>
    </div>
  </div>
</section>

<section class="weekly-paper-section">
  <h2>Emerging Trends</h2>
  <div class="trends-grid">
    <div class="trend-card">
      <div class="trend-icon">📏</div>
      <h3>Extreme Context Length</h3>
      <p>Qwen2.5-1M pushes context windows to unprecedented lengths, enabling new applications in document processing, long-form content analysis, and extended conversations.</p>
    </div>

    <div class="trend-card">
      <div class="trend-icon">🎨</div>
      <h3>Multimodal Integration</h3>
      <p>Janus-Pro and TokenVerse highlight growing capabilities in combining understanding and generation across modalities, with improvements in both directions of the text-image relationship.</p>
    </div>

    <div class="trend-card">
      <div class="trend-icon">🔍</div>
      <h3>Reasoning Analysis</h3>
      <p>Research on underthinking complements previous work on overthinking, reflecting increased focus on understanding and optimizing reasoning patterns in advanced models.</p>
    </div>

    <div class="trend-card">
      <div class="trend-icon">⚙️</div>
      <h3>Efficiency Innovations</h3>
      <p>TensorLLM and sparse attention methods demonstrate the growing emphasis on making models more computationally efficient without sacrificing capabilities.</p>
    </div>

  </div>
</section>

<section class="weekly-paper-section">
  <h2>Industry Implications</h2>
  <p class="section-intro">This week's research offers significant implications for AI applications:</p>

  <div class="implications-list">
    <div class="implication-item">
      <h3>Expanded Document Processing</h3>
      <p>Million-token contexts and unified document parsing tools enable processing entire books, legal documents, or codebases in a single context, improving analysis quality.</p>
    </div>

    <div class="implication-item">
      <h3>Creative Content Diversity</h3>
      <p>Diverse Preference Optimization offers a path to more varied AI-generated content for creative applications, potentially addressing issues of homogenization in generated text.</p>
    </div>

    <div class="implication-item">
      <h3>Personalized Visual Content</h3>
      <p>TokenVerse's approach to combining visual concepts opens new possibilities for personalized marketing, design, and entertainment applications with more granular control.</p>
    </div>

    <div class="implication-item">
      <h3>More Efficient Deployments</h3>
      <p>Compression techniques like TensorLLM could significantly reduce the hardware requirements for model deployment, making advanced AI more accessible and cost-effective.</p>
    </div>

  </div>
</section>
  </div>
  <div class="weekly-paper-nav">
    <a href="/content/research/weekly-papers/2025/week6/" class="weekly-paper-nav-next">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      Next Week
      
    </a>
    <a href="/content/research/weekly-papers/2025/week4/" class="weekly-paper-nav-prev">
      
      Previous Week
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </a>
  </div>
</div>
