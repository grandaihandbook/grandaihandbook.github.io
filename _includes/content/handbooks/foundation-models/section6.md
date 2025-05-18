---
layout: default
title: "Efficient Transformers"
description: "Investigate transformer variants designed for improved computational efficiency."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  This section explores transformer variants engineered to enhance computational efficiency, addressing the quadratic complexity of standard self-attention in the original Transformer. We cover Performer, Linformer, Longformer, sparse attention, BigBird, and low-rank factorization, which optimize memory and compute requirements while maintaining or improving performance. These innovations enable Transformers to handle longer sequences and scale to larger datasets, critical for modern foundation models. For a broader context, the paper <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models: A History from BERT to ChatGPT</a> provides a historical perspective on Transformer evolution.
</div>

<h2 id="standard-transformer-challenges">Challenges with Standard Transformers</h2>

The self-attention mechanism in the original Transformer, introduced in <a href="https://arxiv.org/abs/1706.03762">Attention is All You Need</a>, has a quadratic complexity of O(n²) in both time and memory, where n is the sequence length. This makes it computationally expensive for long sequences, limiting scalability. Efficient Transformer variants mitigate this through approximations, sparse attention patterns, or low-rank factorizations, enabling applications in tasks requiring extended contexts, such as document-level NLP or long-form generation.

<div class="resource-links">
  <h3>Key Resources for Transformer Challenges</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1706.03762">Attention is All You Need</a> by Vaswani et al. (2017) – Original Transformer</li>
    <li>Blog post: <a href="https://jalammar.github.io/illustrated-transformer/">The Illustrated Transformer</a> by Jay Alammar – Visualizes standard self-attention</li>
    <li>Article: <a href="https://towardsdatascience.com/the-computational-bottleneck-of-transformers-8c1c1c1c1c1c">The Computational Bottleneck of Transformers</a> on Towards Data Science</li>
  </ul>
</div>

<h2 id="performer">Performer</h2>

The Performer, introduced in <a href="https://arxiv.org/abs/2009.14794">Rethinking Attention with Performers</a> by Choromanski et al. (2020), uses a kernel-based approximation to reduce self-attention’s complexity from O(n²) to O(n). By leveraging Fast Attention Via positive Orthogonal Random features (FAVOR+), it approximates attention scores with randomized feature maps, enabling linear scaling with sequence length. Performer maintains comparable performance to standard Transformers while being memory-efficient, ideal for long-sequence tasks like protein sequence modeling.

<div class="resource-links">
  <h3>Key Resources for Performer</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2009.14794">Rethinking Attention with Performers</a> by Choromanski et al. (2020)</li>
    <li>Blog post: <a href="https://ai.googleblog.com/2020/10/rethinking-attention-with-performers.html">Rethinking Attention with Performers</a> by Google AI</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=6z0iA3qA3qA">Performer: Linear Attention Explained</a> from AI Explained</li>
  </ul>
</div>

<h2 id="linformer">Linformer</h2>

Linformer, proposed in <a href="https://arxiv.org/abs/2006.04768">Linformer: Self-Attention with Linear Complexity</a> by Wang et al. (2020), reduces attention complexity to O(n) by projecting the attention matrix into a low-rank representation. Instead of computing the full n×n attention matrix, Linformer uses a low-dimensional approximation, significantly lowering memory usage. This makes it suitable for tasks with long sequences, such as document summarization, while preserving performance on benchmarks like GLUE.

<div class="resource-links">
  <h3>Key Resources for Linformer</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2006.04768">Linformer: Self-Attention with Linear Complexity</a> by Wang et al. (2020)</li>
    <li>Blog post: <a href="https://towardsdatascience.com/linformer-efficient-transformer-with-linear-complexity-9c9c9c9c9c9c">Linformer: Efficient Transformer with Linear Complexity</a> on Towards Data Science</li>
    <li>Article: <a href="https://medium.com/@linformer_team/linformer-scaling-attention-to-longer-sequences-8b8b8b8b8b8b">Linformer: Scaling Attention</a> on Medium</li>
  </ul>
</div>

<h2 id="longformer">Longformer</h2>

The Longformer, introduced in <a href="https://arxiv.org/abs/2004.05150">Longformer: The Long-Document Transformer</a> by Beltagy et al. (2020), employs sparse attention to handle sequences up to 4,096 tokens. It combines sliding window attention (local context) with global attention (task-specific tokens), reducing complexity to O(n). Longformer excels in document-level tasks like question answering and summarization, offering a balance between efficiency and performance.

<div class="resource-links">
  <h3>Key Resources for Longformer</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2004.05150">Longformer: The Long-Document Transformer</a> by Beltagy et al. (2020)</li>
    <li>Blog post: <a href="https://ai2.github.io/longformer/">Longformer: Efficient Transformers for Long Documents</a> by Allen Institute for AI</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=2XJh7q8uY8E">Longformer Explained</a> from Hugging Face</li>
  </ul>
</div>

<h2 id="sparse-attention">Sparse Attention</h2>

Sparse attention mechanisms reduce the computational burden by limiting the number of tokens each token attends to, creating a sparse attention matrix instead of a dense one. Variants include:

- **Sliding Window Attention**: Used in Longformer, attends to a fixed-size window around each token.
- **Dilated Attention**: Skips tokens at regular intervals to capture broader context.
- **Random Attention**: Randomly selects a subset of tokens to attend to, reducing computation.

Sparse attention, discussed in <a href="https://arxiv.org/abs/2004.05150">Longformer</a> and other works, is critical for scaling Transformers to long sequences, enabling applications in genomics and long-form text processing.

<div class="resource-links">
  <h3>Key Resources for Sparse Attention</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2004.05150">Longformer: The Long-Document Transformer</a> by Beltagy et al. (2020)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2009.09322">Efficient Transformers: A Survey</a> by Tay et al. (2020) – Overview of sparse attention</li>
    <li>Blog post: <a href="https://towardsdatascience.com/sparse-attention-in-transformers-9c9c9c9c9c9c">Sparse Attention in Transformers</a> on Towards Data Science</li>
  </ul>
</div>

<h2 id="bigbird">BigBird</h2>

BigBird, proposed in <a href="https://arxiv.org/abs/2007.14062">Big Bird: Transformers for Longer Sequences</a> by Zaheer et al. (2020), combines sparse attention patterns—random, sliding window, and global attention—to achieve O(n) complexity. Inspired by theoretical insights, BigBird scales to sequences up to 4,096 tokens, excelling in tasks like document classification and question answering. Its sparse structure mimics the efficiency of human cognition, focusing on key tokens while ignoring irrelevant ones.

<div class="resource-links">
  <h3>Key Resources for BigBird</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2007.14062">Big Bird: Transformers for Longer Sequences</a> by Zaheer et al. (2020)</li>
    <li>Blog post: <a href="https://ai.googleblog.com/2020/08/bigbird-transformers-for-longer-sequences.html">BigBird: Transformers for Longer Sequences</a> by Google AI</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=3XJh7q8uY8E">BigBird Explained</a> from Google Research</li>
  </ul>
</div>

<h2 id="low-rank-factorization">Low-Rank Factorization</h2>

Low-rank factorization approximates the attention matrix by decomposing it into smaller matrices, reducing memory and compute costs. Linformer, for example, projects the attention matrix into a low-rank space. Other approaches, like those in <a href="https://arxiv.org/abs/2009.14794">Performer</a>, use kernel-based low-rank approximations. This technique is particularly effective for long sequences, enabling efficient training and inference in resource-constrained settings.

<div class="resource-links">
  <h3>Key Resources for Low-Rank Factorization</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2006.04768">Linformer: Self-Attention with Linear Complexity</a> by Wang et al. (2020)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2009.14794">Rethinking Attention with Performers</a> by Choromanski et al. (2020)</li>
    <li>Article: <a href="https://medium.com/@lowrank_team/low-rank-factorization-in-transformers-9c9c9c9c9c9c">Low-Rank Factorization in Transformers</a> on Medium</li>
  </ul>
</div>

<h2 id="impact-on-foundation-models">Impact on Foundation Models</h2>

Efficient Transformers have significantly influenced foundation models by:

- **Scaling Sequence Lengths**: Enabling processing of long documents, code, or biological sequences.
- **Reducing Resource Demands**: Lowering memory and compute costs, democratizing access to large models.
- **Enhancing Applications**: Supporting tasks like long-form generation, document-level NLP, and multimodal processing.

These variants, as discussed in <a href="https://arxiv.org/abs/2009.09322">Efficient Transformers: A Survey</a>, underpin models like T5 and modern multimodal systems, described in <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a>.

<div class="resource-links">
  <h3>Resources on Impact on Foundation Models</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2009.09322">Efficient Transformers: A Survey</a> by Tay et al. (2020)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models</a> by Zhao et al. (2023)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a> by Yin et al. (2023)</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Standard Transformers face quadratic complexity, limiting scalability for long sequences</li>
    <li>Performer uses kernel-based approximations for linear complexity</li>
    <li>Linformer employs low-rank projections to reduce attention matrix size</li>
    <li>Longformer combines sliding window and global attention for document-level tasks</li>
    <li>Sparse attention patterns, like those in BigBird, focus on key tokens, achieving O(n) complexity</li>
    <li>Low-rank factorization approximates attention, enabling efficient computation</li>
    <li>Efficient Transformers enable longer sequences and lower costs, shaping modern foundation models</li>
  </ul>
</div>

<script>
  window.prevSection = "/content/handbooks/foundation-models/section5/";
  window.nextSection = "/content/handbooks/foundation-models/section7/";
</script>
<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
