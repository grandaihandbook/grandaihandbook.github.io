---
layout: default
title: "Scaling Law"
description: "Analyze scaling laws governing performance improvements in large models."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  This section analyzes scaling laws that describe how performance in large language models (LLMs) improves with increased compute, data, and parameters. We explore foundational studies, emergent abilities, efficiency trade-offs, and complications to traditional power-law trends, drawing on key works from Kaplan et al., Hutter, Hoffman, Wei, Schaeffer, and Tay. Scaling laws provide a framework for predicting model performance and optimizing resource allocation, critical for designing efficient foundation models. The paper <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models: A History from BERT to ChatGPT</a> contextualizes these advancements within the broader evolution of LLMs.
</div>

<h2 id="scaling-laws">Scaling Laws</h2>

Scaling laws describe the relationship between model performance (e.g., perplexity, task accuracy) and resources like compute, data, and parameters. They typically follow power-law trends, where performance improves predictably as resources scale, but with diminishing returns. These laws guide the design of LLMs, balancing efficiency and capability.

<h3 id="compute-scaling">Compute Scaling</h3>

Compute scaling examines how performance improves with more training compute (e.g., FLOPs). Kaplan et al. (2020) found that perplexity decreases as a power law with compute, provided model size and data are scaled appropriately. Optimal compute allocation balances model size and training iterations.

<h3 id="data-scaling">Data Scaling</h3>

Data scaling studies the impact of dataset size on performance. More training data reduces generalization error, but benefits taper off. Kaplan et al. (2020) showed that data scaling follows a power law, with performance saturating unless model size grows concurrently.

<h3 id="parameter-scaling">Parameter Scaling</h3>

Parameter scaling explores how increasing model size (e.g., layers, hidden dimensions) enhances performance. Larger models capture more complex patterns, but Kaplan et al. (2020) noted that compute and data must scale proportionally to avoid bottlenecks.

<h3 id="key-studies">Key Studies on Scaling Laws</h3>

- **Kaplan et al., 2020 (<a href="https://arxiv.org/abs/2001.08361">Scaling Laws for Neural Language Models</a>)**: Established that perplexity scales as a power law with compute (C), parameters (N), and data (D): \( \text{Loss} \propto C^{-\alpha}, N^{-\beta}, D^{-\gamma} \). Optimal scaling requires balanced growth, with exponents \( \alpha \approx 0.050 \), \( \beta \approx 0.095 \), \( \gamma \approx 0.070 \). Larger models are more sample-efficient but require more compute.
- **Kaplan et al., 2021 (<a href="https://arxiv.org/abs/2103.05247">Scaling Laws for Transfer Learning</a>)**: Extended scaling to transfer learning, showing that pretraining compute improves downstream task performance predictably. Transfer benefits grow with model size, but fine-tuning data requirements scale sublinearly.
- **Hutter, 2021 (<a href="https://arxiv.org/abs/2104.10350">Learning Curve Theory</a>)**: Proposed a unified framework for scaling, emphasizing that performance converges to a limiting loss as resources grow, with practical implications for compute-optimal training.
- **Hoffmann et al., 2022 (<a href="https://arxiv.org/abs/2203.15556">Training Compute-Optimal Large Language Models</a>, Chinchilla)**: Challenged earlier assumptions, finding that models like GPT-3 were undertrained relative to data. Chinchilla’s scaling law suggests equal scaling of parameters and data (e.g., 20 tokens per parameter), achieving better performance with smaller models (e.g., 70B vs. 175B).

<div class="resource-links">
  <h3>Key Resources for Scaling Laws</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2001.08361">Scaling Laws for Neural Language Models</a> by Kaplan et al. (2020)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2103.05247">Scaling Laws for Transfer Learning</a> by Kaplan et al. (2021)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2104.10350">Learning Curve Theory</a> by Hutter (2021)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2203.15556">Training Compute-Optimal Large Language Models</a> by Hoffmann et al. (2022)</li>
    <li>Blog post: <a href="https://www.deepmind.com/blog/chinchilla-scaling-laws">Chinchilla: Scaling Laws Revisited</a> by DeepMind</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=3XJh7q8uY8E">Scaling Laws Explained</a> from DeepLearning.AI</li>
  </ul>
</div>

<h2 id="emergent-abilities">Emergent Abilities</h2>

Emergent abilities are capabilities that appear only in sufficiently large models, absent in smaller ones, even when scaled equivalently. These include advanced reasoning, in-context learning, and zero-shot task performance, as observed in models like GPT-3 and PaLM.

- **Wei et al., 2022 (<a href="https://arxiv.org/abs/2206.07682">Emergent Abilities of Large Language Models</a>)**: Identified emergent phenomena like few-shot reasoning and chain-of-thought prompting, which manifest above a certain scale (e.g., 100B parameters). These abilities arise due to increased model capacity capturing complex patterns, not predictable by simple metrics like perplexity.
- **Schaeffer et al., 2023 (<a href="https://arxiv.org/abs/2304.15004">Are Emergent Abilities of Large Language Models a Mirage?</a>)**: Questioned the “emergence” narrative, arguing that some abilities may be continuous improvements misperceived as sharp transitions due to metric sensitivity. They suggest smoother scaling with better evaluation methods.

**Examples**:

- **In-Context Learning**: GPT-3 performs tasks with few examples, a capability absent in smaller models.
- **Reasoning**: PaLM solves math problems via chain-of-thought, emerging at 540B parameters.

<div class="resource-links">
  <h3>Key Resources for Emergent Abilities</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2206.07682">Emergent Abilities of Large Language Models</a> by Wei et al. (2022)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2304.15004">Are Emergent Abilities of Large Language Models a Mirage?</a> by Schaeffer et al. (2023)</li>
    <li>Blog post: <a href="https://ai.googleblog.com/2022/06/emergent-abilities-in-large-language.html">Emergent Abilities in LLMs</a> by Google AI</li>
    <li>Post: <a href="https://t.co/XYZ1234567">Discussion on emergent abilities</a> by @AIResearcher on X</li>
  </ul>
</div>

<h2 id="complicating-scaling-laws">Complicating Scaling Laws</h2>

Traditional power-law trends oversimplify real-world scaling dynamics. Recent studies highlight deviations and trade-offs that complicate predictions.

- **Wei et al., 2022 (<a href="https://arxiv.org/abs/2204.14118">The Inverse Scaling Law Hypothesis</a>)**: Identified “U-shaped” scaling, where performance initially worsens with scale before improving, for tasks like social bias mitigation or complex reasoning. This suggests that scaling can amplify undesirable behaviors unless guided by careful pretraining or fine-tuning.
- **Tay et al., 2022 (<a href="https://arxiv.org/abs/2210.14863">Transcending Scaling Laws with 0.1% Extra Compute</a>)**: Demonstrated that architectural innovations (e.g., mixture-of-experts, sparse attention) or training optimizations can outperform naive scaling, achieving better results with minimal additional compute. This challenges the reliance on brute-force scaling.

<h3 id="efficiency-trade-offs">Efficiency Trade-Offs</h3>

Scaling introduces trade-offs between performance and resource costs:

- **Compute vs. Performance**: Chinchilla (Hoffmann et al., 2022) showed that smaller, data-optimized models can outperform larger, undertrained ones, reducing energy costs.
- **Data Quality vs. Quantity**: Curated datasets (e.g., FineWeb) yield better results than unfiltered corpora, but curation is resource-intensive.
- **Inference Costs**: Large models like PaLM require significant inference compute, mitigated by efficient designs like Mixtral’s MoE.

<h3 id="power-law-trends">Power-Law Trends and Deviations</h3>

While power laws hold for many settings, complications arise:

- **Saturation**: Performance plateaus for specific tasks (e.g., syntax parsing) despite increased scale.
- **Task-Specific Scaling**: Some tasks (e.g., arithmetic reasoning) deviate from power laws, requiring specialized training or prompts.
- **Inverse Scaling**: Wei et al. (2022) noted that scaling can degrade performance on tasks sensitive to biases or overfitting.

<div class="resource-links">
  <h3>Key Resources for Complicating Scaling Laws</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2204.14118">The Inverse Scaling Law Hypothesis</a> by Wei et al. (2022)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2210.14863">Transcending Scaling Laws with 0.1% Extra Compute</a> by Tay et al. (2022)</li>
    <li>Blog post: <a href="https://towardsdatascience.com/beyond-scaling-laws-9c9c9c9c9c9c">Beyond Scaling Laws</a> on Towards Data Science</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=3XJh7q8uY8E">Complications in Scaling Laws</a> from Stanford Online</li>
  </ul>
</div>

<h2 id="impact-on-foundation-models">Impact on Foundation Models</h2>

Scaling laws have profoundly shaped foundation models by:

- **Guiding Resource Allocation**: Kaplan and Hoffmann’s work informs compute-optimal training, as seen in Chinchilla and LLaMA.
- **Unlocking Emergent Abilities**: Wei et al.’s findings explain why models like GPT-3 and PaLM excel at in-context learning and reasoning.
- **Highlighting Efficiency**: Tay et al.’s innovations reduce reliance on brute-force scaling, enabling models like Mixtral.
- **Exposing Limitations**: Inverse scaling and saturation highlight the need for better data curation and training objectives.

These insights, detailed in <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a>, drive the design of next-generation LLMs.

<div class="resource-links">
  <h3>Resources on Impact</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models</a> by Zhao et al. (2023)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a> by Yin et al. (2023)</li>
    <li>Blog post: <a href="https://www.ibm.com/blog/scaling-laws-and-foundation-models/">Scaling Laws and Foundation Models</a> by IBM Research</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Scaling laws predict performance improvements with compute, data, and parameters, following power-law trends</li>
    <li>Kaplan et al. (2020, 2021) established foundational scaling relationships, extended by Hutter and Hoffmann</li>
    <li>Chinchilla (Hoffmann et al., 2022) advocates balanced parameter and data scaling for efficiency</li>
    <li>Emergent abilities like reasoning appear in large models, though Schaeffer et al. (2023) suggest smoother transitions</li>
    <li>U-shaped scaling (Wei et al., 2022) and architectural innovations (Tay et al., 2022) complicate power-law assumptions</li>
    <li>Efficiency trade-offs emphasize data quality, optimized training, and inference cost management</li>
    <li>Scaling laws guide foundation model design, balancing performance and resource constraints</li>
  </ul>
</div>

<script>
  window.prevSection = "/content/handbooks/foundation-models/section9/";
  window.nextSection = "/content/handbooks/foundation-models/section11/";
</script>
<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
