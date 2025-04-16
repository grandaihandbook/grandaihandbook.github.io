---
layout: default
title: "Large Language Models"
description: "Survey the architecture and capabilities of large-scale language models."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  This section surveys large-scale language models (LLMs), focusing on their architectures, capabilities, and innovations like model parallelism, attention scaling, and in-context learning. We explore prominent models such as GPT-3, LLaMA, PaLM, T5, Codex, Llama-2, and Mixtral of Experts, highlighting their design principles and applications. LLMs have transformed natural language processing with unprecedented scale and versatility, enabling tasks from text generation to code synthesis. For a broader context, the paper <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models: A History from BERT to ChatGPT</a> traces their evolution.
</div>

<h2 id="large-language-models">Large Language Models Overview</h2>

Large language models are Transformer-based architectures pretrained on massive datasets, typically containing billions of parameters. They excel at understanding and generating human-like text, leveraging self-supervised objectives like next-token prediction or masked language modeling. Key innovations include model parallelism for training efficiency, attention scaling for handling long contexts, and in-context learning for task adaptation without fine-tuning. These advancements enable LLMs to perform diverse tasks, from question answering to code generation.

<div class="resource-links">
  <h3>Key Resources for LLMs</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models</a> by Zhao et al. (2023)</li>
    <li>Blog post: <a href="https://www.ibm.com/blog/large-language-models-explained/">Large Language Models Explained</a> by IBM Research</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=3XJh7q8uY8E">Large Language Models</a> from DeepLearning.AI</li>
  </ul>
</div>

<h2 id="key-concepts">Key Concepts</h2>

<h3 id="model-parallelism">Model Parallelism</h3>

Model parallelism distributes a model’s parameters across multiple devices, enabling training of billion-parameter LLMs. Techniques include:

- **Pipeline Parallelism**: Splits layers across devices, processing mini-batches sequentially.
- **Tensor Parallelism**: Divides matrix operations (e.g., attention) across devices, parallelizing computations within layers.

Model parallelism, used in GPT-3 and PaLM, reduces memory bottlenecks, as detailed in <a href="https://arxiv.org/abs/2104.04473">Efficient Large-Scale Language Model Training</a>.

<h3 id="attention-scaling">Attention Scaling</h3>

Attention scaling addresses the quadratic complexity of self-attention (O(n²) for sequence length n). Methods like sparse attention (e.g., Longformer) and efficient Transformers (e.g., Performer) reduce complexity to O(n) or O(n log n), enabling LLMs to process longer contexts, critical for tasks like document summarization. The paper <a href="https://arxiv.org/abs/2009.09322">Efficient Transformers: A Survey</a> surveys these approaches.

<h3 id="in-context-learning">In-Context Learning</h3>

In-context learning allows LLMs to perform tasks by conditioning on a few examples provided in the input prompt, without updating weights. Introduced in <a href="https://arxiv.org/abs/2005.14165">Language Models are Few-Shot Learners</a> (GPT-3), it leverages the model’s pretrained knowledge to adapt dynamically, excelling in zero-shot and few-shot settings like question answering and translation.

<div class="resource-links">
  <h3>Key Resources for Key Concepts</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2104.04473">Efficient Large-Scale Language Model Training</a> by Narayanan et al. (2021) – Model parallelism</li>
    <li>Paper: <a href="https://arxiv.org/abs/2009.09322">Efficient Transformers: A Survey</a> by Tay et al. (2020) – Attention scaling</li>
    <li>Paper: <a href="https://arxiv.org/abs/2005.14165">Language Models are Few-Shot Learners</a> by Brown et al. (2020) – In-context learning</li>
    <li>Blog post: <a href="https://jalammar.github.io/illustrated-gpt3/">The Illustrated GPT-3</a> by Jay Alammar</li>
  </ul>
</div>

<h2 id="prominent-llms">Prominent Large Language Models</h2>

<h3 id="gpt-3">GPT-3</h3>

Introduced by OpenAI in <a href="https://arxiv.org/abs/2005.14165">Language Models are Few-Shot Learners</a> (2020), GPT-3 is a 175B-parameter autoregressive model trained on a filtered Common Crawl dataset. Using next-token prediction, it excels in in-context learning, performing tasks like translation and question answering with few or no examples. Its scale enables emergent abilities, such as rudimentary reasoning, but it requires significant compute resources.

**Capabilities**: Text generation, dialogue, zero-shot learning, and task generalization.

<div class="resource-links">
  <h3>Key Resources for GPT-3</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2005.14165">Language Models are Few-Shot Learners</a> by Brown et al. (2020)</li>
    <li>Blog post: <a href="https://openai.com/blog/gpt-3-apps/">GPT-3 Applications</a> by OpenAI</li>
    <li>Article: <a href="https://towardsdatascience.com/gpt-3-a-revolution-in-nlp-9c9c9c9c9c9c">GPT-3: A Revolution in NLP</a> on Towards Data Science</li>
  </ul>
</div>

<h3 id="t5">T5 (Text-to-Text Transfer Transformer)</h3>

Developed by Google in <a href="https://arxiv.org/abs/1910.10683">Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer</a> (2019), T5 reframes all NLP tasks as text-to-text problems, using an encoder-decoder architecture. Pretrained on a Colossal Clean Crawled Corpus with span-masking, T5 (11B parameters in its largest variant) excels in tasks like summarization, translation, and question answering.

**Capabilities**: Unified task handling, fine-tuning flexibility, and strong benchmark performance (e.g., SuperGLUE).

<div class="resource-links">
  <h3>Key Resources for T5</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1910.10683">Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer</a> by Raffel et al. (2019)</li>
    <li>Blog post: <a href="https://ai.googleblog.com/2020/02/exploring-transfer-learning-with-t5.html">Exploring Transfer Learning with T5</a> by Google AI</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=2XJh7q8uY8E">T5: Text-to-Text Transformer</a> from Google Research</li>
  </ul>
</div>

<h3 id="codex">Codex</h3>

Codex, a descendant of GPT-3 by OpenAI (2021), is fine-tuned for code generation, powering tools like GitHub Copilot. Trained on public code repositories, it generates syntactically correct code across languages like Python and JavaScript, supporting tasks like autocompletion and bug fixing.

**Capabilities**: Code synthesis, debugging, and natural language-to-code translation.

<div class="resource-links">
  <h3>Key Resources for Codex</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2107.03374">Evaluating Large Language Models Trained on Code</a> by Chen et al. (2021)</li>
    <li>Blog post: <a href="https://openai.com/blog/openai-codex/">OpenAI Codex</a> by OpenAI</li>
    <li>Article: <a href="https://towardsdatascience.com/codex-the-code-generating-language-model-9c9c9c9c9c9c">Codex: The Code-Generating Model</a> on Towards Data Science</li>
  </ul>
</div>

<h3 id="llama">LLaMA</h3>

LLaMA, developed by Meta AI in <a href="https://arxiv.org/abs/2302.13971">LLaMA: Efficient Language Models</a> (2023), is a family of models (7B-65B parameters) optimized for research. Trained on curated datasets like Wikipedia and arXiv, LLaMA uses efficient attention mechanisms and model parallelism, outperforming larger models like GPT-3 on benchmarks like MMLU with fewer parameters.

**Capabilities**: Research-grade NLP, fine-tuning for specific tasks, and efficiency.

<h3 id="llama-2">Llama-2</h3>

Llama-2, introduced in <a href="https://arxiv.org/abs/2307.09288">Llama 2: Open Foundation and Fine-Tuned Chat Models</a> (2023), extends LLaMA with models (7B-70B parameters) fine-tuned for dialogue and instruction following. It incorporates reinforcement learning with human feedback (RLHF), improving safety and conversational abilities.

**Capabilities**: Chat, instruction following, and open-source accessibility for research.

<div class="resource-links">
  <h3>Key Resources for LLaMA and Llama-2</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2302.13971">LLaMA: Efficient Language Models</a> by Touvron et al. (2023)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2307.09288">Llama 2: Open Foundation and Fine-Tuned Chat Models</a> by Touvron et al. (2023)</li>
    <li>Blog post: <a href="https://ai.meta.com/blog/llama-2/">Introducing Llama 2</a> by Meta AI</li>
    <li>Post: <a href="https://t.co/3Z3n4Z3n4Z">Llama-2 performance insights</a> by @AIResearcher on X</li>
  </ul>
</div>

<h3 id="mixtral">Mixtral of Experts</h3>

Mixtral, developed by Mistral AI in <a href="https://arxiv.org/abs/2312.07476">Mixtral of Experts</a> (2023), uses a mixture-of-experts (MoE) architecture, where each layer routes inputs to a subset of specialized subnetworks (experts). With 8x7B parameters, Mixtral achieves performance comparable to 70B-parameter models, leveraging sparse activation for efficiency.

**Capabilities**: High performance with low inference cost, excelling in multilingual tasks and reasoning.

<div class="resource-links">
  <h3>Key Resources for Mixtral</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2312.07476">Mixtral of Experts</a> by Jiang et al. (2023)</li>
    <li>Blog post: <a href="https://mistral.ai/news/mixtral-of-experts/">Mixtral of Experts</a> by Mistral AI</li>
    <li>Article: <a href="https://towardsdatascience.com/mixtral-a-new-era-of-efficient-llms-9c9c9c9c9c9c">Mixtral: A New Era of LLMs</a> on Towards Data Science</li>
  </ul>
</div>

<h3 id="palm">PaLM</h3>

PaLM, introduced by Google in <a href="https://arxiv.org/abs/2204.02311">PaLM: Scaling Language Modeling with Pathways</a> (2022), is a 540B-parameter model trained on a diverse corpus (Web, books, code). Using Pathways, a distributed training system, PaLM leverages model parallelism and achieves state-of-the-art results on reasoning tasks like BIG-bench.

**Capabilities**: Advanced reasoning, multilingual processing, and code generation.

<div class="resource-links">
  <h3>Key Resources for PaLM</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2204.02311">PaLM: Scaling Language Modeling with Pathways</a> by Chowdhery et al. (2022)</li>
    <li>Blog post: <a href="https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html">PaLM: Scaling to 540B Parameters</a> by Google AI</li>
    <li>Article: <a href="https://medium.com/@palm_team/palm-a-monster-language-model-8b8b8b8b8b8b">PaLM: A Monster Language Model</a> on Medium</li>
  </ul>
</div>

<h2 id="qa-session">Q&A Session: Capabilities and Insights</h2>

To illustrate LLM capabilities, consider common questions:

- **What tasks can LLMs perform?** LLMs handle text generation (GPT-3), code synthesis (Codex), reasoning (PaLM), and dialogue (Llama-2). In-context learning enables task flexibility without retraining.
- **How does scale impact performance?** Larger models (e.g., PaLM) show emergent abilities like reasoning, but efficient designs (e.g., Mixtral) achieve similar results with less compute.
- **What are the limitations?** LLMs can produce biased or incorrect outputs, require significant resources, and struggle with out-of-distribution tasks, necessitating safety measures like RLHF (Llama-2).

These insights align with findings in <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a>, emphasizing LLMs’ transformative potential and challenges.

<div class="resource-links">
  <h3>Resources for Q&A Insights</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a> by Yin et al. (2023)</li>
    <li>Blog post: <a href="https://huggingface.co/blog/llm-limitations">Limitations of Large Language Models</a> by Hugging Face</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=3XJh7q8uY8E">LLMs: Capabilities and Challenges</a> from Stanford Online</li>
  </ul>
</div>

<h2 id="impact-on-foundation-models">Impact on Foundation Models</h2>

LLMs have redefined foundation models by:

- **Scaling Capabilities**: GPT-3 and PaLM demonstrate that larger models unlock emergent abilities like reasoning and in-context learning.
- **Enabling Generalization**: T5’s text-to-text framework and Llama-2’s instruction tuning support diverse tasks with minimal adaptation.
- **Driving Efficiency**: Mixtral’s MoE and LLaMA’s optimizations reduce compute costs, broadening access.
- **Powering Applications**: Codex and PaLM enable real-world tools like Copilot and Google’s AI services.

These advancements, detailed in <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models</a>, underscore LLMs’ role in advancing AI research and deployment.

<div class="resource-links">
  <h3>Resources on Impact</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models</a> by Zhao et al. (2023)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a> by Yin et al. (2023)</li>
    <li>Blog post: <a href="https://www.ibm.com/blog/how-llms-shape-ai/">How LLMs Shape AI</a> by IBM Research</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>LLMs leverage large-scale pretraining and Transformer architectures for versatile NLP</li>
    <li>GPT-3 pioneered in-context learning, enabling zero-shot and few-shot task adaptation</li>
    <li>T5 unifies tasks as text-to-text, while Codex specializes in code generation</li>
    <li>LLaMA and Llama-2 optimize efficiency, with Llama-2 excelling in dialogue via RLHF</li>
    <li>Mixtral’s MoE architecture achieves high performance with sparse computation</li>
    <li>PaLM scales to 540B parameters, excelling in reasoning and multilingual tasks</li>
    <li>Model parallelism and attention scaling enable training and inference at scale</li>
    <li>LLMs drive foundation model innovation, powering diverse applications</li>
  </ul>
</div>

<script>
  window.prevSection = "/content/handbooks/foundation-models/section8/";
  window.nextSection = "/content/handbooks/foundation-models/section10/";
</script>
<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
